import express from "express";
import { matchInternships } from "../controllers/matchController.js";

const router = express.Router();

router.post("/", matchInternships);

export default router;
