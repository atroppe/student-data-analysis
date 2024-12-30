import express from "express";
import { processCsv } from "../controllers/csvController";

const router = express.Router();

// Endpoint to process the CSV file
router.get("/process", processCsv);

export default router;
