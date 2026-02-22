"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cases = [
  {
    title: "SaaS de Analytics",
    desc: "Plataforma com ingestão em tempo real e dashboards performáticos.",
    tags: ["Next.js", "Edge", "ClickHouse"],
    kpis: ["+38% conversão", "-42% TTFB", "100 CWV"],
    link: "#",
  },
  {
    title: "E-commerce Headless",
    desc: "Catálogo dinâmico, SEO técnico e checkout otimizado.",
    tags: ["React", "Next.js", "Stripe"],
    kpis: ["+64% receita", "-35% LCP", "+22% orgânico"],
    link: "#",
  },
  {
    title: "Portal Institucional",
    desc: "Design minimalista com acessibilidade AA e CMS.",
    tags: ["Next.js", "CMS", "Vercel"],
    kpis: ["100/100 Lighthouse", "AA A11y", "CI/CD"],
    link: "#",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Casos de Sucesso</h2>
        <p className="mt-3 text-white/70">
          Seleção de projetos com resultados mensuráveis e engenharia sólida.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cases.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/60"
          >
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-white/70">{c.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.kpis.map((k) => (
                <span
                  key={k}
                  className="rounded-md bg-blue-600/20 px-2 py-1 text-xs text-blue-300"
                >
                  {k}
                </span>
              ))}
            </div>
            <Link
              href={c.link}
              className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700"
            >
              Ver Detalhes
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
