"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiCode,
  FiGlobe,
  FiDatabase,
  FiCpu,
  FiTool,
  FiZap,
} from "react-icons/fi";

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  color: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: FiCode,
    title: "Programming",
    color: "#6366f1",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
    ],
  },
  {
    icon: FiGlobe,
    title: "Web Development",
    color: "#10b981",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Node.js / Express", level: 85 },
      { name: "HTML / CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    icon: FiDatabase,
    title: "Databases",
    color: "#f59e0b",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    icon: FiCpu,
    title: "AI & Data Science",
    color: "#8b5cf6",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "NLP", level: 75 },
      { name: "CNNs / Deep Learning", level: 75 },
      { name: "Pandas / NumPy", level: 85 },
      { name: "PyTorch", level: 70 },
      { name: "Hugging Face", level: 70 },
    ],
  },
  {
    icon: FiZap,
    title: "AI Tools",
    color: "#ec4899",
    skills: [
      { name: "Prompt Engineering", level: 85 },
      { name: "LLM Agents", level: 75 },
      { name: "n8n", level: 70 },
      { name: "LangChain", level: 65 },
    ],
  },
  {
    icon: FiTool,
    title: "Tools & DevOps",
    color: "#06b6d4",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "REST API Design", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 65 },
    ],
  },
];

function SkillBar({ name, level, color, delay, inView }: { name: string; level: number; color: string; delay: number; inView: boolean }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-xs font-semibold"
          style={{ color }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-tertiary)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="py-20 sm:py-28" style={{ background: "var(--bg-secondary)" }}>
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            A diverse toolkit spanning full-stack development, AI/ML, and modern developer tools.
          </p>
          <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + catIdx * 0.1 }}
                className="rounded-2xl p-6 group"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--card-shadow)",
                }}
                whileHover={{ y: -4, boxShadow: "var(--card-shadow-hover)", transition: { type: "spring", stiffness: 500, damping: 25 } }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-150"
                    style={{ background: `${cat.color}15`, color: cat.color }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                </div>

                {/* Skill bars */}
                <div>
                  {cat.skills.map((skill, idx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      delay={0.2 + catIdx * 0.1 + idx * 0.08}
                      inView={inView}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
