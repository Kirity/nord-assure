# Deploy NORD / ASSURE v3 to GitHub Pages

This folder is **already ready for static deployment**. No build process, Node.js or extra web server is required.

## Existing repository: `kirity/nord-assure`

1. Open the extracted `nord-assure-v3` folder in VS Code.
2. Copy/update the folder's **contents** into your `nord-assure` repository root. Ensure `index.html`, `no/` and `assets/` all appear at the top level, not inside an extra directory.
3. Commit and push:

   ```bash
   git add .
   git commit -m "Refine Nord Assure website: v3"
   git push origin main
   ```

   If your branch is not `main`, substitute its correct name. If your local folder isn't connected to a Git repository yet, clone your GitHub repository first or upload via GitHub's browser UI.

4. Under repository **Settings → Pages**, choose **Deploy from a branch** → branch `main` → folder `/ (root)` → Save.
5. Open **https://kirity.github.io/nord-assure/** (English). Norwegian is **https://kirity.github.io/nord-assure/no/**.
6. Verify that the PDF download, report tabs, navigation and enquiry form all work.

## Important

- GitHub Pages can host HTML/CSS/JavaScript, but **cannot process email forms by itself**. Configure a separate provider in `assets/js/config.js` before expecting enquiries to arrive.
- The site uses relative links specifically to work in a project subpath (`/nord-assure/`).
- Never publish private API keys, credentials or real client-security findings in your public repository.
- A custom `.no` domain can be added later; domain registration costs extra.
