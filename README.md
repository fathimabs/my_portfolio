# Fathima B S — Portfolio (React + Vite + Tailwind)

A clean, responsive one-page developer portfolio.A modern,clean and responsive personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and experience.

## 🚀 Live Demo

https://your-portfolio-url.com

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

This outputs static files to `dist/`, which you can deploy to Vercel, Netlify,
GitHub Pages, etc.

## ✨ Features

- Responsive design
- Modern UI
- About Me section
- Skills & Tech Stack
- Project showcase
- Experience & Education
- Contact section
- Resume download


## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- HTML5
- CSS3
- GitHub



## Project structure

```
src/
  App.jsx              # assembles all sections
  data.js               # ALL editable content lives here (name, skills, jobs,
                         # projects, tech stack, contact links...)
  index.css             # Tailwind + small shared section/utility classes
  components/
    Navbar.jsx           # sticky nav with a working mobile hamburger menu
    Hero.jsx              # intro section with photo, name, resume/contact CTAs
    About.jsx              # skills / experience / education tabs
    Projects.jsx             # project cards (swap in your real work)
    Tools.jsx                 # tech-stack grid with real brand logos (Devicon)
    Contact.jsx                # email + social links
    Footer.jsx
```

## Design

- **Colors:** a teal & ink palette (`accent` = teal `#0d9488`) 
- **Fonts:** `Sora` for headings (clean, geometric, techy) and `Inter` for body
  text (highly readable at small sizes), loaded via Google Fonts in `index.html`.

- **Tech stack logos:** real brand icons from [Devicon](https://devicon.dev/),
 
## 👩‍💻 Author

**Fathima B S**

- GitHub: https://github.com/fathimabs
- LinkedIn: https://www.linkedin.com/in/fathimabs

