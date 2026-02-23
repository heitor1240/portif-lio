"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";

const logos = [
  { src: "/vercel.svg", alt: "Vercel" },
  { src: "/next.svg", alt: "Next.js" },
  { src: "/globe.svg", alt: "Global" },
  { src: "/window.svg", alt: "Window" },
  { src: "/file.svg", alt: "File" },
];

export default function LogoCloud() {
  return (
    <Section id="clientes" title="Clientes e Parcerias">
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
        {logos.map((l) => (
          <div key={l.alt} className="h-10 w-28 grayscale hover:grayscale-0 transition">
            <Image src={l.src} alt={l.alt} width={112} height={40} className="object-contain w-full h-full" />
          </div>
        ))}
      </div>
    </Section>
  );
}
