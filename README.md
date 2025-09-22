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

### Challenges Faced While Migrating to NextJS

- CSS Migration:
	- A lot of CSS classes did not have Tailwind CSS equivalents. As a result, we had to manually map the CSS classes to Tailwind CSS classes. This is specially true for the CSS classes that were used for dynamic styling, animations, and other complex styles like pseudo-elements and pseudo-classes.

- JS Migration:
	- JS migration was not as challenging as CSS migration. We had to manually map the JS functions to React functions. A simple prompt to the LLM was able to do the job quite well.

- HTML Migration:
	- HTML migration was relatively easy. Since plain HTML already works with NextJS, we didn't have to do much. But the agent really helped us to convert the raw HTML into reusable components, effectively reducing the amount of manual work required and helping with code splitting and optimization.

Scenarios where change was very specific and involded 1-2 lines of code change required a lot of manual intervention, repetition and the agent was not able to handle it well.

However, the agent was able to handle the majority of the migration tasks quite well, and we were able to migrate the entire application in a matter of hours. But, due to a large part of the migration tasks being automated, the agent was not able to replicate the exact level of quality and consistency in the migration tasks. But it got pretty close.