import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import csv from "csv-parser";
import {
  createGradedCategoriesSummary,
  getCsvFilePath,
} from "../utils/fileUtils";
import { GradedCategories } from "../interfaces/interfaces";

const filePath = getCsvFilePath();

export const getGradedCategoriesSummary = (
  req: Request,
  res: Response
): void => {
  getCsvHeadersAndData(filePath)
    .then(({ headers, data }) => {
      const summary: GradedCategories[] = createGradedCategoriesSummary(
        data,
        headers
      );
      res.status(200).json(summary);
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(500).json({ message: "Failed to process the CSV file." });
    });
};

// Helper to get both headers and data from CSV
const getCsvHeadersAndData = (
  filePath: string
): Promise<{ headers: string[]; data: any[] }> => {
  return new Promise((resolve, reject) => {
    const headers: string[] = [];
    const data: any[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("headers", (headerList: string[]) => {
        headers.push(...headerList);
      })
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        resolve({ headers, data });
      })
      .on("error", (err) => {
        reject(`Error reading CSV: ${err.message}`);
      });
  });
};
