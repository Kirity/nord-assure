# NORD / ASSURE — VS Code website project (v3)

A static, responsive, bilingual website prototype for a Norwegian industrial cybersecurity advisory service. Built from the existing v2 Nord Assure design using **plain HTML, CSS and JavaScript** (no React, bundler or paid dependencies). Suitable for GitHub Pages.

## Quick start in VS Code

1. **Extract** `nord-assure-v3-vscode.zip` anywhere.
2. In **VS Code** choose **File → Open Folder…**, select the `nord-assure-v3` folder (containing `index.html`).
3. Use the VS Code **Live Server** extension and click **Go Live**, or in the integrated terminal run:

   ```bash
   python3 -m http.server 5500
   ```
4. Open `http://localhost:5500/` for Norwegian (redirects to `/no/`) or `http://localhost:5500/en/` for English.

The site also works by double-clicking `index.html`, but a local HTTP server is the more realistic development preview.

## Structure

```text
nord-assure-v3/
├── index.html                           Redirect to Norwegian homepage
├── en/
│   ├── index.html                       English homepage
│   └── privacy.html                     English draft privacy notice
├── no/
│   ├── index.html                       Norwegian homepage
│   └── privacy.html                     Norwegian draft privacy notice
├── privacy.html                         Redirect old English privacy URL
├── assets/
│   ├── css/styles.css                   All layout, responsive design, motion
│   ├── js/main.js                       Menu, tabs, animation, enquiry form
│   ├── js/config.js                     Configure form service (public settings only)
│   ├── icons/favicon.svg
│   ├── images/founder-photo-placeholder.svg
│   └── downloads/sample-cyber-health-report.pdf
├── docs/
│   ├── DESIGN_SPEC.md
│   ├── CONTENT_LAUNCH_CHECKLIST.md
│   └── DEPLOY_GITHUB_PAGES.md
├── .vscode/settings.json
├── .gitignore
└── README.md
```

## What is already implemented

- White-first interface inspired by the Norwegian flag, with subtle motion and accessible reduced-motion support.
- Focused hero for engineering, automation and technical-service companies.
- Flagship **Industrial Cyber Health Check**, plus two specialist extensions.
- Scope and deliverables section clarifying what is included and excluded.
- Founder section based on documented professional experience, with initials/portrait placeholder.
- Interactive fictional report + **downloadable six-page PDF**.
- English and Norwegian homepage variants.
- Contact form with validation, safe demo/copy mode and **optional Formspree integration**.
- Static paths compatible with `https://USERNAME.github.io/REPO/`.

## Activate a real contact form

The demo **does not submit anything** until you configure a real provider. On GitHub Pages, a static HTML file cannot process emails by itself.

1. Sign up with a reputable form provider, e.g. Formspree, create a form and **verify your recipient email**.
2. Open `assets/js/config.js` and set `formEndpoint` to your own form URL (example format: `https://formspree.io/f/XXXXXXXX`).
3. Test an actual enquiry and spam protection, and check that messages arrive.
4. **Before enabling live submissions, finish the privacy notices** and verify your company details, data handling, GDPR roles, and third-party provider practices.

Do not place passwords, private API keys, customer evidence or secrets into this public repository. The Formspree form endpoint is public by design.

## Content that must be approved before marketing

- `NORD / ASSURE` is a **working name**. Check Norwegian name/domain availability and company registration.
- The proposed technical founder is described from a CV. Obtain his approval of the wording and add an authorized professional photograph; the initials block is intentionally a placeholder.
- Do not add employer logos or imply endorsements without written consent.
- The sample report and risk figures are **fictional**. The prototype score of 67/100 has no certified meaning.
- Review the scope, liability, confidentiality, cybersecurity methodology, insurance and contracts with appropriate professionals before offering assessments.
- Replace the draft privacy notices with finalized information appropriate to your actual company and form vendor.

## Editing tips

- Change content in `en/index.html` (EN) and `no/index.html` (NO); they are separate static pages and **must be kept in sync**.
- Change colors, spacing, animations in `assets/css/styles.css`.
- Change menu, report tabs and form interactions in `assets/js/main.js`.
- Change public form-service URL in `assets/js/config.js`.
- Replace the PDF in `assets/downloads/` after you develop your real assessment methodology.
- The project has **no npm install step**.

See `docs/DEPLOY_GITHUB_PAGES.md` for publishing instructions.
