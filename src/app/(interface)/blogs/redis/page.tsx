import { CodeBlock } from '@/components/CodeBlock';
import type { Metadata } from 'next';
import Link from 'next/link';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Redis for Beginners: Super-Fast Data Store | Kunal Shroff',
  description: 'Learn Redis, the in-memory data store for blazing-fast apps. This beginner-friendly guide covers Redis basics, use cases, and Node.js code examples for caching, sessions, and more.',
  keywords: [
    'Kunal Shroff',
    'Redis tutorial',
    'Node.js Redis',
    'in-memory database',
    'Redis caching',
    'real-time apps',
  ],
  openGraph: {
    title: 'Redis for Beginners: Super-Fast Data Store',
    description: 'Discover Redis with Kunal Shroff’s beginner-friendly guide, featuring Node.js code examples for caching, sessions, and real-time apps.',
    url: 'https://kunalshroff.vercel.app/redis-blog',
    type: 'article',
    images: [
      {
        url: 'https://kunalshroff.vercel.app/images/redis-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Redis logo with code example',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redis for Beginners: Super-Fast Data Store',
    description: 'Learn Redis with Kunal Shroff’s guide, featuring Node.js code examples for caching, sessions, and more.',
    images: ['https://kunalshroff.vercel.app/images/redis-og.jpg'],
  },
  alternates: {
    canonical: 'https://kunalshroff.vercel.app/redis-blog',
  },
};

// Schema markup for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Redis for Beginners: Super-Fast Data Store',
  description: 'Learn Redis, the in-memory data store for blazing-fast apps, with beginner-friendly explanations, Node.js code examples, and real-world use cases.',
  author: {
    '@type': 'Person',
    name: 'Kunal Shroff',
  },
  publisher: {
    '@type': 'Person',
    name: 'Kunal Shroff',
    sameAs: ['https://linkedin.com/in/kunal-shroff', 'https://github.com/kunal-shroff'],
  },
  datePublished: '2025-09-21',
  dateModified: '2025-09-21',
  image: 'https://kunalshroff.vercel.app/images/redis-og.jpg',
  url: 'https://kunalshroff.vercel.app/redis-blog',
};

export default function RedisBlog() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-6xl mx-auto py-6 md:py-8 px-4 md:px-8 text-gray-800 dark:text-gray-200">
        {/* Blog Header */}
        <h1 className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-extrabold mb-6 md:mb-10">
          <span className="size-12 hidden md:block">🟥</span> Redis: The Super-Fast Data Store Every Developer Should Know
        </h1>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Table of Contents */}
          <section className="mb-10 lg:w-[510px] w-full lg:sticky top-24 self-start space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><Link href="#intro" className="text-blue-600 hover:underline">Introduction</Link></li>
              <li><Link href="#what-is-redis" className="text-blue-600 hover:underline">What is Redis?</Link></li>
              <li><Link href="#how-it-works" className="text-blue-600 hover:underline">How Redis Works</Link></li>
              <li><Link href="#why-use-redis" className="text-blue-600 hover:underline">Why Choose Redis?</Link></li>
              <li><Link href="#analogy" className="text-blue-600 hover:underline">Redis as a Kitchen Counter</Link></li>
              <li><Link href="#real-world-examples" className="text-blue-600 hover:underline">Real-World Use Cases</Link></li>
              <li><Link href="#code-examples" className="text-blue-600 hover:underline">Code Examples</Link></li>
              <li><Link href="#wrapping-up" className="text-blue-600 hover:underline">Wrapping Up</Link></li>
              <li><Link href="#references" className="text-blue-600 hover:underline">References</Link></li>
            </ul>
          </section>

          <article className="flex-1">
            {/* Intro Paragraph */}
            <section id="intro" className="mb-10 space-y-4">
              <p>
                Speed is everything in modern web apps—users expect instant responses, whether it’s loading a feed or processing a payment. Traditional databases like MySQL or PostgreSQL can slow down under heavy traffic, but <strong>Redis</strong> is a game-changer for performance.
              </p>
              <p>
                Companies like Twitter, GitHub, and Stack Overflow use Redis to handle millions of requests with sub-millisecond speed [1]. This beginner-friendly guide will show you how Redis works and how to use it in your projects!
              </p>
              <p>In this blog, we’ll cover:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>✅ What Redis is (in simple terms)</li>
                <li>✅ How Redis stores and retrieves data</li>
                <li>✅ Why it’s perfect for fast apps</li>
                <li>✅ Real-world examples you’ll recognize</li>
                <li>✅ A fun analogy to make it clear</li>
                <li>✅ Node.js code examples you can try</li>
              </ul>
              <p>
                By the end, you’ll be ready to boost your app’s performance with Redis! Check out our <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB guide</Link> or <Link href="/express-nodejs-blog" className="text-blue-600 hover:underline">Express.js guide</Link> for full-stack development.
              </p>
            </section>

            {/* What is Redis */}
            <section id="what-is-redis" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 What is Redis?</h2>
              <p>
                Redis (<strong>Remote Dictionary Server</strong>) is an open-source, <strong>in-memory key-value store</strong> designed for speed. Unlike traditional databases that store data on disk, Redis keeps data in RAM, making it blazing fast for read and write operations [2].
              </p>
              <p>
                Redis acts like a super-fast dictionary where you store and retrieve data using keys. For example:
              </p>
              <CodeBlock language="redis">{`SET user:1 "Kunal"
GET user:1`}</CodeBlock>
              <p>
                This stores “Kunal” under the key <code>user:1</code> and retrieves it instantly.
              </p>
              <p>Redis supports versatile data structures:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Strings → store text or numbers</li>
                <li>Lists → like arrays (to-do lists, queues)</li>
                <li>Sets → unique collections (tags, categories)</li>
                <li>Sorted Sets → ranked lists (leaderboards)</li>
                <li>Hashes → objects (like user profiles)</li>
              </ul>
              <p>
                Redis is often used alongside databases like MongoDB for caching or real-time tasks [3].
              </p>
            </section>

            {/* How Redis Works */}
            <section id="how-it-works" className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold mb-3">🔹 How Redis Works</h2>
              <p>
                Redis stores data in memory for lightning-fast access. Here’s how it handles a request, like caching a user profile:
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>An app sends a command (e.g., <code>{`SET user:1 "Kunal"`}</code>) to Redis.</li>
                <li>Redis stores the data in RAM under the specified key.</li>
                <li>The app retrieves the data with <code>GET user:1</code>, getting an instant response.</li>
                <li>Redis supports expiration (e.g., <code>SETEX</code>) to remove stale data automatically.</li>
                <li>Data can be persisted to disk for durability if needed.</li>
              </ol>
              <p>Here’s a diagram of the flow:</p>
              <div className="flex flex-wrap items-center gap-4 md:gap-10">
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">📱 App</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sends SET/GET</p>
                </div>
                <div className="text-3xl">➡️</div>
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">🟥 Redis</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stores in RAM</p>
                </div>
                <div className="text-3xl">➡️</div>
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">📤 Response</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Instant data</p>
                </div>
              </div>
              <p>
                This in-memory approach makes Redis ideal for high-performance tasks [4].
              </p>
            </section>

            {/* Why Use Redis */}
            <section id="why-use-redis" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Why Choose Redis?</h2>
              <p>
                Redis is a go-to for apps needing speed and simplicity. Here’s why it’s a top choice in 2025:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>⚡ Super Fast – sub-millisecond responses</li>
                <li>🛠 Simple – just store and retrieve data</li>
                <li>📊 Perfect for caching – reduce database load</li>
                <li>🎮 Real-time apps – chat, leaderboards, notifications</li>
                <li>🔄 Auto expiration – useful for sessions, OTPs</li>
              </ul>
              <p>
                Redis complements your main database and pairs well with <Link href="/kafka-blog" className="text-blue-600 hover:underline">Kafka</Link> for streaming or <Link href="/express-nodejs-blog" className="text-blue-600 hover:underline">Express.js</Link> for APIs.
              </p>
            </section>

            {/* Analogy */}
            <section id="analogy" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Analogy: Redis as a Kitchen Counter</h2>
              <p>
                Imagine your app is a <strong>restaurant</strong>:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                    <strong>Database (MySQL/Postgres)</strong>: the main pantry – large and organized but takes time to fetch ingredients (disk I/O)
                </li>
                <li>
                    <strong>Redis</strong>: the kitchen counter – frequently used items are right next to the chef for instant access (in-memory speed)
                </li>
              </ul>
              <p>
                Redis doesn’t replace the pantry but speeds up cooking by keeping hot items ready, making your app lightning-fast [7].
              </p>
            </section>

            {/* Real-World Use Cases */}
            <section id="real-world-examples" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Where Redis is Used</h2>
              <p>Here are some real-life examples:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Caching:</strong> Store frequently accessed data to reduce DB load.</li>
                <li><strong>Session Management:</strong> Store user sessions with auto-expiry for fast logins.</li>
                <li><strong>Leaderboards:</strong> Keep track of top players or scores in real-time.</li>
                <li><strong>Message Queues:</strong> Process background tasks efficiently.</li>
                <li><strong>Rate Limiting:</strong> Limit API requests per user or IP.</li>
              </ul>
              <p>
                Redis’s speed and flexibility make it a must-have for modern apps.
              </p>
            </section>

            {/* Code Examples */}
            <section id="code-examples" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Node.js Code Examples with Redis</h2>
              <p>
                Let’s use Redis in Node.js! Install Redis via Docker: <code>docker run -d -p 6379:6379 redis</code>. Then install the client: <code>npm install redis</code>.
              </p>

              <h3 className="text-xl font-semibold mt-6">Installing Redis</h3>
              <p>
                To use Redis, you need to install the Redis server on your machine or run it inside Docker.
              </p>
              <CodeBlock language="bash">{`# On Mac
brew install redis`}</CodeBlock>
              <CodeBlock language="bash">{`
# On Ubuntu
sudo apt-get install redis-server`}</CodeBlock>
              <CodeBlock language="bash">{`
# Using Docker
docker run -p 6379:6379 redis`}</CodeBlock>

              <h3 className="text-xl font-semibold mt-6">Connecting to Redis</h3>
              <p>
                After installing Redis, we connect to it using the <code>redis</code> npm package.
              </p>
              <CodeBlock language="bash">{`npm install redis`}</CodeBlock>
              <p>Now let’s connect to Redis:</p>
              <CodeBlock language="javascript">{`const redis = require("redis");        // Import Redis package
const client = redis.createClient();     // Create a client instance

async function connectRedis() {
  await client.connect();                // Connect to Redis server
  console.log("✅ Connected to Redis");
}

connectRedis();`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                    <code>redis.createClient()</code> → creates a Redis client to talk
                    to the Redis server.
                </li>
                <li>
                    <code>client.connect()</code> → establishes the connection.
                </li>
                <li>
                    Once connected, we can <strong>set</strong> and{" "}
                    <strong>get</strong> data easily.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 1: Set and Get Data</h3>
              <p>
                Store a value in Redis and then fetch it instantly:
              </p>
              <CodeBlock language="javascript">{`async function runExample() {
  await client.set("user:1", "Kunal");    // Store data
  const value = await client.get("user:1"); // Retrieve data
  console.log(value); // 👉 "Kunal"
}

runExample();`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                    <code>{`set("user:1", "Kunal")`}</code> → saves a key-value pair in
                    memory.
                </li>
                <li>
                    <code>{`get("user:1")`}</code> → fetches it instantly.
                </li>
                <li>Output will be <code>{`"Kunal"`}</code>.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 2: Expiring Data</h3>
              <p>
                Sometimes we want temporary data (like OTPs or sessions). Redis allows
                setting expiry time.
              </p>
              <CodeBlock language="javascript">{`await client.setEx("otp:123", 60, "789456"); // Expires in 60s
const otp = await client.get("otp:123");
console.log(otp); // 👉 "789456"`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                    <code>{`setEx("otp:123", 60, "789456")`}</code> → stores OTP with 60
                    seconds expiry.
                </li>
                <li>
                    After 60s, Redis automatically deletes it.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 3: Caching API Requests</h3>
              <p>
                Redis can store API responses, so repeated requests are served faster.
              </p>
              <CodeBlock language="javascript">{`async function getWeather(city) {
  const cached = await client.get(city);
  if (cached) {
    console.log("⚡ From Cache");
    return JSON.parse(cached);
  }

  // Simulating API call
  const data = { temp: 28, city };
  await client.setEx(city, 300, JSON.stringify(data)); // Cache 5 min
  console.log("🌐 From API");
  return data;
}`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Check Redis for cached data.</li>
                <li>If not cached, simulate an API call and store the result.</li>
                <li>Cache expires after 5 minutes.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 4: Session Management</h3>
              <p>
                Store user sessions in Redis for fast authentication checks.
              </p>
              <CodeBlock language="javascript">{`await client.setEx("session:101", 3600, JSON.stringify({ user: "Kunal", role: "admin" }));
const session = await client.get("session:101");
console.log(JSON.parse(session));`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Store a session with a 1-hour expiry.</li>
                <li>Retrieve and parse the session data.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 5: Leaderboard</h3>
              <p>
                Use Redis sorted sets to build a game leaderboard.
              </p>
              <CodeBlock language="javascript">{`await client.zAdd("game:scores", [
  { score: 100, value: "Alice" },
  { score: 200, value: "Bob" },
  { score: 150, value: "Kunal" },
]);

const topPlayers = await client.zRangeWithScores("game:scores", 0, -1, { REV: true });
console.log(topPlayers);`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Add scores to a sorted set with <code>zAdd</code>.</li>
                <li>Retrieve top players with scores in descending order.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 6: Rate Limiting</h3>
              <p>
                Limit API calls per user by counting requests in Redis.
              </p>
              <CodeBlock language="javascript">{`async function rateLimit(userId) {
  const key = "rate:" + userId;
  const count = await client.incr(key);

  if (count === 1) {
    await client.expire(key, 60); // window of 60 sec
  }

  if (count > 5) {
    return "⛔ Too many requests";
  }

  return "✅ Allowed";
}`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Increment a counter for the user.</li>
                <li>Set a 60-second window on first request.</li>
                <li>Block if more than 5 requests in the window.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 7: TypeScript Leaderboard</h3>
              <p>
                Build a leaderboard with TypeScript. Save as <code>leaderboard.ts</code>:
              </p>
              <CodeBlock language="typescript">{`import { createClient } from 'redis';

const client = createClient({ url: 'redis://localhost:6379' });

async function runLeaderboard(): Promise<void> {
  try {
    await client.connect();
    await client.zAdd('game:scores', [
      { score: 100, value: 'Alice' },
      { score: 200, value: 'Bob' },
      { score: 150, value: 'Kunal' },
    ]);
    const topPlayers = await client.zRangeWithScores('game:scores', 0, -1, { REV: true });
    console.log('Top Players:', topPlayers);
  } catch (error) {
    console.error('Error:', (error as Error).message);
  } finally {
    await client.quit();
  }
}

runLeaderboard();
`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Use TypeScript for type safety.</li>
                <li>Add scores to a sorted set and retrieve top players.</li>
                <li>Install TypeScript: <code>npm install typescript @types/node @types/redis</code>.</li>
                <li>Run with <code>ts-node leaderboard.ts</code>.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 8: Caching with MongoDB</h3>
              <p>
                Cache MongoDB queries in Redis. Save as <code>cache.js</code>:
              </p>
              <CodeBlock language="javascript">{`const redis = require('redis');
const { MongoClient } = require('mongodb');

const redisClient = redis.createClient({ url: 'redis://localhost:6379' });
const mongoClient = new MongoClient('mongodb://localhost:27017');

async function getUser(userId) {
  try {
    await redisClient.connect();
    const cached = await redisClient.get(\`user:\${userId}\`);
    if (cached) {
      console.log("⚡ From Redis");
      return JSON.parse(cached);
    }

    await mongoClient.connect();
    const db = mongoClient.db('app');
    const user = await db.collection('users').findOne({ id: userId });
    if (user) {
      await redisClient.setEx(\`user:\${userId}\`, 300, JSON.stringify(user)); // Cache 5 min
      console.log("🌐 From MongoDB");
      return user;
    }
    return null;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await redisClient.quit();
    await mongoClient.close();
  }
}

getUser(1);
`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Check Redis for cached user data.</li>
                <li>If not cached, query MongoDB and cache the result for 5 minutes.</li>
                <li>Run MongoDB: <code>docker run -d -p 27017:27017 mongo</code>.</li>
                <li>Install MongoDB client: <code>npm install mongodb</code>.</li>
                <li>Run with <code>node cache.js</code>.</li>
              </ul>
              <p>
                <strong>Try it out!</strong> Start Redis and MongoDB with Docker, then run the examples to see Redis in action.
              </p>
            </section>

            {/* Wrapping Up */}
            <section id="wrapping-up" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Wrapping Up</h2>
              <p>
                Redis is a powerful in-memory data store that boosts app performance with its speed and versatility. From caching to leaderboards, it’s a must-have for modern apps [7].
              </p>
              <p>
                You’ve learned Redis’s basics, seen real-world use cases, and tried code—now you’re ready to use it! Start with a small caching project and explore more with <Link href="/fastify-blog" className="text-blue-600 hover:underline">Fastify</Link> or <Link href="/nestjs-blog" className="text-blue-600 hover:underline">NestJS</Link>.
              </p>
              <p>
                For more, check the <a href="https://redis.io/docs/" className="text-blue-600 hover:underline">Redis documentation</a> or try their <a href="https://redis.io/learn/" className="text-blue-600 hover:underline">tutorials</a>.
              </p>
              <p>
                <strong>Next Steps</strong>: Deploy Redis with Docker or Redis Enterprise, and combine it with <Link href="/kafka-blog" className="text-blue-600 hover:underline">Kafka</Link> for streaming or <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB</Link> for persistence. Happy coding! [6]
              </p>
            </section>

            {/* References */}
            <section id="references" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 References</h2>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>
                  <a href="https://redis.io/customers" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Redis Customers
                  </a>
                </li>
                <li>
                  <a href="https://redis.io/docs/about/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Redis Introduction
                  </a>
                </li>
                <li>
                  <a href="https://redis.io/docs/data-types/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Redis Data Types
                  </a>
                </li>
                <li>
                  <a href="https://redis.io/topics/persistence" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Redis Persistence
                  </a>
                </li>
                <li>
                  <a href="https://redis.io/docs/use-cases/caching/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Redis Caching
                  </a>
                </li>
                <li>
                  <a href="https://redis.io/docs/use-cases/session-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Redis Session Management
                  </a>
                </li>
                <li>
                  <a href="https://redis.io/docs/clients/nodejs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Redis Node.js Client
                  </a>
                </li>
              </ol>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
