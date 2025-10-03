let candidates = []; // temporary in-memory storage

// Register candidate details
export const registerCandidate = (req, res) => {
  const { firstName, lastName, email, education, skills, location, sector } = req.body;

  if (!firstName || !email || !skills) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newCandidate = {
    id: candidates.length + 1,
    firstName,
    lastName,
    email,
    education,
    skills,
    location,
    sector,
  };

  candidates.push(newCandidate);
  res.status(201).json(newCandidate);
};

// Get all candidates
export const getAllCandidates = (req, res) => {
  res.json(candidates);
};
