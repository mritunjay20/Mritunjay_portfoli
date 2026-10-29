/**
 * GitHub Projects & Activity Component
 * Fetches real public repositories from https://api.github.com/users/mritunjay20/repos
 * with graceful fallback to confirmed projects if offline or rate-limited.
 */
export async function initGitHubSection(container) {
  const username = 'mritunjay20';

  const defaultRepos = [
    {
      name: 'smart-radar-system',
      description: 'Ultrasonic 180° scanning radar with Arduino microcontroller and Processing / Three.js display.',
      language: 'C++',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/mritunjay20'
    },
    {
      name: 'smart-agriculture-iot',
      description: 'Automated soil moisture monitoring, rain detection canopy, and irrigation relay firmware.',
      language: 'Arduino / C++',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/mritunjay20'
    },
    {
      name: 'interactive-3d-portfolio',
      description: 'Futuristic 3D developer portfolio featuring voxel avatar, celestial skill orbs, and landmark journey world.',
      language: 'JavaScript / WebGL',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/mritunjay20'
    },
    {
      name: 'embedded-sensor-prototypes',
      description: 'Collection of sensor driver routines: MQ-2 gas detection, RC522 RFID, and optical fingerprint matching.',
      language: 'C++',
      stargazers_count: 0,
      forks_count: 0,
      html_url: 'https://github.com/mritunjay20'
    }
  ];

  container.innerHTML = `
    <div class="github-profile-card">
      <div class="github-user-header">
        <div class="github-avatar-circle">
          <img src="/assets/portrait.jpg" alt="Mritunjay" onerror="this.src='/assets/about-photo.png'" />
        </div>
        <div class="github-meta">
          <h3>Mritunjay Saini</h3>
          <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer" class="github-handle">@${username} ↗</a>
          <p>Class 10 Student • Aspiring Developer • Robotics & IoT Enthusiast</p>
        </div>
        <div class="github-profile-link">
          <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer" class="btn primary small">
            View on GitHub
          </a>
        </div>
      </div>

      <div class="github-repos-grid" id="github-repos-grid">
        <div class="github-loading">Fetching repositories from GitHub API...</div>
      </div>

      <div class="github-contribution-preview">
        <div class="contrib-header">
          <span>PUBLIC ACTIVITY / COMMIT MATRIX</span>
          <span class="contrib-live-tag">GITHUB LIVE SYNC</span>
        </div>
        <div class="contrib-matrix" id="contrib-matrix"></div>
        <p class="contrib-caption">
          Displaying confirmed public developer activity for <code>${username}</code>. Source repositories update dynamically when new commits are pushed.
        </p>
      </div>
    </div>
  `;

  const reposGrid = container.querySelector('#github-repos-grid');
  const matrix = container.querySelector('#contrib-matrix');

  // Generate an authentic activity commit matrix
  await renderContributionMatrix(matrix, username);

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (res.ok) {
      const liveRepos = await res.json();
      if (Array.isArray(liveRepos) && liveRepos.length > 0) {
        renderRepos(reposGrid, liveRepos);
        return;
      }
    }
    renderRepos(reposGrid, defaultRepos);
  } catch (e) {
    console.info('Using curated GitHub repository data (API rate limit or offline):', e);
    renderRepos(reposGrid, defaultRepos);
  }
}

function renderRepos(container, repos) {
  container.innerHTML = repos.slice(0, 4).map(repo => `
    <article class="github-repo-card">
      <div class="repo-card-top">
        <span class="repo-book-icon">📖</span>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-title">
          ${repo.name} ↗
        </a>
      </div>
      <p class="repo-desc">${repo.description || 'Open source engineering prototype & code repository.'}</p>
      <div class="repo-meta">
        <span class="repo-lang"><span class="lang-dot"></span> ${repo.language || 'Code'}</span>
        <span class="repo-stars">★ ${repo.stargazers_count ?? 0}</span>
        <span class="repo-forks">⑂ ${repo.forks_count ?? 0}</span>
      </div>
    </article>
  `).join('');
}

async function renderContributionMatrix(container, username) {
  container.innerHTML = '<div class="city-loading">Loading real public contribution activity…</div>';
  try {
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
    if (!response.ok) throw new Error('Contribution API unavailable');
    const payload = await response.json();
    const days = Array.isArray(payload.contributions) ? payload.contributions : [];
    if (!days.length) throw new Error('No contribution data returned');
    const max = Math.max(1, ...days.map(day => Number(day.count) || 0));
    const recent = days.slice(-364);
    container.innerHTML = `
      <div class="contribution-city" role="img" aria-label="3D cityscape showing real GitHub contribution activity for ${username}">
        <div class="city-skyline-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
        <div class="city-grid" id="contribution-city-grid"></div>
      </div>
      <div class="city-legend"><span><i class="city-level-0"></i> 0</span><span><i class="city-level-1"></i> 1–3</span><span><i class="city-level-2"></i> 4–7</span><span><i class="city-level-3"></i> 8+</span><span class="city-source">Live public data · GitHub contributions API</span></div>`;
    const grid = container.querySelector('#contribution-city-grid');
    recent.forEach((day, index) => {
      const count = Number(day.count) || 0;
      const level = count === 0 ? 0 : count <= 3 ? 1 : count <= 7 ? 2 : 3;
      const height = count === 0 ? 5 : 12 + Math.round((count / max) * 56);
      const building = document.createElement('span');
      building.className = `city-building city-level-${level}`;
      building.style.setProperty('--building-height', `${height}px`);
      building.style.setProperty('--building-index', index % 11);
      building.title = `${day.date}: ${count} contributions`;
      building.setAttribute('aria-label', `${day.date}: ${count} contributions`);
      grid.appendChild(building);
    });
    const total = payload.total && payload.total.lastYear;
    const caption = container.closest('.github-profile-card')?.querySelector('.contrib-caption');
    if (caption) caption.textContent = `${typeof total === 'number' ? total.toLocaleString() + ' contributions in the last year' : 'Public contribution activity'} for ${username}. Building heights and lights reflect daily counts.`;
  } catch (error) {
    container.innerHTML = '<p class="city-loading">Live contribution data could not load right now. Open GitHub to view the verified contribution graph.</p><a class="btn ghost" href="https://github.com/' + username + '?tab=overview&from=2025-10-01&to=2026-10-01" target="_blank" rel="noopener noreferrer">View GitHub contributions ↗</a>';
  }
}
