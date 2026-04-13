import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layers, Brain, Wrench, Lightbulb } from "lucide-react";

const groups = [
  { icon: Code, label: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"] },
  { icon: Layers, label: "Frameworks", items: ["FastAPI", "React", "SvelteKit", "Node.js", "Express"] },
  { icon: Brain, label: "AI/ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "FAISS", "Ollama", "LangChain", "Claude API"] },
  { icon: Wrench, label: "Tools", items: ["Docker", "Git", "GitHub", "Notion API", "Vite", "Tailwind CSS"] },
  { icon: Lightbulb, label: "Concepts", items: ["RAG", "Multi-Agent Systems", "MCP", "Backtracking", "Transformers", "NLP"] },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-gradient"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <g.icon size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">{g.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className="text-xs font-mono px-3 py-1.5 rounded-md bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
