import React from 'react'
import NavBar from '@/components/NavBar'

// Define metadata for SEO
export const metadata = {
    title: 'Kunal Shroff - Web & App Developer | Next.js, E-Commerce, Microservices',
    description: 'Hire Kunal Shroff, an expert web developer specializing in Next.js, e-commerce, app development, API development, and microservices. Build fast, SEO-friendly apps with MongoDB, Express, and more.',
    keywords: [
        'Kunal Shroff',
        'web developer',
        'app development',
        'Next.js developer',
        'e-commerce website developer',
        'API developer',
        'microservices developer',
        'MongoDB developer',
        'Express.js developer',
        'RabbitMQ developer',
        'full-stack developer',
        'React developer',
    ],
    openGraph: {
        title: 'Kunal Shroff - Expert Web & App Developer',
        description: 'Kunal Shroff builds fast, scalable web and mobile apps using Next.js, MongoDB, Express, and microservices. Contact for e-commerce and API solutions.',
        url: 'https://kunalshroff.vercel.app',
        type: 'website',
        images: [
            {
                url: 'https://kunalshroff.vercel.app/project_1.png', // ✅ full URL
                width: 1200,
                height: 630,
                alt: 'Kunal Shroff, web and app developer portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kunal Shroff - Web & App Developer',
        description: 'Hire Kunal Shroff for Next.js, e-commerce, API, and microservices development. Build modern apps with MongoDB and Express.',
        images: ['https://kunalshroff.vercel.app/genie_ai.png'], // ✅ full URL
    },
    alternates: {
        canonical: 'https://kunalshroff.vercel.app',
    },
};

// Schema markup for Person, WebPage, and BreadcrumbList
const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            name: 'Kunal Shroff',
            jobTitle: 'Web and App Developer',
            description: 'Kunal Shroff is a skilled developer specializing in Next.js, e-commerce, app development, API development, and microservices with MongoDB and Express.',
            url: 'https://kunalshroff.vercel.app',
            image: 'https://kunalshroff.vercel.app/my_img2.jpg', // ✅ full URL
            sameAs: [
                'https://linkedin.com/in/itz-kunal-shroff',
                'https://github.com/kunal-067',
                'https://instagram.com/kunal._067', // 🔧 fixed spelling
            ],
        },
        {
            '@type': 'WebPage',
            name: 'Kunal Shroff Portfolio',
            description: 'Portfolio of Kunal Shroff, expert in web development, Next.js, e-commerce, API development, and microservices.',
            url: 'https://kunalshroff.vercel.app',
            publisher: {
                '@type': 'Person',
                name: 'Kunal Shroff',
            },
            datePublished: '2025-09-21',
            dateModified: '2025-09-21',
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://kunalshroff.vercel.app',
                },
            ],
        },
    ],
};


const layout = ({ children }) => {
    return (
        <>
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />

            <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black text-slate-900 dark:text-white transition-colors duration-300">
                <NavBar />
                {children}
                <footer className="mt-12 text-center py-8 text-sm text-gray-500">
                    © {new Date().getFullYear()} Kunal Shroff — Built with Next.js & Tailwind CSS
                </footer>
            </main>

        </>
    )
}

export default layout