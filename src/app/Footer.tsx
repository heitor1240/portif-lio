import { motion } from "framer-motion";

export default function Footer() {
  const sections = [
    { id: "sobre", label: "Sobre Mim" },
    { id: "projetos", label: "Meus Projetos" },
    { id: "contato", label: "Contato" },
  ];

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer className="relative bg-gray-950 p-8 text-gray-300">
      {/* Fundo animado simples */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black animate-gradient-x"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <nav className="flex gap-8">
          {sections.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              whileHover={{ scale: 1.1, color: "#60A5FA", textShadow: "0 0 8px #60A5FA" }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold cursor-pointer text-lg"
            >
              {label}
              <motion.span
                layoutId="underline"
                className="block h-1 bg-blue-500 rounded mt-1 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1, color: "#34D399", textShadow: "0 0 10px #34D399" }}
          whileTap={{ scale: 0.95 }}
          className="font-semibold cursor-pointer text-lg"
        >
          ↑ Voltar ao topo
        </motion.button>
      </div>
    </footer>
  );
}
