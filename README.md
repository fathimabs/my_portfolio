# Fathima B S — Portfolio (React + Vite + Tailwind)

A clean, responsive one-page developer portfolio.

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

- **Colors:** a teal & ink palette (`accent` = teal `#0d9488`) instead of the
  previous blue, defined once in `tailwind.config.js` under `theme.extend.colors`.
- **Fonts:** `Sora` for headings (clean, geometric, techy) and `Inter` for body
  text (highly readable at small sizes), loaded via Google Fonts in `index.html`.
- **Tech stack logos:** real brand icons from [Devicon](https://devicon.dev/),
  loaded through a CDN stylesheet in `index.html` — no local icon files needed.
  Edit the list in the `techStack` array in `src/data.js`.

## To customize

- Replace the placeholder entries in `projects` (in `src/data.js`) with your
  real projects and links.
- Update `contact.email`, `contact.github`, `contact.linkedin` in `src/data.js`.
- Add your photo to `public/images/person.jpg` and `public/images/about.jpg`
  (referenced in `Hero.jsx` and `About.jsx`).
- Add your resume PDF at `public/resume.pdf` (the "Get Resume" button in
  `Hero.jsx` already points there).
- To change the accent color, edit the `colors` object in `tailwind.config.js`.
