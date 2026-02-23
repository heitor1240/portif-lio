import dynamic from "next/dynamic";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";


const FloatingWords = dynamic(() => import("./FloatingWords"));
const CustomCursor = dynamic(() => import("./CustomCursor"));
const Contato = dynamic(() => import("./Contato"));
const Navbar = dynamic(() => import("./sections/Navbar"));
const Hero = dynamic(() => import("./sections/Hero"));
const Cases = dynamic(() => import("./sections/Cases"));
const Stack = dynamic(() => import("./sections/Stack"));
const Testimonials = dynamic(() => import("./sections/Testimonials"));
const Footer = dynamic(() => import("./sections/Footer"));
const Process = dynamic(() => import("./sections/Process"));
const LogoCloud = dynamic(() => import("./sections/LogoCloud"));

   

export default function Home() {
  return (
    <>
      <CustomCursor />
    
      
    <main id="conteudo" className="min-h-screen bg-gray-950 text-white p-8">
      <FloatingWords />
      <Navbar />

      <Hero />

      <Cases />
      <Stack />
      <LogoCloud />
      <Process />
      <Testimonials />


<section id="sobre" className="mt-24 max-w-4xl mx-auto text-center">
  <h3 className="text-3xl font-bold mb-8">Sobre Mim</h3>
  <div className="flex flex-col md:flex-row items-center gap-8">
    <Image
      src="/perfil.jpg"
      alt="Foto de perfil de Heitor"
      width={160}
      height={160}
      sizes="(min-width: 768px) 160px, 128px"
      loading="lazy"
      className="rounded-full object-cover border-4 border-blue-600"
    />
    <p className="text-gray-300 text-left">
      Desenvolvedor Full Stack com foco em produtos digitais de alto impacto. Atuo do discovery à entrega com arquitetura limpa, testes e observabilidade.
    </p>
  </div>
</section>

{/* CONTATO */ }
<Contato />
<Footer />

<a
  href="https://wa.me/5547992094044"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
  aria-label="Abrir conversa no WhatsApp"
>
  <FaWhatsapp size={24} />
</a>

   </main>
   

   </>
  );
}
