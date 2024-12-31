"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiEdit3, FiMessageSquare } from "react-icons/fi";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Explicitly serialize the formData into a plain object
    const serializedData: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_q8qwpa9", // EmailJS Service ID
        "template_d04cyup", // EmailJS Template ID
        serializedData, // Serialized data
        "4LFq5k_b2yjRW8foK" // EmailJS User ID/Public API Key
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Message sending failed:", error.text);
          alert("Message sending failed. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="container mx-auto px-6 md:px-16 lg:px-20 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-bold mb-8 font-serif text-gray-200"
      >
        Contact Me
      </motion.h2>
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ staggerChildren: 0.2, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 md:p-10 rounded-lg shadow-lg max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <FiUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-700" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-3 pl-10 rounded-md bg-blue-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative">
            <FiMail className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-700" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full p-3 pl-10 rounded-md bg-blue-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative md:col-span-2">
            <FiEdit3 className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-700" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 pl-10 rounded-md bg-blue-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative md:col-span-2">
            <FiMessageSquare className="absolute top-4 left-3 text-gray-700" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              placeholder="Your Message"
              className="w-full p-3 pl-10 rounded-md bg-blue-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-block w-full md:w-auto ${
              isSubmitting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
            } text-white font-bold py-3 px-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default ContactForm;
