# Portfolio

Personal project portfolio built with [Astro](https://astro.build) and deployed on [Netlify](https://netlify.com).

---

## Setup (one time)

Make sure you have Node.js 18+ installed.

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

Open `http://localhost:4321` in your browser.

---

## Adding a project

1. Create a new file in `src/content/projects/` — e.g. `my-new-tool.md`
2. Copy this template and fill it in:

```markdown
---
title: My Tool Name
description: One sentence description shown on the project card.
tags: [pf2e, tools]          # use: web, pf2e, tools — mix freely
status: wip                  # live | wip | concept
url: https://your-url.com    # optional — remove line if no URL yet
tech: [TypeScript, React]    # optional tech stack list
order: 7                     # controls sort order on the homepage
---

Write your full project description here in normal Markdown.

## Section heading

Paragraphs, lists, whatever you want.
```

3. Save the file — dev server hot-reloads instantly.
4. Push to GitHub — Netlify deploys automatically.

---

## Deploy to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repo
4. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy** — done.

Every subsequent `git push` triggers a new deploy automatically.

---

## Updating project details

Just edit the `.md` file and push. That's it.

- Change `status: wip` to `status: live` when something ships
- Add a `url:` line when there's somewhere to link
- Edit the body text freely — it's just Markdown
