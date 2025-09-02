# NestJS React Todo App

This is a simple Todo application built with a NestJS backend and a React frontend.

## Project Structure

```
.
├── backend/
│   ├── src/
│   └── ... (NestJS application files)
└── frontend/
    ├── src/
    └── ... (React application files)
```

## Getting Started

### Prerequisites

* Node.js (v16 or later)
* npm

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run start:dev
   ```

   The backend will be running on `http://localhost:3000`.

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

   The frontend will be running on `http://localhost:5173` (or another port if 5173 is busy).

## How to Use

1. Open your browser and go to the frontend URL.
2. You will see a simple interface to add, view, update the status of, and delete tasks.
3. The tasks are stored in memory on the backend, so they will be reset if the backend server restarts.
