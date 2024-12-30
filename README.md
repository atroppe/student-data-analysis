# Student Data Analysis API

This project provides an API for processing student data from a CSV file. It includes endpoints to analyze graded categories and provides detailed summaries such as highest, lowest, and average scores for each category.

## Prerequisites

- Node.js (v14 or higher)
- npm or pnpm
- A terminal to run commands

## Setup

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone <your-repository-url>
cd student-data-analysis
cd backend
```

### 2. Install dependencies

Run the following command to install the required dependencies:

#### Using npm:

```bash
npm install
```

#### Using pnpm:

```bash
pnpm install
```

### 3. Set up the CSV file

Ensure the CSV file (`students_data.csv`) is placed in the `data/` directory inside the `backend/` folder. If it doesn't exist, create it.

The expected structure of the CSV file should have headers like `student_name`, `subject`, `score`, etc.

### 4. Configure the server

By default, the server will run on port `8080`. You can change the port by modifying the `server.js` file.

### 5. Build the TypeScript files

If you're using TypeScript, compile the code by running:

```bash
npm run build
```

### 6. Run the server

Start the server:

```bash
npm start
```

### 7. OR Build and watch Typescript files for changes

```bash
npm run start:dev
```

The server will now be running on [http://localhost:8080](http://localhost:8080).

## API Endpoints

### 1. Get Graded Categories Summary

**Endpoint:** `/api/csv/graded-categories-summary`

**Method:** `GET`

**Description:** Returns the graded categories summary from the CSV file. The response includes the highest, lowest, and average scores for each graded category.

**Example Request:**

```bash
GET http://localhost:8080/api/data/graded-categories-summary
```

**Example Response:**

```json
[
  {
    "key": "Math",
    "highestScore": 95,
    "lowestScore": 60,
    "averageScore": 78.5
  },
  {
    "key": "Science",
    "highestScore": 92,
    "lowestScore": 64,
    "averageScore": 78.7
  }
]
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
