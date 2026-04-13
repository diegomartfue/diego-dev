import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Spendwise",
    desc: "Personal finance MCP server and AI agent with natural language transaction logging. Say \"spent $45 at HEB\" and it logs it automatically.",
    tags: ["TypeScript", "Node.js", "Claude API", "Notion API", "MCP"],
    github: "https://github.com/diegomartfue/spendwise",
    accent: "from-emerald-500 to-emerald-700",
    borderAccent: "hover:border-emerald-500/40",
  },
  {
    name: "Classroom-LM",
    desc: "AI-powered classroom assistant with a RAG pipeline, local LLM support via Ollama, SymPy math verification, and automatic model routing.",
    tags: ["FastAPI", "React", "TypeScript", "Ollama", "FAISS", "RAG"],
    github: "https://github.com/diegomartfue",
    accent: "from-blue-500 to-blue-700",
    borderAccent: "hover:border-blue-500/40",
    badge: "In Progress",
  },
  {
    name: "Music Genre Classifier",
    desc: "Compared 5 ML models on the FMA Large dataset — 106,574 tracks across 161 genres. Achieved 67% accuracy with a Balanced DNN.",
    tags: ["Python", "TensorFlow", "scikit-learn", "pandas", "Colab"],
    github: "https://github.com/diegomartfue",
    accent: "from-purple-500 to-purple-700",
    borderAccent: "hover:border-purple-500/40",
  },
  {
    name: "GPT from Scratch",
    desc: "Built a character-level GPT from scratch in PyTorch following Karpathy's Zero to Hero series. Implements tokenization, self-attention, multi-head attention, and transformer blocks.",
    tags: ["Python", "PyTorch", "Transformers", "NLP", "Colab"],
    github: "https://github.com/diegomartfue",
    accent: "from-amber-500 to-amber-700",
    borderAccent: "hover:border-amber-500/40",
  },
  {
    name: "Wordle (Java)",
    desc: "Full CLI Wordle clone built in Java from scratch. Features OOP design, real dictionary validation, puzzle number system, and colored letter feedback.",
    tags: ["Java", "OOP", "CLI", "Data Structures"],
    github: "https://github.com/diegomartfue",
    accent: "from-orange-500 to-orange-700",
    borderAccent: "hover:border-orange-500/40",
  },
  {
    name: "Sudoku Solver",
    desc: "Python Sudoku solver using backtracking, constraint propagation, and neighbor-based valid value inference. Visualizes the board with matplotlib.",
    tags: ["Python", "Backtracking", "Algorithms", "matplotlib", "Colab"],
    github: "https://github.com/diegomartfue",
    accent: "from-teal-500 to-teal-700",
    borderAccent: "hover:border-teal-500/40",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-gradient"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-xl p-6 flex flex-col transition-all duration-300 ${p.borderAccent} group`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                {p.badge && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                    {p.badge}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink size={14} /> GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
