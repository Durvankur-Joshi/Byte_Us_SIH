import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { auth } from "../firebase";

function Navbar() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, []);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">PM Internship</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          {!user && <Link to="/register" className="hover:text-gray-200">Login / Register</Link>}
          {user && <span>Hi, {user.phoneNumber}</span>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
