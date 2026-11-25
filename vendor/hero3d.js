// Homepage hero: a rotating slat sign (a trivision). Four faces, one per audience;
// choosing an audience turns the slats in a wave to that audience's line.
// Loaded lazily by index.html; the page works without it.
import * as THREE from './three.module.min.js';
import { RoundedBoxGeometry } from './RoundedBoxGeometry.js';
import { RoomEnvironment } from './RoomEnvironment.js';

const QUARTER = Math.PI / 2;
const N = 12;                 // slats
const W = 4.2, H = 1.5;       // panel size (world units)
const SW = W / N;             // slat width = depth (square section)
const GAP = .004;
// side face that looks at the camera when a slat's rotation.y = i * 90deg: +z, -x, -z, +x
// BoxGeometry material groups: 0 +x, 1 -x, 2 +y, 3 -y, 4 +z, 5 -z
const FACE_GROUP = [4, 1, 5, 0];

function easeOutBack(p) { const c1 = 1.15, c3 = c1 + 1; return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); }

function drawFace(canvas, face, theme) {
  const g = canvas.getContext('2d'), w = canvas.width, h = canvas.height;
  g.fillStyle = theme.bg; g.fillRect(0, 0, w, h);
  // hairline frame inset, like a printed placard
    g.textBaseline = 'alphabetic';
  g.textAlign = 'center';
  // the line: as large as fits, at most two lines
  g.fillStyle = theme.ink;
  try { g.fontStretch = 'expanded'; } catch (e) {}
  let size = 200, lines;
  const wrap = s => {
    g.font = `700 ${s}px Archivo, Inter, system-ui, sans-serif`;
    const words = face.line.split(' '), out = []; let cur = '';
    for (const wd of words) { const t = cur ? cur + ' ' + wd : wd; if (g.measureText(t).width > w - 240 && cur) { out.push(cur); cur = wd; } else cur = t; }
    if (cur) out.push(cur); return out;
  };
  const boxTop = 110, boxBottom = h - 110;
  while (size > 90) { lines = wrap(size); if (lines.length <= 2 && lines.every(l => g.measureText(l).width <= w - 240) && lines.length * size * 1.0 <= boxBottom - boxTop) break; size -= 8; }
  const lh = size * 1.0, mid = (boxTop + boxBottom) / 2, first = mid - (lines.length - 1) * lh / 2;
  lines.forEach((l, i) => g.fillText(l, w / 2, first + i * lh + size * .34));
}

function shadowTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 128;
  const g = c.getContext('2d');
  const r = g.createRadialGradient(256, 64, 0, 256, 64, 256);
  r.addColorStop(0, 'rgba(0,0,0,.5)'); r.addColorStop(.5, 'rgba(0,0,0,.18)'); r.addColorStop(1, 'rgba(0,0,0,0)');
  g.setTransform(1, 0, 0, .25, 0, 48); g.fillStyle = r; g.fillRect(0, 0, 512, 512);
  return new THREE.CanvasTexture(c);
}

export async function mount(canvas, { faces, themes, start = 0, reduced = false, dark = false, onSnap = () => {} }) {
  if (document.fonts && document.fonts.load) {
    try { await Promise.all([document.fonts.load('700 100px Archivo'), document.fonts.load('600 40px Inter')]); } catch (e) {}
  }
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(17, 2, .1, 120);
  const key = new THREE.DirectionalLight(0xffffff, 1.25); key.position.set(-7, 4, 3.5); scene.add(key);   // raking, so slat edges catch light
  const rim = new THREE.DirectionalLight(0xffffff, .7); rim.position.set(5, 2, -4); scene.add(rim);

  // one canvas per audience face; slats show vertical slices of it
  const canvases = faces.map(() => { const c = document.createElement('canvas'); c.width = 2048; c.height = Math.round(2048 * H / W); return c; });
  const maps = canvases.map(c => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy(); return t; });
  const paint = isDark => { canvases.forEach((c, i) => { drawFace(c, faces[i], themes[i][isDark ? 1 : 0]); maps[i].needsUpdate = true; }); };
  paint(dark);

  const edgeMat = new THREE.MeshPhysicalMaterial({ color: dark ? 0x3a3b40 : 0xd9d6cf, roughness: .5, clearcoat: .2 });
  const pivot = new THREE.Group(); scene.add(pivot);
  const slats = [];
  const faceMats = faces.map(() => []);   // per audience, across all slats
  // at rest, faces that are not facing the viewer go dark so the gaps read as shadow, not as stray letters
  let resting = null, seam = dark ? 0x101011 : 0xa9a69f;
  const rest = (i, on) => { const key = on ? i : -1; if (resting === key) return; resting = key; faceMats.forEach((ms, a) => ms.forEach(m => m.color.set(on && a !== i ? seam : 0xffffff))); };
  const geo = new THREE.BoxGeometry(SW - GAP, H, SW - GAP);
  for (let k = 0; k < N; k++) {
    const mats = [edgeMat, edgeMat, edgeMat, edgeMat, edgeMat, edgeMat];
    FACE_GROUP.forEach((grp, a) => {
      const t = maps[a].clone(); t.repeat.set(1 / N, 1); t.offset.set(k / N, 0); t.needsUpdate = true;
      mats[grp] = new THREE.MeshStandardMaterial({ map: t, roughness: .9, metalness: 0, envMapIntensity: .55 });
      faceMats[a].push(mats[grp]);
    });
    const m = new THREE.Mesh(geo, mats);
    m.position.x = -W / 2 + SW / 2 + k * SW;
    pivot.add(m);
    slats.push({ mesh: m, rot: start * QUARTER, from: start * QUARTER, to: start * QUARTER, t0: 0, dur: 1 });
  }
  // housing: a dark frame around the slats
  const frameMat = new THREE.MeshPhysicalMaterial({ color: dark ? 0x55565c : 0xcfcac0, roughness: .35, metalness: .3, clearcoat: .5 });
  const bar = (w, h, d, x, y) => { const b = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, Math.min(w, h, d) * .3), frameMat); b.position.set(x, y, 0); pivot.add(b); };
  const FT = .045, FD = SW + .05;
  bar(W + .16, FT, FD, 0, H / 2 + FT / 2 + .006);
  bar(W + .16, FT, FD, 0, -H / 2 - FT / 2 - .006);
  
  const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTexture(), transparent: true, depthWrite: false });
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.25, 1.1), shadowMat);
  shadow.rotation.x = -QUARTER; shadow.position.set(0, -H / 2 - .3, .2);
  scene.add(shadow);

  const applyTheme = isDark => {
    renderer.toneMappingExposure = isDark ? .95 : 1.05;
    scene.environmentIntensity = isDark ? .7 : 1;
    shadowMat.opacity = isDark ? .95 : .6;
    edgeMat.color.set(isDark ? 0x3a3b40 : 0xd9d6cf);
    frameMat.color.set(isDark ? 0x55565c : 0xcfcac0);
    paint(isDark);
    seam = isDark ? 0x101011 : 0xa9a69f; resting = null;
  };
  applyTheme(dark);

  // motion
  const TILT = .03, YAW = -.26;
  let tiltX = TILT, tiltTo = TILT, yaw = YAW, yawTo = YAW, idleUntil = performance.now() + 15000;
  let dragging = false, dragX = 0, dragBase = 0, raf = 0, visible = true, t0 = performance.now(), last = t0, current = start;

  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const hf = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect);
    const fitW = (W + .5) / 2 / Math.tan(hf / 2), fitH = (H + .95) / 2 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const dist = Math.max(fitW, fitH);
    camera.position.set(0, dist * .17, dist);
    camera.lookAt(0, -.05, 0);
    camera.updateProjectionMatrix();
    kick();
  };

  function frame(now) {
    const dt = Math.min((now - last) / 1000, .05); last = now;
    const k = 1 - Math.exp(-dt * 6);
    tiltX += (tiltTo - tiltX) * k; yaw += (yawTo - yaw) * k;
    let moving = false;
    slats.forEach(s => {
      if (dragging) return;
      const p = Math.min(Math.max((now - s.t0) / s.dur, 0), 1);
      s.rot = s.from + (s.to - s.from) * (reduced ? p : easeOutBack(p));
      if (p < 1) moving = true;
    });
    const idle = !reduced && now < idleUntil;
    const t = (now - t0) / 1000;
    pivot.rotation.set(tiltX, yaw + (idle ? Math.sin(t * .5) * .035 : 0), 0, 'YXZ');
    pivot.position.y = idle ? Math.sin(t * 1.0) * .025 : 0;
    slats.forEach(s => { s.mesh.rotation.y = s.rot; });
    rest(current, !moving && !dragging);
    renderer.render(scene, camera);
    const busy = dragging || moving || idle || Math.abs(tiltTo - tiltX) > .0005 || Math.abs(yawTo - yaw) > .0005;
    raf = busy && visible && !document.hidden ? requestAnimationFrame(frame) : 0;
  }
  function kick() { if (!raf && visible && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  const wake = () => { idleUntil = performance.now() + 15000; kick(); };

  function turnTo(i, wave = true) {
    current = i;
    const now = performance.now();
    slats.forEach((s, k) => {
      const want = i * QUARTER;
      s.from = s.rot;
      s.to = want + Math.round((s.rot - want) / (2 * Math.PI)) * 2 * Math.PI;
      s.t0 = now + (wave && !reduced ? k * 38 : 0);
      s.dur = reduced ? 1 : 640;
    });
    wake();
  }

  // drag sideways to turn the whole sign; release snaps to the nearest face and selects it
  const down = e => {
    if (e.button !== undefined && e.button !== 0) return;
    dragging = true; dragX = e.clientX; dragBase = slats[0].rot;
    canvas.setPointerCapture(e.pointerId); canvas.classList.add('grabbing'); wake();
  };
  const move = e => {
    if (dragging) {
      const r = dragBase + (e.clientX - dragX) * .012;
      slats.forEach(s => { s.rot = r; s.mesh.rotation.y = r; });
      kick();
    } else if (!reduced && e.pointerType === 'mouse') {
      const r = canvas.getBoundingClientRect();
      yawTo = YAW + ((e.clientX - r.left) / r.width - .5) * .12;
      tiltTo = TILT + ((e.clientY - r.top) / r.height - .5) * .1;
      wake();
    }
  };
  const up = e => {
    if (!dragging) return;
    dragging = false; canvas.classList.remove('grabbing');
    try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
    const n = Math.round(slats[0].rot / QUARTER), i = ((n % 4) + 4) % 4;
    slats.forEach(s => { s.from = s.rot; s.to = n * QUARTER; s.t0 = performance.now(); s.dur = 360; });
    if (Math.abs(e.clientX - dragX) > 4 && i !== current) { current = i; onSnap(i); }
    kick();
  };
  const leave = () => { yawTo = YAW; tiltTo = TILT; kick(); };
  canvas.addEventListener('pointerdown', down);
  canvas.addEventListener('pointermove', move);
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('pointerleave', leave);

  const ro = new ResizeObserver(resize); ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }); io.observe(canvas);
  document.addEventListener('visibilitychange', kick);
  resize();
  let shown = true;
  try { shown = sessionStorage.getItem('sign-shown') === '1'; sessionStorage.setItem('sign-shown', '1'); } catch (e) {}
  if (!shown && !reduced) {
    const from = (start + 3) % 4;
    slats.forEach(s => { s.rot = s.from = s.to = from * QUARTER; s.mesh.rotation.y = s.rot; });
    current = from;
    setTimeout(() => turnTo(start), 700);
  }

  return {
    setAudience(i) { if (i !== current) turnTo(i); },
    setTheme(isDark) { applyTheme(isDark); kick(); },
    destroy() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      document.removeEventListener('visibilitychange', kick);
      renderer.dispose();
    }
  };
}
