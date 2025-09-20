import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Enhanced Metadata for SEO
export const metadata: Metadata = {
  title: "Kunal Shroff - Web & App Developer | Next.js, E-Commerce, Microservices",
  description:
    "Hire Kunal Shroff, a professional web developer specializing in Next.js, e-commerce, API development, and microservices with MongoDB and Express.",
  keywords: [
    "Kunal Shroff",
    "web developer",
    "app developer",
    "Next.js developer",
    "React developer",
    "e-commerce website developer",
    "API developer",
    "microservices developer",
    "MongoDB developer",
    "Express.js developer",
    "RabbitMQ developer",
    "full-stack developer",
  ],
  applicationName: "Kunal Shroff Portfolio",
  authors: [{ name: "Kunal Shroff", url: "https://kunalshroff.vercel.app" }],
  creator: "Kunal Shroff",
  publisher: "Kunal Shroff",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Kunal Shroff - Expert Web & App Developer",
    description:
      "Kunal Shroff builds fast, scalable web and mobile apps using Next.js, MongoDB, Express, and microservices. Contact for e-commerce and API solutions.",
    url: "https://kunalshroff.vercel.app",
    siteName: "Kunal Shroff Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://kunalshroff.vercel.app/project_1.png",
        width: 1200,
        height: 630,
        alt: "Kunal Shroff Portfolio - Next.js, MongoDB, Microservices",
      },
      {
        url: "https://kunalshroff.vercel.app/my_img2.jpg",
        width: 800,
        height: 800,
        alt: "Kunal Shroff Profile Photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Shroff - Web & App Developer",
    description:
      "Hire Kunal Shroff for Next.js, e-commerce, API, and microservices development. Build modern apps with MongoDB and Express.",
    creator: "@kunalshroff", // ✅ Replace with your real Twitter handle if available
    images: [
      "https://kunalshroff.vercel.app/genie_ai.png",
      "https://kunalshroff.vercel.app/project_1.png",
    ],
  },
  alternates: {
    canonical: "https://kunalshroff.vercel.app",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

// Expanded Schema Markup for Rich Results
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Kunal Shroff",
      jobTitle: "Web and App Developer",
      description:
        "Kunal Shroff is a skilled developer specializing in Next.js, e-commerce, app development, API development, and microservices with MongoDB and Express.",
      url: "https://kunalshroff.vercel.app",
      image: "https://kunalshroff.vercel.app/my_img2.jpg",
      sameAs: [
        "https://linkedin.com/in/itz-kunal-shroff",
        "https://github.com/kunal-067",
        "https://instagram.com/kunal._067",
      ],
    },
    {
      "@type": "WebSite",
      name: "Kunal Shroff Portfolio",
      url: "https://kunalshroff.vercel.app",
      publisher: { "@type": "Person", name: "Kunal Shroff" },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://kunalshroff.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      name: "Kunal Shroff Portfolio - Home",
      description:
        "Portfolio of Kunal Shroff, expert in web development, Next.js, e-commerce, API development, and microservices.",
      url: "https://kunalshroff.vercel.app",
      datePublished: "2025-09-21",
      dateModified: "2025-09-21",
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://kunalshroff.vercel.app" },
      ],
    },
    {
      "@type": "ProfessionalService",
      name: "Kunal Shroff Development Services",
      serviceType: "Web Development, App Development, API Development, Microservices",
      provider: { "@type": "Person", name: "Kunal Shroff" },
      areaServed: "Worldwide",
      url: "https://kunalshroff.vercel.app",
      sameAs: [
        "https://linkedin.com/in/itz-kunal-shroff",
        "https://github.com/kunal-067",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        {children}
      </body>
    </html>
  );
}
