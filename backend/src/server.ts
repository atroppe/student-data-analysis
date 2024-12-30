import express, { Request, Response } from "express";
import cors from "cors";
import csvRoutes from "./routes/csvRoutes";

const app = express();
const PORT = 5001;

// Enable CORS
app.use(cors());

// JSON body parsing middleware
app.use(express.json());

// Use the CSV routes
app.use("/api/csv", csvRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
