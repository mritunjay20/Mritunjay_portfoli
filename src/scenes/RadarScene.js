/**
 * Interactive Smart Radar System Scene (Canvas 2D HUD)
 * Replicates a scanning sonar/radar display with servo sweep,
 * range rings, coordinate grid, target blips, and telemetry readouts.
 */
export function initRadarScene(container) {

  const sceneStyle = document.createElement('style');
  sceneStyle.textContent = `.radar-container {
  --scene-accent: #67e8f9;
  --scene-accent-rgb: 103, 232, 249;
  color: #e5edf8;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}.radar-container *, .radar-container *::before, .radar-container *::after { box-sizing: border-box; }.radar-container [class$="-hud-header"], .radar-container .radar-hud-bar, .radar-container .face-hud-header {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; padding: 14px 16px;
  border: 1px solid rgba(var(--scene-accent-rgb), .22);
  border-radius: 16px 16px 0 0;
  background: linear-gradient(115deg, rgba(15, 25, 43, .96), rgba(7, 14, 27, .88));
  box-shadow: inset 0 1px rgba(255,255,255,.04);
}.radar-container [class$="-badge"], .radar-container .radar-status-badge, .radar-container .face-badge {
  display: inline-flex; align-items: center; gap: 9px;
  color: #b8c7dc; font: 600 10px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .09em; text-transform: uppercase;
}.radar-container .hud-blink-dot {
  display: inline-block; width: 7px; height: 7px; flex: 0 0 7px; border-radius: 50%;
  background: var(--scene-accent); box-shadow: 0 0 12px currentColor;
}.radar-container .hud-blink-dot.cyan { color: #67e8f9; background: #67e8f9; }.radar-container .hud-blink-dot.purple { color: #c4b5fd; background: #c4b5fd; }.radar-container .hud-blink-dot.green { color: #86efac; background: #86efac; }.radar-container .hud-blink-dot.orange { color: #fdba74; background: #fdba74; }.radar-container [class$="-viewport-wrapper"], .radar-container .radar-display-wrapper, .radar-container .voice-visualizer-wrapper {
  position: relative; isolation: isolate; overflow: hidden; min-height: 280px;
  border: 1px solid rgba(var(--scene-accent-rgb), .19);
  border-top: 0; border-bottom: 0;
  background:
    radial-gradient(ellipse at 50% 35%, rgba(var(--scene-accent-rgb), .09), transparent 58%),
    linear-gradient(135deg, #080f1d, #030711 70%);
}.radar-container [class$="-viewport-wrapper"]::before, .radar-container .radar-display-wrapper::before, .radar-container .voice-visualizer-wrapper::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.045) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.8), transparent 96%);
}.radar-container [class$="-viewport-wrapper"] canvas, .radar-container #radar-canvas, .radar-container #voice-canvas {
  position: relative; z-index: 1; display: block; width: 100%; max-width: 100%;
}.radar-container [class$="-telemetry-hud"], .radar-container .radar-overlay-hud, .radar-container .voice-transcript-overlay {
  position: absolute; z-index: 2; inset: 12px; pointer-events: none;
}.radar-container [class$="-telemetry-card"], .radar-container [class$="-metric-card"], .radar-container .face-telemetry-hud, .radar-container .nfc-payload-card, .radar-container .voice-transcript-box, .radar-container .voice-response-box, .radar-container .hud-telemetry-corner {
  border: 1px solid rgba(var(--scene-accent-rgb), .2);
  border-radius: 12px; padding: 12px 14px;
  background: rgba(5, 12, 25, .78); backdrop-filter: blur(12px);
  box-shadow: 0 8px 28px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.035);
}.radar-container [class$="-telemetry-card"] span, .radar-container [class$="-metric-card"] span, .radar-container .hud-telemetry-corner span, .radar-container .face-hud-row span, .radar-container .nfc-payload-card span {
  color: #8fa3bd; font: 500 10px/1.55 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .045em;
}.radar-container [class$="-telemetry-card"] strong, .radar-container [class$="-metric-card"] strong, .radar-container .face-hud-row strong, .radar-container .nfc-payload-card strong {
  color: #e6f4ff; font-size: 12px; font-weight: 650;
}.radar-container [class$="-controls-dock"], .radar-container [class$="-slider-dock"], .radar-container .radar-control-panel, .radar-container .radar-controls-dock, .radar-container .voice-command-dock {
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  padding: 14px 16px; border: 1px solid rgba(var(--scene-accent-rgb), .18);
  border-radius: 0 0 16px 16px; background: rgba(8, 15, 29, .96);
}.radar-container .hud-pill-btn, .radar-container .btn, .radar-container .command-chip, .radar-container button {
  font: inherit; cursor: pointer; transition: transform .18s ease, border-color .18s ease,
    background .18s ease, box-shadow .18s ease;
}.radar-container .hud-pill-btn, .radar-container .command-chip {
  border: 1px solid rgba(var(--scene-accent-rgb), .25); border-radius: 999px;
  padding: 8px 12px; color: #c9d8ea; background: rgba(16, 30, 49, .8);
  font-size: 11px; font-weight: 650;
}.radar-container .btn.primary, .radar-container button.primary {
  border: 1px solid rgba(var(--scene-accent-rgb), .45); border-radius: 9px;
  padding: 9px 13px; color: #06121d;
  background: linear-gradient(135deg, var(--scene-accent), #a5f3fc);
  box-shadow: 0 4px 16px rgba(var(--scene-accent-rgb), .12);
  font-size: 11px; font-weight: 750;
}.radar-container .btn.ghost, .radar-container button.ghost {
  border: 1px solid rgba(148,163,184,.24); border-radius: 9px;
  padding: 9px 13px; color: #c4d0e0; background: rgba(30,41,59,.55); font-size: 11px;
}.radar-container .hud-pill-btn:hover, .radar-container .command-chip:hover, .radar-container .btn:hover, .radar-container button:hover {
  transform: translateY(-1px); border-color: rgba(var(--scene-accent-rgb), .65);
  box-shadow: 0 5px 18px rgba(var(--scene-accent-rgb), .1);
}.radar-container button:focus-visible, .radar-container input:focus-visible {
  outline: 2px solid var(--scene-accent); outline-offset: 3px;
}.radar-container .safe, .radar-container .indicator-safe { color: #86efac !important; }.radar-container .badge-warning, .radar-container .indicator-warn { color: #fcd34d !important; }.radar-container .indicator-hazard { color: #fca5a5 !important; }.radar-container p, .radar-container .dock-hint, .radar-container .nfc-disclaimer, .radar-container .helmet-disclaimer, .radar-container .fp-disclaimer, .radar-container .voice-privacy-notice {
  color: #9aabc2; font-size: 11px; line-height: 1.7;
}.radar-container input[type="range"] { accent-color: var(--scene-accent); width: min(100%, 320px); cursor: pointer; }.radar-container label { color: #b8c7dc; font-size: 11px; }@media (max-width: 600px){.radar-container [class$="-hud-header"], .radar-container .radar-hud-bar, .radar-container .face-hud-header { align-items: flex-start; padding: 12px; }.radar-container [class$="-viewport-wrapper"], .radar-container .radar-display-wrapper, .radar-container .voice-visualizer-wrapper { min-height: 240px; }.radar-container [class$="-controls-dock"], .radar-container [class$="-slider-dock"], .radar-container .radar-control-panel, .radar-container .voice-command-dock { padding: 12px; }.radar-container [class$="-telemetry-hud"] { inset: 8px; }.radar-container [class$="-badge"], .radar-container .radar-status-badge, .radar-container .face-badge { font-size: 9px; }
}.radar-container .radar-display-wrapper { min-height:340px; }.radar-container #radar-canvas { height:340px; }.radar-container .radar-overlay-hud { display:grid; grid-template-columns:1fr 1fr; grid-template-rows:1fr 1fr; }.radar-container .hud-telemetry-corner { display:flex; flex-direction:column; gap:4px; width:max-content; max-width:100%; padding:9px 11px; }.radar-container .hud-telemetry-corner.top-right, .radar-container .hud-telemetry-corner.bottom-right { justify-self:end; text-align:right; }.radar-container .hud-telemetry-corner.bottom-left, .radar-container .hud-telemetry-corner.bottom-right { align-self:end; }.radar-container .radar-control-panel { justify-content:space-between; }.radar-container .radar-slider-group, .radar-container .radar-targets-list { display:flex; flex-wrap:wrap; align-items:center; gap:9px; }.radar-container .target-tag { padding:5px 8px; border:1px solid rgba(var(--scene-accent-rgb),.22); border-radius:7px; color:#bbf7d0; background:rgba(20,83,45,.18); font:10px ui-monospace,monospace; }
`;
  if (!container.querySelector('style[data-scene-style="RadarScene.js"]')) {
    sceneStyle.setAttribute('data-scene-style', 'RadarScene.js');
    container.appendChild(sceneStyle);
  }

  container.innerHTML = `
    <div class="radar-container">
      <div class="radar-hud-bar">
        <div class="radar-status-badge">
          <span class="hud-blink-dot green"></span>
          <span id="radar-mode-text">RADAR SWEEP ACTIVE • 180° SERVO</span>
        </div>
        <div class="radar-hud-controls">
          <button class="hud-pill-btn" id="radar-daynight-toggle">Day / Night</button>
          <button class="hud-pill-btn active" id="radar-airland-toggle">Air / Ground</button>
          <button class="hud-pill-btn" id="radar-speed-toggle">Sweep: Normal</button>
        </div>
      </div>

      <div class="radar-display-wrapper">
        <canvas id="radar-canvas"></canvas>
        <div class="radar-overlay-hud">
          <div class="hud-telemetry-corner top-left">
            <span>SYS: HC-SR04 SONAR</span>
            <span>FREQ: 40.0 kHz</span>
            <span>MAX RNG: 40.0 cm</span>
          </div>
          <div class="hud-telemetry-corner top-right">
            <span>ANGLE: <strong id="hud-angle-val">90°</strong></span>
            <span>RANGE: <strong id="hud-dist-val">-- cm</strong></span>
            <span>TARGET: <strong id="hud-target-val">SEARCHING</strong></span>
          </div>
          <div class="hud-telemetry-corner bottom-left">
            <span>FRAME: LIVE SERIAL EMULATION</span>
            <span>BAUD: 9600 BPS</span>
          </div>
          <div class="hud-telemetry-corner bottom-right">
            <span>FOV: 0° — 180°</span>
            <span>ECHO LATENCY: 2.3 ms</span>
          </div>
        </div>
      </div>

      <div class="radar-control-panel">
        <div class="radar-slider-group">
          <label for="radar-manual-angle">Simulate Servo Angle (0° - 180°):</label>
          <input type="range" id="radar-manual-angle" min="0" max="180" value="90" />
        </div>
        <div class="radar-targets-list">
          <span>Active Targets:</span>
          <span class="target-tag">Target A: 48° @ 18cm</span>
          <span class="target-tag">Target B: 112° @ 29cm</span>
          <span class="target-tag">Target C: 154° @ 12cm</span>
        </div>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#radar-canvas');
  const ctx = canvas.getContext('2d');
  const hudAngle = container.querySelector('#hud-angle-val');
  const hudDist = container.querySelector('#hud-dist-val');
  const hudTarget = container.querySelector('#hud-target-val');
  const angleSlider = container.querySelector('#radar-manual-angle');
  const dayNightBtn = container.querySelector('#radar-daynight-toggle');
  const speedBtn = container.querySelector('#radar-speed-toggle');

  let width = 0, height = 0;
  let angle = 90;
  let direction = 1;
  let sweepSpeed = 0.8;
  let isNightMode = true;
  let isManualOverride = false;
  let animId = null;

  // Predefined simulated obstacle targets: [angleDeg, distanceCm]
  const targets = [
    { angle: 48, dist: 18, label: 'TGT-1', lastHit: 0 },
    { angle: 112, dist: 29, label: 'TGT-2', lastHit: 0 },
    { angle: 154, dist: 12, label: 'TGT-3', lastHit: 0 }
  ];

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = Math.max(340, rect.height || 380);
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener('resize', resize);

  dayNightBtn.addEventListener('click', () => {
    isNightMode = !isNightMode;
    dayNightBtn.classList.toggle('active', !isNightMode);
  });

  speedBtn.addEventListener('click', () => {
    if (sweepSpeed === 0.8) {
      sweepSpeed = 1.6;
      speedBtn.textContent = 'Sweep: Fast (2x)';
    } else {
      sweepSpeed = 0.8;
      speedBtn.textContent = 'Sweep: Normal (1x)';
    }
  });

  angleSlider.addEventListener('input', (e) => {
    isManualOverride = true;
    angle = parseFloat(e.target.value);
    setTimeout(() => { isManualOverride = false; }, 3000);
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height * 0.88;
    const maxRadius = Math.min(width * 0.45, height * 0.78);

    const primaryColor = isNightMode ? '#10b981' : '#38bdf8';
    const dimColor = isNightMode ? 'rgba(16, 185, 129, 0.18)' : 'rgba(56, 189, 248, 0.18)';
    const textCol = isNightMode ? '#34d399' : '#7dd3fc';

    // 1. Background glow
    const bgGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, maxRadius);
    bgGrad.addColorStop(0, isNightMode ? 'rgba(6, 78, 59, 0.35)' : 'rgba(12, 74, 110, 0.35)');
    bgGrad.addColorStop(0.85, 'rgba(4, 12, 22, 0.6)');
    bgGrad.addColorStop(1, 'rgba(2, 6, 12, 0.9)');
    ctx.fillStyle = bgGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, maxRadius, Math.PI, 0, false);
    ctx.closePath();
    ctx.fill();

    // 2. Concentric Range Rings (10cm, 20cm, 30cm, 40cm)
    const ringSteps = [0.25, 0.5, 0.75, 1.0];
    const ringDistances = ['10 cm', '20 cm', '30 cm', '40 cm'];

    ringSteps.forEach((step, idx) => {
      const r = maxRadius * step;
      ctx.strokeStyle = dimColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r, Math.PI, 0, false);
      ctx.stroke();

      // Range text labels
      ctx.fillStyle = textCol;
      ctx.font = '10px "DM Mono", monospace';
      ctx.fillText(ringDistances[idx], centerX + 8, centerY - r + 12);
    });

    // 3. Radial Angle Ray Lines (every 30°)
    for (let deg = 0; deg <= 180; deg += 30) {
      const rad = (180 - deg) * (Math.PI / 180);
      const x = centerX + Math.cos(rad) * maxRadius;
      const y = centerY - Math.sin(rad) * maxRadius;

      ctx.strokeStyle = deg === 90 ? 'rgba(255, 255, 255, 0.25)' : dimColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Degree label
      const lx = centerX + Math.cos(rad) * (maxRadius + 14);
      const ly = centerY - Math.sin(rad) * (maxRadius + 14);
      ctx.fillStyle = textCol;
      ctx.font = '9px "DM Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${deg}°`, lx, ly + 3);
    }

    // 4. Update Sweep Angle
    if (!isManualOverride) {
      angle += direction * sweepSpeed;
      if (angle >= 180) {
        angle = 180;
        direction = -1;
      } else if (angle <= 0) {
        angle = 0;
        direction = 1;
      }
      angleSlider.value = Math.round(angle);
    }

    hudAngle.textContent = `${Math.round(angle)}°`;

    // 5. Draw Target Blips and calculate detection
    let closestTarget = null;
    let closestDist = 999;
    const now = performance.now();

    targets.forEach(tgt => {
      const angleDiff = Math.abs(angle - tgt.angle);
      if (angleDiff < 4) {
        tgt.lastHit = now;
      }

      const timeSinceHit = now - tgt.lastHit;
      if (timeSinceHit < 2500) {
        const opacity = Math.max(0, 1 - (timeSinceHit / 2500));
        const rad = (180 - tgt.angle) * (Math.PI / 180);
        const r = (tgt.dist / 40) * maxRadius;
        const tx = centerX + Math.cos(rad) * r;
        const ty = centerY - Math.sin(rad) * r;

        // Glowing blip
        ctx.fillStyle = `rgba(239, 68, 68, ${opacity})`;
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(tx, ty, 5, 0, Math.PI * 2);
        ctx.fill();

        // Expanding alert ring
        const ringRadius = 5 + (timeSinceHit * 0.015);
        ctx.strokeStyle = `rgba(239, 68, 68, ${opacity * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(tx, ty, ringRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.font = '9px "DM Mono", monospace';
        ctx.fillText(`${tgt.label} (${tgt.dist}cm)`, tx + 8, ty - 6);

        if (tgt.dist < closestDist) {
          closestDist = tgt.dist;
          closestTarget = tgt;
        }
      }
    });

    if (closestTarget) {
      hudDist.textContent = `${closestDist.toFixed(1)} cm`;
      hudTarget.textContent = `${closestTarget.label} @ ${closestTarget.angle}°`;
      hudTarget.style.color = '#ef4444';
    } else {
      hudDist.textContent = '-- cm';
      hudTarget.textContent = 'SCANNING...';
      hudTarget.style.color = textCol;
    }

    // 6. Draw Sweep Sector & Line
    const sweepRad = (180 - angle) * (Math.PI / 180);
    const sweepX = centerX + Math.cos(sweepRad) * maxRadius;
    const sweepY = centerY - Math.sin(sweepRad) * maxRadius;

    // Glowing sweep line
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = 2.5;
    ctx.shadowColor = primaryColor;
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(sweepX, sweepY);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Soft fading sweep wedge trail
    const trailSpan = direction > 0 ? 0.22 : -0.22;
    const trailGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, maxRadius);
    trailGrad.addColorStop(0, primaryColor);
    trailGrad.addColorStop(1, 'transparent');

    ctx.fillStyle = isNightMode ? 'rgba(16, 185, 129, 0.09)' : 'rgba(56, 189, 248, 0.09)';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, maxRadius, sweepRad + trailSpan, sweepRad, direction < 0);
    ctx.closePath();
    ctx.fill();

    // Pivot Origin Circle
    ctx.fillStyle = primaryColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
    ctx.fill();

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
