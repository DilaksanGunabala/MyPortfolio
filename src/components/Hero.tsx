"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from "react-icons/fi";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--hero-gradient-start), var(--hero-gradient-end))",
      }}
    >
      <ParticleBackground />

      {/* Decorative orbs - hidden overflow prevents horizontal scroll on mobile */}
      <div className="absolute top-20 -left-10 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full opacity-20 blur-3xl" style={{ background: "#6366f1" }} />
      <div className="absolute bottom-20 -right-10 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-15 blur-3xl" style={{ background: "#8b5cf6" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-28">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
          style={{
            background: "var(--bg-tertiary)",
            border: "1px solid var(--border-color)",
            color: "var(--text-secondary)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Dilaksan</span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="text-2xl sm:text-4xl md:text-5xl font-semibold"
            style={{ color: "var(--text-secondary)" }}
          >
            Full-Stack Developer &
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="text-2xl sm:text-4xl md:text-5xl font-semibold"
            style={{ color: "var(--text-secondary)" }}
          >
            Data Science Enthusiast
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-2 sm:px-0"
          style={{ color: "var(--text-secondary)" }}
        >
          Computer Engineering undergraduate specializing in full-stack development,
          AI, and data-driven solutions. Building impactful software from Jaffna, Sri Lanka.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
        >
          <motion.button
            onClick={() => handleScroll("#projects")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-white shadow-lg transition-shadow duration-300 ease-out"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 6px 25px rgba(99, 102, 241, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            View Projects
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold transition-colors duration-300 ease-out"
            style={{
              border: "2px solid var(--border-color)",
              color: "var(--text-primary)",
            }}
            whileHover={{
              scale: 1.05,
              borderColor: "#6366f1",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <FiDownload size={18} />
            Download CV
          </motion.a>

          <motion.button
            onClick={() => handleScroll("#contact")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold transition-colors duration-300 ease-out"
            style={{
              background: "var(--bg-tertiary)",
              color: "var(--text-primary)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href="https://github.com/DilaksanGunabala"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl transition-colors duration-300 ease-out"
            style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)" }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gunabala-dilaksan-0ba2b326a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl transition-colors duration-300 ease-out"
            style={{ background: "var(--bg-tertiary)", color: "var(--text-secondary)" }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleScroll("#about")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full"
            style={{ color: "var(--text-tertiary)" }}
            aria-label="Scroll down"
          >
            <FiArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
