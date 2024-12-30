import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { GradedCategories } from "../interfaces/interfaces";

export const fileExists = (filePath: string): boolean => {
  return fs.existsSync(filePath);
};

export const getCsvFilePath = (
  fileName: string = "students_data.csv"
): string => {
  return path.join(__dirname, "../../", "data", fileName);
};

export const parseCsvToJson = (filePath: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const results: any[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
};

export const createGradedCategoriesSummary = (
  data: any[],
  headers: string[]
): GradedCategories[] => {
  const gradedCategories: GradedCategories[] = [];

  // console.log(data);

  headers.forEach((header) => {
    // console.log(header);

    const scores = data.map((row) => row[header]);

    // const validScores = scores.filter((score) => typeof score === "number");
    const validScores = scores.filter((score) => {
      // Convert the score to a number
      const parsedScore = parseFloat(score);
      // Check if it's a valid number
      return !isNaN(parsedScore);
    });

    if (validScores.length > 0) {
      const highestScore = Math.max(...validScores);
      const lowestScore = Math.min(...validScores);
      const averageScore =
        validScores.reduce((acc, score) => acc + score, 0) / validScores.length;

      gradedCategories.push({
        key: header,
        highestScore,
        lowestScore,
        averageScore,
      });
    }
  });

  console.log(gradedCategories);

  return gradedCategories;
};
