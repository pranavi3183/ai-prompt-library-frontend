# AI Prompt Library — Frontend

Angular frontend for the AI Prompt Library application. This is a lightweight single-page application that interacts with a REST API backend to manage and explore AI prompts.

---

## Overview

This application allows users to:

* Browse a list of prompts
* View prompt details
* Filter prompts by tags
* Create new prompts

Built using Angular 20, it communicates with a backend via JSON-based REST APIs.

---

## Tech Stack

* Angular 20
* TypeScript
* SCSS
* REST API integration

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (v18 or above recommended)
* npm (comes with Node.js) or yarn
* Angular CLI (optional)

Install Angular CLI globally (optional):

```bash
npm install -g @angular/cli
```

---

### Installation & Run

```bash
git clone https://github.com/pranavi3183/ai-prompt-library-frontend.git
cd ai-prompt-library-frontend
npm install
npm start
```

Or using Angular CLI:

```bash
ng serve
```

---

### Access the App

Open your browser and visit:

```
http://localhost:4200/
```

The app will automatically reload when you make changes.

---

## Available Scripts

| Command       | Description            |
| ------------- | ---------------------- |
| npm start     | Run development server |
| npm run build | Build for production   |
| npm test      | Run unit tests         |

---

## Configuration

The API base URL is configured using Angular environment files:

* Development: `src/environments/environment.ts`
* Production: `src/environments/environment.prod.ts`

### Default URLs

```ts
// development
apiUrl: 'http://localhost:8000'

// production
apiUrl: 'https://ai-prompt-library-backend.onrender.com'
```

To connect to a different backend, update the `apiUrl` value.

---

## API Endpoints

The frontend communicates with the backend using the following endpoints:

### Prompts

* GET `/prompts/`
  Fetch all prompts
  Optional: `?tag=<tagName>`

* GET `/prompts/{id}/`
  Fetch a specific prompt

* POST `/prompts/`
  Create a new prompt

Example request body:

```json
{
  "title": "Example prompt",
  "content": "Prompt content...",
  "complexity": 2,
  "tags": ["tag1", "tag2"]
}
```

---

### Tags

* GET `/tags/`
  Fetch all available tags

---

## Data Models

### Prompt

```ts
{
  id: number;
  title: string;
  content: string;
  complexity: number;
  tags: { id: number; name: string }[];
  view_count: number;
  created_at: string;
}
```

### CreatePromptDto

```ts
{
  title: string;
  content: string;
  complexity: number;
  tags: string[];
}
```

---

## Project Structure

```
src/
│
├── main.ts
├── index.html
├── styles.scss
│
├── app/
│   ├── app.ts
│   ├── app.routes.ts
│   ├── app.config.ts
│   │
│   ├── components/
│   │   ├── add-prompt/
│   │   ├── prompt-list/
│   │   └── prompt-detail/
│   │
│   ├── models/
│   │   └── prompt.model.ts
│   │
│   └── services/
│       └── prompt.service.ts
│
└── environments/
    ├── environment.ts
    └── environment.prod.ts
```

---

## Notes

* Ensure the backend is running before using the app
* Update API URLs if deploying to a custom backend
* Designed to be simple, scalable, and easy to extend
