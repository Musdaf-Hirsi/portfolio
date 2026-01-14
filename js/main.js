// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', async () => {
  // Load projects data
  const response = await fetch('data/projects.json');
  const data = await response.json();
  
  // Render featured projects
  renderFeaturedProjects(data.featured);
  
  // Render all projects
  renderAllProjects([...data.featured, ...data.other]);
  
  // Setup filter buttons
  setupFilters([...data.featured, ...data.other]);
  
  // Smooth scroll for nav links
  setupSmoothScroll();
});

function renderFeaturedProjects(projects) {
  const container = document.getElementById('featured-projects');
  container.innerHTML = projects.map(project => createProjectCard(project, true)).join('');
}

function renderAllProjects(projects) {
  const container = document.getElementById('all-projects');
  container.innerHTML = projects.map(project => createProjectCard(project, false)).join('');
}

function createProjectCard(project, isFeatured) {
  const liveLink = project.liveDemo 
    ? `<a href="${project.liveDemo}" target="_blank" rel="noopener" title="Live Demo">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
       </a>`
    : '';

  const skillsList = project.skills
    .map(skill => `<li>${skill}</li>`)
    .join('');

  const tagsList = project.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join('');

  return `
    <article class="project-card ${isFeatured ? 'featured' : ''}" data-tags="${project.tags.join(',').toLowerCase()}">
      <div class="project-header">
        <h3>${project.name}</h3>
        <div class="project-links">
          <a href="${project.repoUrl}" target="_blank" rel="noopener" title="GitHub Repository">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          ${liveLink}
        </div>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">${tagsList}</div>
      <ul class="project-skills">${skillsList}</ul>
    </article>
  `;
}

function setupFilters(projects) {
  // Collect all unique tags
  const allTags = new Set();
  projects.forEach(project => {
    project.tags.forEach(tag => allTags.add(tag));
  });

  const container = document.getElementById('filter-buttons');
  
  // Create filter buttons
  const buttons = ['All', ...Array.from(allTags).sort()];
  container.innerHTML = buttons.map(tag => 
    `<button class="filter-btn ${tag === 'All' ? 'active' : ''}" data-filter="${tag.toLowerCase()}">${tag}</button>`
  ).join('');

  // Add click handlers
  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter projects
      const filter = btn.dataset.filter;
      document.querySelectorAll('#all-projects .project-card').forEach(card => {
        if (filter === 'all' || card.dataset.tags.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
