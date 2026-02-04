"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Open mailto link as fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:gunabaladilaksan1999@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "gunabaladilaksan1999@gmail.com",
      href: "mailto:gunabaladilaksan1999@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+94 76 260 6990",
      href: "tel:+94762606990",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Jaffna, Sri Lanka",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/DilaksanGunabala",
      color: "#333",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gunabala-dilaksan-0ba2b326a/",
      color: "#0077b5",
    },
    {
      icon: FiMail,
      label: "Email",
      href: "mailto:gunabaladilaksan1999@gmail.com",
      color: "#ea4335",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28" style={{ background: "var(--bg-primary)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Let&apos;s create something amazing together.
          </p>
          <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-150 group"
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                    }}
                    whileHover={{ x: 8, transition: { type: "spring", stiffness: 500, damping: 25 } }}
                  >
                    <div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-950 text-primary-500 group-hover:scale-110 transition-transform duration-150">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-medium mb-0.5" style={{ color: "var(--text-tertiary)" }}>
                        {item.label}
                      </div>
                      <div className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className="p-3 rounded-xl transition-all duration-150"
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-secondary)",
                    }}
                    whileHover={{ y: -4, scale: 1.1, color: social.color, transition: { type: "spring", stiffness: 500, damping: 25 } }}
                    aria-label={social.label}
                  >
                    <Icon size={22} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>

              {/* Name */}
              <div className="mb-5">
                <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  <FiUser size={14} />
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-primary-500"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  <FiMail size={14} />
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150 focus:ring-2 focus:ring-primary-500"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  <FiMessageSquare size={14} />
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-150 focus:ring-2 focus:ring-primary-500"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-shadow"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 6px 25px rgba(99, 102, 241, 0.5)", transition: { type: "spring", stiffness: 500, damping: 25 } }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
