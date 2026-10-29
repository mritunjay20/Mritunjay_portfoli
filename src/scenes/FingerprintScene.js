/**
 * Fingerprint Recognition Concept Scene
 * Detailed procedural friction ridge pattern on Canvas 2D,
 * glowing laser scanline sweep, minutiae point detection circles,
 * match verification HUD, and biometric privacy architecture.
 */
export function initFingerprintScene(container) {

  const sceneStyle = document.createElement('style');
  sceneStyle.textContent = `.fingerprint-container {
  --scene-accent: #67e8f9;
  --scene-accent-rgb: 103, 232, 249;
  color: #e5edf8;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}.fingerprint-container *, .fingerprint-container *::before, .fingerprint-container *::after { box-sizing: border-box; }.fingerprint-container [class$="-hud-header"], .fingerprint-container .radar-hud-bar, .fingerprint-container .face-hud-header {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; padding: 14px 16px;
  border: 1px solid rgba(var(--scene-accent-rgb), .22);
  border-radius: 16px 16px 0 0;
  background: linear-gradient(115deg, rgba(15, 25, 43, .96), rgba(7, 14, 27, .88));
  box-shadow: inset 0 1px rgba(255,255,255,.04);
}.fingerprint-container [class$="-badge"], .fingerprint-container .radar-status-badge, .fingerprint-container .face-badge {
  display: inline-flex; align-items: center; gap: 9px;
  color: #b8c7dc; font: 600 10px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .09em; text-transform: uppercase;
}.fingerprint-container .hud-blink-dot {
  display: inline-block; width: 7px; height: 7px; flex: 0 0 7px; border-radius: 50%;
  background: var(--scene-accent); box-shadow: 0 0 12px currentColor;
}.fingerprint-container .hud-blink-dot.cyan { color: #67e8f9; background: #67e8f9; }.fingerprint-container .hud-blink-dot.purple { color: #c4b5fd; background: #c4b5fd; }.fingerprint-container .hud-blink-dot.green { color: #86efac; background: #86efac; }.fingerprint-container .hud-blink-dot.orange { color: #fdba74; background: #fdba74; }.fingerprint-container [class$="-viewport-wrapper"], .fingerprint-container .radar-display-wrapper, .fingerprint-container .voice-visualizer-wrapper {
  position: relative; isolation: isolate; overflow: hidden; min-height: 280px;
  border: 1px solid rgba(var(--scene-accent-rgb), .19);
  border-top: 0; border-bottom: 0;
  background:
    radial-gradient(ellipse at 50% 35%, rgba(var(--scene-accent-rgb), .09), transparent 58%),
    linear-gradient(135deg, #080f1d, #030711 70%);
}.fingerprint-container [class$="-viewport-wrapper"]::before, .fingerprint-container .radar-display-wrapper::before, .fingerprint-container .voice-visualizer-wrapper::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.045) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.8), transparent 96%);
}.fingerprint-container [class$="-viewport-wrapper"] canvas, .fingerprint-container #radar-canvas, .fingerprint-container #voice-canvas {
  position: relative; z-index: 1; display: block; width: 100%; max-width: 100%;
}.fingerprint-container [class$="-telemetry-hud"], .fingerprint-container .radar-overlay-hud, .fingerprint-container .voice-transcript-overlay {
  position: absolute; z-index: 2; inset: 12px; pointer-events: none;
}.fingerprint-container [class$="-telemetry-card"], .fingerprint-container [class$="-metric-card"], .fingerprint-container .face-telemetry-hud, .fingerprint-container .nfc-payload-card, .fingerprint-container .voice-transcript-box, .fingerprint-container .voice-response-box, .fingerprint-container .hud-telemetry-corner {
  border: 1px solid rgba(var(--scene-accent-rgb), .2);
  border-radius: 12px; padding: 12px 14px;
  background: rgba(5, 12, 25, .78); backdrop-filter: blur(12px);
  box-shadow: 0 8px 28px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.035);
}.fingerprint-container [class$="-telemetry-card"] span, .fingerprint-container [class$="-metric-card"] span, .fingerprint-container .hud-telemetry-corner span, .fingerprint-container .face-hud-row span, .fingerprint-container .nfc-payload-card span {
  color: #8fa3bd; font: 500 10px/1.55 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .045em;
}.fingerprint-container [class$="-telemetry-card"] strong, .fingerprint-container [class$="-metric-card"] strong, .fingerprint-container .face-hud-row strong, .fingerprint-container .nfc-payload-card strong {
  color: #e6f4ff; font-size: 12px; font-weight: 650;
}.fingerprint-container [class$="-controls-dock"], .fingerprint-container [class$="-slider-dock"], .fingerprint-container .radar-control-panel, .fingerprint-container .radar-controls-dock, .fingerprint-container .voice-command-dock {
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  padding: 14px 16px; border: 1px solid rgba(var(--scene-accent-rgb), .18);
  border-radius: 0 0 16px 16px; background: rgba(8, 15, 29, .96);
}.fingerprint-container .hud-pill-btn, .fingerprint-container .btn, .fingerprint-container .command-chip, .fingerprint-container button {
  font: inherit; cursor: pointer; transition: transform .18s ease, border-color .18s ease,
    background .18s ease, box-shadow .18s ease;
}.fingerprint-container .hud-pill-btn, .fingerprint-container .command-chip {
  border: 1px solid rgba(var(--scene-accent-rgb), .25); border-radius: 999px;
  padding: 8px 12px; color: #c9d8ea; background: rgba(16, 30, 49, .8);
  font-size: 11px; font-weight: 650;
}.fingerprint-container .btn.primary, .fingerprint-container button.primary {
  border: 1px solid rgba(var(--scene-accent-rgb), .45); border-radius: 9px;
  padding: 9px 13px; color: #06121d;
  background: linear-gradient(135deg, var(--scene-accent), #a5f3fc);
  box-shadow: 0 4px 16px rgba(var(--scene-accent-rgb), .12);
  font-size: 11px; font-weight: 750;
}.fingerprint-container .btn.ghost, .fingerprint-container button.ghost {
  border: 1px solid rgba(148,163,184,.24); border-radius: 9px;
  padding: 9px 13px; color: #c4d0e0; background: rgba(30,41,59,.55); font-size: 11px;
}.fingerprint-container .hud-pill-btn:hover, .fingerprint-container .command-chip:hover, .fingerprint-container .btn:hover, .fingerprint-container button:hover {
  transform: translateY(-1px); border-color: rgba(var(--scene-accent-rgb), .65);
  box-shadow: 0 5px 18px rgba(var(--scene-accent-rgb), .1);
}.fingerprint-container button:focus-visible, .fingerprint-container input:focus-visible {
  outline: 2px solid var(--scene-accent); outline-offset: 3px;
}.fingerprint-container .safe, .fingerprint-container .indicator-safe { color: #86efac !important; }.fingerprint-container .badge-warning, .fingerprint-container .indicator-warn { color: #fcd34d !important; }.fingerprint-container .indicator-hazard { color: #fca5a5 !important; }.fingerprint-container p, .fingerprint-container .dock-hint, .fingerprint-container .nfc-disclaimer, .fingerprint-container .helmet-disclaimer, .fingerprint-container .fp-disclaimer, .fingerprint-container .voice-privacy-notice {
  color: #9aabc2; font-size: 11px; line-height: 1.7;
}.fingerprint-container input[type="range"] { accent-color: var(--scene-accent); width: min(100%, 320px); cursor: pointer; }.fingerprint-container label { color: #b8c7dc; font-size: 11px; }@media (max-width: 600px){.fingerprint-container [class$="-hud-header"], .fingerprint-container .radar-hud-bar, .fingerprint-container .face-hud-header { align-items: flex-start; padding: 12px; }.fingerprint-container [class$="-viewport-wrapper"], .fingerprint-container .radar-display-wrapper, .fingerprint-container .voice-visualizer-wrapper { min-height: 240px; }.fingerprint-container [class$="-controls-dock"], .fingerprint-container [class$="-slider-dock"], .fingerprint-container .radar-control-panel, .fingerprint-container .voice-command-dock { padding: 12px; }.fingerprint-container [class$="-telemetry-hud"] { inset: 8px; }.fingerprint-container [class$="-badge"], .fingerprint-container .radar-status-badge, .fingerprint-container .face-badge { font-size: 9px; }
}.fingerprint-container .fingerprint-match-status { padding:7px 10px; border:1px solid rgba(var(--scene-accent-rgb),.25); border-radius:8px; background:rgba(var(--scene-accent-rgb),.07); color:#a5f3fc; font:600 10px ui-monospace,monospace; }.fingerprint-container .fingerprint-telemetry-hud { position:absolute; top:12px; right:12px; width:min(285px,49%); display:grid; gap:8px; align-content:start; }.fingerprint-container .fp-telemetry-card { display:flex; flex-direction:column; gap:4px; padding:10px 12px; border:1px solid rgba(var(--scene-accent-rgb),.2); border-radius:10px; background:rgba(5,12,25,.78); backdrop-filter:blur(12px); }.fingerprint-container .fp-telemetry-card span { color:#8fa3bd; font:10px/1.5 ui-monospace,monospace; }.fingerprint-container .fp-telemetry-card strong { color:#e6f4ff; font-size:12px; }.fingerprint-container .fingerprint-controls-dock { align-items:flex-start; }.fingerprint-container .fp-disclaimer { flex-basis:100%; margin:0; }
`;
  if (!container.querySelector('style[data-scene-style="FingerprintScene.js"]')) {
    sceneStyle.setAttribute('data-scene-style', 'FingerprintScene.js');
    container.appendChild(sceneStyle);
  }

  container.innerHTML = `
    <div class="fingerprint-container">
      <div class="fingerprint-hud-header">
        <div class="fingerprint-badge">
          <span class="hud-blink-dot cyan" id="fp-hud-dot"></span>
          <span>OPTICAL PRISM SCANNER • 500 DPI MINUTIAE</span>
        </div>
        <div class="fingerprint-match-status" id="fp-status-pill">
          STATUS: READY FOR ENROLLMENT / SCAN
        </div>
      </div>

      <div class="fingerprint-viewport-wrapper">
        <canvas id="fingerprint-canvas"></canvas>
        <div class="fingerprint-telemetry-hud">
          <div class="fp-telemetry-card">
            <span>EXTRACTION ALGORITHM:</span>
            <strong>Bifurcation & Ridge-Ending Extraction</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>EXTRACTED MINUTIAE:</span>
            <strong id="fp-minutiae-count">42 Feature Points</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>MATCH SCORE:</span>
            <strong id="fp-score-val" class="safe">96.8% (VERIFIED)</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>FALSE ACCEPTANCE RATE (FAR):</span>
            <span>&lt; 0.001% (Local Hash)</span>
          </div>
        </div>
      </div>

      <div class="fingerprint-controls-dock">
        <button class="btn primary small" id="fp-scan-btn">Trigger Laser Sweep Scan</button>
        <button class="btn ghost small" id="fp-toggle-minutiae">Toggle Minutiae Points: ON</button>
        <p class="fp-disclaimer">
          🔒 <strong>Biometric Security:</strong> Optical scanners convert friction ridges into one-way mathematical feature vectors. Raw fingerprint images are never permanently stored.
        </p>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#fingerprint-canvas');
  const ctx = canvas.getContext('2d');
  const scanBtn = container.querySelector('#fp-scan-btn');
  const toggleMinutiaeBtn = container.querySelector('#fp-toggle-minutiae');
  const statusPill = container.querySelector('#fp-status-pill');
  const scoreVal = container.querySelector('#fp-score-val');
  const hudDot = container.querySelector('#fp-hud-dot');

  let width = 0, height = 0;
  let scanProgress = 0; // 0 to 1
  let isScanning = false;
  let showMinutiae = true;
  let animId = null;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = Math.max(340, rect.height || 400);
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener('resize', resize);

  // Pre-generate procedural minutiae points
  const minutiaePoints = [];
  for (let i = 0; i < 42; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 85 + 15;
    minutiaePoints.push({
      xOffset: Math.cos(angle) * r * 0.8,
      yOffset: Math.sin(angle) * r * 1.3,
      type: Math.random() > 0.5 ? 'Bifurcation' : 'Ridge Ending',
      detected: false
    });
  }

  scanBtn.addEventListener('click', () => {
    isScanning = true;
    scanProgress = 0;
    minutiaePoints.forEach(p => p.detected = false);
    statusPill.textContent = 'SCANNING: EXTRACTING FRICTION RIDGES...';
    statusPill.className = 'fingerprint-match-status scanning';
    hudDot.className = 'hud-blink-dot cyan';
  });

  toggleMinutiaeBtn.addEventListener('click', () => {
    showMinutiae = !showMinutiae;
    toggleMinutiaeBtn.textContent = `Toggle Minutiae Points: ${showMinutiae ? 'ON' : 'OFF'}`;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;

    // 1. Draw glowing background grid
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
    ctx.lineWidth = 1;
    const gridSize = 24;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 2. Draw Fingerprint Friction Ridges (Concentric Elliptical Arches)
    const ridgeCount = 26;
    for (let i = 1; i <= ridgeCount; i++) {
      const rx = i * 4.8;
      const ry = i * 7.6;

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.8;
      ctx.shadowColor = '#0284c7';
      ctx.shadowBlur = 6;

      ctx.beginPath();
      // Use slightly distorted bezier / arcs to look like real fingerprint loops
      ctx.ellipse(centerX, centerY - 10, rx, ry, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // 3. Scan Laser Line
    if (isScanning) {
      scanProgress += 0.008;
      if (scanProgress > 1.0) {
        isScanning = false;
        statusPill.textContent = 'STATUS: MATCH VERIFIED (ID: 001)';
        statusPill.className = 'fingerprint-match-status verified';
        scoreVal.textContent = '98.9% (VERIFIED)';
        scoreVal.className = 'safe';
        hudDot.className = 'hud-blink-dot green';
      }

      const scanY = (centerY - 170) + (scanProgress * 340);

      // Glowing laser line
      const grad = ctx.createLinearGradient(centerX - 150, scanY, centerX + 150, scanY);
      grad.addColorStop(0, 'transparent');
      grad.addColorStop(0.5, '#38bdf8');
      grad.addColorStop(1, 'transparent');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 3;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.moveTo(centerX - 150, scanY);
      ctx.lineTo(centerX + 150, scanY);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Check minutiae points crossed by laser
      minutiaePoints.forEach(p => {
        const py = centerY + p.yOffset;
        if (scanY >= py) {
          p.detected = true;
        }
      });
    }

    // 4. Draw Minutiae Points
    if (showMinutiae) {
      minutiaePoints.forEach(p => {
        const px = centerX + p.xOffset;
        const py = centerY + p.yOffset;

        if (p.detected || !isScanning) {
          ctx.strokeStyle = '#f59e0b'; // Amber yellow
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(px, py, 4.5, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    animId = requestAnimationFrame(draw);
  }

  animId = requestAnimationFrame(draw);

  return {
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    }
  };
}
