"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "University In-Course Marks Management System",
    description:
      "A comprehensive platform for managing and tracking university in-course marks with role-based access, automated grade calculations, and analytics dashboards.",
    tech: ["Next.js", "FastAPI", "MySQL"],
    github: "https://github.com/DilaksanGunabala",
    color: "#6366f1",
  },
  {
    title: "Satellite Imaging Based Agricultural Yield Prediction",
    description:
      "An AI-powered system that leverages satellite imagery and convolutional neural networks to predict agricultural crop yields with high accuracy.",
    tech: ["Python", "CNN", "TensorFlow", "OpenCV"],
    github: "https://github.com/DilaksanGunabala",
    color: "#10b981",
  },
  {
    title: "Lecture Hall Booking System",
    description:
      "A full-stack booking platform for university lecture halls with real-time availability, conflict detection, and administrative management features.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Figma"],
    github: "https://github.com/DilaksanGunabala",
    color: "#f59e0b",
  },
  {
    title: "Gym Management System",
    description:
      "A containerized gym management solution with membership tracking, workout plans, trainer assignments, and payment processing modules.",
    tech: ["Next.js", "FastAPI", "MySQL", "Docker"],
    github: "https://github.com/DilaksanGunabala",
    color: "#ef4444",
  },
  {
    title: "AI Forecasting — Energy Sector",
    description:
      "Machine learning models for energy consumption forecasting using time-series analysis, enabling data-driven decision making in the energy sector.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    github: "https://github.com/DilaksanGunabala",
    color: "#8b5cf6",
  },
  {
    title: "Tamil AI Spell Checker",
    description:
      "An NLP-based spell checker for the Tamil language using transformer models and custom-trained language models for accurate error detection and correction.",
    tech: ["Python", "NLP", "PyTorch", "Hugging Face"],
    github: "https://github.com/DilaksanGunabala",
    color: "#ec4899",
  },
  {
    title: "SaaS Task Management System",
    description:
      "A multi-tenant task management platform with team collaboration, project boards, real-time notifications, and JWT-based authentication.",
    tech: ["React", "Node.js", "PostgreSQL", "JWT"],
    github: "https://github.com/DilaksanGunabala",
    color: "#14b8a6",
  },
  {
    title: "Employee Management System",
    description:
      "A streamlined HR management application for tracking employee records, departments, attendance, and performance reviews.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/DilaksanGunabala",
    color: "#f97316",
  },
  {
    title: "Blogging Platform (Medium Clone)",
    description:
      "A feature-rich blogging platform inspired by Medium, with rich text editing, user following, article recommendations, and reading lists.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/DilaksanGunabala",
    color: "#06b6d4",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-20 sm:py-28" style={{ background: "var(--bg-primary)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            A collection of projects showcasing my expertise in full-stack development, AI, and data science.
          </p>
          <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--card-shadow)",
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.15)",
                transition: { type: "spring", stiffness: 300, damping: 30 },
              }}
            >
              {/* Color accent bar */}
              <div className="h-1 w-full" style={{ background: project.color }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon and links */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="p-3 rounded-xl transition-transform duration-300 ease-out group-hover:scale-110"
                    style={{ background: `${project.color}15`, color: project.color }}
                  >
                    <FiFolder size={24} />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg transition-colors duration-300 ease-out hover:text-primary-500"
                        style={{ color: "var(--text-tertiary)" }}
                        aria-label={`${project.title} GitHub`}
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                    <a
                      href={project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-colors duration-300 ease-out hover:text-primary-500"
                      style={{ color: "var(--text-tertiary)" }}
                      aria-label={`${project.title} link`}
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 leading-snug group-hover:text-primary-500 transition-colors duration-300 ease-out">
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4" style={{ borderTop: "1px solid var(--border-color)" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md"
                      style={{
                        background: `${project.color}12`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/DilaksanGunabala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors"
            style={{
              border: "2px solid var(--border-color)",
              color: "var(--text-secondary)",
            }}
            whileHover={{ scale: 1.05, borderColor: "#6366f1" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <FiGithub size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
