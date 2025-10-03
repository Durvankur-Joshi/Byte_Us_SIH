import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function loadInternships() {
  const filePath = path.join(__dirname, "../../data/internships.json");
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}
