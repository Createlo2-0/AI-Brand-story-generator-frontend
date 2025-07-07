import Testimonial from "./Testimonial";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function TestimonialsSection() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Raj Patel - Marketing Director, GlobalTech",
      text: "Using OnceUpon AI was a game-changer for our brand. The interactive features helped us boost engagement and drive conversions effectively.",
      tags: ["Engagement", "Loyalty"],
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sara Thompson - Founder, GreenLeaf Co.",
      text: "OnceUpon AI's SEO optimization strategies significantly improved our online visibility and attracted a wider audience to our brand.",
      tags: ["Innovation", "Presence"],
    },
    {
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      name: "Chris Lee - Creative Director, BrightMinds Agency",
      text: "The brand story created by OnceUpon AI captured the essence of our brand perfectly. It brought our vision to life in a compelling and authentic way.",
      tags: ["Sustainability", "Impact"],
    },
    {
      img: "https://randomuser.me/api/portraits/women/21.jpg",
      name: "Aisha Khan - CEO, Connectify",
      text: "The seamless integration and powerful storytelling tools from OnceUpon AI have revolutionized our content strategy.",
      tags: ["Productivity", "Storytelling"],
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "James Smith - Product Manager, Innovate Inc.",
      text: "The platform's ability to generate emotionally resonant narratives in seconds is unparalleled. A must-have for any creative team.",
      tags: ["Creativity", "Speed"],
    },
    {
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Priya Sharma - Brand Strategist, Visionary Brands",
      text: "We saw a tangible impact on brand loyalty and audience connection after implementing the narratives created by OnceUpon AI.",
      tags: ["Impact", "Loyalty"],
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full bg-black py-16 px-4 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
      >
        What Our Clients Say
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl place-items-center"
      >
        {testimonials.map((t, i) => (
          <motion.div key={t.name + i} variants={itemVariants}>
            <Testimonial {...t} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
