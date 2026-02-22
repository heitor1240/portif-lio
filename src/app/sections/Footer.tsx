"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Heitor. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="#contato" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700">
              Solicitar Proposta
            </Link>
            <Link href="https://wa.me/5547992094044" className="text-sm text-white/80 hover:text-white" target="_blank">
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
