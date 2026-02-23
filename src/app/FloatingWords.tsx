"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const words = [
  "React",
  "Next.js",
  "Inovação",
  "JavaScript",
  "Tailwind",
  "HTML",
  "CSS",
  "Pandas",
];

export default function FloatingWords() {
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);

  const items = useMemo(
    () =>
      words.map(() => {
        const x = Math.random() * 90 + 5;
        const y = Math.random() * 90 + 5;
        const duration = 10 + Math.random() * 5;
        const delay = Math.random() * 10;
        return { x, y, duration, delay };
      }),
    []
  );

  if (!mounted || reduced) return null;

  return (
    <div
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0"
      suppressHydrationWarning
    >
      {words.map((word, i) => {
        const { x, y, duration, delay } = items[i];
        return (
          <motion.span
            key={i}
            style={{ top: `${y}%`, left: `${x}%`, opacity: 0.05 }}
            className="absolute text-white font-thin select-none text-2xl md:text-4xl "
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration,
              delay,
              ease: "easeInOut",
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}
