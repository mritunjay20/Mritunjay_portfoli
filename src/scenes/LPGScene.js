import * as THREE from 'three';

/**
 * 3D LPG Gas Safety System Scene
 * 3D Cylinder model, MQ-2 gas sensor unit, simulated PPM concentration slider,
 * tri-state alert lighting (Safe / Warning / Hazard), rotating exhaust fan, and safety sequence.
 */
export function initLPGScene(container) {

  const sceneStyle = document.createElement('style');
  sceneStyle.textContent = `.lpg-container {
  --scene-accent: #67e8f9;
  --scene-accent-rgb: 103, 232, 249;
  color: #e5edf8;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}.lpg-container *, .lpg-container *::before, .lpg-container *::after { box-sizing: border-box; }.lpg-container [class$="-hud-header"], .lpg-container .radar-hud-bar, .lpg-container .face-hud-header {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; padding: 14px 16px;
  border: 1px solid rgba(var(--scene-accent-rgb), .22);
  border-radius: 16px 16px 0 0;
  background: linear-gradient(115deg, rgba(15, 25, 43, .96), rgba(7, 14, 27, .88));
  box-shadow: inset 0 1px rgba(255,255,255,.04);
}.lpg-container [class$="-badge"], .lpg-container .radar-status-badge, .lpg-container .face-badge {
  display: inline-flex; align-items: center; gap: 9px;
  color: #b8c7dc; font: 600 10px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .09em; text-transform: uppercase;
}.lpg-container .hud-blink-dot {
  display: inline-block; width: 7px; height: 7px; flex: 0 0 7px; border-radius: 50%;
  background: var(--scene-accent); box-shadow: 0 0 12px currentColor;
}.lpg-container .hud-blink-dot.cyan { color: #67e8f9; background: #67e8f9; }.lpg-container .hud-blink-dot.purple { color: #c4b5fd; background: #c4b5fd; }.lpg-container .hud-blink-dot.green { color: #86efac; background: #86efac; }.lpg-container .hud-blink-dot.orange { color: #fdba74; background: #fdba74; }.lpg-container [class$="-viewport-wrapper"], .lpg-container .radar-display-wrapper, .lpg-container .voice-visualizer-wrapper {
  position: relative; isolation: isolate; overflow: hidden; min-height: 280px;
  border: 1px solid rgba(var(--scene-accent-rgb), .19);
  border-top: 0; border-bottom: 0;
  background:
    radial-gradient(ellipse at 50% 35%, rgba(var(--scene-accent-rgb), .09), transparent 58%),
    linear-gradient(135deg, #080f1d, #030711 70%);
}.lpg-container [class$="-viewport-wrapper"]::before, .lpg-container .radar-display-wrapper::before, .lpg-container .voice-visualizer-wrapper::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.045) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.8), transparent 96%);
}.lpg-container [class$="-viewport-wrapper"] canvas, .lpg-container #radar-canvas, .lpg-container #voice-canvas {
  position: relative; z-index: 1; display: block; width: 100%; max-width: 100%;
}.lpg-container [class$="-telemetry-hud"], .lpg-container .radar-overlay-hud, .lpg-container .voice-transcript-overlay {
  position: absolute; z-index: 2; inset: 12px; pointer-events: none;
}.lpg-container [class$="-telemetry-card"], .lpg-container [class$="-metric-card"], .lpg-container .face-telemetry-hud, .lpg-container .nfc-payload-card, .lpg-container .voice-transcript-box, .lpg-container .voice-response-box, .lpg-container .hud-telemetry-corner {
  border: 1px solid rgba(var(--scene-accent-rgb), .2);
  border-radius: 12px; padding: 12px 14px;
  background: rgba(5, 12, 25, .78); backdrop-filter: blur(12px);
  box-shadow: 0 8px 28px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.035);
}.lpg-container [class$="-telemetry-card"] span, .lpg-container [class$="-metric-card"] span, .lpg-container .hud-telemetry-corner span, .lpg-container .face-hud-row span, .lpg-container .nfc-payload-card span {
  color: #8fa3bd; font: 500 10px/1.55 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .045em;
}.lpg-container [class$="-telemetry-card"] strong, .lpg-container [class$="-metric-card"] strong, .lpg-container .face-hud-row strong, .lpg-container .nfc-payload-card strong {
  color: #e6f4ff; font-size: 12px; font-weight: 650;
}.lpg-container [class$="-controls-dock"], .lpg-container [class$="-slider-dock"], .lpg-container .radar-control-panel, .lpg-container .radar-controls-dock, .lpg-container .voice-command-dock {
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  padding: 14px 16px; border: 1px solid rgba(var(--scene-accent-rgb), .18);
  border-radius: 0 0 16px 16px; background: rgba(8, 15, 29, .96);
}.lpg-container .hud-pill-btn, .lpg-container .btn, .lpg-container .command-chip, .lpg-container button {
  font: inherit; cursor: pointer; transition: transform .18s ease, border-color .18s ease,
    background .18s ease, box-shadow .18s ease;
}.lpg-container .hud-pill-btn, .lpg-container .command-chip {
  border: 1px solid rgba(var(--scene-accent-rgb), .25); border-radius: 999px;
  padding: 8px 12px; color: #c9d8ea; background: rgba(16, 30, 49, .8);
  font-size: 11px; font-weight: 650;
}.lpg-container .btn.primary, .lpg-container button.primary {
  border: 1px solid rgba(var(--scene-accent-rgb), .45); border-radius: 9px;
  padding: 9px 13px; color: #06121d;
  background: linear-gradient(135deg, var(--scene-accent), #a5f3fc);
  box-shadow: 0 4px 16px rgba(var(--scene-accent-rgb), .12);
  font-size: 11px; font-weight: 750;
}.lpg-container .btn.ghost, .lpg-container button.ghost {
  border: 1px solid rgba(148,163,184,.24); border-radius: 9px;
  padding: 9px 13px; color: #c4d0e0; background: rgba(30,41,59,.55); font-size: 11px;
}.lpg-container .hud-pill-btn:hover, .lpg-container .command-chip:hover, .lpg-container .btn:hover, .lpg-container button:hover {
  transform: translateY(-1px); border-color: rgba(var(--scene-accent-rgb), .65);
  box-shadow: 0 5px 18px rgba(var(--scene-accent-rgb), .1);
}.lpg-container button:focus-visible, .lpg-container input:focus-visible {
  outline: 2px solid var(--scene-accent); outline-offset: 3px;
}.lpg-container .safe, .lpg-container .indicator-safe { color: #86efac !important; }.lpg-container .badge-warning, .lpg-container .indicator-warn { color: #fcd34d !important; }.lpg-container .indicator-hazard { color: #fca5a5 !important; }.lpg-container p, .lpg-container .dock-hint, .lpg-container .nfc-disclaimer, .lpg-container .helmet-disclaimer, .lpg-container .fp-disclaimer, .lpg-container .voice-privacy-notice {
  color: #9aabc2; font-size: 11px; line-height: 1.7;
}.lpg-container input[type="range"] { accent-color: var(--scene-accent); width: min(100%, 320px); cursor: pointer; }.lpg-container label { color: #b8c7dc; font-size: 11px; }@media (max-width: 600px){.lpg-container [class$="-hud-header"], .lpg-container .radar-hud-bar, .lpg-container .face-hud-header { align-items: flex-start; padding: 12px; }.lpg-container [class$="-viewport-wrapper"], .lpg-container .radar-display-wrapper, .lpg-container .voice-visualizer-wrapper { min-height: 240px; }.lpg-container [class$="-controls-dock"], .lpg-container [class$="-slider-dock"], .lpg-container .radar-control-panel, .lpg-container .voice-command-dock { padding: 12px; }.lpg-container [class$="-telemetry-hud"] { inset: 8px; }.lpg-container [class$="-badge"], .lpg-container .radar-status-badge, .lpg-container .face-badge { font-size: 9px; }
}.lpg-container .lpg-safety-state { padding:7px 10px; border:1px solid rgba(134,239,172,.28); border-radius:8px; color:#86efac; background:rgba(20,83,45,.18); font:600 10px ui-monospace,monospace; }.lpg-container .lpg-telemetry-hud { position:absolute; top:12px; right:12px; width:min(270px,48%); display:grid; gap:7px; align-content:start; }.lpg-container .lpg-hud-row { display:flex; flex-direction:column; gap:3px; padding:10px 12px; border:1px solid rgba(var(--scene-accent-rgb),.2); border-radius:10px; background:rgba(5,12,25,.78); backdrop-filter:blur(12px); }.lpg-container .lpg-hud-row span { color:#a8b7ca; font:10px ui-monospace,monospace; }.lpg-container .lpg-hud-row strong { color:#f1f5f9; font-size:12px; }.lpg-container .lpg-slider-dock { align-items:flex-start; }.lpg-container .slider-row, .lpg-container .lpg-state-indicators { display:flex; flex-wrap:wrap; align-items:center; gap:9px; width:100%; }.lpg-container .indicator-safe, .lpg-container .indicator-warn, .lpg-container .indicator-hazard { padding:5px 8px; border-radius:7px; background:rgba(15,23,42,.7); font-size:10px; }
`;
  if (!container.querySelector('style[data-scene-style="LPGScene.js"]')) {
    sceneStyle.setAttribute('data-scene-style', 'LPGScene.js');
    container.appendChild(sceneStyle);
  }

  container.innerHTML = `
    <div class="lpg-container">
      <div class="lpg-hud-header">
        <div class="lpg-badge">
          <span class="hud-blink-dot orange" id="lpg-status-dot"></span>
          <span id="lpg-status-title">MQ-2 SENSOR ACTIVE • GAS MONITORING</span>
        </div>
        <div class="lpg-safety-state" id="lpg-state-pill">
          STATE: NORMAL (SAFE)
        </div>
      </div>

      <div class="lpg-viewport-wrapper">
        <canvas id="lpg-canvas"></canvas>
        <div class="lpg-telemetry-hud">
          <div class="lpg-hud-row">
            <span>GAS CONCENTRATION:</span>
            <strong id="lpg-ppm-text">85 PPM</strong>
          </div>
          <div class="lpg-hud-row">
            <span>THRESHOLD 1 (WARNING):</span>
            <span>250 PPM</span>
          </div>
          <div class="lpg-hud-row">
            <span>THRESHOLD 2 (HAZARD):</span>
            <span>450 PPM</span>
          </div>
          <div class="lpg-hud-row">
            <span>EXHAUST VENTILATION:</span>
            <strong id="lpg-fan-status">OFF (STANDBY)</strong>
          </div>
          <div class="lpg-hud-row">
            <span>GAS VALVE SOLENOID:</span>
            <strong id="lpg-valve-status" class="safe">OPEN (SUPPLY ON)</strong>
          </div>
        </div>
      </div>

      <div class="lpg-slider-dock">
        <label for="lpg-ppm-slider">Simulate Hydrocarbon Vapor Concentration (PPM):</label>
        <div class="slider-row">
          <input type="range" id="lpg-ppm-slider" min="30" max="800" value="85" />
          <button class="hud-pill-btn" id="lpg-test-leak-btn">Trigger Simulated Leak</button>
        </div>
        <div class="lpg-state-indicators">
          <span class="indicator-safe">0-250 PPM: Safe</span>
          <span class="indicator-warn">250-450 PPM: Warning Alert</span>
          <span class="indicator-hazard">450+ PPM: Emergency Containment</span>
        </div>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#lpg-canvas');
  const ppmText = container.querySelector('#lpg-ppm-text');
  const statePill = container.querySelector('#lpg-state-pill');
  const fanStatus = container.querySelector('#lpg-fan-status');
  const valveStatus = container.querySelector('#lpg-valve-status');
  const ppmSlider = container.querySelector('#lpg-ppm-slider');
  const testLeakBtn = container.querySelector('#lpg-test-leak-btn');
  const statusDot = container.querySelector('#lpg-status-dot');

  let ppm = 85;
  let fanSpeed = 0;
  let targetFanSpeed = 0;
  let animId = null;

  // 3D Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05060b);

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 1.2, 5.8);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  // Lights
  const ambient = new THREE.AmbientLight(0x7c8ba1, 1.2);
  scene.add(ambient);

  const dirLight = new THREE.DirectionalLight(0xfff0dd, 2.5);
  dirLight.position.set(3, 6, 4);
  scene.add(dirLight);

  const alarmLight = new THREE.PointLight(0x10b981, 4, 8);
  alarmLight.position.set(0, 2.2, 1.5);
  scene.add(alarmLight);

  const cylinderGroup = new THREE.Group();
  scene.add(cylinderGroup);

  // Model: LPG Red/Orange Cylinder
  const cylMat = new THREE.MeshStandardMaterial({
    color: 0xc2410c, // Industrial rust orange/red
    metalness: 0.35,
    roughness: 0.4
  });

  // Main tank body
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.8, 32), cylMat);
  cylinderGroup.add(tank);

  // Top and bottom domes
  const domeMat = cylMat;
  const topDome = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
  topDome.position.y = 0.9;
  cylinderGroup.add(topDome);

  const botDome = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), domeMat);
  botDome.position.y = -0.9;
  cylinderGroup.add(botDome);

  // Base stand ring
  const standRing = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.25, 32, 1, true), new THREE.MeshStandardMaterial({ color: 0x1f2937 }));
  standRing.position.y = -1.1;
  cylinderGroup.add(standRing);

  // Top Collar Guard
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.38, 24, 1, true), cylMat);
  collar.position.y = 1.35;
  cylinderGroup.add(collar);

  // Valve Nozzle (Brass)
  const brassMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.8, roughness: 0.2 });
  const valve = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.35, 16), brassMat);
  valve.position.y = 1.25;
  cylinderGroup.add(valve);

  // MQ-2 Sensor Pod attached to side
  const sensorGroup = new THREE.Group();
  sensorGroup.position.set(0.9, -0.2, 0.4);
  cylinderGroup.add(sensorGroup);

  const sensorPcb = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.55, 0.1), new THREE.MeshStandardMaterial({ color: 0x064e3b }));
  sensorGroup.add(sensorPcb);

  const sensorCoil = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.16, 16), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.7 }));
  sensorCoil.rotation.x = Math.PI / 2;
  sensorCoil.position.z = 0.08;
  sensorGroup.add(sensorCoil);

  // Exhaust Fan model in background
  const fanGroup = new THREE.Group();
  fanGroup.position.set(-1.8, 0.8, -1.2);
  scene.add(fanGroup);

  const fanHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.2, 24), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
  fanHousing.rotation.x = Math.PI / 2;
  fanGroup.add(fanHousing);

  const fanBlades = new THREE.Group();
  fanGroup.add(fanBlades);
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.48, 0.02), new THREE.MeshStandardMaterial({ color: 0x94a3b8 }));
    blade.rotation.z = (i * Math.PI) / 2;
    blade.position.y = 0.2;
    fanBlades.add(blade);
  }

  // Update logic
  function updatePPM(val) {
    ppm = val;
    ppmText.textContent = `${ppm} PPM`;
    ppmSlider.value = ppm;

    if (ppm < 250) {
      // Safe
      statePill.textContent = 'STATE: NORMAL (SAFE)';
      statePill.className = 'lpg-safety-state safe';
      fanStatus.textContent = 'OFF (STANDBY)';
      valveStatus.textContent = 'OPEN (SUPPLY ON)';
      valveStatus.className = 'safe';
      targetFanSpeed = 0;
      alarmLight.color.setHex(0x10b981);
      statusDot.className = 'hud-blink-dot green';
    } else if (ppm < 450) {
      // Warning
      statePill.textContent = 'STATE: WARNING THRESHOLD';
      statePill.className = 'lpg-safety-state warning';
      fanStatus.textContent = 'LOW SPEED (EVACUATION)';
      valveStatus.textContent = 'OPEN (MONITORING)';
      valveStatus.className = 'warning';
      targetFanSpeed = 0.1;
      alarmLight.color.setHex(0xf59e0b);
      statusDot.className = 'hud-blink-dot orange';
    } else {
      // Emergency Hazard
      statePill.textContent = 'STATE: EMERGENCY HAZARD!';
      statePill.className = 'lpg-safety-state hazard';
      fanStatus.textContent = 'MAX SPEED ACTIVE (EXHAUST)';
      valveStatus.textContent = 'EMERGENCY SHUTOFF (CLOSED)';
      valveStatus.className = 'danger';
      targetFanSpeed = 0.45;
      alarmLight.color.setHex(0xef4444);
      statusDot.className = 'hud-blink-dot red';
    }
  }

  ppmSlider.addEventListener('input', (e) => {
    updatePPM(parseInt(e.target.value, 10));
  });

  testLeakBtn.addEventListener('click', () => {
    updatePPM(580);
    setTimeout(() => { updatePPM(110); }, 5000);
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

  // Pointer drag for cylinder
  let isDown = false, px = 0;
  canvas.addEventListener('pointerdown', (e) => { isDown = true; px = e.clientX; });
  window.addEventListener('pointermove', (e) => {
    if (isDown) {
      cylinderGroup.rotation.y += (e.clientX - px) * 0.01;
      px = e.clientX;
    }
  });
  window.addEventListener('pointerup', () => { isDown = false; });

  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    if (!isDown) {
      cylinderGroup.rotation.y += 0.005;
    }

    fanSpeed = THREE.MathUtils.lerp(fanSpeed, targetFanSpeed, 0.05);
    fanBlades.rotation.z += fanSpeed;

    if (ppm >= 450) {
      alarmLight.intensity = Math.sin(elapsed * 12) * 5 + 6;
    } else {
      alarmLight.intensity = 3;
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
