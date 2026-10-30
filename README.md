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

Implemented basic FastAPI where it runs GET /health and returns "status" : "ok"

## Backend Setup

Run these commands from the repository root:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\fastapi.exe dev main.py
```

Open http://127.0.0.1:8000/health.
Expected response: HTTP 200 with `{"status": "ok"}`.

Interactive API documentation: http://127.0.0.1:8000/docs.

## Frontend Setup

From the repository root:

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

Open the local URL printed in the terminal.

To check the production build:

```powershell
npm.cmd run build
```