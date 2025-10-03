import * as dotenv from "dotenv";
import { HfInference } from "@huggingface/inference";

dotenv.config();

const hf = new HfInference(process.env.HF_API_KEY);

export async function getEmbedding(text) {
  try {
    const response = await hf.featureExtraction({
      model: "sentence-transformers/all-MiniLM-L6-v2",
      inputs: text,
    });

    // If HuggingFace returns 2D (list of tokens), average it
    const embedding = Array.isArray(response[0])
      ? response[0].map((_, i) =>
          response.reduce((sum, row) => sum + row[i], 0) / response.length
        )
      : response; // already a 1D embedding

    return embedding;
  } catch (error) {
    console.error("Error fetching embedding:", error.message);
    return null;
  }
}

// Cosine similarity function
export function cosineSimilarity(vecA, vecB) {
  const dot = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB);
}
