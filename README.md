# Cole Turner — Portfolio

Live at **[coleturner.dev](https://coleturner.dev)**

A single-page portfolio styled as an ERAU baseball scoreboard. Navigate between About, Projects, Skills, Experience, Education, and Contact via scoreboard side panels, with a live GitHub activity strip pulling real repo/stat data at runtime.

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server & build
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Oxlint](https://oxc.rs/) for linting
- Deployed on [Vercel](https://vercel.com/)

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check + production build
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

## Deployment

Pushes to `main` are deployed automatically via Vercel.
