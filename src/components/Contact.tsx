import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:diego.martfue@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-gradient"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, collaborations, or opportunities. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a href="mailto:diego.martfue@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={18} className="text-primary" /> diego.martfue@gmail.com
              </a>
              <a href="https://github.com/diegomartfue" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} className="text-primary" /> github.com/diegomartfue
              </a>
              <a href="https://www.linkedin.com/in/diego-martinez-b5518b28b/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} className="text-primary" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:brightness-110 transition-all"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
