import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Portfólio | Heitor — Desenvolvedor Full Stack",
    template: "%s | Portfólio Heitor",
  },
  description:
    "Portfólio profissional de Heitor, desenvolvedor Full Stack com foco em React, Next.js, Node.js e experiências web performáticas.",
  applicationName: "Portfólio Heitor",
  authors: [{ name: "Heitor" }],
  keywords: [
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "Portfólio",
    "Freelancer",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://example.com",
    siteName: "Portfólio Heitor",
    title: "Portfólio | Heitor — Desenvolvedor Full Stack",
    description:
      "Projetos, experiência e contato de Heitor, especialista em aplicações web modernas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfólio Heitor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | Heitor — Desenvolvedor Full Stack",
    description:
      "Projetos, experiência e contato de Heitor, especialista em aplicações web modernas.",
    images: ["/og-image.jpg"],
    creator: "@heitor",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Heitor",
              url: "https://example.com",
              jobTitle: "Desenvolvedor Full Stack",
              sameAs: [
                "https://github.com/usuario",
                "https://www.linkedin.com/in/usuario",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
