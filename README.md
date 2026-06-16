# Esquare Estates — Astro Website

Your static HTML site, migrated to Astro with a full blog system.

---

## One-time setup

### 1. Install Node.js (if you don't have it)
Download from: https://nodejs.org — install the LTS version.
Verify: open a terminal and type `node -v` — you should see a version number.

### 2. Open this project folder in a terminal
On Windows: right-click the `esquare-astro` folder → "Open in Terminal" (or open VS Code and use its terminal).

### 3. Install dependencies
```bash
npm install
```
This downloads Astro and its tools into `node_modules/`. Takes 1–2 minutes, only done once.

### 4. Start the local preview
```bash
npm run dev
```
Open your browser to: **http://localhost:4321**

---

## Adding a blog post (do this every week)

1. Go to `src/content/blog/`
2. Create a new `.md` file — e.g. `5-reasons-to-buy-in-bulacan.md`
3. Add this at the top (the "frontmatter"):

```markdown
---
title: "Your Blog Post Title Here"
description: "A one-sentence summary for Google search results."
pubDate: 2026-06-15
author: "Esquare Estates"
tags: ["bulacan", "investment"]
---

Your content starts here. Write normally in Markdown.

## Section heading

Paragraph text here.

- Bullet one
- Bullet two
```

4. Save the file.
5. The post **automatically appears** at `/blog/` — no other files to edit.

**Markdown basics:**
- `## Heading` → big heading
- `**bold**` → **bold**
- `*italic*` → *italic*
- `- item` → bullet list
- `[link text](https://url.com)` → hyperlink

---

## Building for deployment

```bash
npm run build
```
This generates a `dist/` folder — the static files ready to serve.
You never upload `dist/` manually; your host (Netlify) builds this automatically.

---

## Deploying to Netlify (recommended)

1. Push this project folder to a **GitHub repository**
   (drag and drop the folder into github.com, or use GitHub Desktop)
2. Go to **netlify.com** → Sign up / Log in
3. "Add new site" → "Import an existing project" → Connect GitHub
4. Select your repository
5. Netlify auto-detects Astro. Build settings will be:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click Deploy — your site goes live at a `.netlify.app` URL in ~2 minutes

Every time you push to GitHub after that, Netlify rebuilds and redeploys automatically.

---

## Connecting your custom domain (Cloudflare → Netlify)

1. **Buy the domain** at cloudflare.com/registrar (e.g. `esquareestates.com`)
2. In Netlify: Site settings → Domain management → Add custom domain
3. Netlify gives you two DNS records to add (CNAME or A records)
4. In Cloudflare: DNS → Add those records → Save
5. Wait 5–30 minutes for propagation
6. Netlify auto-provisions your free SSL certificate

---

## Folder structure explained

```
esquare-astro/
├── public/                     ← static files (logo, images)
│   └── e2e-logo-white.png
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    ← header, footer, nav — edit once, applies everywhere
│   ├── pages/
│   │   ├── index.astro         ← homepage
│   │   ├── projects.astro      ← projects list
│   │   ├── about.astro
│   │   ├── events.astro
│   │   ├── contact.astro
│   │   ├── projects/
│   │   │   └── commonwealth.astro← /projects/commonwealth/
│   │   └── blog/
│   │       ├── index.astro     ← /blog/ listing (auto-generated)
│   │       └── [...slug].astro ← /blog/post-name/ (auto-generated per post)
│   ├── content/
│   │   ├── config.ts           ← blog schema (don't touch unless adding fields)
│   │   └── blog/               ← ← ← YOUR BLOG POSTS GO HERE (.md files)
│   └── styles/
│       └── global.css          ← all your styles
├── astro.config.mjs
└── package.json
```

---

## Before you launch — replacements needed

Search the codebase for `TODO` comments. Key ones:

- All contact details (phone, email, Viber link) — in `BaseLayout.astro`
- Social media links (Facebook, Viber, Messenger) — in `BaseLayout.astro`
- Google Maps exact embed — in `src/pages/contact.astro` and `src/pages/projects/commonwealth.astro`
- Developer track-record stats (15+ yrs, 500+ homes) — confirm these are publicly usable
- `site:` URL in `astro.config.mjs` — set to your real domain

---

## URL structure (new vs old)

| Old HTML | New Astro URL |
|----------|--------------|
| index.html | / |
| projects.html | /projects/ |
| oro-villas.html | /projects/commonwealth/ (301 redirect) |
| about.html | /about/ |
| events.html | /events/ |
| contact.html | /contact/ |
| (new) | /blog/ |
| (new) | /blog/post-slug/ |

If you've already shared the old `.html` links, add redirects in a `_redirects` file at the root:
```
/oro-villas.html    /projects/commonwealth/    301
/projects/oro-villas/    /projects/commonwealth/    301
/projects.html      /projects/               301
```
