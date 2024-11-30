"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";

// Define the form data type
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

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;


  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
      setSuccess("");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timeout
  }, [error, success]);


  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for empty fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    // Send email using EmailJS
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        userId
      );

      setSuccess("Your message has been sent successfully!");
      setError("");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to send your message. Please try again.");
      setSuccess("");
      console.error("EmailJS Error:", err);
    }
  };

  return (
    <motion.form
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-col gap-4 md:gap-6 w-full mx-auto"
      onSubmit={handleSubmit}
    >
      {/* Error or success message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}

      <div className="flex flex-col md:flex-row gap-4 md:gap-x-6 w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input w-full"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="input w-full"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="textarea w-full"
      ></textarea>
      <button
        type="submit"
        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group self-center md:self-start"
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          Let's talk
        </span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
      </button>
    </motion.form>
  );
};

export default ContactForm;
