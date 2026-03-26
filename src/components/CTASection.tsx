import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="glass-card glow-border relative overflow-hidden rounded-3xl p-12 text-center md:p-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 -z-10 opacity-30" style={{ background: "radial-gradient(circle at 50% 50%, hsl(142, 72%, 45%, 0.2), transparent 70%)" }} />

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Pronto para começar?</p>
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold md:text-5xl">
            Sua jornada para a <span className="text-gradient">fluência</span> começa aqui
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Agende uma aula experimental gratuita e descubra por que a Dynamic Idiomas é a escolha de quem quer resultados de verdade.
          </p>
          <motion.a
            href="https://wa.me/5551986356096"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-bold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Matricule-se
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
