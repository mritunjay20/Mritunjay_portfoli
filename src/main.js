import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { projects } from './data/projects.js';
import { skills } from './data/skills.js';
import { milestones } from './data/milestones.js';
import { capabilities } from './data/capabilities.js';
import { socials } from './data/socials.js';

import { initAvatarScene } from './components/AvatarScene.js';
import { initBrainVisual } from './components/BrainVisual.js';
import { initSkillsScene } from './components/SkillsScene.js';
import { initJourneyWorld } from './components/JourneyWorld.js';
import { openProjectModal } from './components/ProjectModal.js';
import { initGitHubSection } from './components/GitHubSection.js';
import { initContactForm } from './components/ContactForm.js';
import { initNavigation } from './components/Navigation.js';

gsap.registerPlugin(ScrollTrigger);

// Helper selectors
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

// Footer current year
const yearEl = $('#current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ==========================================================================
   1. RENDER DYNAMIC CONTENT
   ========================================================================== */

// 1. Projects Grid
function renderProjects() {
  const grid = $('#projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(p => `
    <article class="project-card reveal" data-project-id="${p.id}" tabindex="0" role="button" aria-label="Open ${p.title} project details">
      <div class="project-card-header">
        <span>${p.number} / ${p.type}</span>
        <span class="project-status-pill">${p.status}</span>
      </div>

      <div class="project-art-stage">
        <div class="project-art-grid"></div>
        <span class="project-symbol" style="color: ${p.accentColor};">${p.symbol}</span>
      </div>

      <div class="project-card-body">
        <h3>
          <span>${p.title}</span>
          <span class="project-arrow">↗</span>
        </h3>
        <p>${p.shortDesc}</p>
        <div class="project-tag-row">
          ${p.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  $$('.project-card').forEach(card => {
    const proj = projects.find(x => x.id === card.dataset.projectId);
    card.addEventListener('click', () => openProjectModal(proj));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(proj);
      }
    });
  });
}

// 2. Capabilities Grid
function renderCapabilities() {
  const grid = $('#capabilities-grid');
  if (!grid) return;

  grid.innerHTML = capabilities.map(c => `
    <article class="capability-card reveal">
      <span class="cap-number">${c.number}</span>
      <span class="cap-icon">${c.icon}</span>
      <h3>${c.title}</h3>
      <span class="cap-tagline">${c.tagline}</span>
      <p>${c.description}</p>
      <ul class="cap-highlights">
        ${c.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

// 3. Skills Tags
function renderSkillsTags() {
  const container = $('#skills-tags-container');
  if (!container) return;

  container.innerHTML = skills.map(s => `
    <button class="skill-tag-pill" data-skill-id="${s.id}" title="Click to view ${s.name} notes">
      <span class="lang-dot" style="background: ${s.accent};"></span>
      <span>${s.name}</span>
    </button>
  `).join('');

  $$('.skill-tag-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const s = skills.find(x => x.id === pill.dataset.skillId);
      openSkillModal(s);
    });
  });
}

function openSkillModal(skill) {
  if (!skill) return;
  const modal = $('#skill-detail-modal');
  if (!modal) return;

  modal.innerHTML = `
    <div class="detail-card">
      <button class="detail-close-btn" id="skill-close-btn" aria-label="Close modal">✕</button>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
        <span class="lang-dot" style="width:12px;height:12px;background:${skill.accent};"></span>
        <h3 style="font-size:20px;color:#fff;">${skill.name}</h3>
        <span style="font-family:var(--font-mono);font-size:10px;color:var(--cyan-accent);background:rgba(56,189,248,0.12);padding:2px 8px;border-radius:99px;">${skill.category}</span>
      </div>
      <p style="font-size:13px;line-height:1.8;color:var(--text-muted);margin-bottom:14px;">${skill.description}</p>
      <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);padding:14px;margin-bottom:18px;">
        <strong style="display:block;font-size:12px;color:#fff;margin-bottom:4px;">How Mritunjay applies this:</strong>
        <p style="font-size:12px;color:var(--text-dim);margin:0;line-height:1.6;">${skill.experience}</p>
      </div>
      <button class="btn primary small" id="skill-ok-btn" style="width:100%;">Close Details</button>
    </div>
  `;

  modal.classList.add('open');
  const close = () => modal.classList.remove('open');
  modal.querySelector('#skill-close-btn').onclick = close;
  modal.querySelector('#skill-ok-btn').onclick = close;
  modal.onclick = (e) => { if (e.target === modal) close(); };
}

// 4. Milestones List
function renderMilestones() {
  const list = $('#milestones-list');
  if (!list) return;

  list.innerHTML = milestones.map((m, idx) => `
    <article class="milestone-item ${m.done ? 'done' : ''}" data-milestone-id="${m.id}" tabindex="0" role="button">
      <div class="milestone-marker">
        ${m.done ? '✓' : String(idx + 1).padStart(2, '0')}
      </div>
      <div class="milestone-body">
        <span class="milestone-landmark-tag">📍 Landmark: ${m.landmark}</span>
        <h4>${m.title}</h4>
        <p>${m.description}</p>
      </div>
    </article>
  `).join('');

  $$('.milestone-item').forEach(item => {
    item.addEventListener('click', () => {
      const m = milestones.find(x => x.id === item.dataset.milestoneId);
      openMilestoneModal(m);
    });
  });
}

function openMilestoneModal(m) {
  if (!m) return;
  const modal = $('#milestone-detail-modal');
  if (!modal) return;

  modal.innerHTML = `
    <div class="detail-card">
      <button class="detail-close-btn" id="milestone-close-btn" aria-label="Close modal">✕</button>
      <span style="font-family:var(--font-mono);font-size:10px;color:var(--cyan-accent);letter-spacing:0.14em;">MILESTONE STATION • ${m.category.toUpperCase()}</span>
      <h3 style="font-size:22px;color:#fff;margin:6px 0 10px;">${m.title}</h3>
      <div style="background:rgba(56,189,248,0.08);border:1px solid rgba(56,189,248,0.25);border-radius:var(--radius-sm);padding:10px 14px;margin-bottom:16px;">
        <strong style="color:var(--cyan-accent);font-size:12px;">3D World Landmark: ${m.landmark}</strong>
        <p style="font-size:11px;color:var(--text-muted);margin:2px 0 0;">${m.landmarkDescription}</p>
      </div>
      <p style="font-size:13px;line-height:1.8;color:var(--text-muted);margin-bottom:16px;">${m.description}</p>
      <strong style="font-size:12px;color:#fff;display:block;margin-bottom:8px;">Core Engineering Learnings:</strong>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:12px;color:var(--text-muted);margin-bottom:20px;">
        ${m.learnings.map(l => `<li style="display:flex;gap:6px;"><span style="color:var(--emerald-accent);">▹</span> ${l}</li>`).join('')}
      </ul>
      <button class="btn primary small" id="milestone-ok-btn" style="width:100%;">Close Milestone</button>
    </div>
  `;

  modal.classList.add('open');
  const close = () => modal.classList.remove('open');
  modal.querySelector('#milestone-close-btn').onclick = close;
  modal.querySelector('#milestone-ok-btn').onclick = close;
  modal.onclick = (e) => { if (e.target === modal) close(); };
}

// 5. Social Cards
function renderSocials() {
  const grid = $('#socials-grid');
  if (!grid) return;

  grid.innerHTML = socials.map(s => `
    <a class="social-card" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${s.name} profile">
      <div class="social-symbol-box" style="border-color: ${s.iconColor}33; color: ${s.iconColor};">
        ${s.symbol}
      </div>
      <div class="social-meta-info">
        <strong>${s.name} ${s.isVerified ? '✓' : ''}</strong>
        <small>${s.handle}</small>
        <em>${s.description}</em>
      </div>
      <span class="social-arrow">↗</span>
    </a>
  `).join('');
}

/* ==========================================================================
   2. INITIALIZE INTERACTIVE SCENES & HOOKS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all dynamic data templates
  renderProjects();
  renderCapabilities();
  renderSkillsTags();
  renderMilestones();
  renderSocials();

  // 2. Navigation component
  initNavigation();

  // 3. 3D Voxel Avatar
  const avatarCanvas = $('#avatar-canvas');
  const avatarTooltip = $('#avatar-tooltip');
  let avatarInstance = null;

  if (avatarCanvas) {
    try {
      avatarInstance = initAvatarScene(avatarCanvas, avatarTooltip);

      // Connect Hotspot Dock Buttons
      $$('.hotspot-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.dataset.hotspot;
          avatarInstance.handleAction(action);
        });
      });

      // Outfit Switcher Buttons
      const suitBtn = $('#outfit-suit-btn');
      const hoodieBtn = $('#outfit-hoodie-btn');

      if (suitBtn && hoodieBtn) {
        suitBtn.addEventListener('click', () => {
          suitBtn.classList.add('active');
          hoodieBtn.classList.remove('active');
          avatarInstance.setOutfit('suit');
        });

        hoodieBtn.addEventListener('click', () => {
          hoodieBtn.classList.add('active');
          suitBtn.classList.remove('active');
          avatarInstance.setOutfit('hoodie');
        });
      }
    } catch (err) {
      console.warn('Avatar 3D canvas could not initialize:', err);
    }
  }

  // 4. Brain Neural Core Visualizer
  const brainContainer = $('#brain-visual-container');
  if (brainContainer) {
    try {
      initBrainVisual(brainContainer);
    } catch (err) {
      console.warn('Brain canvas could not initialize:', err);
    }
  }

  // 5. 3D Celestial Skills Constellation
  const skillsCanvas = $('#skills-canvas');
  const skillsTooltip = $('#skills-tooltip');
  if (skillsCanvas) {
    try {
      initSkillsScene(skillsCanvas, skillsTooltip, (selectedSkill) => {
        openSkillModal(selectedSkill);
      });
    } catch (err) {
      console.warn('Skills 3D canvas could not initialize:', err);
    }
  }

  // 6. 3D Miniature Journey Globe
  const worldCanvas = $('#world-canvas');
  if (worldCanvas) {
    try {
      const worldInstance = initJourneyWorld(worldCanvas, (milestone) => {
        openMilestoneModal(milestone);
      });

      $('#world-zoom-in')?.addEventListener('click', () => worldInstance.zoomIn());
      $('#world-zoom-out')?.addEventListener('click', () => worldInstance.zoomOut());
      $('#world-reset')?.addEventListener('click', () => worldInstance.resetView());
    } catch (err) {
      console.warn('World 3D canvas could not initialize:', err);
    }
  }

  // 7. GitHub Live Activity Section
  const githubContainer = $('#github-section-container');
  if (githubContainer) {
    initGitHubSection(githubContainer);
  }

  // 8. Contact Form
  const contactContainer = $('#contact-form-container');
  if (contactContainer) {
    initContactForm(contactContainer);
  }

  // 9. GSAP Smooth Reveal Animations
  const reveals = $$('.reveal');
  reveals.forEach(el => {
    gsap.fromTo(el,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true
        }
      }
    );
  });
});

/* ==========================================================================
   3. TAB VISIBILITY OPTIMIZATION (Prompt Section 16 Hardware Performance)
   ========================================================================== */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // When user leaves tab, RAF loops naturally sleep to conserve battery and CPU
    document.title = '💤 Mritunjay Saini — Developer & Maker';
  } else {
    document.title = 'Mritunjay Saini — 3D Developer & Robotics Portfolio';
  }
});
