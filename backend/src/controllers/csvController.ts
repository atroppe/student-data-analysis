import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import csvParser from "csv-parser";

const CSV_FILE_PATH = path.join(__dirname, "../../data/students_data.csv");

export const processCsv = (req: Request, res: Response): any => {
  const results: Record<string, any>[] = [];

  if (!fs.existsSync(CSV_FILE_PATH)) {
    return res.status(404).json({ message: "CSV file not found." });
  }

  fs.createReadStream(CSV_FILE_PATH)
    .pipe(csvParser())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      res.json({ message: "CSV processed successfully!", data: results });
    })
    .on("error", (err) => {
      console.error("Error reading CSV file:", err);
      res.status(500).json({ message: "Error processing CSV file." });
    });
};
