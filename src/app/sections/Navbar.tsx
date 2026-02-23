 "use client";

 import Link from "next/link";
 import { useState } from "react";
 import { FaGithub, FaBars } from "react-icons/fa";
 import { LinkButton } from "@/components/ui/Button";
 
 export default function Navbar() {
   const [open, setOpen] = useState(false);
   return (
     <header className="fixed top-0 left-0 right-0 z-40">
       <div className="mx-auto max-w-7xl px-4">
         <div className="mt-4 rounded-xl border border-white/10 bg-gray-900/50 backdrop-blur supports-[backdrop-filter]:bg-gray-900/40">
           <nav className="flex items-center justify-between px-6 py-3" aria-label="Barra de navegação">
             <Link href="#" className="text-lg font-semibold tracking-tight">
               Heitor.dev
             </Link>
             <button
               className="md:hidden inline-flex items-center rounded p-2 hover:bg-white/5"
               aria-label="Abrir menu"
               onClick={() => setOpen((v) => !v)}
             >
               <FaBars className="text-xl" />
             </button>
             <div className="hidden md:flex items-center gap-6">
               <Link href="#cases" className="hover:text-blue-400 transition">Cases</Link>
               <Link href="#stack" className="hover:text-blue-400 transition">Stack</Link>
               <Link href="#provas" className="hover:text-blue-400 transition">Provas</Link>
               <Link href="#contato" className="hover:text-blue-400 transition">Contato</Link>
              <Link href="https://github.com/heitor1240" target="_blank" className="text-white/80 hover:text-white" aria-label="GitHub">
                 <FaGithub size={20} />
               </Link>
              <LinkButton href="#contato">Agendar Chamada</LinkButton>
             </div>
           </nav>
           {open && (
             <div className="md:hidden border-t border-white/10 px-6 py-3">
               <div className="flex flex-col gap-4">
                 <Link href="#cases" onClick={() => setOpen(false)}>Cases</Link>
                 <Link href="#stack" onClick={() => setOpen(false)}>Stack</Link>
                 <Link href="#provas" onClick={() => setOpen(false)}>Provas</Link>
                 <Link href="#contato" onClick={() => setOpen(false)}>Contato</Link>
                <LinkButton href="#contato" className="text-center" onClick={() => setOpen(false)}>
                  Agendar Chamada
                </LinkButton>
               </div>
             </div>
           )}
         </div>
       </div>
     </header>
   );
 }
