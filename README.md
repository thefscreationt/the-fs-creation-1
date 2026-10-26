# The FS Creation

This site is a single-page marketing and portfolio website for a creative agency. It has been reorganized into a cleaner static project structure so it is easier to maintain and extend.

## Project structure

- `index.html` — main page markup
- `styles.css` — all styling and animations
- `script.js` — interactive behavior, counters, filters, and nav
- `.gitignore` — standard local exclusions

## Run locally

Open `index.html` directly in a browser, or start a small local static server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

- The original design is preserved.
- Image placeholders still use generated backgrounds and embedded placeholder data in the CSS, since no real media assets are present in the repo.
- If you add actual logo/portfolio images, replace the placeholder CSS backgrounds in `styles.css` to point to real files.

