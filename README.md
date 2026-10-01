# Emergency Plumbing, LLC

Website for Emergency Plumbing, LLC serving Chamblee and the greater Atlanta area.

## Local development

Requires Node.js.

```sh
npm install
npm run dev
```

## Build and deploy

```sh
npm run build
```

The production site is written to `dist/`. Upload that directory to any static web host. The build uses relative asset paths, so it can also be served from a subdirectory. Configure the host to serve `index.html` for unknown paths if you add client-side routes.

Netlify and Vercel deployment configuration is included, but neither platform is required.
