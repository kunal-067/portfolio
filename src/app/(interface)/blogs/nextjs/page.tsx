import { CodeBlock } from '@/components/CodeBlock';
import type { Metadata } from 'next';
import Link from 'next/link';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Next.js for Beginners: Build Fast, SEO-Friendly Web Apps | Kunal Shroff',
  description: 'Learn Next.js, the powerful React framework for modern web apps. This beginner-friendly guide covers Server-Side Rendering, Static Site Generation, code examples, and real-world use cases.',
  keywords: ['Kunal Shroff', 'Next.js tutorial', 'React framework', 'beginner Next.js', 'Server-Side Rendering', 'Static Site Generation', 'Next.js 14'],
  openGraph: {
    title: 'Next.js for Beginners: Build Fast, SEO-Friendly Web Apps',
    description: 'Discover Next.js’s power with Kunal Shroff’s beginner-friendly guide, featuring Server-Side Rendering, Static Site Generation, and Node.js code examples.',
    url: 'https://kunalshroff.vercel.app/nextjs-blog',
    type: 'article',
    images: [
      {
        url: 'https://kunalshroff.vercel.app/images/nextjs-blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js logo with code example',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js for Beginners: Build Fast, SEO-Friendly Web Apps',
    description: 'Learn Next.js with Kunal Shroff’s beginner-friendly guide, featuring code examples and real-world use cases.',
    images: ['https://kunalshroff.vercel.app/images/nextjs-blog-og.jpg'],
  },
  alternates: {
    canonical: 'https://kunalshroff.vercel.app/nextjs-blog',
  },
};

// Schema markup for Article and BreadcrumbList
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Next.js for Beginners: Build Fast, SEO-Friendly Web Apps',
      description: 'Learn Next.js, the powerful React framework for modern web apps, with beginner-friendly explanations, Node.js examples, and real-world use cases.',
      author: {
        '@type': 'Person',
        name: 'Kunal Shroff',
      },
      publisher: {
        '@type': 'Organization',
        name: 'KunalShroff',
        logo: {
          '@type': 'ImageObject',
          url: 'https://kunalshroff.vercel.app/logo.png',
        },
      },
      datePublished: '2025-09-21',
      dateModified: '2025-09-21',
      image: 'https://kunalshroff.vercel.app/images/nextjs-blog-og.jpg',
      url: 'https://kunalshroff.vercel.app/nextjs-blog',
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
          name: 'Next.js Blog',
          item: 'https://kunalshroff.vercel.app/nextjs-blog',
        },
      ],
    },
  ],
};

export default function NextJSBlog() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="max-w-6xl mx-auto py-6 md:py-8 px-4 md:px-8 text-gray-800 dark:text-gray-200">
        {/* Hero Image */}
        {/* <div className="mb-8">
          <img
            src="/images/nextjs-logo.png"
            alt="Next.js logo with code background"
            className="rounded-lg w-full max-w-[1200px] mx-auto"
          />
        </div> */}

        {/* Blog Header */}
        <h1 className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-extrabold mb-6 md:mb-10">
          ⚡ Next.js: The Supercharged React Framework for Modern Web Apps
        </h1>

        <div className='flex flex-col lg:flex-row gap-4'>
          {/* Table of Contents */}
          <section className="mb-10 lg:w-[510px] min-w-fit w-full lg:sticky top-24 self-start space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><Link href="#intro" className="text-blue-600 hover:underline">Introduction</Link></li>
              <li><Link href="#what-is-nextjs" className="text-blue-600 hover:underline">What is Next.js?</Link></li>
              <li><Link href="#how-it-works" className="text-blue-600 hover:underline">How Next.js Works</Link></li>
              <li><Link href="#why-use-nextjs" className="text-blue-600 hover:underline">Why Choose Next.js?</Link></li>
              <li><Link href="#analogy" className="text-blue-600 hover:underline">Next.js as a Full Kitchen Setup</Link></li>
              <li><Link href="#real-world-examples" className="text-blue-600 hover:underline">Real-World Use Cases</Link></li>
              <li><Link href="#code-examples" className="text-blue-600 hover:underline">Code Examples</Link></li>
              <li><Link href="#faq" className="text-blue-600 hover:underline">Frequently Asked Questions</Link></li>
              <li><Link href="#wrapping-up" className="text-blue-600 hover:underline">Wrapping Up</Link></li>
              <li><Link href="#references" className="text-blue-600 hover:underline">References</Link></li>
            </ul>
          </section>

          <article className="flex-1">
            {/* Intro Paragraph */}
            <section id="intro" className="mb-10 space-y-4">
              <p>
                Building web apps with plain React can be like cooking with just basic ingredients—you get the job done, but it takes extra effort to make everything fast, SEO-friendly, and scalable. Enter <strong>Next.js</strong>, a powerful React framework that adds superpowers like Server-Side Rendering (SSR) and Static Site Generation (SSG), making your apps lightning-fast and easy to build!
              </p>
              <p>
                Companies like Netflix, TikTok, and Vercel (the creators of Next.js) use it to power millions of users every day [1, 2]. Don’t worry if you’re new to React or web development—this guide is designed to be super beginner-friendly!
              </p>
              <p>In this blog, we’ll cover:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>✅ What Next.js is (explained simply)</li>
                <li>✅ How it works, step by step</li>
                <li>✅ Why it’s better than plain React</li>
                <li>✅ Everyday examples of Next.js in action</li>
                <li>✅ A fun analogy to make it clear</li>
                <li>✅ Easy code examples you can copy and try</li>
              </ul>
              <p>
                By the end, you’ll see why Next.js is a game-changer for building modern web apps! Pair it with our <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB guide</Link> for a full-stack setup.
              </p>
            </section>

            {/* What is Next.js */}
            <section id="what-is-nextjs" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 What is Next.js?</h2>
              <p>
                Next.js is a React framework that simplifies building fast, SEO-friendly web applications. Think of React as the core engine for interactive user interfaces, and Next.js as the full car that adds features like automatic routing, performance optimizations, and server-side rendering—all without manual setup.
              </p>
              <p>
                It’s open-source, free to use, and powers everything from blogs to e-commerce sites. Next.js handles complex tasks like code optimization and routing, so you can focus on creating awesome apps [3].
              </p>
              <p>Key features:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>File-Based Routing</strong>: Create a folder structure, and Next.js turns it into pages—no extra config needed!</li>
                <li><strong>Rendering Options</strong>: Choose Static Site Generation (SSG) for fast static pages or Server-Side Rendering (SSR) for dynamic content.</li>
                <li><strong>API Routes</strong>: Build backend APIs within your frontend code, enabling full-stack apps.</li>
                <li><strong>App Router</strong>: Modern routing with support for React Server Components and advanced features.</li>
              </ul>
              <p>
                Next.js is like a smart assistant for React developers, making your apps faster, more secure, and easier to scale [4].
              </p>
            </section>

            {/* Visual Flow */}
            <section id="how-it-works" className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold mb-3">🔹 How Next.js Works</h2>
              <p>
                Let’s break down how Next.js turns your code into a blazing-fast web app. Imagine you’re building a blog—here’s the simple flow:
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>You write React components in files (e.g., <code>app/about/page.tsx</code> becomes the /about page).</li>
                <li>Next.js builds your app, optimizing images, code, and more.</li>
                <li>For static pages (SSG), it generates HTML at build time for super-fast loading.</li>
                <li>For dynamic pages (SSR), it renders on the server for each request, fetching fresh data.</li>
                <li>Your app runs with client-side JavaScript for interactivity, starting with pre-rendered content.</li>
              </ol>
              <p>Here’s a diagram of the rendering flow:</p>
              <div className="flex flex-wrap items-center gap-4 md:gap-10">
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">📝 Your Code</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">React Components & Pages</p>
                </div>
                <div className="text-3xl">➡️</div>
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">⚙️ Build</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Optimizes & Renders</p>
                </div>
                <div className="text-3xl">➡️</div>
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">🚀 App</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fast & SEO-Friendly</p>
                </div>
              </div>
              <p>
                This setup ensures your app loads quickly, ranks well in search engines, and feels smooth—even on slow connections [5]!
              </p>
            </section>

            {/* Why Use Next.js */}
            <section id="why-use-nextjs" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Why Choose Next.js?</h2>
              <p>
                Why not stick with plain React or Create React App? While React is great for simple apps, Next.js excels for complex, production-ready projects. Here’s why it’s a top choice in 2025:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Lightning-Fast Performance</strong>: Automatic code splitting, image optimization, and lazy loading make apps load in a flash [3, 5].</li>
                <li><strong>SEO-Friendly</strong>: SSR and SSG ensure search engines can crawl your content easily, unlike client-side React apps [6].</li>
                <li><strong>Full-Stack Power</strong>: API routes let you build backends without a separate server, perfect for beginners [7].</li>
                <li><strong>Modern Features</strong>: React Server Components, Server Actions, and AI integrations make it future-proof [4, 8].</li>
                <li><strong>Developer-Friendly</strong>: Huge community, easy setup, and Vercel deployment save time [9].</li>
              </ul>
              <p>
                Next.js makes your apps faster, more scalable, and easier to build, especially as web development evolves in 2025.
              </p>
              <p>
                <strong>Quick Tip</strong>: Pair Next.js with <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB</Link> or <Link href="/express-nodejs-blog" className="text-blue-600 hover:underline">Express</Link> for a full-stack JavaScript solution.
              </p>
            </section>

            {/* Analogy */}
            <section id="analogy" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Analogy: Next.js as a Full Kitchen Setup</h2>
              <p>
                Imagine React is like basic kitchen tools (knife, pan)—you can cook, but setting up the oven and fridge takes work. Next.js is like a fully equipped kitchen:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Recipes (Components)</strong>: React components are your ingredients—Next.js organizes them into pages.</li>
                <li><strong>Pre-Heated Oven (Rendering)</strong>: SSG/SSR pre-cooks content for fast delivery.</li>
                <li><strong>Smart Fridge (API Routes)</strong>: Stores and serves data without extra appliances.</li>
                <li><strong>Easy Cleanup (Optimizations)</strong>: Automatic tools handle code bundling and SEO.</li>
              </ul>
              <p>
                With Next.js, your “kitchen” (app) is efficient, welcoming, and produces amazing results for beginners and pros!
              </p>
            </section>

            {/* Real-World Use Cases */}
            <section id="real-world-examples" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Where Next.js is Used</h2>
              <p>
                Next.js powers apps you use daily. Here are some examples in 2025:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>E-Commerce</strong>: Shopify stores use SSG for fast product pages and SSR for personalized carts [3].</li>
                <li><strong>Blogs & News</strong>: The New York Times uses Next.js for fast-loading articles with great SEO [2].</li>
                <li><strong>Social Media</strong>: TikTok’s web app leverages API routes for real-time feeds [6].</li>
                <li><strong>AI-Powered Apps</strong>: Vercel AI integrations power chatbots and content generation [8].</li>
                <li><strong>Enterprise</strong>: Netflix uses Next.js for scalable dashboards with Server Components [1].</li>
              </ul>
              <p>
                These show how Next.js handles everything from small projects to massive scales.
              </p>
            </section>

            {/* Code Examples */}
            <section id="code-examples" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Next.js Code Examples</h2>
              <p>
                Let’s dive into simple examples! We’ll assume you have a Next.js project set up (run <code>npx create-next-app@latest my-app</code>). Don’t worry—we’ll explain every step.
              </p>
              <p>First, install Next.js:</p>
              <CodeBlock language="bash">{`npx create-next-app@latest my-next-app --typescript --tailwind --eslint`}</CodeBlock>
              <p>This creates a project with TypeScript, Tailwind CSS, and ESLint.</p>

              <h3 className="text-xl font-semibold mt-6">Example 1: Static Page (SSG)</h3>
              <p>
                Create a homepage with SSG. Edit <code>app/page.tsx</code>:
              </p>
              <CodeBlock language="tsx">{`export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      <p>This page is statically generated for super-fast loading.</p>
    </div>
  );
}`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Uses App Router (Next.js 13+).</li>
                <li>Renders at build time (SSG) for speed and SEO.</li>
                <li>Run <code>npm run dev</code> and visit <code>http://localhost:3000</code>.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 2: Server-Side Rendering (SSR)</h3>
              <p>
                Fetch data on each request. Create <code>app/users/page.tsx</code>:
              </p>
              <CodeBlock language="tsx">{`interface User {
  id: number;
  name: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users List (SSR)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><code>async</code> component runs server-side for each request (SSR).</li>
                <li>Fetches fresh data, ideal for dynamic content.</li>
                <li>Test at <code>/users</code>.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 3: API Route</h3>
              <p>
                Build an API. Create <code>app/api/hello/route.ts</code>:
              </p>
              <CodeBlock language="ts">{`import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from Next.js API!' });
}`}</CodeBlock>
              <p>Then fetch it in <code>app/api-test/page.tsx</code>:</p>
              <CodeBlock language="tsx">{`interface ApiData {
  message: string;
}

async function getApiData(): Promise<ApiData> {
  const res = await fetch('http://localhost:3000/api/hello', { cache: 'no-store' });
  return res.json();
}

export default async function ApiTestPage() {
  const data = await getApiData();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">API Test</h1>
      <p>{data.message}</p>
    </div>
  );
}`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>API routes handle backend logic server-side.</li>
                <li>No separate server needed—full-stack in one project!</li>
                <li>Test at <code>/api-test</code>.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 4: React Server Components</h3>
              <p>
                Fetch data server-side. Create <code>app/posts/page.tsx</code>:
              </p>
              <CodeBlock language="tsx">{`async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', { cache: 'no-store' });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Recent Posts (Server Component)</h1>
      {posts.map((post: any) => (
        <div key={post.id} className="border p-4 mb-4 rounded">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Server Components run on the server, reducing client bundle size.</li>
                <li>Ideal for fetching data securely.</li>
                <li>Test at <code>/posts</code> [10].</li>
              </ul>
              <p>
                <strong>Try it out!</strong> Run <code>npm run dev</code>, visit the routes, and see Next.js’s power in action.
              </p>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">What is the difference between SSR and SSG in Next.js?</h3>
                  <p>
                    SSR (Server-Side Rendering) generates HTML on each request, ideal for dynamic data. SSG (Static Site Generation) pre-renders pages at build time, perfect for static content like blogs. Both improve SEO and performance [6].
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Is Next.js good for beginners?</h3>
                  <p>
                    Yes! Next.js simplifies routing, rendering, and deployment, making it easier than plain React. Start with our code examples and the <a href="https://nextjs.org/learn" className="text-blue-600 hover:underline">Next.js Learn course</a> [9].
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Can Next.js work with databases?</h3>
                  <p>
                    Absolutely! Use API routes with databases like <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB</Link> for full-stack apps [7].
                  </p>
                </div>
              </div>
            </section>

            {/* Wrapping Up */}
            <section id="wrapping-up" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Wrapping Up</h2>
              <p>
                Next.js supercharges React with SSR, SSG, API routes, and Server Components, making it ideal for fast, scalable web apps in 2025. It’s beginner-friendly yet powerful for pros [10].
              </p>
              <p>
                You’ve learned the basics, seen examples, and tried code—now build your own Next.js app! Start with a blog or try our <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB guide</Link> for a full-stack project.
              </p>
              <p>
                For more, explore the <a href="https://nextjs.org/docs" className="text-blue-600 hover:underline">Next.js docs</a> or <a href="https://nextjs.org/learn" className="text-blue-600 hover:underline">beginner tutorials</a>.
              </p>
              <p>
                <strong>Next Steps</strong>: Experiment with the App Router and deploy to Vercel for free. Happy coding! [9]
              </p>
            </section>

            {/* References */}
            <section id="references" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 References</h2>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li><a href="https://nextjs.org/docs" className="text-blue-600 hover:underline">Next.js Documentation</a></li>
                <li><a href="https://vercel.com/guides/why-nextjs" className="text-blue-600 hover:underline">Why Next.js</a></li>
                <li><a href="https://nextjs.org/docs/app/building-your-application/optimizing" className="text-blue-600 hover:underline">Next.js Performance Optimizations</a></li>
                <li><a href="https://nextjs.org/docs/app/building-your-application/rendering/server-components" className="text-blue-600 hover:underline">React Server Components</a></li>
                <li><a href="https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading" className="text-blue-600 hover:underline">Next.js Lazy Loading</a></li>
                <li><a href="https://nextjs.org/docs/app/building-your-application/optimizing/seo" className="text-blue-600 hover:underline">Next.js SEO</a></li>
                <li><a href="https://nextjs.org/docs/app/building-your-application/routing#api-routes" className="text-blue-600 hover:underline">Next.js API Routes</a></li>
                <li><a href="https://vercel.com/blog/ai-sdk-with-next-js" className="text-blue-600 hover:underline">Vercel AI SDK with Next.js</a></li>
                <li><a href="https://vercel.com/docs/frameworks/nextjs" className="text-blue-600 hover:underline">Deploying with Vercel</a></li>
                <li><a href="https://nextjs.org/docs/app/building-your-application/rendering" className="text-blue-600 hover:underline">Next.js Rendering</a></li>
              </ol>
            </section>
          </article>

        </div>
      </div>
    </>
  );
}
