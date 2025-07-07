import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    img: "/f1.jpg",
    title: "Interactive Features",
    desc: "Our services focus on enhancing your brand's narrative, engaging your audience, and increasing visibility. From creative storytelling to seamless user experiences, we are committed to helping your brand thrive in the digital landscape.",
  },
  {
    img: "/f2.jpg",
    title: "AI-Powered Storytelling",
    desc: "Leverage advanced AI to craft compelling stories tailored to your brand's voice. Our technology ensures every narrative is unique, engaging, and resonates with your target audience.",
  },
  {
    img: "/f3.jpg",
    title: "Seamless Integration",
    desc: "Integrate our AI solutions effortlessly into your existing workflow. Enjoy a smooth experience that boosts productivity and creativity without disrupting your current processes.",
  },
];

// Animation variants for the image slider
const sliderVariants = {
  incoming: (direction) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  active: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  outgoing: (direction) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
};

// Animation variants for the text content
const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

function FeatureSection() {
  const [index, setIndex] = useState(0);
  // Use a number for direction: 1 for next, -1 for prev
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full flex flex-col bg-black md:flex-row items-center justify-center gap-8 md:gap-16 px-4 md:px-12 py-16">
      {/* Image Container */}
      <div className="flex-shrink-0 w-full max-w-xs md:max-w-sm h-64 md:h-80 flex items-center justify-center overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index} // Key is crucial for AnimatePresence
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="outgoing"
            className="absolute inset-0 w-full h-full"
          >
            <div className="w-full h-full bg-black flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
              <img
                src={features[index].img}
                alt={features[index].title}
                className="object-cover w-full h-full"
                style={{ aspectRatio: "1 / 1" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text Content Container */}
      <div className="flex-1 text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={index} // Also key the text content for synchronized animation
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="transition-all duration-500"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {features[index].title}
            </h2>
            <p className="text-gray-200 mb-6 text-base md:text-lg">
              {features[index].desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <button
            className="rounded-full border border-white text-white p-2 hover:bg-white hover:text-black transition"
            onClick={handlePrev}
            aria-label="Previous Feature"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 4l-6 6 6 6" />
            </svg>
          </button>
          <button
            className="rounded-full border border-white text-white p-2 hover:bg-white hover:text-black transition"
            onClick={handleNext}
            aria-label="Next Feature"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M8 4l6 6-6 6" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center md:justify-start gap-2 mt-4">
          {features.map((_, i) => (
            <span
              key={i}
              className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-teal-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
