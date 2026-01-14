# Cybersecurity Portfolio - Musdaf Hirsi

A modern, responsive portfolio website showcasing cybersecurity projects and skills.

**Live Demo:** (will be available after deployment)

## Features

- Dark cybersecurity-themed design
- Responsive layout (mobile-friendly)
- Dynamic project loading from JSON
- Tag-based filtering for projects
- Smooth animations and hover effects
- No frameworks required - pure HTML/CSS/JS

## Project Structure

```
portfolio-site/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Project loading and filtering
├── data/
│   └── projects.json   # Project data
└── README.md           # This file
```

## Local Development

1. Clone the repository
2. Open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

## Deployment to GitHub Pages

### Option 1: Deploy from this repo

```bash
# 1. Create a new repository on GitHub named: Musdaf-Hirsi.github.io
#    (This creates your personal GitHub Pages site)

# 2. Initialize git and push
cd ~/cyber/portfolio-site
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/Musdaf-Hirsi/Musdaf-Hirsi.github.io.git
git push -u origin main

# 3. Enable GitHub Pages
#    Go to: Settings > Pages > Source: Deploy from branch > Branch: main > Save

# 4. Your site will be live at:
#    https://musdaf-hirsi.github.io
```

### Option 2: Deploy to a project repo (e.g., "portfolio")

```bash
# 1. Create a new repo on GitHub named "portfolio"

# 2. Initialize git and push
cd ~/cyber/portfolio-site
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/Musdaf-Hirsi/portfolio.git
git push -u origin main

# 3. Enable GitHub Pages
#    Go to: Settings > Pages > Source: Deploy from branch > Branch: main > Save

# 4. Your site will be live at:
#    https://musdaf-hirsi.github.io/portfolio
```

## Customization

### Adding Projects

Edit `data/projects.json` to add or modify projects:

```json
{
  "id": "project-id",
  "name": "Project Name",
  "repo": "github-repo-name",
  "repoUrl": "https://github.com/Musdaf-Hirsi/repo-name",
  "liveDemo": "https://demo-url.com",  // or null
  "description": "Short description...",
  "tags": ["Python", "Security", "Web"],
  "skills": [
    "Skill point 1",
    "Skill point 2"
  ]
}
```

### Adding Your Email

In `index.html`, find the email contact link and update:

```html
<a href="mailto:your.email@example.com" class="contact-link">
```

### Adding Your Resume

1. Add a `resume.pdf` file to the root folder
2. Update the Resume button href in `index.html`:

```html
<a href="resume.pdf" target="_blank" class="btn btn-secondary">
```

## Technologies Used

- HTML5 semantic markup
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, JetBrains Mono)

## License

MIT License - Feel free to use this template for your own portfolio.

---

*Educational/ethical security projects only.*
