import express from "express";
import { processCsv } from "../controllers/csvController";
import { getGradedCategoriesSummary } from "../controllers/gradesController";

const router = express.Router();

router.get("/csv/process", processCsv);

router.get("/data/grades", getGradedCategoriesSummary);

export default router;
