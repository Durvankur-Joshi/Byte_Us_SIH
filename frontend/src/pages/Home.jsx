import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">
          Find the Right Internship for You
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Answer a few questions and get 3–5 personalized matches.
        </p>
        <Link
          to="/form"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Now
        </Link>
      </section>

      {/* Steps Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-blue-100 rounded-lg p-6 w-40">
            <span className="text-3xl">📝</span>
            <p className="mt-2 font-medium">Fill Details</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 w-40">
            <span className="text-3xl">🔎</span>
            <p className="mt-2 font-medium">Get Matches</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 w-40">
            <span className="text-3xl">📄</span>
            <p className="mt-2 font-medium">View Details</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 w-40">
            <span className="text-3xl">🚀</span>
            <p className="mt-2 font-medium">Apply</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-green-100 p-4 rounded-lg w-32">💻 IT</div>
          <div className="bg-pink-100 p-4 rounded-lg w-32">🎨 Design</div>
          <div className="bg-yellow-100 p-4 rounded-lg w-32">📚 Teaching</div>
          <div className="bg-green-200 p-4 rounded-lg w-32">🌱 Social Work</div>
          <div className="bg-gray-200 p-4 rounded-lg w-32">⚙️ Engineering</div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-12 bg-white text-center">
        <p className="text-gray-700 text-lg">Trusted by 1 Lakh+ Students</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-6 text-center text-sm">
        <p>About | FAQs | Contact | Helpline: 1800-XXXX-XX</p>
        <p className="mt-2">© {new Date().getFullYear()} PM Internship Scheme. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
