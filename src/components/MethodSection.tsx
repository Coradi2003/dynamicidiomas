import { motion } from "framer-motion";
import { Zap, Target, Headphones, TrendingUp } from "lucide-react";

const steps = [
  { icon: Headphones, title: "Imersão Total", desc: "Aulas 100% no idioma alvo desde o primeiro dia." },
  { icon: Target, title: "Foco em Conversação", desc: "Você fala desde a primeira aula. Prática real, resultados reais." },
  { icon: Zap, title: "Dinâmico & Rápido", desc: "Metodologia ágil que acelera seu aprendizado em até 3x." },
  { icon: TrendingUp, title: "Evolução Mensurável", desc: "Acompanhe seu progresso com avaliações contínuas." },
];

const MethodSection = () => {
  return (
    <section id="método" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Nosso método</p>
            <h2 className="font-display mb-6 text-3xl font-bold md:text-5xl">
              Aprender idiomas nunca foi tão{" "}
              <span className="text-gradient">natural</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Na Dynamic Idiomas, acreditamos que fluência se conquista com prática, imersão e o suporte certo. Nosso método exclusivo combina neurociência e técnicas modernas de ensino.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="glass-card rounded-2xl p-6 transition-all hover:border-primary/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display mb-2 text-base font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
