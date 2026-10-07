# Mirthikha N S: Portfolio

React + Vite portfolio. All content lives in `src/data.js`; edit that file to change text, projects or links.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # serve the production build
```

## Deploy
**Vercel (easiest):** push to GitHub, import the repo at vercel.com. Framework: Vite, build `npm run build`, output `dist`.

**GitHub Pages:** the build uses relative paths (`base: './'`), so it works as-is.
```bash
npm run build
npx gh-pages -d dist      # publishes dist/ to the gh-pages branch
```
Then set Settings > Pages > Branch to `gh-pages`.

## Structure
`src/components/*` one component per section, `Section.jsx` shared wrapper, `hooks/useReveal.js` scroll fade, `styles.css` all styling via CSS variables, `public/resume.pdf` the download.
