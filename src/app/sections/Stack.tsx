"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Section from "@/components/ui/Section";
import { stack as data } from "@/data/stack";

const iconMap = {
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  node: FaNodeJs,
  tailwind: SiTailwindcss,
  cicd: FaGithub,
} as const;

export default function Stack() {
  return (
    <Section id="stack" title="Stack e Expertise" subtitle="Tecnologias usadas para entregar velocidade, SEO e DX.">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
        {data.map(({ label, key }, i) => {
          const Icon = iconMap[key];
          return (
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
          );
        })}
      </div>
    </Section>
  );
}
