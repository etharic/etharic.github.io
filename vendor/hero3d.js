// Homepage hero: a split-flap board, kept quiet. Matte tiles in the page's own
// tone, seen straight on; the only depth is the flaps themselves falling.
// Choosing an audience makes every character flip through the drum to its new letter.
// Loaded lazily by index.html; the page works without it.
import * as THREE from './three.module.min.js';
import { RoomEnvironment } from './RoomEnvironment.js';

const CW = .26, CH = .38, GX = .03, GY = .05;              // tile size and gaps (world units)
let ROWS = 2, COLS = 18, BW = 0, BH = 0;                   // set per screen in mount()
function setGrid(r, c) { ROWS = r; COLS = c; BW = COLS * CW + (COLS - 1) * GX; BH = ROWS * CH + (ROWS - 1) * GY; }
// the drum: the order a flap passes through
const DRUM = " abcdefghijklmnopqrstuvwxyz0123456789.,’'!?→>={}_()&-NPV";
const ATLAS_COLS = 8, ATLAS_ROWS = Math.ceil(DRUM.length / ATLAS_COLS);
const GW = 128, GH = Math.round(128 * CH / CW);            // glyph cell in the atlas (px)

// page-matched tiles: [light, dark]
const TILE = [{ face: '#fbfbfa', split: 'rgba(29,30,34,.10)' }, { face: '#232325', split: 'rgba(0,0,0,.55)' }];

function roundRect(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}
function paintAtlas(c, ink, tile) {
  const g = c.getContext('2d');
  g.clearRect(0, 0, c.width, c.height);
  try { g.fontStretch = 'semi-expanded'; } catch (e) {}
  g.textAlign = 'center'; g.textBaseline = 'middle';
  [...DRUM].forEach((ch, i) => {
    const x = (i % ATLAS_COLS) * GW, y = Math.floor(i / ATLAS_COLS) * GH;
    g.fillStyle = tile.face; roundRect(g, x + 1, y + 1, GW - 2, GH - 2, 10); g.fill();
    g.fillStyle = ink;
    g.font = `600 ${Math.round(GH * .58)}px Archivo, Inter, system-ui, sans-serif`;
    if (ch !== ' ') g.fillText(ch, x + GW / 2, y + GH * .53);
    g.fillStyle = tile.split; g.fillRect(x + 1, y + GH / 2 - 1, GW - 2, 2);    // the split
  });
}

// UVs for the top or bottom half of a glyph; PlaneGeometry vertex order: TL, TR, BL, BR
function setHalf(geo, ch, half) {
  let i = DRUM.indexOf(ch); if (i < 0) i = 0;
  const gx = i % ATLAS_COLS, gy = Math.floor(i / ATLAS_COLS);
  const u0 = gx / ATLAS_COLS, u1 = (gx + 1) / ATLAS_COLS;
  const vt = 1 - gy / ATLAS_ROWS, vb = 1 - (gy + 1) / ATLAS_ROWS, vm = (vt + vb) / 2;
  const [a, b] = half === 'top' ? [vt, vm] : [vm, vb];
  const uv = geo.attributes.uv;
  uv.setXY(0, u0, a); uv.setXY(1, u1, a); uv.setXY(2, u0, b); uv.setXY(3, u1, b);
  uv.needsUpdate = true;
}

function layout(text) {
  // words longer than a row break after an underscore, or hard at the row width
  const words = [];
  for (const w of text.split(' ')) {
    let rest = w;
    while (rest.length > COLS) { const u = rest.lastIndexOf('_', COLS - 1); const cut = u > 2 ? u + 1 : COLS; words.push(rest.slice(0, cut)); rest = rest.slice(cut); }
    words.push(rest);
  }
  const rows = [];
  let cur = '';
  for (const w of words) { const t = cur ? cur + ' ' + w : w; if (t.length > COLS && cur) { rows.push(cur); cur = w; } else cur = t; }
  if (cur) rows.push(cur);
  if (rows.length === 1 && rows[0].length > 10 && rows[0].includes(' ')) {     // split near the middle
    const t = rows[0], mid = t.length / 2;
    let best = -1;
    for (let j = 0; j < t.length; j++) if (t[j] === ' ' && (best < 0 || Math.abs(j - mid) < Math.abs(best - mid))) best = j;
    rows.splice(0, 1, t.slice(0, best), t.slice(best + 1));
  }
  const lines = rows.slice(0, ROWS);
  const padTop = Math.floor((ROWS - lines.length) / 2);   // centre short phrases vertically
  for (let j = 0; j < padTop; j++) lines.unshift('');
  while (lines.length < ROWS) lines.push('');
  return lines.map(r => { r = r.slice(0, COLS); const l = Math.floor((COLS - r.length) / 2); return (' '.repeat(l) + r).padEnd(COLS, ' '); });
}

export async function mount(canvas, { leads, inks, start = 0, reduced = false, dark = false }) {
  if (document.fonts && document.fonts.load) { try { await document.fonts.load('600 80px Archivo'); } catch (e) {} }
  const narrow = canvas.clientWidth < 560;
  narrow ? setGrid(4, 12) : setGrid(2, 18);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
  pmrem.dispose();
  const camera = new THREE.PerspectiveCamera(22, 3, .1, 100);
  // soft overhead light: a falling flap turns away from it and darkens, which is all the depth the board needs
  const key = new THREE.DirectionalLight(0xffffff, .55); key.position.set(0, 6, 4); scene.add(key);

  // one glyph sheet per audience, repainted for the theme
  let isDark = dark;
  const sheets = inks.map(() => { const c = document.createElement('canvas'); c.width = ATLAS_COLS * GW; c.height = ATLAS_ROWS * GH; return c; });
  const mats = sheets.map(c => {
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0xffffff, roughness: .85, metalness: 0, alphaTest: .5 });
  });
  const paint = () => {
    // faces carry their own colour (emissive); light only adds the shading that shows a flap turning
    sheets.forEach((c, i) => { paintAtlas(c, inks[i][isDark ? 1 : 0], TILE[isDark ? 1 : 0]); mats[i].map.needsUpdate = true; mats[i].emissiveIntensity = isDark ? .72 : .45; });
    key.intensity = isDark ? .35 : .6;
    scene.environmentIntensity = isDark ? .25 : .5;
  };
  paint();
  let aud = start;     // colour of characters being written now

  const board = new THREE.Group(); scene.add(board);
  // tiles: a fixed top half, a fixed bottom half, and a hinged flap between them
  const cells = [];
  const half = CH / 2;
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
    const g = new THREE.Group();
    g.position.set(-BW / 2 + CW / 2 + c * (CW + GX), BH / 2 - CH / 2 - r * (CH + GY), 0);
    const top = new THREE.Mesh(new THREE.PlaneGeometry(CW, half), mats[start]); top.position.y = half / 2;
    const bot = new THREE.Mesh(new THREE.PlaneGeometry(CW, half), mats[start]); bot.position.y = -half / 2;
    const flap = new THREE.Group(); flap.position.z = .003;
    const front = new THREE.Mesh(new THREE.PlaneGeometry(CW, half), mats[start]); front.position.y = half / 2;
    const back = new THREE.Mesh(new THREE.PlaneGeometry(CW, half), mats[start]);
    flap.add(front, back); flap.visible = false;
    g.add(top, bot, flap); board.add(g);
    cells.push({ top, bot, flap, front, back, ch: ' ', next: ' ', m: start, queue: [], t0: 0, flipping: false });
  }
  const show = (cell, ch) => {
    cell.ch = cell.next = ch; cell.queue = []; cell.flipping = false; cell.m = aud;
    cell.top.material = cell.bot.material = mats[aud];
    setHalf(cell.top.geometry, ch, 'top'); setHalf(cell.bot.geometry, ch, 'bot');
    cell.flap.visible = false; cell.flap.rotation.x = 0;
  };
  // back of the flap: geometry pre-rotated so it reads upright once the flap has fallen
  const setBack = (cell, ch) => {
    const geo = new THREE.PlaneGeometry(CW, half);
    setHalf(geo, ch, 'bot'); geo.rotateX(Math.PI); geo.translate(0, half / 2, 0);
    cell.back.geometry.dispose(); cell.back.geometry = geo;
  };

  const target = i => layout(leads[i]).join('');
  const FLIP = 120;     // ms per flap fall
  function setText(i) {
    const want = target(i);
    const now = performance.now();
    aud = i;
    cells.forEach((cell, k) => {
      const to = want[k];
      if (reduced) { show(cell, to); return; }
      const from = cell.flipping ? cell.next : cell.ch;
      if (from === to && !cell.flipping) {
        // same letter, new colour: one flap repaints it; blanks stay put
        if (to !== ' ' && cell.m !== aud) { cell.queue = [to]; cell.t0 = now + (k % COLS) * 34 + Math.floor(k / COLS) * 110; }
        else cell.queue = [];
        return;
      }
      // pass through the drum toward the target, at most 8 flaps
      const a = Math.max(DRUM.indexOf(from), 0), b = Math.max(DRUM.indexOf(to), 0);
      const dist = (b - a + DRUM.length) % DRUM.length;
      const steps = Math.min(dist || DRUM.length, 8);
      const q = [];
      for (let s = 1; s <= steps; s++) q.push(DRUM[(a + Math.round(dist * s / steps)) % DRUM.length]);
      q[q.length - 1] = to;
      if (cell.flipping) q.unshift(cell.next);           // finish the flap already falling
      cell.queue = q;
      if (!cell.flipping) cell.t0 = now + (k % COLS) * 34 + Math.floor(k / COLS) * 110;
    });
    kick();
  }

  // motion: a barely-there parallax with the mouse; the board otherwise sits flat on the page
  let tiltX = 0, tiltTo = 0, yaw = 0, yawTo = 0, raf = 0, visible = true, last = performance.now();
  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const vf = THREE.MathUtils.degToRad(camera.fov / 2), hf = Math.atan(Math.tan(vf) * camera.aspect);
    const dist = Math.max((BW + .3) / 2 / Math.tan(hf), (BH + .3) / 2 / Math.tan(vf));
    camera.position.set(0, 0, dist);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    kick();
  };
  function frame(now) {
    const dt = Math.min((now - last) / 1000, .05); last = now;
    const k = 1 - Math.exp(-dt * 6);
    tiltX += (tiltTo - tiltX) * k; yaw += (yawTo - yaw) * k;
    board.rotation.set(tiltX, yaw, 0, 'YXZ');
    let busy = false;
    for (const cell of cells) {
      if (!cell.queue.length && !cell.flipping) continue;
      busy = true;
      if (now < cell.t0) continue;
      if (!cell.flipping) {            // start a flap: the top shows next, the flap carries current top and next bottom
        cell.next = cell.queue.shift();
        cell.top.material = cell.back.material = mats[aud];
        cell.front.material = mats[cell.m];
        setHalf(cell.top.geometry, cell.next, 'top');
        setHalf(cell.front.geometry, cell.ch, 'top');
        setBack(cell, cell.next);
        cell.flap.visible = true; cell.flap.rotation.x = 0;
        cell.flipping = true; cell.t0 = now;
      }
      const p = Math.min((now - cell.t0) / FLIP, 1);
      cell.flap.rotation.x = Math.PI * p * p;        // falls under gravity
      if (p >= 1) {
        cell.ch = cell.next; cell.m = aud;
        cell.bot.material = mats[aud];
        setHalf(cell.bot.geometry, cell.ch, 'bot');
        canvas.dataset.flips = (+canvas.dataset.flips || 0) + 1;   // lets tests see the board moving
        cell.flap.visible = false; cell.flap.rotation.x = 0;
        cell.flipping = false; cell.t0 = now + 12;
      }
    }
    renderer.render(scene, camera);
    const settling = Math.abs(tiltTo - tiltX) > .0003 || Math.abs(yawTo - yaw) > .0003;
    raf = (busy || settling) && visible && !document.hidden ? requestAnimationFrame(frame) : 0;
  }
  function kick() { if (!raf && visible && !document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame); } }

  const move = e => {
    if (reduced || e.pointerType !== 'mouse') return;
    const r = canvas.getBoundingClientRect();
    yawTo = ((e.clientX - r.left) / r.width - .5) * .05;
    tiltTo = ((e.clientY - r.top) / r.height - .5) * .04;
    kick();
  };
  const leave = () => { yawTo = 0; tiltTo = 0; kick(); };
  canvas.addEventListener('pointermove', move);
  canvas.addEventListener('pointerleave', leave);

  const ro = new ResizeObserver(resize); ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }); io.observe(canvas);
  document.addEventListener('visibilitychange', kick);

  // every page load: the board flips in from blank (returning to the homepage inside the site does not replay it)
  const shown = window.__boardShown === true;
  window.__boardShown = true;
  let current = start;
  if (!shown && !reduced) { cells.forEach(c => show(c, ' ')); resize(); setTimeout(() => setText(start), 450); }
  else { const t = target(start); cells.forEach((c, k) => show(c, t[k])); resize(); }

  return {
    setAudience(i) { if (i !== current) { current = i; setText(i); } },
    setTheme(d) { isDark = d; paint(); kick(); },
    destroy() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      document.removeEventListener('visibilitychange', kick);
      renderer.dispose();
    }
  };
}
