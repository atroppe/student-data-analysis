import path from "path";
import { Request, Response } from "express";
import {
  createGradedCategoriesSummary,
  getCsvFilePath,
  parseCsvToJson,
} from "../utils/fileUtils";
import { GradedCategories } from "../interfaces/interfaces";

const filePath = getCsvFilePath("students_data.csv");

export const getGradesData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await parseCsvToJson(filePath);

    const gradedCategories: Promise<GradedCategories[]> =
      createGradedCategoriesSummary("students_data.csv");

    res.status(200).json({
      message: "Grades data retrieved successfully.",
      gradedCategories,
    });
  } catch (error) {
    console.error("Error processing CSV file:", error);
    res.status(500).json({ message: "Failed to process CSV file." });
  }
};
