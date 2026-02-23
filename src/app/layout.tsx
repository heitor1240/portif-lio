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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://h-dev-ten.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
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
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
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
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 rounded bg-blue-600 px-3 py-2 text-white"
        >
          Pular para conteúdo
        </a>
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Heitor",
              url: siteUrl,
              jobTitle: "Desenvolvedor Full Stack",
              email: "mailto:heitorg0804@gmail.com",
              telephone: "+55 47 99209-4044",
              sameAs: [
                "https://github.com/heitor1240",
                "https://www.linkedin.com/in/heitorferreira08",
                "https://instagram.com/h3ittor_g",
              ],
              contactPoint: [{
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "heitorg0804@gmail.com",
                telephone: "+55 47 99209-4044",
                areaServed: "BR",
                availableLanguage: ["Portuguese", "English"]
              }],
            }),
          }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Heitor",
              url: siteUrl,
              sameAs: [
                "https://github.com/heitor1240",
                "https://www.linkedin.com/in/heitorferreira08",
                "https://instagram.com/h3ittor_g",
              ],
              contactPoint: [{
                "@type": "ContactPoint",
                contactType: "business",
                email: "heitorg0804@gmail.com",
                telephone: "+55 47 99209-4044",
                areaServed: "BR",
                availableLanguage: ["Portuguese", "English"]
              }],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
