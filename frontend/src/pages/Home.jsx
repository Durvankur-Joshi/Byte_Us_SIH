import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FeatureCard({ number, title, desc }) {
  return (
    <div className="shadow-md rounded-2xl bg-white p-6 text-center hover:shadow-lg transition-all duration-300 w-full">
      <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-xl font-bold">
        {number}
      </div>
      <h4 className="mt-2 font-semibold text-lg">{title}</h4>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">{desc}</p>
    </div>
  );
}

function StatsCard({ number, label }) {
  return (
    <div className="bg-blue-600 text-white rounded-2xl p-6 flex flex-col items-center justify-center">
      <span className="text-2xl sm:text-3xl font-bold">{number}</span>
      <span className="mt-2 text-sm sm:text-base">{label}</span>
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("EN");

  const handleNavigate = () => {
    navigate("/form");
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "EN" ? "HI" : "EN"));
  };

  const features = [
    { title: "Personalized", desc: "AI-based 3-5 internship suggestions." },
    { title: "Mobile Friendly", desc: "Works smoothly on phones." },
    { title: "Regional Languages", desc: "Adaptable for multiple Indian languages." },
    { title: "Simple UI", desc: "Easy to use for first-time users." }
  ];

  const stats = [
    { number: "50K+", label: "Students Helped" },
    { number: "100+", label: "Internships Available" },
    { number: "30+", label: "Partner Organizations" }
  ];

  return (
    <div id="home" className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white w-full overflow-x-hidden">

      {/* Header */}
      <header className="flex justify-between items-center px-4 sm:px-6 py-4 shadow-sm bg-white fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-700">PM Internship Scheme</h1>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <button onClick={toggleLanguage} className="px-3 py-1 rounded-lg border border-blue-600 text-blue-600 text-sm sm:text-base hover:bg-blue-600 hover:text-white transition">
            {language}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-4 sm:px-6 pt-24 pb-12 text-center md:text-left gap-8 w-full">
        <div className="max-w-xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            AI-Based Internship <span className="text-blue-600">Recommendation Engine</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Helping students across India discover the right opportunities based on skills, education, and interests.
          </p>
          <button
            onClick={handleNavigate}
            className="mt-6 px-6 py-3 text-base sm:text-lg rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition w-full sm:w-auto hover:scale-105"
          >
            Find My Internship
          </button>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="Students Illustration"
          className="w-56 sm:w-72 md:w-96 mx-auto max-w-full h-auto"
        />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 sm:px-6 py-12 w-full bg-white">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-8">How It Works</h3>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex-1 bg-blue-50 p-6 rounded-2xl shadow-md text-center">
            <h4 className="text-lg font-semibold mb-2">Step 1: Fill Profile</h4>
            <p className="text-gray-700 text-sm sm:text-base">Provide your education, skills, interests, and location preferences.</p>
          </div>
          <div className="flex-1 bg-blue-50 p-6 rounded-2xl shadow-md text-center">
            <h4 className="text-lg font-semibold mb-2">Step 2: AI Matching</h4>
            <p className="text-gray-700 text-sm sm:text-base">Our AI engine analyzes your profile and matches you with suitable internships.</p>
          </div>
          <div className="flex-1 bg-blue-50 p-6 rounded-2xl shadow-md text-center">
            <h4 className="text-lg font-semibold mb-2">Step 3: Apply</h4>
            <p className="text-gray-700 text-sm sm:text-base">Receive 3-5 personalized internship suggestions and apply with one click.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 sm:px-6 py-12 bg-blue-50 w-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-700">About the Scheme</h3>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-center text-sm sm:text-base">
          The PM Internship Scheme empowers youth from all corners of India—rural, tribal, urban, and remote areas—by connecting them to meaningful internships that match their skills and aspirations.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 py-12 w-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-8">Key Features</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
          {features.map((f, idx) => (
            <FeatureCard key={idx} number={idx+1} {...f} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 py-12 bg-blue-100 w-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-8">Our Impact</h3>
        <div className="grid gap-6 sm:grid-cols-3 w-full">
          {stats.map((s, idx) => (
            <StatsCard key={idx} {...s} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 text-center w-full mt-auto">
        <p className="text-sm sm:text-base">© 2025 PM Internship Scheme | Ministry of Corporate Affairs</p>
        <p className="mt-2 text-sm sm:text-base">Contact: support@pminternships.gov.in</p>
      </footer>

    </div>
  );
}