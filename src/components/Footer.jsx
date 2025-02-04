import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setError("Please agree to the terms and conditions before subscribing.");
      return;
    }
    console.log("Subscribed:", email);
    setError("");
    setEmail("");
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6 md:px-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-semibold text-white mb-4">
            Promaket Links and Services
          </h1>
          <p className="text-gray-400 leading-7">
            Gain access to the market. Get more visibility. Make more sales.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-medium text-white mb-4">Quick Links</h2>
          <nav className="space-y-2">
            <Link to="/about" className="block hover:text-gray-100 transition">
              About Us
            </Link>
            <Link to="/service" className="block hover:text-gray-100 transition">
              Our Services
            </Link>
            <Link to="/partners" className="block hover:text-gray-100 transition">
              Our Partners
            </Link>
            <Link to="/terms" className="block hover:text-gray-100 transition">
              Terms & Conditions
            </Link>
          </nav>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-medium text-white mb-4">Contact Us</h2>
          <ul className="space-y-2 text-gray-400">
            <li>📞 +234 123 456 7890</li>
            <li className="text-shrink">📧 promaketlinksandservices@gmail.com</li>
            <li>📍 Nigeria</li>
          </ul>
        </div>

        {/* Subscription Form */}
        <div>
          <h2 className="text-lg font-medium text-white mb-4">Stay Updated</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex items-center text-gray-400 text-sm">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              <label htmlFor="terms">
                I agree to the{" "}
                <span className="underline cursor-pointer"><Link to="/terms">terms and conditions</Link></span>.
              </label>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 transition text-white py-2 rounded-lg font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-gray-500 text-sm text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Promaket Links and Services. All Rights Reserved.</p>
          <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
            <Link to="/privacy" className="hover:text-gray-100">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-100">Terms of Service</Link>
            <Link to="/support" className="hover:text-gray-100">Support</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
