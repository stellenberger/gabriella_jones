# Sanity Studio — Gabriella Jones CMS

This is a standalone Sanity Studio for managing content. It is intentionally separate from the React frontend (Amplify deploy).

How to use:

1) Install deps
   npm install

2) Log in to Sanity (first time only)
   npx sanity login

3) Set your project
   - Replace YOUR_PROJECT_ID in:
     - sanity.config.ts
     - sanity.cli.ts
   - Or run:
     npx sanity init --dataset production
     and follow prompts to choose/create a project, then confirm your dataset.

4) Develop locally
   npm run dev

5) Deploy hosted Studio
   npm run deploy
   Hosted at: https://<project>.sanity.studio

Schemas included:
- Concert (`schemas/concert.ts`) – mirrors the static JSON structure while adding a normalized eventDate (YYYY-MM-DD) for proper sorting.

Notes:
- Keep schemas code-only (schema changes require repo edits).
- Editors should be invited via Sanity project members.
- Do not embed Studio into the React app.


