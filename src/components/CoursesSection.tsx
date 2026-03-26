import { motion } from "framer-motion";
import { Globe, BookOpen, Users, Monitor, Clock, Baby, UserCheck, GraduationCap } from "lucide-react";

const idiomas = [
  { name: "Inglês", flag: "🇺🇸" },
  { name: "Espanhol", flag: "🇪🇸" },
  { name: "Francês", flag: "🇫🇷" },
  { name: "Italiano", flag: "🇮🇹" },
  { name: "Alemão", flag: "🇩🇪" },
];

const diferenciais = [
  { icon: Monitor, title: "Presencial & Online", desc: "Escolha o formato que melhor se adapta à sua rotina." },
  { icon: UserCheck, title: "Aulas Particulares", desc: "Atenção 100% personalizada para acelerar sua evolução." },
  { icon: Users, title: "Turmas Reduzidas", desc: "Máximo de 5 alunos por turma para máxima interação." },
  { icon: Clock, title: "Horários Flexíveis", desc: "Manhã, tarde e noite de seg. a sex. e sábado pela manhã." },
  { icon: Baby, title: "Crianças", desc: "Aprendizado lúdico e engajante para os pequenos." },
  { icon: GraduationCap, title: "Jovens & Adultos", desc: "Do básico à fluência, com foco em conversação e resultados." },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="relative py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Nossos cursos</p>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            O idioma certo para o <span className="text-gradient">seu objetivo</span>
          </h2>
        </motion.div>

        {/* Idiomas */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
          {idiomas.map((idioma, i) => (
            <motion.div
              key={idioma.name}
              className="glass-card flex items-center gap-3 rounded-2xl px-6 py-4 transition-all hover:border-primary/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -3, scale: 1.03 }}
            >
              <span className="text-3xl">{idioma.flag}</span>
              <span className="font-display text-lg font-bold">{idioma.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Diferenciais grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
