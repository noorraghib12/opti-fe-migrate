This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Docker

### Build image
```bash
docker build -t optimizely-fe-agent:latest --target runner .
```

### Run container
```bash
docker run -d \
  --name optimizely-fe-agent-runner \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e PORT=3000 \
  -e HOSTNAME=0.0.0.0 \
  optimizely-fe-agent:latest
```

- Open http://localhost:3000
- Stop and remove:
```bash
docker stop optimizely-fe-agent-runner && docker rm optimizely-fe-agent-runner
```

### Using Docker Compose
```bash
docker compose up --build -d
```
- View logs: `docker compose logs -f`
- Stop: `docker compose down`
