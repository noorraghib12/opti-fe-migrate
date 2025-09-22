# Agentic Migration Workflow for Optimizely SE (AI) Final Interview

This project leverages an **agentic workflow** to automate 90% migration of vanilla HTML/CSS/JS templates into a modern Next.js App Router project using TypeScript and Tailwind CSS. This workflow uses a multi-agent system to plan, execute, and evaluate each migration step, ensuring high-quality, maintainable code.

## How It Works

1. **Setup**: Place your vanilla template in the project root.
2. **Launch Migration UI**: Start the Streamlit app for an interactive migration experience.
3. **Agentic Migration**: Agents analyze your template, generate a migration plan, execute atomic steps, and evaluate results.
4. **Output**: Migrated Next.js code is generated in the target_migrate directory, with pages and components mapped to Tailwind CSS.

---

## Quick Start

### 1. Install Dependencies

```bash
pip install -r requirements.txt
npm install
```

#### Setup env variables

Add your OPENAI_API_KEY for the agentic workflow and fill in the rest of the variables
```
cp env.example env
```


### 2. Launch the Streamlit Migration App

```bash
streamlit run streamlit_app.py
```

- Follow the sidebar instructions in the Streamlit UI.
- Provide your source directory (e.g., templatemo_594_nexus_flow_v1).
- The migrated Next.js app will be generated in `target_migrate/<source_dir>`.

---

## Migration Output Example

After migration, you’ll find generated Next.js pages and components in:

```
target_migrate/<source_dir>
```

**Sample Migrated Pages:**

Sample migrations of pages in ```template_pages``` can be found in ```target_migrate``` folder

---

## Project Migration Process

The initial migration focused on the template **templatemo_594_nexus_flow_v1**, converting its HTML/CSS/JS files into a Next.js structure under src. The agentic workflow:

- Analyzed the source directory structure and CSS classes.
- Planned atomic migration steps (HTML → React, CSS → Tailwind).
- Executed and verified each step, generating reusable components and pages.
- Output the migrated code in `target_migrate/templatemo_594_nexus_flow_v1`.

---

## Frontend Setup & Development

Once, the agentic workflow was carried out, the generated project was edited and corrected by a frontend engineer within 4 hours and was moved to ```src``` and ```public``` and can be launched with docker compose.



### Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Edit Pages

Start editing by modifying page.tsx. Changes auto-update.

---

## Deployment

### Deploy on Vercel

Deploy easily using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

## Docker Usage

### Build Image

```bash
docker build -t optimizely-fe-agent:latest --target runner .
```

### Run Container

```bash
docker run -d \
  --name optimizely-fe-agent-runner \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e PORT=3000 \
  -e HOSTNAME=0.0.0.0 \
  optimizely-fe-agent:latest
```

- Open [http://localhost:3000](http://localhost:3000)
- Stop & remove:

```bash
docker stop optimizely-fe-agent-runner && docker rm optimizely-fe-agent-runner
```

### Docker Compose

```bash
docker compose up --build -d
```

- View logs: `docker compose logs -f`
- Stop: `docker compose down`

---

## Frontend Engineer Review of the First Version of Generated Template

- **CSS Migration**: Many legacy CSS classes lacked direct Tailwind equivalents, requiring manual mapping—especially for dynamic styles, animations, and pseudo-elements.
- **JS Migration**: JavaScript migration was smoother; most functions mapped well to React with minimal manual intervention.
- **HTML Migration**: Straightforward, as HTML works natively in Next.js. The agent helped convert raw HTML into reusable components, improving code splitting and optimization.
- **Manual Intervention**: Small, specific changes (1-2 lines) often needed manual fixes. The agent handled bulk migration well but sometimes missed fine-grained consistency.
- **Overall**: The agentic workflow enabled rapid migration of the entire template, automating most tasks and producing maintainable Next.js code. Quality was close to manual standards, with minor gaps in consistency.

