"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const steps = [
  { title: "Discovery", desc: "Entendimento do negócio, metas e restrições." },
  { title: "Arquitetura", desc: "Desenho de soluções escaláveis e performáticas." },
  { title: "Implementação", desc: "Entrega incremental com qualidade e testes." },
  { title: "Observabilidade", desc: "Métricas, logs e monitoramento contínuo." },
  { title: "Escala", desc: "Refinamento, caching, edge e otimizações." },
];

export default function Process() {
  return (
    <Section id="processo" title="Processo">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-sm text-blue-400">0{i + 1}</div>
            <div className="mt-2 text-lg font-semibold">{s.title}</div>
            <div className="mt-1 text-sm text-white/70">{s.desc}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
