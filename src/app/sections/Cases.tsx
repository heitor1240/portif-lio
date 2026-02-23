"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { cases } from "@/data/cases";

export default function Cases() {
  return (
    <Section id="cases" title="Casos de Sucesso" subtitle="Seleção de projetos com resultados mensuráveis e engenharia sólida.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cases.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/60"
          >
            {c.image ? (
              <Link
                href={c.link}
                target={c.link.startsWith("http") ? "_blank" : undefined}
                rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  width={1200}
                  height={675}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </Link>
            ) : null}
            <div className="p-6">
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
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
