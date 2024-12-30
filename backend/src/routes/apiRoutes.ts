import express from "express";
import { processCsv } from "../controllers/csvController";
import { getGradesData } from "../controllers/gradesController";
import { getStudentsData } from "../controllers/studentsController";

const router = express.Router();

// Endpoint to process the CSV file
router.get("/csv/process", processCsv);

router.get("/data/students", getStudentsData);

router.get("/data/grades", getGradesData);

export default router;
