# Student Data Analysis Project

This project is a full-stack application designed to analyze student data from a CSV file and generate meaningful reports for teachers and parents. It includes an Express backend and a React (TypeScript) frontend.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [pnpm](https://pnpm.io/) (version 7 or later)

---

## Project Structure

```
/project-root
  ├── backend/            # Express backend
  ├── frontend/           # React frontend
  ├── shared/             # Shared types or utilities
  ├── pnpm-workspace.yaml # pnpm workspace configuration
  └── README.md           # Project documentation
```

---

## Setting Up the Project

### 1. Clone the Repository

```bash
git clone <repository-url>
cd student-data-analysis
```

### 2. Install Dependencies

Run the following command in the project root to install all dependencies for both the backend and frontend:

```bash
pnpm install
```

### 3. Environment Variables

#### Backend

Create a `.env` file in the `backend` directory and configure the necessary variables. For example:

```
PORT=8080
```

#### Frontend

Create a `.env` file in the `frontend` directory and set the API base URL:

```
VITE_API_BASE_URL=http://localhost:8080/api
```

---

## Running the Project

### 1. Start the Backend

Navigate to the `backend` directory and start the server:

```bash
cd backend
pnpm start
```

The backend will be available at `http://localhost:8080`.

### 2. Start the Frontend

Navigate to the `frontend` directory and run the development server:

```bash
cd frontend
pnpm dev
```

The frontend will be available at `http://localhost:5173`.

---

## Building for Production

### 1. Build the Frontend

Navigate to the `frontend` directory and run:

```bash
cd frontend
pnpm build
```

This will generate a production-ready build in the `frontend/dist` directory.

### 2. Serve the Frontend with the Backend

Ensure the backend is configured to serve static files from the frontend build:

```javascript
import path from "path";
import express from "express";

const app = express();

app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

## Testing

### Backend Tests

Navigate to the `backend` directory and run:

```bash
pnpm test
```

### Frontend Tests

Navigate to the `frontend` directory and run:

```bash
pnpm test
```

---

## Notes

- Ensure the backend is running before accessing the frontend.
- Shared types or utilities are stored in the `shared` directory for consistency between backend and frontend.
