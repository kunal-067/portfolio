import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blogs';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Kunal Shroff’s Blog - Web Development, MongoDB, Express, Next.js',
  description: 'Explore Kunal Shroff’s blog on web development, MongoDB, Express.js, Next.js, Redis, Kafka, and RabbitMQ. Learn modern development techniques with practical guides.',
  keywords: [
    'Kunal Shroff',
    'web development blog',
    'MongoDB tutorial',
    'Express.js guide',
    'Next.js developer',
    'Redis tutorial',
    'Kafka event-driven',
    'RabbitMQ messaging',
    'full-stack development',
    'API development',
    'microservices blog',
  ],
  openGraph: {
    title: 'Kunal Shroff’s Blog - Web Development Tutorials',
    description: 'Kunal Shroff shares insights on MongoDB, Express.js, Next.js, Redis, Kafka, and RabbitMQ for scalable web development.',
    url: 'https://kunalshroff.vercel.app/blogs',
    type: 'website',
    images: [
      {
        url: 'https://kunalshroff.vercel.app/blog.avif',
        width: 1200,
        height: 630,
        alt: 'Kunal Shroff’s blog on web development and microservices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunal Shroff’s Blog - Web Development Tutorials',
    description: 'Learn MongoDB, Express.js, Next.js, and microservices with Kunal Shroff’s expert guides.',
    images: ['https://kunalshroff.vercel.app/blog.avif'],
  },
  alternates: {
    canonical: 'https://kunalshroff.vercel.app/blogs',
  },
};

// Schema markup for Blog, Person, and BreadcrumbList
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      name: 'Kunal Shroff’s Blog',
      description: 'Kunal Shroff’s blog covering MongoDB, Express.js, Next.js, Redis, Kafka, RabbitMQ, and full-stack development.',
      url: 'https://kunalshroff.vercel.app/blogs',
      author: {
        '@type': 'Person',
        name: 'Kunal Shroff',
      },
      publisher: {
        '@type': 'Person',
        name: 'Kunal Shroff',
        sameAs: [
          'https://linkedin.com/in/kunal-shroff',
          'https://github.com/kunal-shroff',
        ],
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://kunalshroff.vercel.app/blogs',
        },
      ],
    },
  ],
};

export default function Blog() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <section id="blog" className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Kunal Shroff’s Blog: Web Development & More
          </h1>
          <p className="text-center max-md:text-[14px] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            I’m Kunal Shroff, a full-stack developer sharing insights on MongoDB, Express.js, Next.js, Redis, Kafka, RabbitMQ, and scalable web development. Explore my tutorials to level up your skills!
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {BLOG_POSTS.map((post, index) => (
              <Link
                key={index}
                href={post.link}
                className="group flex-1 min-w-[280px] max-w-[340px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03]"
                aria-label={`Read blog post: ${post.title} by Kunal Shroff`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-6 group-hover:scale-110 transition">
                    <post.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition">{post.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{post.date}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-cyan-500 font-medium text-sm group-hover:underline">Read More →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 mx-auto">
              <div>
                <h3 className="text-lg font-semibold">What topics does Kunal Shroff’s blog cover?</h3>
                <p className='text-[15px]'>
                  My blog covers MongoDB, Express.js, Next.js, Redis, Kafka, RabbitMQ, and full-stack development, with practical guides for beginners and pros.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">How can MongoDB help my web projects?</h3>
                <p className='text-[15px]'>
                  MongoDB is a scalable NoSQL database perfect for e-commerce and dynamic apps. Read my <Link href="/blogs/mongodb" className="text-blue-600 hover:underline">MongoDB guide</Link> for details.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Why use Express.js for APIs?</h3>
                <p className='text-[15px]'>
                  Express.js simplifies building robust, scalable APIs with Node.js. Check my <Link href="/blogs/express" className="text-blue-600 hover:underline">Express.js guide</Link> to learn more.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Can I hire Kunal Shroff for development?</h3>
                <p className='text-[15px]'>
                  Yes! I offer web development, e-commerce, and microservices solutions. Contact me at <Link href="/#contacts" className="text-blue-600 hover:underline">kunalshroff.vercel.app</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to learn more or collaborate on a project? Let’s connect!
            </p>
            <Link
              href="/#contacts"
              className="inline-block bg-cyan-400 text-white px-6 py-3 rounded-lg hover:bg-cyan-500 transition-colors"
              aria-label="Contact Kunal Shroff for development services"
            >
              Contact Kunal Shroff
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
