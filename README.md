

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
