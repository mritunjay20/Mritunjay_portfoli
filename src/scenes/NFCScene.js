import * as THREE from 'three';

/**
 * 3D NFC Smart Card Scene
 * 3D Holographic card with metallic sheen, tap-to-scan physics,
 * expanding electromagnetic flux waves, and decoded RFID payload readout.
 */
export function initNFCScene(container) {

  const sceneStyle = document.createElement('style');
  sceneStyle.textContent = `.nfc-container {
  --scene-accent: #67e8f9;
  --scene-accent-rgb: 103, 232, 249;
  color: #e5edf8;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}.nfc-container *, .nfc-container *::before, .nfc-container *::after { box-sizing: border-box; }.nfc-container [class$="-hud-header"], .nfc-container .radar-hud-bar, .nfc-container .face-hud-header {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; padding: 14px 16px;
  border: 1px solid rgba(var(--scene-accent-rgb), .22);
  border-radius: 16px 16px 0 0;
  background: linear-gradient(115deg, rgba(15, 25, 43, .96), rgba(7, 14, 27, .88));
  box-shadow: inset 0 1px rgba(255,255,255,.04);
}.nfc-container [class$="-badge"], .nfc-container .radar-status-badge, .nfc-container .face-badge {
  display: inline-flex; align-items: center; gap: 9px;
  color: #b8c7dc; font: 600 10px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .09em; text-transform: uppercase;
}.nfc-container .hud-blink-dot {
  display: inline-block; width: 7px; height: 7px; flex: 0 0 7px; border-radius: 50%;
  background: var(--scene-accent); box-shadow: 0 0 12px currentColor;
}.nfc-container .hud-blink-dot.cyan { color: #67e8f9; background: #67e8f9; }.nfc-container .hud-blink-dot.purple { color: #c4b5fd; background: #c4b5fd; }.nfc-container .hud-blink-dot.green { color: #86efac; background: #86efac; }.nfc-container .hud-blink-dot.orange { color: #fdba74; background: #fdba74; }.nfc-container [class$="-viewport-wrapper"], .nfc-container .radar-display-wrapper, .nfc-container .voice-visualizer-wrapper {
  position: relative; isolation: isolate; overflow: hidden; min-height: 280px;
  border: 1px solid rgba(var(--scene-accent-rgb), .19);
  border-top: 0; border-bottom: 0;
  background:
    radial-gradient(ellipse at 50% 35%, rgba(var(--scene-accent-rgb), .09), transparent 58%),
    linear-gradient(135deg, #080f1d, #030711 70%);
}.nfc-container [class$="-viewport-wrapper"]::before, .nfc-container .radar-display-wrapper::before, .nfc-container .voice-visualizer-wrapper::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.045) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.8), transparent 96%);
}.nfc-container [class$="-viewport-wrapper"] canvas, .nfc-container #radar-canvas, .nfc-container #voice-canvas {
  position: relative; z-index: 1; display: block; width: 100%; max-width: 100%;
}.nfc-container [class$="-telemetry-hud"], .nfc-container .radar-overlay-hud, .nfc-container .voice-transcript-overlay {
  position: absolute; z-index: 2; inset: 12px; pointer-events: none;
}.nfc-container [class$="-telemetry-card"], .nfc-container [class$="-metric-card"], .nfc-container .face-telemetry-hud, .nfc-container .nfc-payload-card, .nfc-container .voice-transcript-box, .nfc-container .voice-response-box, .nfc-container .hud-telemetry-corner {
  border: 1px solid rgba(var(--scene-accent-rgb), .2);
  border-radius: 12px; padding: 12px 14px;
  background: rgba(5, 12, 25, .78); backdrop-filter: blur(12px);
  box-shadow: 0 8px 28px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.035);
}.nfc-container [class$="-telemetry-card"] span, .nfc-container [class$="-metric-card"] span, .nfc-container .hud-telemetry-corner span, .nfc-container .face-hud-row span, .nfc-container .nfc-payload-card span {
  color: #8fa3bd; font: 500 10px/1.55 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .045em;
}.nfc-container [class$="-telemetry-card"] strong, .nfc-container [class$="-metric-card"] strong, .nfc-container .face-hud-row strong, .nfc-container .nfc-payload-card strong {
  color: #e6f4ff; font-size: 12px; font-weight: 650;
}.nfc-container [class$="-controls-dock"], .nfc-container [class$="-slider-dock"], .nfc-container .radar-control-panel, .nfc-container .radar-controls-dock, .nfc-container .voice-command-dock {
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  padding: 14px 16px; border: 1px solid rgba(var(--scene-accent-rgb), .18);
  border-radius: 0 0 16px 16px; background: rgba(8, 15, 29, .96);
}.nfc-container .hud-pill-btn, .nfc-container .btn, .nfc-container .command-chip, .nfc-container button {
  font: inherit; cursor: pointer; transition: transform .18s ease, border-color .18s ease,
    background .18s ease, box-shadow .18s ease;
}.nfc-container .hud-pill-btn, .nfc-container .command-chip {
  border: 1px solid rgba(var(--scene-accent-rgb), .25); border-radius: 999px;
  padding: 8px 12px; color: #c9d8ea; background: rgba(16, 30, 49, .8);
  font-size: 11px; font-weight: 650;
}.nfc-container .btn.primary, .nfc-container button.primary {
  border: 1px solid rgba(var(--scene-accent-rgb), .45); border-radius: 9px;
  padding: 9px 13px; color: #06121d;
  background: linear-gradient(135deg, var(--scene-accent), #a5f3fc);
  box-shadow: 0 4px 16px rgba(var(--scene-accent-rgb), .12);
  font-size: 11px; font-weight: 750;
}.nfc-container .btn.ghost, .nfc-container button.ghost {
  border: 1px solid rgba(148,163,184,.24); border-radius: 9px;
  padding: 9px 13px; color: #c4d0e0; background: rgba(30,41,59,.55); font-size: 11px;
}.nfc-container .hud-pill-btn:hover, .nfc-container .command-chip:hover, .nfc-container .btn:hover, .nfc-container button:hover {
  transform: translateY(-1px); border-color: rgba(var(--scene-accent-rgb), .65);
  box-shadow: 0 5px 18px rgba(var(--scene-accent-rgb), .1);
}.nfc-container button:focus-visible, .nfc-container input:focus-visible {
  outline: 2px solid var(--scene-accent); outline-offset: 3px;
}.nfc-container .safe, .nfc-container .indicator-safe { color: #86efac !important; }.nfc-container .badge-warning, .nfc-container .indicator-warn { color: #fcd34d !important; }.nfc-container .indicator-hazard { color: #fca5a5 !important; }.nfc-container p, .nfc-container .dock-hint, .nfc-container .nfc-disclaimer, .nfc-container .helmet-disclaimer, .nfc-container .fp-disclaimer, .nfc-container .voice-privacy-notice {
  color: #9aabc2; font-size: 11px; line-height: 1.7;
}.nfc-container input[type="range"] { accent-color: var(--scene-accent); width: min(100%, 320px); cursor: pointer; }.nfc-container label { color: #b8c7dc; font-size: 11px; }@media (max-width: 600px){.nfc-container [class$="-hud-header"], .nfc-container .radar-hud-bar, .nfc-container .face-hud-header { align-items: flex-start; padding: 12px; }.nfc-container [class$="-viewport-wrapper"], .nfc-container .radar-display-wrapper, .nfc-container .voice-visualizer-wrapper { min-height: 240px; }.nfc-container [class$="-controls-dock"], .nfc-container [class$="-slider-dock"], .nfc-container .radar-control-panel, .nfc-container .voice-command-dock { padding: 12px; }.nfc-container [class$="-telemetry-hud"] { inset: 8px; }.nfc-container [class$="-badge"], .nfc-container .radar-status-badge, .nfc-container .face-badge { font-size: 9px; }
}.nfc-container .nfc-status-pill, .nfc-container .nfc-safety-state { padding:7px 10px; border-radius:8px; border:1px solid rgba(var(--scene-accent-rgb),.25); background:rgba(var(--scene-accent-rgb),.07); color:#a5f3fc; font:600 10px ui-monospace,monospace; }.nfc-container .nfc-payload-card { position:absolute; right:14px; bottom:14px; width:min(290px,calc(100% - 28px)); }.nfc-container .payload-header, .nfc-container .payload-row { display:flex; justify-content:space-between; align-items:center; gap:10px; padding:7px 0; }.nfc-container .payload-header { border-bottom:1px solid rgba(var(--scene-accent-rgb),.18); }.nfc-container .payload-tag { color:#86efac !important; }.nfc-container .nfc-controls-dock { align-items:flex-start; }.nfc-container .nfc-disclaimer { flex-basis:100%; margin:0; }
`;
  if (!container.querySelector('style[data-scene-style="NFCScene.js"]')) {
    sceneStyle.setAttribute('data-scene-style', 'NFCScene.js');
    container.appendChild(sceneStyle);
  }

  container.innerHTML = `
    <div class="nfc-container">
      <div class="nfc-hud-header">
        <div class="nfc-badge">
          <span class="hud-blink-dot cyan"></span>
          <span>13.56 MHz HF RFID • INDUCTIVE COUPLING</span>
        </div>
        <div class="nfc-status-pill" id="nfc-status-pill">
          READER: IDLE (WAITING FOR CARD)
        </div>
      </div>

      <div class="nfc-viewport-wrapper">
        <canvas id="nfc-canvas"></canvas>
        <div class="nfc-payload-card" id="nfc-payload-card">
          <div class="payload-header">
            <span>MIFARE CLASSIC 1K • ISO/IEC 14443A</span>
            <span class="payload-tag">VERIFIED</span>
          </div>
          <div class="payload-body">
            <div class="payload-row">
              <span>CARD UID:</span>
              <strong id="nfc-uid-text">0x4A 0x9B 0x1F 0x82</strong>
            </div>
            <div class="payload-row">
              <span>HOLDER NAME:</span>
              <strong>Mritunjay Saini</strong>
            </div>
            <div class="payload-row">
              <span>STATUS:</span>
              <strong class="safe">ACCESS GRANTED • CLASS 10 LAB</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="nfc-controls-dock">
        <button class="btn primary small" id="nfc-tap-btn">Tap Card to Reader Pad</button>
        <button class="btn ghost small" id="nfc-flip-btn">Flip Card (Front / Back)</button>
        <p class="nfc-disclaimer">
          ⚡ <strong>Physical Principle:</strong> High frequency 13.56MHz electromagnetic resonance delivers both power and data to passive smart cards without any battery.
        </p>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#nfc-canvas');
  const tapBtn = container.querySelector('#nfc-tap-btn');
  const flipBtn = container.querySelector('#nfc-flip-btn');
  const statusPill = container.querySelector('#nfc-status-pill');
  const payloadCard = container.querySelector('#nfc-payload-card');

  let animId = null;

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050711);

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 1.4, 5.2);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  // Lights
  scene.add(new THREE.AmbientLight(0x7ca4d9, 1.4));
  const light = new THREE.DirectionalLight(0xffffff, 2.5);
  light.position.set(2, 5, 4);
  scene.add(light);

  const violetRim = new THREE.PointLight(0xa855f7, 3, 10);
  violetRim.position.set(-3, 2, -1);
  scene.add(violetRim);

  // 1. NFC Reader Terminal Pad Base
  const readerGroup = new THREE.Group();
  readerGroup.position.set(0, -1.2, 0);
  scene.add(readerGroup);

  const readerPad = new THREE.Mesh(
    new THREE.BoxGeometry(3.0, 0.22, 2.2),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5, metalness: 0.6 })
  );
  readerGroup.add(readerPad);

  // Glowing antenna coil ring
  const coilRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.8, 0.025, 8, 48),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 })
  );
  coilRing.rotation.x = Math.PI / 2;
  coilRing.position.y = 0.12;
  readerGroup.add(coilRing);

  // 2. 3D Smart Card (Standard ISO 85.6mm x 53.98mm ratio)
  const cardGroup = new THREE.Group();
  cardGroup.position.set(0, 0.5, 0);
  scene.add(cardGroup);

  const cardMat = new THREE.MeshPhysicalMaterial({
    color: 0x09090b,
    metalness: 0.4,
    roughness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  });

  const cardMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.5, 0.04), cardMat);
  cardGroup.add(cardMesh);

  // Gold metallic contact chip
  const chipMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.2 });
  const chip = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.35, 0.05), chipMat);
  chip.position.set(-0.65, 0.15, 0.02);
  cardGroup.add(chip);

  // Card branding stripe
  const stripeMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6 });
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.36, 0.2, 0.042), stripeMat);
  stripe.position.set(0, -0.4, 0.02);
  cardGroup.add(stripe);

  // Electromagnetic flux ring indicator
  const fluxWave = new THREE.Mesh(
    new THREE.RingGeometry(0.2, 0.35, 32),
    new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0, side: THREE.DoubleSide })
  );
  fluxWave.rotation.x = -Math.PI / 2;
  fluxWave.position.set(0, -1.05, 0);
  scene.add(fluxWave);

  // Interactions
  let isTapping = false;
  let targetCardY = 0.5;
  let targetCardRotX = 0;
  let targetCardRotY = 0;
  let isFlipped = false;

  tapBtn.addEventListener('click', () => {
    if (isTapping) return;
    isTapping = true;
    statusPill.textContent = 'READER: CARD DETECTED • INDUCTION ACTIVE';
    statusPill.className = 'nfc-status-pill active';

    // Move down towards reader
    targetCardY = -0.95;
    targetCardRotX = 0.4;

    setTimeout(() => {
      // Trigger flux ring expansion
      fluxWave.scale.set(1, 1, 1);
      fluxWave.material.opacity = 0.9;

      statusPill.textContent = 'READER: UID VERIFIED • ACCESS GRANTED';
      statusPill.className = 'nfc-status-pill verified';
      payloadCard.classList.add('visible');

      setTimeout(() => {
        // Return back up
        targetCardY = 0.5;
        targetCardRotX = 0;
        isTapping = false;
      }, 1800);
    }, 600);
  });

  flipBtn.addEventListener('click', () => {
    isFlipped = !isFlipped;
    targetCardRotY = isFlipped ? Math.PI : 0;
  });

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width;
    const h = Math.max(340, rect.height || 420);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  resize();
  window.addEventListener('resize', resize);

  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Smooth card movement
    cardGroup.position.y = THREE.MathUtils.lerp(cardGroup.position.y, targetCardY + Math.sin(elapsed * 2) * 0.05, 0.08);
    cardGroup.rotation.x = THREE.MathUtils.lerp(cardGroup.rotation.x, targetCardRotX, 0.08);
    cardGroup.rotation.y = THREE.MathUtils.lerp(cardGroup.rotation.y, targetCardRotY + Math.sin(elapsed) * 0.08, 0.08);

    // Expand flux wave
    if (fluxWave.material.opacity > 0.01) {
      fluxWave.scale.x += 0.08;
      fluxWave.scale.y += 0.08;
      fluxWave.material.opacity = THREE.MathUtils.lerp(fluxWave.material.opacity, 0, 0.04);
    }

    renderer.render(scene, camera);
  }

  animId = requestAnimationFrame(animate);

  return {
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      renderer.dispose();
    }
  };
}
