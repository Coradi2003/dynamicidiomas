import { motion } from "framer-motion";
import { ArrowRight, Globe, BookOpen, Users } from "lucide-react";
import logo from "@/assets/logo-dynamic.png";

const HeroSection = () => {
  return (
    <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Radial glow */}
      <div className="hero-glow absolute inset-0 z-[1]" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.img
            src={logo}
            alt="Dynamic Idiomas"
            className="mb-8 h-40 w-auto drop-shadow-2xl md:h-52"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          />

          <motion.h1
            className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Fale o mundo.{" "}
            <span className="text-gradient">Sem limites.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Método dinâmico e imersivo para inglês, espanhol, francês, italiano e alemão. Aulas presenciais e online, particulares ou em turmas reduzidas.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a
              href="https://wa.me/5551986356096"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              Comece agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#cursos"
              className="flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Conheça os cursos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { icon: Globe, label: "5 Idiomas", desc: "EN · ES · FR · IT · DE" },
              { icon: Users, label: "Turmas de 5", desc: "Máx. por turma" },
              { icon: BookOpen, label: "Presencial & Online", desc: "Você escolhe" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card flex items-center gap-4 rounded-2xl px-8 py-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-display text-xl font-bold">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
