import { motion } from "framer-motion";
import logo from "@/assets/logo-dynamic.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-border/30 bg-background/70 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <img src={logo} alt="Dynamic Idiomas" className="h-12 w-auto" />
        <div className="hidden items-center gap-8 md:flex">
          {["Início", "Cursos", "Método", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/5551986356096"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/30"
        >
          Matricule-se
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
