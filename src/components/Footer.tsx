"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-12 relative"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold mb-4">
            <span className="gradient-text">&lt;Dilaksan /&gt;</span>
          </a>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm animated-underline transition-colors hover:text-primary-500"
                style={{ color: "var(--text-secondary)" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mb-8">
            {[
              { icon: FiGithub, href: "https://github.com/DilaksanGunabala", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/gunabala-dilaksan-0ba2b326a/", label: "LinkedIn" },
              { icon: FiMail, href: "mailto:gunabaladilaksan1999@gmail.com", label: "Email" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-lg transition-colors"
                  style={{
                    background: "var(--bg-tertiary)",
                    color: "var(--text-secondary)",
                  }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-6" style={{ background: "var(--border-color)" }} />

          {/* Copyright */}
          <p className="text-sm text-center" style={{ color: "var(--text-tertiary)" }}>
            &copy; {new Date().getFullYear()} Gunabala Dilaksan. Built by V Jay Dilaks using Next.js & Tailwind CSS. 
            {/*<FiHeart className="inline text-red-500" size={14} />{" "}*/}
            
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg text-white z-40"
        style={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
