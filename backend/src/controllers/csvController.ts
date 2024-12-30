import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import csvParser from "csv-parser";

// File path for the CSV file
const CSV_FILE_PATH = path.join(__dirname, "../data/students_data.csv");

// Controller to process the CSV file
export const processCsv = (req: Request, res: Response) => {
  const results: Record<string, any>[] = [];

  if (!fs.existsSync(CSV_FILE_PATH)) {
    return res.status(404).json({ message: "CSV file not found." });
  }

  fs.createReadStream(CSV_FILE_PATH)
    .pipe(csvParser())
    .on("data", (data) => {
      // Push the data from each CSV row to the results array
      results.push(data);
    })
    .on("end", () => {
      // Send the parsed CSV data as a JSON response
      res.json({ message: "CSV processed successfully!", data: results });
    })
    .on("error", (err) => {
      console.error("Error reading CSV file:", err);
      res.status(500).json({ message: "Error processing CSV file." });
    });
};
