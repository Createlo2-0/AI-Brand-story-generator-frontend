import { useState } from "react";
import axios from "axios";

const INDUSTRY_OPTIONS = [
  "Technology",
  "Healthcare",
  "Education",
  "Retail",
  "Finance",
  "Manufacturing",
  "Hospitality",
  "Transportation",
  "Real Estate",
  "Entertainment",
  "Media",
  "Energy",
  "Telecommunications",
  "Agriculture",
  "Automotive",
  "Construction",
  "Consulting",
  "E-commerce",
  "Legal",
  "Non-Profit",
  "Pharmaceutical",
  "Food & Beverage",
  "Travel",
  "Sports",
  "Government",
  "Other",
];

const TONE_OPTIONS = [
  "Professional",
  "Casual",
  "Inspiring",
  "Friendly",
  "Witty",
  "Empathetic",
  "Confident",
  "Motivational",
  "Playful",
  "Serious",
  "Formal",
  "Conversational",
  "Persuasive",
  "Optimistic",
  "Educational",
  "Authoritative",
  "Innovative",
  "Supportive",
  "Bold",
  "Calm",
  "Other",
];

export default function ContactForm({ setStory }) {
  const [form, setForm] = useState({
    companyName: "",
    mission: "",
    vision: "",
    industry: "",
    tone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStory(""); // Clear previous story

    try {
      const response = await axios.post(
        "https://ai-brand-story-generator.onrender.com/api/stories/brand",
        {
          companyName: form.companyName,
          mission: form.mission,
          vision: form.vision,
          industry: form.industry,
          tone: form.tone,
        }
      );
      setStory(response.data.story || "No story generated.");
    } catch (error) {
      setStory("Failed to generate story. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black text-white p-8 rounded-lg shadow-2xl border border-white w-full max-w-lg mx-auto mt-8 lg:mt-0 animate-fade-in"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Story Starts Here
      </h2>
      <div className="mb-4">
        <label className="block text-sm mb-1 font-medium text-white">
          Company Name *
        </label>
        <input
          name="companyName"
          type="text"
          placeholder="Enter Company's Name"
          value={form.companyName}
          onChange={handleChange}
          className="w-full bg-black border-b border-white py-2 px-1 focus:outline-none placeholder-gray-400 text-white"
          required
          disabled={loading}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1 font-medium text-white">
          Company Mission *
        </label>
        <input
          name="mission"
          type="text"
          placeholder="Mission"
          value={form.mission}
          onChange={handleChange}
          className="w-full bg-black border-b border-white py-2 px-1 focus:outline-none placeholder-gray-400 text-white"
          required
          disabled={loading}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1 font-medium text-white">
          Company Vision
        </label>
        <input
          name="vision"
          type="text"
          placeholder="Vision"
          value={form.vision}
          onChange={handleChange}
          className="w-full bg-black border-b border-white py-2 px-1 focus:outline-none placeholder-gray-400 text-white"
          disabled={loading}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-1 font-medium text-white">
          Industry *
        </label>
        <select
          name="industry"
          value={form.industry}
          onChange={handleChange}
          className="w-full bg-black border-b border-white py-2 px-1 focus:outline-none text-white"
          required
          disabled={loading}
        >
          <option value="">Select Industry</option>
          {INDUSTRY_OPTIONS.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-sm mb-1 font-medium text-white">
          Tone *
        </label>
        <select
          name="tone"
          value={form.tone}
          onChange={handleChange}
          className="w-full bg-black border-b border-white py-2 px-1 focus:outline-none text-white"
          required
          disabled={loading}
        >
          <option value="">Select Tone</option>
          {TONE_OPTIONS.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className={`w-full border border-white py-2 rounded-full flex items-center justify-center transition duration-300 ${
          loading
            ? "opacity-60 cursor-not-allowed"
            : "hover:bg-white hover:text-black"
        }`}
        disabled={loading}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {loading ? "Generating..." : "Generate"}
      </button>
    </form>
  );
}
