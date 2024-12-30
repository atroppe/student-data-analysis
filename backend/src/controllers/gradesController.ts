import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import csv from "csv-parser";
import {
  createGradedCategoriesSummary,
  getCsvFilePath,
} from "../utils/fileUtils";
import { GradedCategories } from "../interfaces/interfaces";
// import { GradedCategories, createGradedCategoriesSummary } from '../utils/csvParser';

// Path to your CSV file
const filePath = getCsvFilePath();

export const getGradedCategoriesSummary = (
  req: Request,
  res: Response
): void => {
  // Read both the headers and data from the CSV file
  getCsvHeadersAndData(filePath)
    .then(({ headers, data }) => {
      // Generate graded categories summary using the headers and data
      const summary: GradedCategories[] = createGradedCategoriesSummary(
        data,
        headers
      );
      res.status(200).json(summary); // Respond with the graded categories summary
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
        headers.push(...headerList); // Collect headers first
      })
      .on("data", (row) => {
        data.push(row); // Collect row data
      })
      .on("end", () => {
        resolve({ headers, data }); // Resolve both headers and data
      })
      .on("error", (err) => {
        reject(`Error reading CSV: ${err.message}`);
      });
  });
};

// export const getGradedCategoriesSummary = (
//   req: Request,
//   res: Response
// ): void => {
//   // Step 1: Read the CSV file and get both headers and data
//   Promise.all([getCsvHeaders(filePath), getCsvData(filePath)])
//     .then(([headers, data]) => {
//       // Step 2: Generate graded categories summary using the headers and data
//       const summary: GradedCategories[] = createGradedCategoriesSummary(
//         data,
//         headers
//       );
//       res.status(200).json(summary); // Respond with the graded categories summary
//     })
//     .catch((err) => {
//       console.error("Error:", err);
//       res.status(500).json({ message: "Failed to process the CSV file." });
//     });
// };

// // Helper to get headers from CSV
// const getCsvHeaders = (filePath: string): Promise<string[]> => {
//   return new Promise((resolve, reject) => {
//     const headers: string[] = [];

//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on("headers", (headerList: string[]) => {
//         headers.push(...headerList);
//       })
//       .on("end", () => {
//         resolve(headers);
//       })
//       .on("error", (err) => {
//         reject(`Error reading CSV headers: ${err.message}`);
//       });
//   });
// };

// // Helper to get data from CSV
// const getCsvData = (filePath: string): Promise<any[]> => {
//   return new Promise((resolve, reject) => {
//     const data: any[] = [];

//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on("data", (row) => {
//         data.push(row);
//       })
//       .on("end", () => {
//         resolve(data);
//       })
//       .on("error", (err) => {
//         reject(`Error reading CSV data: ${err.message}`);
//       });
//   });
// };
