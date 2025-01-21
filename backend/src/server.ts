import express, { Request, Response } from "express";
import cors from "cors";
import csvRoutes from "./routes/apiRoutes";
import apiRoutes from "./routes/apiRoutes";
import path from 'path';

const app = express();
const PORT = 8080;

// Enable CORS
app.use(cors());

// JSON body parsing middleware
app.use(express.json());

// Use the CSV routes
app.use("/api", apiRoutes);



app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
