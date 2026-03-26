import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Empresária",
    text: "Em 8 meses eu já estava fazendo reuniões em inglês com confiança. O método da Dynamic é simplesmente outro nível!",
  },
  {
    name: "Rafael Oliveira",
    role: "Desenvolvedor",
    text: "Tentei vários cursos antes. Na Dynamic, pela primeira vez, senti que realmente estava aprendendo a falar, não só decorar regras.",
  },
  {
    name: "Ana Beatriz Costa",
    role: "Estudante",
    text: "As aulas são super dinâmicas e divertidas. Aprendi espanhol muito mais rápido do que imaginava!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Depoimentos</p>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Quem aprende, <span className="text-gradient">recomenda</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass-card rounded-2xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div>
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
