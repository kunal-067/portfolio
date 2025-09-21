import { CodeBlock } from '@/components/CodeBlock';
import { Metadata } from 'next';
import Link from 'next/link';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'MongoDB for Beginners: Build Flexible Apps with NoSQL | MyApp',
  description: 'Learn MongoDB, the flexible NoSQL database for modern apps. This beginner-friendly guide covers how MongoDB works, why to use it, real-world examples, and Node.js code tutorials.',
  keywords: ['MongoDB', 'NoSQL database', 'Node.js MongoDB tutorial', 'beginner MongoDB', 'MongoDB Atlas', 'document database'],
  openGraph: {
    title: 'MongoDB for Beginners: Build Flexible Apps with NoSQL',
    description: 'Discover MongoDB’s power for modern apps with this beginner-friendly guide, including Node.js examples and real-world use cases.',
    url: 'https://kunalshroff.vercel.app/mongodb-blog',
    type: 'article',
    images: [
      {
        url: 'https://kunalshroff.vercel.app/images/mongodb-blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'MongoDB logo with code example',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MongoDB for Beginners: Build Flexible Apps with NoSQL',
    description: 'Learn MongoDB with this beginner-friendly guide, featuring Node.js code examples and real-world use cases.',
    images: ['https://kunalshroff.vercel.app/images/mongodb-blog-og.jpg'],
  },
};

// Schema markup for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'MongoDB for Beginners: Build Flexible Apps with NoSQL',
  description: 'Learn MongoDB, the flexible NoSQL database for modern apps, with beginner-friendly explanations, Node.js examples, and real-world use cases.',
  author: {
    '@type': 'Person',
    name: 'Your Name',
  },
  publisher: {
    '@type': 'Organization',
    name: 'YourDomain',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kunalshroff.vercel.app/logo.png',
    },
  },
  datePublished: '2025-09-21',
  dateModified: '2025-09-21',
  image: 'https://kunalshroff.vercel.app/images/mongodb-blog-og.jpg',
  url: 'https://kunalshroff.vercel.app/mongodb-blog',
};

export default function MongoDBBlog() {
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
          🍃 MongoDB: The Flexible Database for Modern Apps
        </h1>

        {/* Table of Contents */}
        <section className="mb-10 space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><Link href="#intro" className="text-blue-600 hover:underline">Introduction</Link></li>
            <li><Link href="#what-is-mongodb" className="text-blue-600 hover:underline">What is MongoDB?</Link></li>
            <li><Link href="#how-it-works" className="text-blue-600 hover:underline">How MongoDB Works</Link></li>
            <li><Link href="#why-use-mongodb" className="text-blue-600 hover:underline">Why Choose MongoDB?</Link></li>
            <li><Link href="#analogy" className="text-blue-600 hover:underline">MongoDB as a Digital Notebook</Link></li>
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
              Storing data in an app is like keeping ingredients in a pantry—you need a system that’s easy to use and flexible. <strong>MongoDB</strong> is a modern database that stores data in a way that’s simple, scalable, and perfect for web apps, letting you focus on building features instead of wrestling with complex tables.
            </p>
            <p>
              Companies like Google, eBay, and Forbes use MongoDB to manage massive amounts of data reliably [1, 2, 6]. Don’t worry if you’re new to databases—this guide is designed to be super beginner-friendly and easy to follow!
            </p>
            <p>In this blog, we’ll cover:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>✅ What MongoDB is (in simple terms)</li>
              <li>✅ How it works, step by step</li>
              <li>✅ Why it’s great for web apps</li>
              <li>✅ Everyday examples of MongoDB in action</li>
              <li>✅ A fun analogy to make it clear</li>
              <li>✅ Easy Node.js code examples you can copy and try</li>
            </ul>
            <p>
              By the end, you’ll understand how MongoDB can make your apps powerful and easy to build, even as a beginner! Check out our <Link href="/express-nodejs-blog" className="text-blue-600 hover:underline">Express & Node.js guide</Link> to pair with MongoDB.
            </p>
          </section>

          {/* What is MongoDB */}
          <section id="what-is-mongodb" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 What is MongoDB?</h2>
            <p>
              MongoDB is a <strong>NoSQL database</strong> that stores data in flexible, JSON-like documents instead of rigid tables like traditional databases (e.g., MySQL). Think of it as a digital notebook where you can jot down data in a way that matches how your app uses it.
            </p>
            <p>
              It’s open-source, free to use (with a community edition), and perfect for apps that need to handle diverse or rapidly changing data. MongoDB runs on your computer or in the cloud (via <a href="https://www.mongodb.com/cloud/atlas" className="text-blue-600 hover:underline">MongoDB Atlas</a>).
            </p>
            <p>Key concepts:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Documents</strong>: Data is stored as JSON-like objects, like {`{ "name": "Alice", "age": 25 }`}.</li>
              <li><strong>Collections</strong>: Groups of documents, similar to tables but without fixed structure.</li>
              <li><strong>Database</strong>: A container for collections, like a folder for your notebooks.</li>
              <li><strong>Queries</strong>: Commands to find, add, update, or delete data, written in a simple way.</li>
            </ul>
            <p>
              MongoDB is like a smart, flexible filing cabinet for your app’s data, making it easy to store and retrieve information [3].
            </p>
          </section>

          {/* Visual Flow */}
          <section id="how-it-works" className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold mb-3">🔹 How MongoDB Works</h2>
            <p>
              Let’s see how MongoDB handles data in an app, like storing user profiles. Here’s the simple flow:
            </p>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li>Your app sends data (e.g., a new user profile) to MongoDB.</li>
              <li>MongoDB stores it as a <strong>document</strong> in a <strong>collection</strong> (e.g., “users”).</li>
              <li>When your app needs data, it <strong>queries</strong> MongoDB with simple commands.</li>
              <li>MongoDB finds the matching documents and sends them back as JSON.</li>
              <li>Your app uses the data, like displaying a user’s profile.</li>
            </ol>
            <p>Here’s a diagram of the flow:</p>
            <div className="flex flex-wrap items-center gap-4 md:gap-10">
              <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-xl">🌐 App</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sends data or query</p>
              </div>
              <div className="text-3xl">➡️</div>
              <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-xl">🍃 MongoDB</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">Stores or retrieves</p>
              </div>
              <div className="text-3xl">➡️</div>
              <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-xl">📤 Data</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">Returns JSON</p>
              </div>
            </div>
            <p>
              This setup makes data storage fast, flexible, and perfect for modern apps [4]!
            </p>
          </section>

          {/* Why Use MongoDB */}
          <section id="why-use-mongodb" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 Why Choose MongoDB?</h2>
            <p>
              You might wonder, “Why not use a traditional database like MySQL?” MongoDB is often better for modern apps because of its flexibility and ease of use. Here’s why it shines in 2025:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Flexible Data</strong>: Store data in JSON-like documents that can have different fields—no rigid tables needed [1].</li>
              <li><strong>Scalable</strong>: Handles huge datasets across multiple servers, perfect for apps like eBay [2].</li>
              <li><strong>Easy to Use</strong>: JSON-like syntax feels natural for JavaScript developers, making it beginner-friendly [3].</li>
              <li><strong>Fast Queries</strong>: Optimized for quick reads and writes, great for real-time apps [4].</li>
              <li><strong>Cloud Ready</strong>: MongoDB Atlas makes it easy to run in the cloud with minimal setup [5].</li>
            </ul>
            <p>
              MongoDB is like a Swiss Army knife for data storage—flexible, powerful, and easy to use for beginners and pros alike.
            </p>
            <p>
              <strong>Quick Tip</strong>: MongoDB works great with <Link href="/express-nodejs-blog" className="text-blue-600 hover:underline">Node.js and Express</Link>, letting you build full-stack JavaScript apps.
            </p>
          </section>

          {/* Analogy */}
          <section id="analogy" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 Analogy: MongoDB as a Digital Notebook</h2>
            <p>
              Imagine your app’s data as notes in a notebook. A traditional database like MySQL is like a notebook with fixed tables—every page must follow the same format. MongoDB is like a digital notebook:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Notes (Documents)</strong>: Each note (data entry) can have different info, like a user’s name, age, or hobbies, without a fixed structure.</li>
              <li><strong>Notebook (Collection)</strong>: Groups related notes, like all user profiles, in one place.</li>
              <li><strong>Search (Queries)</strong>: Quickly find notes by searching for keywords, like “all users over 25.”</li>
              <li><strong>Cloud Sync (Atlas)</strong>: Save your notebook online so it’s accessible anywhere, anytime.</li>
            </ul>
            <p>
              MongoDB makes storing and finding data as easy as flipping through a notebook, perfect for apps that need flexibility!
            </p>
          </section>

          {/* Real-World Use Cases */}
          <section id="real-world-examples" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 Where MongoDB is Used</h2>
            <p>
              MongoDB powers apps you use every day. Here are some examples in 2025:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>E-Commerce</strong>: eBay stores product listings with varying attributes (e.g., size, color) in MongoDB [2].</li>
              <li><strong>Social Media</strong>: Forbes uses MongoDB for content management, handling articles with diverse formats [6].</li>
              <li><strong>IoT Apps</strong>: Google’s Nest devices store sensor data with flexible schemas in MongoDB [1].</li>
              <li><strong>Real-Time Analytics</strong>: Apps like Uber use MongoDB to track ride data in real-time [7].</li>
              <li><strong>Gaming</strong>: EA stores player profiles and game states in MongoDB for fast access [4].</li>
            </ul>
            <p>
              These examples show how MongoDB handles diverse data for apps big and small.
            </p>
          </section>

          {/* Code Examples */}
          <section id="code-examples" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 MongoDB Code Examples with Node.js</h2>
            <p>
              Let’s try some simple code to use MongoDB with Node.js and Express! You’ll need MongoDB installed (or use <Link href="https://www.mongodb.com/cloud/atlas" className="text-blue-600 hover:underline">MongoDB Atlas</Link> for a cloud setup). We’ll explain every step for beginners.
            </p>
            <p>First, set up MongoDB locally with Docker:</p>
            <CodeBlock language="bash">{`docker run -d -p 27017:27017 --name mongodb mongo`}</CodeBlock>
            <p>Or sign up for MongoDB Atlas for a free cloud database.</p>
            <p>Create a project and install dependencies:</p>
            <CodeBlock language="bash">{`mkdir my-mongodb-app
cd my-mongodb-app
npm init -y
npm install express mongodb`}</CodeBlock>

            <h3 className="text-xl font-semibold mt-6">Example 1: Connect to MongoDB</h3>
            <p>
              Create a server that connects to MongoDB. Save as <code>server.js</code>:
            </p>
            <CodeBlock language="javascript">{`const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// MongoDB connection URL (local or Atlas)
const url = 'mongodb://localhost:27017';
const dbName = 'myapp';

// Connect to MongoDB
async function connectDB() {
  const client = new MongoClient(url);
  await client.connect();
  console.log('Connected to MongoDB');
  return client.db(dbName);
}

app.get('/', async (req, res) => {
  res.send('Connected to MongoDB!');
});

// Start the server
app.listen(port, async () => {
  await connectDB();
  console.log(\`Server running at http://localhost:\${port}\`);
});
`}</CodeBlock>
            <p><strong>What’s happening?</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Import Express and MongoDB’s client.</li>
              <li>Connect to MongoDB (local or Atlas) using <code>MongoClient</code>.</li>
              <li>Start a server and confirm the connection.</li>
              <li>Run with <code>node server.js</code> and visit <code>http://localhost:3000</code>.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Example 2: Insert a Document</h3>
            <p>
              Add a user to a collection. Update <code>server.js</code>:
            </p>
            <CodeBlock language="javascript">{`const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'myapp';

async function connectDB() {
  const client = new MongoClient(url);
  await client.connect();
  return client.db(dbName);
}

app.get('/add-user', async (req, res) => {
  const db = await connectDB();
  const users = db.collection('users');

  // Insert a document
  const user = { name: 'Alice', age: 25 };
  await users.insertOne(user);
  res.send('User added: ' + JSON.stringify(user));
});

app.listen(port, async () => {
  await connectDB();
  console.log(\`Server running at http://localhost:\${port}\`);
});
`}</CodeBlock>
            <p><strong>What’s happening?</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Add a route to insert a user document into the “users” collection.</li>
              <li>Use <code>insertOne</code> to store a JSON-like document.</li>
              <li>Test at <code>http://localhost:3000/add-user</code>.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Example 3: Query Documents</h3>
            <p>
              Fetch all users. Update <code>server.js</code>:
            </p>
            <CodeBlock language="javascript">{`const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'myapp';

async function connectDB() {
  const client = new MongoClient(url);
  await client.connect();
  return client.db(dbName);
}

app.get('/users', async (req, res) => {
  const db = await connectDB();
  const users = db.collection('users');

  // Find all users
  const userList = await users.find({}).toArray();
  res.json(userList);
});

app.listen(port, async () => {
  await connectDB();
  console.log(\`Server running at http://localhost:\${port}\`);
});
`}</CodeBlock>
            <p><strong>What’s happening?</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Use <code>find</code> to query all documents in the “users” collection.</li>
              <li>Convert results to an array with <code>toArray</code> and return as JSON.</li>
              <li>Test at <code>http://localhost:3000/users</code>.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Example 4: Update a Document</h3>
            <p>
              Update a user’s age. Update <code>server.js</code>:
            </p>
            <CodeBlock language="javascript">{`const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'myapp';

async function connectDB() {
  const client = new MongoClient(url);
  await client.connect();
  return client.db(dbName);
}

app.get('/update-user', async (req, res) => {
  const db = await connectDB();
  const users = db.collection('users');

  // Update a user
  const result = await users.updateOne(
    { name: 'Alice' },
    { $set: { age: 26 } }
  );
  res.send('Updated user: ' + JSON.stringify(result));
});

app.listen(port, async () => {
  await connectDB();
  console.log(\`Server running at http://localhost:\${port}\`);
});
`}</CodeBlock>
            <p><strong>What’s happening?</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Use <code>updateOne</code> to change a user’s age where the name is “Alice”.</li>
              <li>The <code>$set</code> operator updates specific fields.</li>
              <li>Test at <code>http://localhost:3000/update-user</code>, then check <code>/users</code>.</li>
            </ul>
            <p>
              <strong>Try it out!</strong> Run <code>docker run -d -p 27017:27017 mongo</code>, then <code>node server.js</code>. Visit the routes in a browser to see MongoDB in action.
            </p>
          </section>

          {/* Wrapping Up */}
          <section id="wrapping-up" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 Wrapping Up</h2>
            <p>
              MongoDB is a flexible, powerful database that makes storing and retrieving data easy for modern apps. Its JSON-like documents, scalability, and cloud support make it perfect for beginners and pros alike [5].
            </p>
            <p>
              You’ve learned the basics, seen real-world examples, and tried code—now you’re ready to use MongoDB in your projects! Start with a small app like a to-do list, and explore our <Link href="/express-nodejs-blog" className="text-blue-600 hover:underline">Express guide</Link> for backend tips.
            </p>
            <p>
              For more, check the <a href="https://www.mongodb.com/docs/" className="text-blue-600 hover:underline">MongoDB docs</a> or try <a href="https://www.mongodb.com/developer/" className="text-blue-600 hover:underline">MongoDB’s tutorials</a>.
            </p>
            <p>
              <strong>Next Steps</strong>: Combine MongoDB with Express and deploy to a platform like Render or MongoDB Atlas. Happy coding! [5]
            </p>
          </section>

          {/* References */}
          <section id="references" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 References</h2>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li><a href="https://www.mongodb.com/docs/manual/introduction/" className="text-blue-600 hover:underline">MongoDB Introduction</a></li>
              <li><a href="https://www.mongodb.com/use-cases/ecommerce" className="text-blue-600 hover:underline">MongoDB for E-Commerce</a></li>
              <li><a href="https://www.mongodb.com/docs/drivers/node/" className="text-blue-600 hover:underline">MongoDB with Node.js</a></li>
              <li><a href="https://www.mongodb.com/docs/manual/core/performance/" className="text-blue-600 hover:underline">MongoDB Performance</a></li>
              <li><a href="https://www.mongodb.com/cloud/atlas" className="text-blue-600 hover:underline">MongoDB Atlas</a></li>
              <li><a href="https://www.mongodb.com/use-cases/content-management" className="text-blue-600 hover:underline">MongoDB for Content Management</a></li>
              <li><a href="https://www.mongodb.com/use-cases/real-time-analytics" className="text-blue-600 hover:underline">MongoDB for Real-Time Analytics</a></li>
            </ol>
          </section>
        </article>
      </div>
    </>
  );
}

// Ensure SSG by default
// export async function getStaticProps() {
//   return {
//     props: {}, // No dynamic data needed for this static page
//   };
// }