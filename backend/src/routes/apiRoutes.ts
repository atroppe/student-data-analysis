import express from "express";
import { processCsv } from "../controllers/csvController";
import { getGradedCategoriesSummary } from "../controllers/gradesController";
import { getTeacherReportSummary } from "../controllers/teacherReportController";

const router = express.Router();

router.get("/csv/process", processCsv);
router.get("/graded-categories-summary", getGradedCategoriesSummary);
router.get("/data/teacher-report/:student_id", getTeacherReportSummary);

export default router;
