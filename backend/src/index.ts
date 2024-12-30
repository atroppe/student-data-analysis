import express, { Request, Response } from "express";
import * as fs from "fs"; // Correct TypeScript-compatible import for fs
import * as path from "path"; // TypeScript-compatible import for path
import csvParser from "csv-parser"; // Import works directly for ES module-compatible packages

const app = express();
const PORT = 5001;

// Path to the local CSV file
// const CSV_FILE_PATH = path.join(__dirname, "data", "students.csv");
const CSV_FILE_PATH = "data/students.csv";

// Endpoint to process the local CSV file
app.get("/process-csv", (req: Request, res: Response): any => {
  const results: Record<string, any>[] = [];

  // Check if the file exists
  if (!fs.existsSync(CSV_FILE_PATH)) {
    return res.status(404).send("CSV file not found.");
    // res.status(404).send("CSV file not found.");
  }

  // Read and parse the CSV file
  fs.createReadStream(CSV_FILE_PATH)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.json({ message: "CSV processed successfully!", data: results });
    })
    .on("error", (err) => {
      console.error("Error reading CSV file:", err);
      res.status(500).send("Error processing CSV file.");
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
