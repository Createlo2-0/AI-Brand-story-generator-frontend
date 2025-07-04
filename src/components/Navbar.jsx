import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "AI Generator", path: "/ai-generator" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-6 py-3 bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-white/10">
      <div className="flex items-center gap-2">
        <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
          ONCEUPON AI
        </span>
      </div>
      <button
        className="md:hidden ml-auto text-white focus:outline-none"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          )}
        </svg>
      </button>
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-3 md:gap-6">
        {NAV_LINKS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-2 rounded-full border border-white font-semibold transition text-sm
                ${
                  isActive
                    ? "bg-teal-500 text-white shadow-lg font-bold border-teal-400 scale-105"
                    : "text-white hover:bg-white hover:text-black"
                }`}
              style={isActive ? { boxShadow: "0 2px 12px 0 #14b8a6" } : {}}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 flex flex-col items-center gap-2 py-4 md:hidden animate-fade-in">
          {NAV_LINKS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`w-11/12 text-center px-6 py-3 rounded-full border font-semibold transition text-base
                  ${
                    isActive
                      ? "bg-teal-500 text-white shadow-lg font-bold border-teal-400 scale-105"
                      : "border-white text-white hover:bg-white hover:text-black"
                  }`}
                style={isActive ? { boxShadow: "0 2px 12px 0 #14b8a6" } : {}}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}