import { Request, Response } from "express";

export const getStudentsData = (req: Request, res: Response): void => {
  // Return a hardcoded response
  res.status(200).json({
    message: "Student data retrieved successfully.",
    students: [
      { id: 1, name: "Alice", grade: "A" },
      { id: 2, name: "Bob", grade: "B" },
    ],
  });
};
