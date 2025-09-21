import { CodeBlock } from '@/components/CodeBlock';
import type { Metadata } from 'next';
import Link from 'next/link';

// Base URL for absolute paths
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://kunalshroff.vercel.app';

// Define metadata for SEO
export const metadata: Metadata = {
    title: 'Fastify for Beginners: Build High-Performance Node.js Apps | Kunal Shroff',
    description: 'Learn Fastify, the high-performance Node.js framework for server-side apps. This beginner-friendly guide covers how Fastify works, why to use it, real-world examples, and code tutorials.',
    keywords: [
        'Kunal Shroff',
        'Fastify tutorial',
        'Fastify developer',
        'Fastify API development',
        'MongoDB with Fastify',
        'TypeScript Fastify',
        'Node.js framework',
        'high-performance APIs',
        'web development blog',
    ],
    openGraph: {
        title: 'Fastify for Beginners: Build High-Performance Node.js Apps',
        description: 'Discover Fastify’s power for modern apps with Kunal Shroff’s beginner-friendly guide, including code examples and real-world use cases.',
        url: `${BASE_URL}/fastify`,
        type: 'article',
        images: [
            {
                url: `${BASE_URL}/images/fastify-og.jpg`,
                width: 1200,
                height: 630,
                alt: 'Fastify logo with code example',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fastify for Beginners: Build High-Performance Node.js Apps',
        description: 'Learn Fastify with Kunal Shroff’s beginner-friendly guide, featuring code examples and real-world use cases.',
        images: [`${BASE_URL}/images/fastify-og.jpg`],
    },
    alternates: {
        canonical: `${BASE_URL}/fastify`,
    },
};

// Schema markup for Article
const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fastify for Beginners: Build High-Performance Node.js Apps',
    description: 'Learn Fastify, the high-performance Node.js framework for server-side apps, with beginner-friendly explanations, code examples, and real-world use cases.',
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
    image: `${BASE_URL}/images/fastify-og.jpg`,
    url: `${BASE_URL}/fastify`,
};

export default function FastifyBlog() {
    return (
        <>
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <div className="max-w-6xl mx-auto py-6 md:py-8 px-4 md:px-8 text-gray-800 dark:text-gray-200">
                {/* Blog Header */}
                <h1 className="flex items-center gap-2 text-3xl md:text-4xl font-extrabold mb-6 md:mb-10">
                    🚀 Fastify: The High-Performance Node.js Framework for Scalable APIs
                </h1>
                <div className='flex flex-col lg:flex-row gap-4'>
                    {/* Table of Contents */}
                    <section className="mb-10 lg:w-[510px] w-full lg:sticky top-24 self-start space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><Link href="#intro" className="text-blue-600 hover:underline">Introduction</Link></li>
                            <li><Link href="#what-is-fastify" className="text-blue-600 hover:underline">What is Fastify?</Link></li>
                            <li><Link href="#how-it-works" className="text-blue-600 hover:underline">How Fastify Works</Link></li>
                            <li><Link href="#why-use-fastify" className="text-blue-600 hover:underline">Why Choose Fastify?</Link></li>
                            <li><Link href="#analogy" className="text-blue-600 hover:underline">Fastify as a Racecar</Link></li>
                            <li><Link href="#real-world-examples" className="text-blue-600 hover:underline">Real-World Use Cases</Link></li>
                            <li><Link href="#code-examples" className="text-blue-600 hover:underline">Code Examples</Link></li>
                            <li><Link href="#wrapping-up" className="text-blue-600 hover:underline">Wrapping Up</Link></li>
                            <li><Link href="#references" className="text-blue-600 hover:underline">References</Link></li>
                        </ul>
                    </section>

                    <article>
                        {/* Intro Paragraph */}
                        <section id="intro" className="mb-10 space-y-4">
                            <p>
                                Building APIs with Node.js can be fast, but what if you could make them blazingly fast? <strong>Fastify</strong> is a high-performance Node.js framework designed for speed, low overhead, and developer-friendly features, making it perfect for scalable APIs and microservices.
                            </p>
                            <p>
                                Companies like Vercel, Postman, and startups use Fastify to power high-performance applications [1, 2]. Don’t worry if you’re new to backend development—this guide is beginner-friendly and easy to follow!
                            </p>
                            <p>In this blog, we’ll cover:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>✅ What Fastify is (in simple terms)</li>
                                <li>✅ How it works, step by step</li>
                                <li>✅ Why it’s great for APIs</li>
                                <li>✅ Everyday examples of Fastify in action</li>
                                <li>✅ A fun analogy to make it clear</li>
                                <li>✅ Easy code examples you can copy and try</li>
                            </ul>
                            <p>
                                By the end, you’ll understand how Fastify can make your APIs fast and scalable! Check out our <Link href="/nestjs-blog" className="text-blue-600 hover:underline">NestJS guide</Link> and <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB guide</Link> for related content.
                            </p>
                        </section>

                        {/* What is Fastify */}
                        <section id="what-is-fastify" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 What is Fastify?</h2>
                            <p>
                                Fastify is a high-performance <strong>Node.js framework</strong> for building server-side applications, focusing on speed and low overhead. It supports TypeScript, plugins, and JSON schema validation, making it ideal for APIs and microservices.
                            </p>
                            <p>
                                It’s open-source, free to use, and designed to be faster than Express while maintaining simplicity. Fastify uses a plugin-based architecture for extensibility and performance [3].
                            </p>
                            <p>Key concepts:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Routes</strong>: Define endpoints like GET /users, similar to Express.</li>
                                <li><strong>Plugins</strong>: Modular extensions to add features like authentication or database integration.</li>
                                <li><strong>Schemas</strong>: JSON schemas for request/response validation, boosting performance.</li>
                                <li><strong>Hooks</strong>: Lifecycle methods to customize request handling.</li>
                            </ul>
                            <p>
                                Fastify is like a lightweight, turbo-charged engine for Node.js, perfect for developers who want speed without complexity [4].
                            </p>
                        </section>

                        {/* Visual Flow */}
                        <section id="how-it-works" className="space-y-4 mb-8">
                            <h2 className="text-2xl font-bold mb-3">🔹 How Fastify Works</h2>
                            <p>
                                Let’s see how Fastify handles a request, like fetching users from an API. Here’s the simple flow:
                            </p>
                            <ol className="list-decimal list-inside ml-4 space-y-2">
                                <li>A user sends a request (e.g., GET /users).</li>
                                <li>Fastify’s <strong>router</strong> matches the route.</li>
                                <li><strong>Hooks</strong> (optional) preprocess the request (e.g., validate headers).</li>
                                <li>The route handler processes logic (e.g., query a database).</li>
                                <li>Fastify sends the response (e.g., JSON users list).</li>
                            </ol>
                            <p>Here’s a diagram of the flow:</p>
                            <div className="flex flex-wrap items-center gap-4 md:gap-10">
                                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                                    <span className="text-xl">🌐 User</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Sends request</p>
                                </div>
                                <div className="text-3xl">➡️</div>
                                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                                    <span className="text-xl">🚀 Fastify</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Router & Handler</p>
                                </div>
                                <div className="text-3xl">➡️</div>
                                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                                    <span className="text-xl">📤 Response</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Returns data</p>
                                </div>
                            </div>
                            <p>
                                This streamlined setup makes Fastify fast and efficient for APIs [5]!
                            </p>
                        </section>

                        {/* Why Use Fastify */}
                        <section id="why-use-fastify" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 Why Choose Fastify?</h2>
                            <p>
                                Why choose Fastify over Express or NestJS? Fastify is designed for speed and simplicity, making it a top choice in 2025. Here’s why it shines:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li><strong>High Performance</strong>: Up to 2x faster than Express due to optimized routing and schema validation [3].</li>
                                <li><strong>Low Overhead</strong>: Minimal resource usage, ideal for microservices and serverless [4].</li>
                                <li><strong>Plugin System</strong>: Extend functionality with reusable plugins, like authentication or MongoDB [6].</li>
                                <li><strong>TypeScript Support</strong>: Native TypeScript for type-safe code [5].</li>
                                <li><strong>Developer Friendly</strong>: Simple API with JSON schema support for validation [7].</li>
                            </ul>
                            <p>
                                Fastify is like a lightweight racecar for Node.js—fast, efficient, and easy to drive for beginners and pros.
                            </p>
                            <p>
                                <strong>Quick Tip</strong>: Fastify pairs great with <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB</Link> for databases and <Link href="/nestjs-blog" className="text-blue-600 hover:underline">NestJS</Link> for structured apps.
                            </p>
                        </section>

                        {/* Analogy */}
                        <section id="analogy" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 Analogy: Fastify as a Racecar</h2>
                            <p>
                                Imagine Node.js as a car engine—powerful but raw. Fastify is like a sleek racecar built on that engine:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Chassis (Router)</strong>: Lightweight and fast, directing requests efficiently.</li>
                                <li><strong>Turbo (Plugins)</strong>: Add-ons for extra speed, like database or auth plugins.</li>
                                <li><strong>Dashboard (Schemas)</strong>: Validates inputs/outputs for smooth operation.</li>
                                <li><strong>Controls (Hooks)</strong>: Fine-tune request handling with lifecycle events.</li>
                            </ul>
                            <p>
                                Fastify makes building APIs as thrilling as driving a racecar—fast, precise, and fun!
                            </p>
                        </section>

                        {/* Real-World Use Cases */}
                        <section id="real-world-examples" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 Where Fastify is Used</h2>
                            <p>
                                Fastify powers high-performance apps in 2025. Here are some examples:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li><strong>API Platforms</strong>: Postman uses Fastify for fast, scalable API testing services [1].</li>
                                <li><strong>Serverless</strong>: Vercel deploys Fastify for low-latency serverless functions [2].</li>
                                <li><strong>Microservices</strong>: Startups use Fastify with MongoDB for lightweight services [6].</li>
                                <li><strong>IoT</strong>: Fastify powers real-time IoT dashboards with low overhead [4].</li>
                                <li><strong>E-Commerce</strong>: Fast APIs for product catalogs and checkout systems [5].</li>
                            </ul>
                            <p>
                                Fastify’s speed and flexibility make it ideal for modern, high-traffic apps.
                            </p>
                        </section>

                        {/* Code Examples */}
                        <section id="code-examples" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 Fastify Code Examples</h2>
                            <p>
                                Let’s try some simple code to use Fastify with Node.js! You’ll need Node.js installed. We’ll explain every step for beginners.
                            </p>
                            <p>First, set up a Fastify project:</p>
                            <CodeBlock language="bash">{`mkdir my-fastify-app
cd my-fastify-app
npm init -y
npm install fastify`}</CodeBlock>

                            <h3 className="text-xl font-semibold mt-6">Example 1: Basic Fastify Server</h3>
                            <p>
                                Create a server with a simple endpoint. Save as <code>server.js</code>:
                            </p>
                            <CodeBlock language="javascript">{`const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  return 'Hello, Fastify!';
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(\`Server running at \${address}\`);
});
`}</CodeBlock>
                            <p><strong>What’s happening?</strong></p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Initialize Fastify with logging enabled.</li>
                                <li>Define a GET route for the root path.</li>
                                <li>Run with <code>node server.js</code> and visit <code>http://localhost:3000</code>.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6">Example 2: Creating a REST API</h3>
                            <p>
                                Build a users API. Update <code>server.js</code>:
                            </p>
                            <CodeBlock language="javascript">{`const fastify = require('fastify')({ logger: true });

const users = [{ id: 1, name: 'Alice' }];

fastify.get('/users', async (request, reply) => {
  return users;
});

fastify.post('/users', async (request, reply) => {
  const newUser = { id: users.length + 1, name: request.body.name };
  users.push(newUser);
  reply.code(201).send(newUser);
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(\`Server running at \${address}\`);
});
`}</CodeBlock>
                            <p><strong>What’s happening?</strong></p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Add GET /users to list users.</li>
                                <li>Add POST /users to create a user (requires body parsing).</li>
                                <li>Test with <code>curl -X POST -H {`"Content-Type: application/json" -d '{"name":"Bob"}'`} http://localhost:3000/users</code>.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6">Example 3: Integrating MongoDB</h3>
                            <p>
                                Connect Fastify with MongoDB. Install packages:
                            </p>
                            <CodeBlock language="bash">{`npm install @fastify/mongodb mongodb`}</CodeBlock>
                            <p>Update <code>server.js</code>:</p>
                            <CodeBlock language="javascript">{`const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/mongodb'), {
  url: 'mongodb://localhost:27017/myapp'
});

fastify.get('/users', async (request, reply) => {
  const db = fastify.mongo.db;
  const collection = db.collection('users');
  const users = await collection.find().toArray();
  return users;
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(\`Server running at \${address}\`);
});
`}</CodeBlock>
                            <p><strong>What’s happening?</strong></p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Register the @fastify/mongodb plugin.</li>
                                <li>Query the users collection from MongoDB.</li>
                                <li>Test at <code>http://localhost:3000/users</code> after adding data.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6">Example 4: Using a Plugin</h3>
                            <p>
                                Create a custom plugin for logging. Save as <code>log-plugin.js</code>:
                            </p>
                            <CodeBlock language="javascript">{`module.exports = async function (fastify, opts) {
  fastify.addHook('onRequest', async (request, reply) => {
    fastify.log.info(\`Received \${request.method} request to \${request.url}\`);
  });
};
`}</CodeBlock>
                            <p>Update <code>server.js</code>:</p>
                            <CodeBlock language="javascript">{`const fastify = require('fastify')({ logger: true });

fastify.register(require('./log-plugin'));

fastify.get('/', async (request, reply) => {
  return 'Hello, Fastify with Plugin!';
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(\`Server running at \${address}\`);
});
`}</CodeBlock>
                            <p><strong>What’s happening?</strong></p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Create a plugin to log requests using Fastify’s hook system.</li>
                                <li>Register the plugin in the server.</li>
                                <li>Test at <code>http://localhost:3000</code> and check logs.</li>
                            </ul>
                            <p>
                                <strong>Try it out!</strong> Run <code>docker run -d -p 27017:27017 mongo</code> for MongoDB, then <code>node server.js</code>. Test endpoints with a browser or curl.
                            </p>
                        </section>

                        {/* Wrapping Up */}
                        <section id="wrapping-up" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 Wrapping Up</h2>
                            <p>
                                Fastify is a high-performance, developer-friendly framework that makes Node.js APIs fast and scalable. Its plugin system, schema validation, and TypeScript support make it ideal for modern apps.
                            </p>
                            <p>
                                You’ve learned the basics, seen examples, and tried code—now you’re ready to use Fastify! Start with a small API, and explore our <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB guide</Link> for database tips.
                            </p>
                            <p>
                                For more, check the <a href="https://www.fastify.io/docs/latest/" className="text-blue-600 hover:underline">Fastify docs</a> or try <a href="https://www.fastify.io/docs/latest/Guides/Getting-Started/" className="text-blue-600 hover:underline">Fastify tutorials</a>.
                            </p>
                            <p>
                                <strong>Next Steps</strong>: Combine Fastify with MongoDB and deploy to a platform like Vercel. Happy coding! [6]
                            </p>
                        </section>

                        {/* References */}
                        <section id="references" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 References</h2>
                            <ol className="list-decimal list-inside ml-4 space-y-1">
                                <li><a href="https://www.fastify.io/docs/latest/" className="text-blue-600 hover:underline">Fastify Documentation</a></li>
                                <li><a href="https://www.fastify.io/docs/latest/Guides/Serverless/" className="text-blue-600 hover:underline">Fastify for Serverless</a></li>
                                <li><a href="https://www.fastify.io/docs/latest/Reference/Performance/" className="text-blue-600 hover:underline">Fastify Performance</a></li>
                                <li><a href="https://www.fastify.io/docs/latest/Reference/Plugins/" className="text-blue-600 hover:underline">Fastify Plugins</a></li>
                                <li><a href="https://www.fastify.io/docs/latest/Reference/TypeScript/" className="text-blue-600 hover:underline">Fastify with TypeScript</a></li>
                                <li><a href="https://www.fastify.io/docs/latest/Guides/Database/" className="text-blue-600 hover:underline">Fastify with Databases</a></li>
                                <li><a href="https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/" className="text-blue-600 hover:underline">Fastify Validation</a></li>
                            </ol>
                        </section>
                    </article>
                </div>
            </div>
        </>
    );
}
