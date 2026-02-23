"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import Section from "@/components/ui/Section";

export default function Testimonials() {
  return (
    <Section id="provas" title="Provas Sociais" subtitle="Depoimentos e validações que reforçam confiança e resultados.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((q, i) => (
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
    </Section>
  );
}
