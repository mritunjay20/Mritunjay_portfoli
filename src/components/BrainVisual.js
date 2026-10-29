/**
 * Interactive Neural Core Brain Visualizer (Canvas 2D)
 * Procedural neural network with pulsing synapses, dynamic axon fibers,
 * signal propagation pulses, and interactive cursor attraction.
 */
export function initBrainVisual(container) {
  container.innerHTML = `
    <div class="brain-visual-card">
      <div class="brain-canvas-wrapper">
        <canvas id="brain-core-canvas"></canvas>
        <div class="brain-hud-overlay">
          <div class="brain-status">
            <span class="hud-blink-dot purple"></span>
            <span>NEURAL CORE • LOGIC & PROBLEM SOLVING</span>
          </div>
          <span class="brain-node-counter">64 SYNAPTIC NODES ACTIVE</span>
        </div>
      </div>
      <div class="brain-info-dock">
        <h4>Curiosity Driven Problem-Solving</h4>
        <p>Like a neural network forming stronger connections through iterative learning, each robotics prototype and software bug strengthens my engineering intuition.</p>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#brain-core-canvas');
  const ctx = canvas.getContext('2d');

  let width = 0, height = 0;
  let animId = null;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = Math.max(240, rect.height || 260);
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener('resize', resize);

  // Generate 2 cerebral hemispheres of nodes
  const nodeCount = 56;
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    const isLeft = i < nodeCount / 2;
    const sideSign = isLeft ? -1 : 1;
    // Brain-like lobe distribution
    const u = Math.random();
    const angle = Math.random() * Math.PI * 2;
    const r = Math.sqrt(u) * 65;

    const baseX = (sideSign * 42) + Math.cos(angle) * r;
    const baseY = Math.sin(angle) * (r * 0.85);

    nodes.push({
      baseX,
      baseY,
      x: baseX,
      y: baseY,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.2 + 1.8,
      pulsePhase: Math.random() * Math.PI * 2,
      color: isLeft ? '#818cf8' : '#c084fc'
    });
  }

  // Signal action potential pulses traveling along axons
  const pulses = [];
  function emitPulse() {
    if (nodes.length < 2) return;
    const a = Math.floor(Math.random() * nodes.length);
    const b = Math.floor(Math.random() * nodes.length);
    if (a !== b) {
      pulses.push({ from: a, to: b, progress: 0, speed: Math.random() * 0.02 + 0.015 });
    }
  }

  setInterval(emitPulse, 350);

  let mouseX = 0, mouseY = 0, isHovered = false;
  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left - width / 2;
    mouseY = e.clientY - rect.top - height / 2;
    isHovered = true;
  });

  canvas.addEventListener('pointerleave', () => { isHovered = false; });

  let time = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);
    time += 0.03;

    const cx = width / 2;
    const cy = height / 2;

    // 1. Update node physics & cursor attraction
    nodes.forEach(node => {
      node.pulsePhase += 0.05;
      node.x += node.vx;
      node.y += node.vy;

      // Bounce back towards base
      node.vx += (node.baseX - node.x) * 0.03;
      node.vy += (node.baseY - node.y) * 0.03;

      if (isHovered) {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 90 && dist > 2) {
          node.vx += (dx / dist) * 0.35;
          node.vy += (dy / dist) * 0.35;
        }
      }
    });

    // 2. Draw Synaptic Axon Connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const na = nodes[i];
        const nb = nodes[j];
        const dist = Math.hypot(na.x - nb.x, na.y - nb.y);

        if (dist < 46) {
          const alpha = (1 - dist / 46) * 0.45;
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(cx + na.x, cy + na.y);
          ctx.lineTo(cx + nb.x, cy + nb.y);
          ctx.stroke();
        }
      }
    }

    // 3. Draw Traveling Action Potential Pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.progress += p.speed;
      if (p.progress >= 1.0) {
        pulses.splice(i, 1);
        continue;
      }

      const na = nodes[p.from];
      const nb = nodes[p.to];
      const px = cx + na.x + (nb.x - na.x) * p.progress;
      const py = cy + na.y + (nb.y - na.y) * p.progress;

      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(px, py, 2.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // 4. Draw Synaptic Nodes
    nodes.forEach(node => {
      const glow = Math.sin(node.pulsePhase) * 0.5 + 0.5;
      ctx.fillStyle = node.color;
      ctx.shadowColor = node.color;
      ctx.shadowBlur = 8 * glow + 2;

      ctx.beginPath();
      ctx.arc(cx + node.x, cy + node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });

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
