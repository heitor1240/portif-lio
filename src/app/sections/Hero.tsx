"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="mx-auto max-w-3xl px-4">
        <motion.h1
          className="text-5xl font-bold tracking-tight md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Arquitetando produtos web rápidos, escaláveis e elegantes
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-white/70 md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Full Stack com foco em React, Next.js e Node.js. Entrego experiências
          impecáveis, SEO sólido e performance nível Core Web Vitals.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <LinkButton href="#cases" className="px-6 py-3">Ver Cases</LinkButton>
          <LinkButton href="#contato" className="px-6 py-3">Agendar Chamada</LinkButton>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
    </section>
  );
}
