"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    author: "CTO, Startup SaaS",
    text:
      "Migração para Next.js com foco em SEO e Core Web Vitals. Aumentamos o orgânico rapidamente.",
  },
  {
    author: "Diretor de Produto",
    text:
      "Qualidade de engenharia acima da média. Entregas com testes, CI/CD e documentação.",
  },
  {
    author: "Líder de Marketing",
    text:
      "Performance e UX impecáveis. O site ficou leve, rápido e com uma identidade premium.",
  },
];

export default function Testimonials() {
  return (
    <section id="provas" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Provas Sociais</h2>
        <p className="mt-3 text-white/70">
          Depoimentos e validações que reforçam confiança e resultados.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <motion.blockquote
            key={q.author}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm text-white/80">{q.text}</p>
            <footer className="mt-4 text-xs text-white/50">— {q.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
