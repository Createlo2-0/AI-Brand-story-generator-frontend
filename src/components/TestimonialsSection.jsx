import Testimonial from "./Testimonial";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function TestimonialsSection() {
  const testimonials = [
    {
      img: `${import.meta.env.BASE_URL}anjali.jpg`,
      name: "Anjali Karki",
      text: "I was responsible for the full lifecycle of prompt development and research integration. This involved conducting foundational research to establish a robust knowledge base, followed by an iterative process of prompt crafting, testing, and optimization. My goal was to maximize the relevance, coherence, and factual accuracy of the generated content, which was crucial for the project's success.",
      tags: ["Engagement"],
    },
    {
      img: `${import.meta.env.BASE_URL}chetana.jpg`,
      name: "Chetana Patil",
      text: "During my internship, I had the opportunity to work extensively with Google Cloud models and integrate Firebase into real projects. This experience helped me grow both technically and professionally. Today, I can proudly say that I am confident in building full-stack applications from scratch.",
      tags: ["Innovation"],
    },
    {
      img: `${import.meta.env.BASE_URL}vaishali.jpg`,
      name: "Vaishali Saini",
      text: "During my internship at Createlo, I was involved in testing, security, and HubSpot integration for OnceUpon AI. I ensured platform reliability through rigorous testing, implemented security measures to protect user data, and integrated HubSpot for streamlined marketing. I'm proud to have contributed to a secure and well-integrated platform.",
      tags: ["Sustainability"],
    },
    {
      img: `${import.meta.env.BASE_URL}yashraj.png`,
      name: "Yashraj Sathe",
      text: "He integrated the frontend and backend of OnceUpon AI, enabling a smooth, interactive AI storytelling experience.",
      tags: ["Impact"],
    },
    {
      img: `${import.meta.env.BASE_URL}pur.jpg`,
      name: "Purva Kasumbiwal",
      text: "She developed the UI for OnceUpon AI, delivering a clean, intuitive, and engaging digital web experience powered by AI storytelling.",
      tags: ["Loyalty"],
    },
    {
      img: `${import.meta.env.BASE_URL}smit.jpg`,
      name: "Smit Jogani",
      text: "As the backend developer for OnceUpon AI, I engineered the system for smooth data flow, seamless API integration, and scalable performance. I successfully integrated the GenAI with the frontend and backend to power our dynamic, AI-driven storytelling platform.",
      tags: ["Productivity"],
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
        What Our Intern's Say
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
