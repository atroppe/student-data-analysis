import { Request, Response } from "express";
import { getCsvFilePath, parseCsvToJson } from "../utils/fileUtils";
import { generateInsights, getGeneralResults } from "../utils/flaggingUtils";

const filePath = getCsvFilePath();

export const getTeacherReportSummary = (req: Request, res: Response): any => {
  const { student_id } = req.params;

  if (!student_id) {
    return res.status(400).json({ message: "Student ID is required." });
  }

  parseCsvToJson(filePath)
    .then((data) => {
      const student = data.find((student) => student.Student_ID === student_id);

      if (!student) {
        return res.status(404).json({ message: "Student not found." });
      }

      const generalResults = getGeneralResults(student);

      const insights = generateInsights(student);

      const summary = {
        generalResults,
        insights,
      };
      res.status(200).json(summary);
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(500).json({ message: "Failed to process the CSV file." });
    });
};
