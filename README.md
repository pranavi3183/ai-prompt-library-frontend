# AI Prompt Library — Frontend

Repository: https://github.com/pranavi3183/ai-prompt-library-frontend

This is the Angular frontend for the AI Prompt Library application (Angular 20). It is a small single-page app that consumes a JSON REST API (backend).

**Quick start**

Prerequisites:
- Node.js (recommend v18 or newer)
- npm (bundled with Node) or yarn
- Angular CLI (optional globally): `npm install -g @angular/cli`

Clone, install, and run:

```bash
git clone https://github.com/pranavi3183/ai-prompt-library-frontend.git
cd ai-prompt-library-frontend
npm install
npm start
# or: ng serve
```

Open http://localhost:4200/ in your browser. The dev server auto-reloads on file changes.

Scripts
- `npm start` / `ng serve` — run dev server
- `npm run build` — build production bundle
- `npm test` — run unit tests

Configuration / API base URL
- The frontend reads the backend base URL from `src/environments/environment.ts` (development) and `src/environments/environment.prod.ts` (production).
- By default:
	- development: `http://localhost:8000`
	- production: `https://ai-prompt-library-backend.onrender.com`

To point the app to a different backend, edit the `apiUrl` value in the environment files.

APIs used by this frontend

The app uses a small set of REST endpoints. These are implemented in `src/app/services/prompt.service.ts` and expect JSON.

- GET `{apiUrl}/prompts/` — list prompts. Optional query param: `?tag=<tagName>`
- GET `{apiUrl}/prompts/{id}/` — get a single prompt by id
- POST `{apiUrl}/prompts/` — create a new prompt. Body example (JSON):

	{
		"title": "Example prompt",
		"content": "Prompt content...",
		"complexity": 2,
		"tags": ["tag1","tag2"]
	}

- GET `{apiUrl}/tags/` — list available tags

Models expected by the frontend (see `src/app/models/prompt.model.ts`):

- `Prompt`: `{ id, title, content, complexity, tags: [{id,name}], view_count, created_at }`
- `CreatePromptDto`: `{ title, content, complexity, tags: string[] }`

Folder structure (important files)

- `src/` — application source
	- `main.ts` — bootstrap
	- `index.html`, `styles.scss`
	- `app/` — app code
		- `app.ts`, `app.routes.ts`, `app.config.ts` — app bootstrap and routing
		- `components/` — UI components
			- `add-prompt/` — add prompt UI
			- `prompt-list/` — list prompts
			- `prompt-detail/` — prompt details
		- `models/` — TypeScript interfaces (`prompt.model.ts`)
		- `services/` — HTTP services (`prompt.service.ts`)
	- `environments/` — `environment.ts` and `environment.prod.ts`


