import fs from "fs";
import path from "path";
import csv from "csv-parser";

export const fileExists = (filePath: string): boolean => {
  return fs.existsSync(filePath);
};

export const getCsvFilePath = (fileName: string): string => {
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

export const createGradedCategoriesSummary = async (
  filePath: string
): Promise<GradedCategories[]> => {
  const categoriesMap: Record<string, number[]> = {}; // Object to store scores grouped by category

  try {
    const rows = await parseCsvToJson(getCsvFilePath(filePath)); // Assuming `parseCsvToJson` is already implemented
    rows.forEach((row) => {
      const { category, score } = row; // Adjust these based on the actual CSV column names

      if (category && score !== undefined) {
        if (!categoriesMap[category]) {
          categoriesMap[category] = [];
        }
        categoriesMap[category].push(Number(score));
      }
    });

    // Now create the GradedCategories array
    const gradedCategories: GradedCategories[] = [];

    for (const [category, scores] of Object.entries(categoriesMap)) {
      const highestScore = Math.max(...scores);
      const lowestScore = Math.min(...scores);
      const averageScore =
        scores.reduce((acc, score) => acc + score, 0) / scores.length;

      gradedCategories.push({
        key: category,
        highestScore,
        lowestScore,
        averageScore,
      });
    }

    return gradedCategories;
  } catch (error) {
    console.error("Error processing CSV file:", error);
    throw new Error("Failed to process CSV file");
  }
};
