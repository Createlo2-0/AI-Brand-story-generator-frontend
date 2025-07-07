import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-start pt-30">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-20]"
        style={{ objectPosition: "center" }}
      >
        <source src={`${import.meta.env.BASE_URL}bg.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-transparent z-[-10]" />

      <div className="relative z-10 max-w-2xl px-4 md:px-8 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Stories that connect.
          <br />
          <span className="block">Intelligence that creates.</span>
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-8">
          No more staring at blank pages. Our story-generating AI transforms
          your ideas and briefs into powerful, emotionally resonant narratives
          in seconds. It’s fast, intelligent, and tailored to your voice —
          helping you communicate with clarity, creativity, and impact. Your
          story starts now.
        </p>
        <button
          className="border border-white bg-[#00bba7] px-6 py-2 rounded-full text-white font-medium hover:bg-white hover:text-black transition shadow-lg"
          style={{ boxShadow: "0 2px 12px 0 #14b8a6" }}
          onClick={() => navigate("/ai-generator")}
        >
          Start Now
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
