# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying Live

This app is ready to deploy as a static SPA.

### Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Keep the default build command as `npm run build`.
4. Set the output directory to `dist`.
5. Deploy.

### Netlify

1. Push the repo to GitHub.
2. Import the project in Netlify.
3. Use `npm run build` as the build command.
4. Use `dist` as the publish directory.
5. Deploy.

The app uses client-side routing, so the included `vercel.json` and `netlify.toml` files route all paths back to `index.html`.
