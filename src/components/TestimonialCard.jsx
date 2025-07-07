import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const TestimonialCard = ({ testimonial, inView }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  // --- Shine Effect Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shineOpacity = useTransform(mouseY, [0, 200], [0.5, 0]); // Opacity decreases as mouse moves down
  const shineX = useTransform(mouseX, (val) => `${val - 100}px`); // Position shine based on mouse
  const shineY = useTransform(mouseY, (val) => `${val - 100}px`);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const localMouseX = e.clientX - rect.left;
    const localMouseY = e.clientY - rect.top;
    const xPct = localMouseX / width - 0.5;
    const yPct = localMouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    mouseX.set(localMouseX);
    mouseY.set(localMouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    mouseX.set(-100); // Move shine off-screen
    mouseY.set(-100);
  };

  // --- Animated Border Logic ---
  const borderVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  const { img, name, text, tags } = testimonial;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full w-full rounded-xl bg-gray-800/70 backdrop-blur-sm border border-gray-700 overflow-hidden"
    >
      {/* --- NEW: Shine Effect --- */}
      <motion.div
        className="absolute"
        style={{
          top: shineY,
          left: shineX,
          width: 200,
          height: 200,
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0) 70%)",
          opacity: shineOpacity,
          pointerEvents: "none", // Ensure it doesn't block mouse events
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Animated SVG Border */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "translateZ(20px)" }}
      >
        <defs>
          <linearGradient
            id="animated-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#06b6d4" /> {/* cyan-500 */}
            <stop offset="100%" stopColor="#8b5cf6" /> {/* violet-500 */}
          </linearGradient>
        </defs>
        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="11"
          stroke="url(#animated-gradient)"
          strokeWidth="2"
          variants={borderVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
        />
      </motion.svg>

      {/* Card Content */}
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="p-6 rounded-lg text-white flex flex-col items-center text-center h-full"
      >
        <img
          src={img}
          alt={`Testimonial from ${name}`}
          className="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400 object-cover"
          style={{ transform: "translateZ(20px)" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/96x96/334155/e0f2fe?text=User";
          }}
        />
        <h3
          className="text-xl font-bold mb-2"
          style={{ transform: "translateZ(20px)" }}
        >
          {name}
        </h3>
        <div
          className="flex flex-wrap justify-center gap-2 mb-4"
          style={{ transform: "translateZ(20px)" }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-cyan-600/50 border border-cyan-400 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p
          className="text-gray-300 text-sm flex-grow"
          style={{ transform: "translateZ(20px)" }}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;