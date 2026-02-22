"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const stack = [
  { label: "React", Icon: FaReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Node.js", Icon: FaNodeJs },
  { label: "Tailwind", Icon: SiTailwindcss },
  { label: "CI/CD", Icon: FaGithub },
];

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Stack e Expertise</h2>
        <p className="mt-3 text-white/70">Tecnologias usadas para entregar velocidade, SEO e DX.</p>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
        {stack.map(({ label, Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <Icon className="text-4xl text-blue-400" />
            <span className="mt-3 text-sm">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
