import express, { Request, Response } from "express";
import cors from "cors";
import csvRoutes from "./routes/apiRoutes";
import apiRoutes from "./routes/apiRoutes";

const app = express();
const PORT = 8080;

// Enable CORS
app.use(cors());

// JSON body parsing middleware
app.use(express.json());

// Use the CSV routes
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
