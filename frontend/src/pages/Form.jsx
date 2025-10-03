import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",

    // Education
    collegeName: "",
    education: "",
    lastYearMarks: "", // changed from cgpa → lastYearMarks

    // Skills
    technicalSkills: "",
    softSkills: "",
    specialization: "",

    // Preferences
    preferredSector: "",
    preferredLocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Candidate Data:", formData);
    alert("Form submitted! (Check console for data)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-700 tracking-wide">
          Candidate Profile Form
        </h2>
 
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* ============ Personal Information ============ */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-3 bg-blue-50 py-2 rounded">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                  min="18"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">-- Select Gender --</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* ============ Education ============ */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-3 bg-green-50 py-2 rounded">
              Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">College Name</label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
                  placeholder="e.g., IIT Bombay"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Education</label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
                >
                  <option value="">-- Select Education --</option>
                  <option value="B.E">B.E</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="B.ED">B.ED</option>
                  <option value="BBA">BBA</option>
                  <option value="B.COM">B.COM</option>
                  <option value="M.SC">M.SC</option>
                  <option value="B.SC">B.SC</option>
                  <option value="BA">BA</option>
                  <option value="MBBS">MBBS</option>
                  <option value="M.A">M.A</option>
                  <option value="MBA">MBA</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Last Year Marks</label>
                <input
                  type="number"
                  name="lastYearMarks"
                  step="0.01"
                  value={formData.lastYearMarks}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* ============ Skills ============ */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-purple-600 pl-3 bg-purple-50 py-2 rounded">
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">Technical Skills</label>
                <input
                  type="text"
                  name="technicalSkills"
                  value={formData.technicalSkills}
                  onChange={handleChange}
                  placeholder="e.g., React, Python"
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Soft Skills</label>
                <input
                  type="text"
                  name="softSkills"
                  value={formData.softSkills}
                  onChange={handleChange}
                  placeholder="e.g., Communication, Leadership"
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Specialization</label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  placeholder="e.g., AI/ML, Cybersecurity"
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* ============ Preferences ============ */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-orange-600 pl-3 bg-orange-50 py-2 rounded">
              Job Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-medium mb-1">Preferred Sector</label>
                <select
                  name="preferredSector"
                  value={formData.preferredSector}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">-- Select Sector --</option>
                  <option value="IT & Software">IT & Software</option>
                  <option value="Banking & Finance">Banking & Finance</option>
                  <option value="Oil, Gas & Energy">Oil, Gas & Energy</option>
                  <option value="FMCG">FMCG</option>
                  <option value="Telecom">Telecom</option>
                  <option value="Infrastructure & Construction">Infrastructure & Construction</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Retail">Retail</option>
                  <option value="Education">Education</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Media & Entertainment">Media & Entertainment</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Preferred Location</label>
                <select
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">-- Select Location --</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Gurugram">Gurugram</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Gurgaon">Gurgaon</option>
                  <option value="Manesar">Manesar</option>
                  <option value="Goa">Goa</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-10 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
