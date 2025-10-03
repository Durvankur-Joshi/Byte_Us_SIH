import { loadInternships } from "../utils/dataLoader.js";
import { getEmbedding, cosineSimilarity } from "../services/huggingfaceService.js";

export async function matchInternships(req, res) {
  try {
    const { skills, location, sector } = req.body;

    if (!skills || !location || !sector) {
      return res.status(400).json({ message: "Provide skills, location, and sector" });
    }

    const internships = loadInternships();
    let bestMatch = null;
    let bestScore = -1;

    // Candidate profile text
    const candidateText = `${skills.join(" ")} ${location} ${sector}`;
    const candidateEmbedding = await getEmbedding(candidateText);

    if (!candidateEmbedding) {
      return res.status(500).json({ message: "Failed to generate candidate embedding" });
    }

    // Compare with each internship
    for (const internship of internships) {
      const internshipText = `${internship.skills.join(" ")} ${internship.location} ${internship.sector}`;
      const internshipEmbedding = await getEmbedding(internshipText);

      if (candidateEmbedding && internshipEmbedding) {
        const similarity = cosineSimilarity(candidateEmbedding, internshipEmbedding);
        if (similarity > bestScore) {
          bestScore = similarity;
          bestMatch = internship;
        }
      }
    }

    if (bestMatch) {
      res.json({ bestMatch, score: bestScore });
    } else {
      res.status(404).json({ message: "No match found" });
    }
  } catch (error) {
    console.error("Error in matchInternships:", error);
    res.status(500).json({ message: "Server error" });
  }
}
