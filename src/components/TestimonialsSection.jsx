import Testimonial from "./Testimonial";

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
  ];
  return (
    <section className="w-full bg-black py-16 px-4 md:px-0 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Intern Testimonials
      </h2>
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-10 
          w-full 
          max-w-6xl
        "
      >
        {testimonials.map((t, i) => (
          <Testimonial key={t.name + i} {...t} />
        ))}
      </div>
    </section>
  );
}
export default TestimonialsSection;