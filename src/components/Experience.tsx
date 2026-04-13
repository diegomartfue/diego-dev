import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Research Assistant — AI Innovations E Lead UTEP",
    org: "UTEP",
    period: "2025–Present",
    desc: "Building AI agent pipelines and multi-agent architectures under Dr. Kotal. Current project: Classroom-LM, an AI classroom assistant with RAG and local LLM support.",
  },
  {
    title: "Technical Officer — Google Developer Group (GDG)",
    org: "UTEP",
    period: "2025–Present",
    desc: "Lead technical workshops and events on campus. Organize developer talks and hackathons.",
  },
  {
    title: "Front-End Developer — UTEP Writing Center",
    org: "UTEP",
    period: "2024–Present",
    desc: "Build and maintain web tools for the Writing Center using modern frontend frameworks.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-gradient"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>

                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
