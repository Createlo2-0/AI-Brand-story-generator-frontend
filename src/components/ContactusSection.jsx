export function ContactusSection() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch Today
          </h1>
          <p className="text-lg md:text-xl text-white">
            Have a question or need more information? Reach out to our team
            today to discover how OnceUpon AI can transform your brand's
            narrative and elevate your online presence.
          </p>
        </div>
        <form className="contact-form bg-[#18181b] text-white p-8 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-700">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1 text-sm font-medium">
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="bg-[#23232a] border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="First name"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="mb-1 text-sm font-medium text-white"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="bg-[#23232a] border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Last name"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="bg-[#23232a] border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Email"
              required
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="phone" className="mb-1 text-sm font-medium">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="bg-[#23232a] border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Phone"
            />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm font-medium">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="bg-[#23232a] border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-teal-400 text-black py-2 rounded-full font-semibold hover:bg-teal-300 transition-all duration-300 shadow"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactusSection;