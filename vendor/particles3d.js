// Homepage: the drifting particles behind the greeting, in real 3D.
// Most are soft matte dots in the page's grey; a few are polished chrome beads
// that catch the room's light. The whole field eases toward the cursor, nearer
// particles moving more than far ones. Loaded lazily; the page works without it.
import * as THREE from './three.module.min.js';
import { RoomEnvironment } from './RoomEnvironment.js';

const DEPTH_NEAR = 160, DEPTH_FAR = -320;     // px in front of / behind the text plane
const rand = (a, b) => a + Math.random() * (b - a);

export function mount(canvas, { dot = '#9d9d9b', dark = false, reduced = false, avoid = null } = {}) {
  // a box (canvas px) where the field thins out so the intro text stays clean
  let keepOut = null;
  const readAvoid = () => { keepOut = avoid ? avoid() : null; };
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .03).texture;
  pmrem.dispose();
  const key = new THREE.DirectionalLight(0xffffff, 1.2); key.position.set(-1, 1.4, 1.2); scene.add(key);

  // one world unit = one CSS pixel on the text plane
  const camera = new THREE.PerspectiveCamera(32, 1, 1, 4000);
  let W = 1, H = 1;

  const matte = new THREE.MeshStandardMaterial({ color: new THREE.Color(dot), roughness: .7, metalness: 0 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .08, metalness: 1, envMapIntensity: 1.25 });
  let dots = null, beads = null, parts = [];
  const tmp = new THREE.Object3D();

  function build() {
    if (dots) { scene.remove(dots, beads); dots.geometry.dispose(); beads.geometry.dispose(); }
    // density like the original field: about one particle per 2400px² of the text area
    const n = Math.max(60, Math.min(420, Math.round(W * H / 2400)));
    const nChrome = Math.round(n * .14);
    parts = [];
    for (let i = 0; i < n; i++) {
      const isChrome = i < nChrome;
      const a = Math.random() * Math.PI * 2, sp = rand(5, 15);
      parts.push({
        chrome: isChrome,
        x: rand(-W / 2, W / 2), y: rand(-H / 2, H / 2), z: rand(DEPTH_FAR, DEPTH_NEAR),
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, vz: rand(-3, 3),
        r: isChrome ? rand(2.8, 5.6) : rand(1, 1.9)
      });
    }
    const nm = n - nChrome;
    dots = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 10, 8), matte, nm);
    beads = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 28, 20), chrome, nChrome);
    scene.add(dots, beads);
  }

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    const rebuild = Math.abs(w - W) > 40 || Math.abs(h - H) > 40 || !dots;
    W = w; H = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const dist = (h / 2) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    camera.position.set(0, 0, dist);
    camera.near = 1; camera.far = dist + 1200;
    camera.updateProjectionMatrix();
    if (rebuild) build();
    readAvoid();
    draw(0);
  }

  // cursor: the field drifts toward it while it is over the hero
  let mx = 0, my = 0, ox = 0, oy = 0, inside = false;
  const onMove = e => {
    const r = canvas.getBoundingClientRect();
    inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    mx = e.clientX - (r.left + r.width / 2); my = e.clientY - (r.top + r.height / 2);
  };
  const onLeave = () => { inside = false; };

  function draw(dt) {
    const k = 1 - Math.exp(-dt * 3);
    ox += ((inside ? mx * .09 : 0) - ox) * k;
    oy += ((inside ? my * .09 : 0) - oy) * k;
    let di = 0, bi = 0;
    const m = 30;
    for (const p of parts) {
      if (dt && !reduced) {
        p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        if (p.x < -W / 2 - m) p.x += W + 2 * m; else if (p.x > W / 2 + m) p.x -= W + 2 * m;
        if (p.y < -H / 2 - m) p.y += H + 2 * m; else if (p.y > H / 2 + m) p.y -= H + 2 * m;
        if (p.z < DEPTH_FAR) p.vz = Math.abs(p.vz); else if (p.z > DEPTH_NEAR) p.vz = -Math.abs(p.vz);
      }
      const depth = 1 + p.z / 400;                 // near particles follow the cursor more
      const px = p.x + ox * depth, py = p.y - oy * depth;
      let fade = 1;
      if (keepOut) {
        // where the particle lands on screen, and how far that is from the text box
        const k2 = camera.position.z / (camera.position.z - p.z);
        const sx = px * k2 + W / 2, sy = -py * k2 + H / 2;
        const dx = Math.max(keepOut.x0 - sx, 0, sx - keepOut.x1), dy = Math.max(keepOut.y0 - sy, 0, sy - keepOut.y1);
        const d = Math.max(dx, dy), t = Math.min(d / (p.chrome ? 44 : 28), 1), s = t * t * (3 - 2 * t);
        fade = p.chrome ? s : .3 + .7 * s;        // beads leave the text entirely; dots only thin out
      }
      tmp.position.set(px, py, p.z);
      tmp.scale.setScalar(p.r * Math.max(fade, .0001));
      tmp.updateMatrix();
      if (p.chrome) beads.setMatrixAt(bi++, tmp.matrix); else dots.setMatrixAt(di++, tmp.matrix);
    }
    dots.instanceMatrix.needsUpdate = true; beads.instanceMatrix.needsUpdate = true;
    renderer.render(scene, camera);
  }

  let raf = 0, last = performance.now(), visible = true;
  function frame(now) {
    const dt = Math.min((now - last) / 1000, .05); last = now;
    draw(dt);
    raf = (!reduced && visible && !document.hidden) ? requestAnimationFrame(frame) : 0;
  }
  const kick = () => { if (!raf && !reduced && visible && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame); } };

  const applyTheme = (isDark, color) => {
    matte.color.set(color);
    // on paper, mirror-bright chrome vanishes into the page; a gunmetal tint keeps it reading as polished metal
    chrome.color.set(isDark ? 0xffffff : 0x5d6068);
    chrome.envMapIntensity = isDark ? 1.25 : 1.6;
    renderer.toneMappingExposure = isDark ? .9 : 1;
    scene.environmentIntensity = isDark ? .7 : 1;
    if (reduced) draw(0);
  };
  applyTheme(dark, dot);

  const ro = new ResizeObserver(resize); ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }); io.observe(canvas);
  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', onLeave);
  document.addEventListener('visibilitychange', kick);
  resize();
  kick();

  return {
    setTheme(isDark, color) { applyTheme(isDark, color); },
    resize,
    destroy() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', kick);
      renderer.dispose();
    }
  };
}
