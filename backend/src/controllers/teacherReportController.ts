import { Request, Response } from "express";
import { getCsvFilePath, parseCsvToJson } from "../utils/fileUtils";
import { generateFlags } from "../utils/flaggingUtils";

const filePath = getCsvFilePath();

export const getTeacherReportSummary = (req: Request, res: Response): any => {
  // Extract student_id from request params or query
  const { student_id } = req.params; // Use req.query if it's passed as query parameter

  if (!student_id) {
    return res.status(400).json({ message: "Student ID is required." });
  }

  // Parse CSV and find the student with the provided student_id
  parseCsvToJson(filePath)
    .then((data) => {
      // Find the student by student_id
      const student = data.find((student) => student.Student_ID === student_id);

      if (!student) {
        return res.status(404).json({ message: "Student not found." });
      }

      // Generate flags based on the student's data
      const summary = generateFlags(student);
      res.status(200).json(summary);
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(500).json({ message: "Failed to process the CSV file." });
    });
};
