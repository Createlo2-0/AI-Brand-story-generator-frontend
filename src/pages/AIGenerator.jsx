import ContactForm from "../components/ContactForm";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AIGenerator() {
  const [story, setStory] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!story) return;
    try {
      await navigator.clipboard.writeText(story);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center pt-10 px-6 bg-black">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 py-10 mt-4">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full lg:w-[50%] h-[85vh] rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 ease-in-out group cursor-pointer"
        >
          <img
            src="/robot-human.jpg"
            alt="AI Story Generator"
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10 transition-opacity duration-500 group-hover:opacity-90" />
          <motion.div
            className="relative z-20 h-full flex flex-col justify-center items-start px-8 md:px-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              AI Story Generator
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed drop-shadow">
              Create a unique story with the help of AI. Fill out the form below
              to generate your personalized story.
            </p>
          </motion.div>
        </motion.div>

        {/* Form Area */}
        <div className="flex-1 flex flex-col justify-center">
          <ContactForm setStory={setStory} />
        </div>
      </div>

      {/* Story Output */}
      {story && (
        <motion.div
          className="w-full mt-8 mb-6 bg-[#111] border border-white rounded-lg p-8 shadow-lg relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            Generated Story
          </h3>
          <button
            onClick={handleCopy}
            className="absolute top-8 right-8 bg-white text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <p className="text-lg text-gray-200 whitespace-pre-wrap">{story}</p>
        </motion.div>
      )}
    </div>
  );
}
