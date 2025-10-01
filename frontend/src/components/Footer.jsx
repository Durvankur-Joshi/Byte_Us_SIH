function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-6">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Internship Finder. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
