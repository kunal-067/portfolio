import {CodeBlock} from "@/components/CodeBlock"

export default function RedisBlog() {
    return (
        <div className="max-w-6xl mx-auto py-6 md:py-8 px-4 md:px-8 text-gray-800 dark:text-gray-200">
            <h1 className="flex items-center gap-2 text-3xl md:text-4xl font-extrabold mb-4 md:mb-8">
               <img src={'/redis.gif'} className="size-12 hidden md:block"/>Redis: The Super-Fast Data Store Every Backend Dev Should Know
            </h1>

            <article>
                {/* Intro Paragraph */}
                <section className="mb-10 space-y-4">
                    <p>
                        When you build a web app, users expect it to <strong>load fast</strong>.
                        Traditional databases like MySQL or PostgreSQL are great for structured data but can get slow under heavy traffic.
                    </p>
                    <p>
                        This is where <strong>Redis</strong> comes in. Redis is like a secret weapon for developers who want
                        <strong> speed and real-time performance</strong>. Big apps—Twitter, GitHub, Stack Overflow—use Redis to handle millions of requests quickly.
                    </p>
                    <p>
                        In this blog, we’ll cover:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>✅ What Redis is</li>
                        <li>✅ When to use Redis</li>
                        <li>✅ A simple analogy to understand it</li>
                        <li>✅ Real-world use cases</li>
                        <li>✅ Copy-paste Node.js code examples</li>
                    </ul>
                </section>

                {/* What is Redis Section */}
                <section className="mb-10 space-y-4">
                    <h2 className="text-2xl font-bold mb-3">🔹 What is Redis?</h2>
                    <p>
                        Redis stands for <strong>Remote Dictionary Server</strong>. It is an <strong>in-memory database</strong>—meaning it stores data in <strong>RAM</strong> instead of disk.
                        This makes Redis extremely fast.
                    </p>
                    <p>
                        Think of Redis as a <strong>key-value store</strong>, like a dictionary:
                    </p>

                    {/* Code Block */}
                    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                        {`SET user:1 "Kunal"
GET user:1`}
                    </pre>
                    <p>
                        This stores {`"Kunal"`} under the key <code>user:1</code> and lets you retrieve it instantly.
                    </p>

                    <p>Redis supports many data types:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Strings → store text or numbers</li>
                        <li>Lists → like arrays (to-do lists, queues)</li>
                        <li>Sets → unique collections (tags, categories)</li>
                        <li>Sorted Sets → ranked lists (leaderboards)</li>
                        <li>Hashes → objects (like user profiles)</li>
                    </ul>
                </section>

                {/* Why Use Redis Section */}
                <section className="mb-10 space-y-4">
                    <h2 className="text-2xl font-bold mb-3">🔹 Why Use Redis?</h2>
                    <p>
                        Redis is often used <strong>alongside your main database</strong> to make your app faster.
                    </p>
                    <p><strong>Benefits of Redis:</strong></p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>⚡ Super Fast – sub-millisecond responses</li>
                        <li>🛠 Simple – just store and retrieve data</li>
                        <li>📊 Perfect for caching – reduce database load</li>
                        <li>🎮 Real-time apps – chat, leaderboards, notifications</li>
                        <li>🔄 Auto expiration – useful for sessions, OTPs</li>
                    </ul>
                </section>

                {/* Analogy Section */}
                <section className="mb-10 space-y-4">
                    <h2 className="text-2xl font-bold mb-3">🔹 Easy Analogy: Redis vs Database</h2>
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
                        Redis doesn’t replace the pantry (database), but it makes cooking (your app) much faster by keeping hot items nearby.
                    </p>
                </section>

                {/* Where Do Apps Use Redis Section */}
                <section className="mb-10 space-y-4">
                    <h2 className="text-2xl font-bold mb-3">🔹 Where Do Apps Use Redis?</h2>
                    <p>Here are some real-life examples:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Caching:</strong> Store frequently accessed data to reduce DB load.</li>
                        <li><strong>Session Management:</strong> Store user sessions with auto-expiry for fast logins.</li>
                        <li><strong>Leaderboards:</strong> Keep track of top players or scores in real-time.</li>
                        <li><strong>Message Queues:</strong> Process background tasks efficiently.</li>
                        <li><strong>Rate Limiting:</strong> Limit API requests per user or IP.</li>
                    </ul>
                </section>
            </article>


            <h1 className="text-3xl font-bold mb-6">Getting started with Redis</h1>

            {/* Installation Section */}
            <h2 className="text-2xl font-semibold mb-4">🔹 Installing Redis</h2>
            <p className="mb-3">
                To use Redis, you need to install the Redis server on your machine or
                run it inside Docker.
            </p>


            <CodeBlock>{`# On Mac
brew install redis`}</CodeBlock>
            <CodeBlock>{`
# On Ubuntu
sudo apt-get install redis-server`}
            </CodeBlock>

            <CodeBlock>{`
# Using Docker
docker run -p 6379:6379 redis`}
            </CodeBlock>


            {/* Connecting Redis */}
            <h2 className="text-2xl font-semibold mb-4">🔹 Connecting Redis in Node.js</h2>
            <p className="mb-3">
                After installing Redis, we connect to it using the{" "}
                <code>redis</code> npm package.
            </p>

            <CodeBlock>{`npm install redis`}</CodeBlock>

            <p className="mb-3">Now let’s connect to Redis:</p>
            <CodeBlock>
                {`const redis = require("redis");        // Import Redis package
const client = redis.createClient();     // Create a client instance

async function connectRedis() {
  await client.connect();                // Connect to Redis server
  console.log("✅ Connected to Redis");
}

connectRedis();`}
            </CodeBlock>

            <div className="mb-6">
                🔎 Here’s what’s happening:
                <ul className="list-disc ml-6 mt-2">
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
            </div>

            {/* Example 1: Set and Get */}
            <h2 className="text-2xl font-semibold mb-4">🔹Set & Get Data</h2>
            <p className="mb-3">
                Store a value in Redis and then fetch it instantly:
            </p>

            <CodeBlock>
                {`async function runExample() {
  await client.set("user:1", "Kunal");    // Store data
  const value = await client.get("user:1"); // Retrieve data
  console.log(value); // 👉 "Kunal"
}

runExample();`}
            </CodeBlock>

            <div className="mb-6">
                🔎 Here:
                <ul className="list-disc ml-6 mt-2">
                    <li>
                        <code>{`set("user:1", "Kunal")`}</code> → saves a key-value pair in
                        memory.
                    </li>
                    <li>
                        <code>{`get("user:1")`}</code> → fetches it instantly.
                    </li>
                    <li>Output will be <code>{`"Kunal"`}</code>.</li>
                </ul>
            </div>

            {/* Example 2: Expiring Data */}
            <h2 className="text-2xl font-semibold mb-4">🔹Expiring Data</h2>
            <p className="mb-3">
                Sometimes we want temporary data (like OTPs or sessions). Redis allows
                setting expiry time.
            </p>

            <CodeBlock>
                {`await client.setEx("otp:123", 60, "789456"); // Expires in 60s
const otp = await client.get("otp:123");
console.log(otp); // 👉 "789456"`}
            </CodeBlock>

            <div className="mb-6">
                🔎 Here:
                <ul className="list-disc ml-6 mt-2">
                    <li>
                        <code>{`setEx("otp:123", 60, "789456")`}</code> → stores OTP with 60
                        seconds expiry.
                    </li>
                    <li>
                        After 60s, Redis automatically deletes it.
                    </li>
                </ul>
            </div>

            {/* --- Use Case 1: Caching API Requests --- */}
            <h2 className="text-2xl font-semibold mb-4">🔹 Caching API Requests</h2>
            <p className="mb-3">
                Redis can store API responses, so repeated requests are served faster.
            </p>
            <CodeBlock>{`async function getWeather(city) {
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

            {/* --- Use Case 2: Session Management --- */}
            <h2 className="text-2xl font-semibold mb-4">🔹 Session Management</h2>
            <p className="mb-3">
                Store user sessions in Redis for fast authentication checks.
            </p>
            <CodeBlock>{`await client.setEx("session:101", 3600, JSON.stringify({ user: "Kunal", role: "admin" }));
const session = await client.get("session:101");
console.log(JSON.parse(session));`}</CodeBlock>

            {/* --- Use Case 3: Leaderboard --- */}
            <h2 className="text-2xl font-semibold mb-4">🔹 Leaderboard</h2>
            <p className="mb-3">
                Use Redis sorted sets to build a game leaderboard.
            </p>
            <CodeBlock>{`await client.zAdd("game:scores", [
  { score: 100, value: "Alice" },
  { score: 200, value: "Bob" },
  { score: 150, value: "Kunal" },
]);

const topPlayers = await client.zRangeWithScores("game:scores", 0, -1, { REV: true });
console.log(topPlayers);`}</CodeBlock>

            {/* --- Use Case 4: Rate Limiting --- */}
            <h2 className="text-2xl font-semibold mb-4">🔹 Rate Limiting</h2>
            <p className="mb-3">
                Limit API calls per user by counting requests in Redis.
            </p>
            <CodeBlock>{`async function rateLimit(userId) {
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

        </div>
    );
}

