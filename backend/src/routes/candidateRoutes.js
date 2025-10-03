import express from "express";
import { registerCandidate, getAllCandidates } from "../controllers/candidateController.js";

const router = express.Router();

router.post("/", registerCandidate);
router.get("/", getAllCandidates);

export default router;
