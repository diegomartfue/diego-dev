import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects", value: "5+" },
  { icon: Briefcase, label: "Roles", value: "3" },
  { icon: GraduationCap, label: "Degrees (in progress)", value: "2" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-gradient"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12"
        >
          I'm a Computer Science student at UTEP specializing in Data Science, entering the M.S. in Artificial Intelligence program in Fall 2026. I build AI agent pipelines at AI Innovations in the E Lead department at UTEP, develop web sites for the UTEP Writing Center, and lead technical initiatives for Google Developer Group on campus. I'm interested in LLMs, multi-agent systems, and full-stack development.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <s.icon className="mx-auto mb-3 text-primary" size={28} />
              <div className="text-3xl font-bold text-foreground mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
