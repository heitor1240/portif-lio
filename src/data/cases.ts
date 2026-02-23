export type CaseItem = {
  title: string;
  desc: string;
  tags: string[];
  kpis: string[];
  link: string;
  logo?: string;
  image?: string;
};

export const cases: CaseItem[] = [
  {
    title: "NoxaMag — Diretório de Empresas",
    desc: "Diretório com busca, filtros por cidade/segmento e ordenação por proximidade. Interface moderna com UX focada em descoberta.",
    tags: ["Vite.js", "React", "TypeScript", "SQL", "Geolocalização"],
    kpis: ["Busca por proximidade", "Filtros avançados", "Ações rápidas (WhatsApp)"],
    link: "#",
    logo: undefined,
    image: "/noxamag.png",
  },
  {
    title: "SaaS de Analytics",
    desc: "Plataforma com ingestão em tempo real e dashboards performáticos.",
    tags: ["Next.js", "Edge", "ClickHouse"],
    kpis: ["+38% conversão", "-42% TTFB", "100 CWV"],
    link: "#",
  },
  /* {
    title: "Agência GV360 — Site Institucional",
    desc: "Website institucional com foco em SEO técnico e conversão para captação de leads.",
    tags: ["Website", "SEO", "Landing Pages"],
    kpis: ["Estrutura semântica", "OTIMIZAÇÃO SEO", "Captação de leads"],
    link: "https://agenciagv360.com",
  }, */
  {
    title: "TUIA Agrícola — Site Institucional",
    desc: "Site institucional para empresa do agronegócio, com foco em conversão e credibilidade.",
    tags: ["Vite.js", "React", "TypeScript", "Landing Pages", "SEO"],
    kpis: ["Hero de alto impacto", "CTAs (WhatsApp/Ligar)", "SEO técnico"],
    link: "https://tuiaagricola.com.br",
    image: "/tuiaagricola.png",
  },
  /*
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
  */
];
