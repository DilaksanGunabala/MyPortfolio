"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiMail, FiPhone, FiCode, FiDatabase, FiCpu } from "react-icons/fi";

const highlights = [
  {
    icon: FiCode,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with modern frameworks and technologies.",
  },
  {
    icon: FiCpu,
    title: "AI & Machine Learning",
    description: "Developing intelligent solutions using deep learning, NLP, and computer vision.",
  },
  {
    icon: FiDatabase,
    title: "Data Science",
    description: "Extracting insights from data using statistical analysis and predictive modeling.",
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="about"
      className="py-20 sm:py-28"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Gunabala Dilaksan
              </h3>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                I am a motivated Computer Engineering undergraduate at the University of Jaffna,
                specializing in Data Science. With hands-on experience in full-stack web development,
                machine learning, and AI-driven solutions, I am passionate about solving real-world
                problems through scalable software and intelligent systems.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                My journey in technology spans across building production-grade web applications,
                developing predictive models, and exploring the intersection of AI with practical
                engineering challenges. I thrive in collaborative environments and continuously
                seek opportunities to grow as a developer and researcher.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3" style={{ color: "var(--text-secondary)" }}>
                  <FiMapPin className="text-primary-500 shrink-0" size={18} />
                  <span>Jaffna, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3" style={{ color: "var(--text-secondary)" }}>
                  <FiMail className="text-primary-500 shrink-0" size={18} />
                  <a href="mailto:gunabaladilaksan1999@gmail.com" className="animated-underline hover:text-primary-500 transition-colors break-all text-sm sm:text-base">
                    gunabaladilaksan1999@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3" style={{ color: "var(--text-secondary)" }}>
                  <FiPhone className="text-primary-500 shrink-0" size={18} />
                  <a href="tel:+94762606990" className="animated-underline hover:text-primary-500 transition-colors">
                    +94 76 260 6990
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <div className="space-y-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="group rounded-2xl p-6 cursor-default transition-all duration-200 ease-out"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    boxShadow: "var(--card-shadow)",
                  }}
                  whileHover={{ x: 8,y: -5, scale: 1.03, boxShadow: "var(--card-shadow-hover)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 shrink-0 group-hover:scale-110 transition-transform duration-200 ease-out">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p style={{ color: "var(--text-secondary)" }} className="text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: "9+", label: "Projects" },
                { value: "1+", label: "Years Exp" },
                { value: "10+", label: "Technologies" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl"
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
