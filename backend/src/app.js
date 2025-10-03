import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import candidateRoutes from "./routes/candidateRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/candidates", candidateRoutes);
app.use("/api/match", matchRoutes);

export default app;
