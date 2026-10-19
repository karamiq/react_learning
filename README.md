# React + TypeScript + Vite

This project is a React application built with Vite, TypeScript, and Material UI.

## Local development

```bash
npm ci
npm run dev
```

Available commands:

- `npm run lint` checks the source with Oxlint.
- `npm run typecheck` runs the TypeScript compiler without emitting files.
- `npm run build` creates the production bundle in `dist`.
- `npm run check` runs linting, type-checking, and the production build.
- `npm run preview` serves the production bundle locally.

## Container deployment

The [`Dockerfile`](./Dockerfile) builds the application in a Node.js stage and
serves the static output with Nginx. The image includes an SPA fallback so
client-side routes continue to work on direct navigation.

```bash
docker build -t react-learning .
docker run --rm -p 8080:80 react-learning
```

Open <http://localhost:8080> to verify the container locally. CI builds this
image on every pull request and push to `main`.

## CI/CD

GitHub Actions runs [`npm run check`](./.github/workflows/ci.yml) for pull requests
and pushes to `main`. This is the deployment gate and catches lint, TypeScript,
and production-build failures.

The [`Deploy to GitHub Pages`](./.github/workflows/deploy.yml) workflow builds
the same artifact and deploys it to GitHub Pages after every push to `main`. It
can also be started manually with **Run workflow**.

Before the first deployment, configure the repository's **Settings → Pages →
Build and deployment → Source** to **GitHub Actions**. The Vite base path is
derived from `GITHUB_REPOSITORY`, so the workflow works with this repository
name and does not require a hard-coded production URL.

The application currently has no component-level test suite; CI's required
checks are the lint, type-check, and production-build validation steps above.
