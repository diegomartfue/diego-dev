import { useState, useEffect } from "react";
import { Github, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Projects", "Skills", "Experience", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="font-mono text-lg font-medium text-foreground hover:text-primary transition-colors">
          Diego Martinez
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </button>
          ))}
          <a href="https://github.com/diegomartfue" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-border/30 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                  {l}
                </button>
              ))}
              <a href="https://github.com/diegomartfue" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
