import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ContactusSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // --- HubSpot Configuration ---
  const HUBSPOT_PORTAL_ID = "243005631";
  const HUBSPOT_FORM_GUID = "049aa399-5b3d-40a3-b636-23488423e41b";

  // --- Animation Setup ---
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // --- Form Logic ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (form.phone && !/^[0-9\s+-]{10,15}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    const hubspotApiUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;
    const hubspotPayload = {
      fields: [
        { name: "firstname", value: form.firstName },
        { name: "lastname", value: form.lastName },
        { name: "email", value: form.email },
        { name: "phone", value: form.phone },
        { name: "descriptions", value: form.message },
      ],
    };

    try {
      await axios.post(hubspotApiUrl, hubspotPayload);
      setSubmissionStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("HubSpot submission failed:", error);
      setSubmissionStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-black text-white px-4 py-10 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12">
        {/* --- Left Side: Text Content --- */}
        <motion.div
          className="flex flex-col justify-center"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch Today
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Have a question or need more information? Reach out to our team
            today to discover how OnceUpon AI can transform your brand's
            narrative and elevate your online presence.
          </p>
        </motion.div>

        {/* --- Right Side: Contact Form --- */}
        <motion.form
          onSubmit={handleSubmit}
          noValidate
          className="contact-form bg-[#18181b] text-white p-8 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-700"
          variants={formVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="flex flex-col" variants={fieldVariants}>
            <label htmlFor="firstName" className="mb-1 text-sm font-medium">
              First name *
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className={`bg-[#23232a] border rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                errors.firstName ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
            )}
          </motion.div>

          <motion.div className="flex flex-col" variants={fieldVariants}>
            <label
              htmlFor="lastName"
              className="mb-1 text-sm font-medium text-white"
            >
              Last name *
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className={`bg-[#23232a] border rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                errors.lastName ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.lastName && (
              <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
            )}
          </motion.div>

          <motion.div
            className="md:col-span-2 flex flex-col"
            variants={fieldVariants}
          >
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`bg-[#23232a] border rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </motion.div>

          <motion.div
            className="md:col-span-2 flex flex-col"
            variants={fieldVariants}
          >
            <label htmlFor="phone" className="mb-1 text-sm font-medium">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={`bg-[#23232a] border rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                errors.phone ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
          </motion.div>

          <motion.div
            className="md:col-span-2 flex flex-col"
            variants={fieldVariants}
          >
            <label htmlFor="message" className="mb-1 text-sm font-medium">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`bg-[#23232a] border rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                errors.message ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              disabled={loading}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </motion.div>

          <motion.div className="md:col-span-2" variants={fieldVariants}>
            <button
              type="submit"
              className="w-full bg-teal-400 text-black py-2 rounded-full font-semibold hover:bg-teal-300 transition-all duration-300 shadow disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </motion.div>

          {submissionStatus && (
            <motion.div
              className="md:col-span-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {submissionStatus === "success" && (
                <p className="text-green-400">
                  Thank you for your message! We'll be in touch soon.
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </motion.div>
          )}
        </motion.form>
      </div>
    </div>
  );
}

export default ContactusSection;
