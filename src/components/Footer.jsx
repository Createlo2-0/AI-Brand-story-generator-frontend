import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-12 pb-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Subscribe Section */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Be the First to Receive the Latest News
          </h2>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-72 px-4 py-2 rounded-full bg-[#18181b] border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-2 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
            >
              Subscribe <span aria-hidden>→</span>
            </button>
          </form>
        </div>

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <span className="text-lg font-light tracking-widest text-gray-300">
              ONCEUPON AI
            </span>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left">
            {/* Navigation */}
            <div>
              <h3 className="font-semibold mb-2">Navigation</h3>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link to="/" className="hover:text-teal-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-generator"
                    className="hover:text-teal-400 transition"
                  >
                    AI Generate
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-2">Social</h3>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>
                  <a
                    href="mailto:info@createlo.in"
                    className="hover:text-teal-400 transition"
                  >
                    info@createlo.in
                  </a>
                </li>
                <li>Tel. +91 9561166109</li>
                <li>Pune, Maharashtra, India.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-4 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} OnceUpon AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
