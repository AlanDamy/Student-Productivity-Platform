# Student Productivity Platform

## Purpose
To help students keep track of school related information such as tests, exams, quizzes, assignment, projects, etc.

## Planned MVP
A student can manage courses, assignments, deadlines, and study sessions in one place, then see what needs attention next.

## Week 1 Goal
Set up a FastAPI backend and React/TypeScript frontend, then display a small list of university courses fetched from the API.

## Planned Tech Stack

- Frontend: React and TypeScript
- Backend: Python and FastAPI
- Database: PostgreSQL, introduced in Week 2
- Version control: Git and GitHub

## Current Status

FastAPI serves a health check and two hardcoded sample university courses.
React fetches the courses through the Vite development proxy and displays their
codes and names, with a loading message while waiting.

Empty-result messaging, HTTP/network error handling, and effect cleanup are
still pending. The course data is read-only and is not stored in a database.

## API Contract

The backend runs at http://127.0.0.1:8000 during local development.

- `GET /health`: HTTP 200 with `{"status": "ok"}`.
- `GET /courses`: HTTP 200 with a JSON array of course objects.

Each course has these required fields:

| Field | JSON type | Example |
| --- | --- | --- |
| `id` | Integer | `1` |
| `code` | String | `"CS101"` |
| `name` | String | `"Introduction to Computer Science"` |

The current sample response is:

```json
[
  {"id": 1, "code": "CS101", "name": "Introduction to Computer Science"},
  {"id": 2, "code": "ENG101", "name": "English Composition"}
]
```

The backend response model is `list[Course]`. The frontend uses a matching
TypeScript `Course` type with `id: number`, `code: string`, and `name: string`.

## Backend Setup

Run these commands from the repository root:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\fastapi.exe dev main.py
```

Keep this terminal running. Once the environment and dependencies are installed,
subsequent starts only need the last command, run from `backend`.

Open http://127.0.0.1:8000/health.
Expected response: HTTP 200 with `{"status": "ok"}`.

Interactive API documentation: http://127.0.0.1:8000/docs.

## Frontend Setup

Open a second terminal, starting from the repository root:

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

Open the local URL printed in the terminal.

Keep both development servers running. React requests the relative URL
`/courses`; Vite forwards it to `http://127.0.0.1:8000/courses` without changing
the path. This proxy is for development; production routing is not configured.

After dependencies are installed, subsequent frontend starts only need
`npm.cmd run dev`, run from `frontend`.

To check the production build:

```powershell
npm.cmd run build
```
