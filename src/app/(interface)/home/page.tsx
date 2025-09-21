import type { Metadata } from "next";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import HeroWrapper from "./heroWrapper";

const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: true });
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: true });
const About = dynamic(() => import('@/components/sections/About'), { ssr: true });
const Exprience = dynamic(() => import('@/components/sections/Exprience'), { ssr: true });
const Services = dynamic(() => import('@/components/sections/Services'), { ssr: true });
const DevProcess = dynamic(() => import('@/components/sections/DevProcess'), { ssr: true });
const Achivements = dynamic(() => import('@/components/sections/Achivements'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { ssr: true });
const Contacts = dynamic(() => import('@/components/sections/Contacts'), { ssr: true });

// Define metadata for SEO
export const metadata:Metadata = {
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
        url: 'https://yourdomain.com',
        type: 'website',
        images: [
            {
                url: 'https://yourdomain.com/images/kunal-shroff-og.jpg',
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
        images: ['https://yourdomain.com/images/kunal-shroff-og.jpg'],
    },
    alternates: {
        canonical: 'https://yourdomain.com',
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
            url: 'https://yourdomain.com',
            image: 'https://yourdomain.com/images/kunal-shroff-profile.jpg',
            sameAs: [
                'https://linkedin.com/in/kunal-shroff',
                'https://github.com/kunal-shroff',
                // Add other social profiles
            ],
        },
        {
            '@type': 'WebPage',
            name: 'Kunal Shroff Portfolio',
            description: 'Portfolio of Kunal Shroff, expert in web development, Next.js, e-commerce, API development, and microservices.',
            url: 'https://yourdomain.com',
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
                    item: 'https://yourdomain.com',
                },
            ],
        },
    ],
};

export default function Home() {
    return (
        <>
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />

            {/* Hero Section */}
            <HeroWrapper/>
            {/* Skills Section */}
            <Skills/>

            {/* Projects Section */}
            <Projects/>

            {/* About Section */}
            <About/>

            {/* Experience Section */}
            <Exprience/>

            {/* Services Section */}
            <Services/>

            {/* Development Process Section */}
            <DevProcess/>

            {/* Achievements Section */}
            <Achivements/>

            {/* Testimonials Section */}
            <Testimonials/>

            <Contacts/>

            {/* FAQ Section */}
            <section id="faq" className="mt-6 mb-10 space-y-4 max-w-6xl mx-auto px-6 md:px-8">
                <h2 className="text-2xl font-bold mb-3">🔹 Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold">Why hire Kunal Shroff for web development?</h3>
                        <p className="text-[15px]">
                            I’m an expert in Next.js, MongoDB, and Express, delivering fast, SEO-friendly websites and apps tailored to your needs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">What technologies do you use for e-commerce?</h3>
                        <p className="text-[15px]">
                            I specialize in Next.js for frontends, MongoDB for databases, and Express for APIs, ensuring scalable, high-performance e-commerce sites.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Can you build microservices?</h3>
                        <p className="text-[15px]">
                            Yes! I use Express, RabbitMQ, and Node.js to build robust, scalable microservices architectures. See my <Link href="/projects/microservices" className="text-blue-600 hover:underline">projects</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contacts Section */}

        </>
    );
}