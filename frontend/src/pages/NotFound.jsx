import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center py-12">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">Oops! Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back Home
      </Link>
    </div>
  );
}

export default NotFound;
