import { CodeBlock } from '@/components/CodeBlock';
import type { Metadata } from 'next';
import Link from 'next/link';

// Base URL for absolute paths
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://kunalshroff.vercel.app';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Apache Kafka for Beginners: Build Real-Time Apps | Kunal Shroff',
  description: 'Learn Apache Kafka, the distributed streaming platform for real-time, event-driven apps. This beginner-friendly guide covers Kafka basics, how it works, real-world use cases, and Node.js code examples.',
  keywords: [
    'Kunal Shroff',
    'Kafka tutorial',
    'Apache Kafka guide',
    'real-time apps',
    'Node.js Kafka',
    'event-driven architecture',
    'Kafka microservices',
  ],
  openGraph: {
    title: 'Apache Kafka for Beginners: Build Real-Time Apps',
    description: 'Discover Apache Kafka with Kunal Shroff’s beginner-friendly guide, featuring code examples and real-world use cases for event-driven apps.',
    url: `${BASE_URL}/kafka-blog`,
    type: 'article',
    images: [
      {
        url: `${BASE_URL}/images/kafka-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Apache Kafka logo with code example',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apache Kafka for Beginners: Build Real-Time Apps',
    description: 'Learn Apache Kafka with Kunal Shroff’s guide, featuring Node.js code examples and real-world use cases.',
    images: [`${BASE_URL}/images/kafka-og.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/kafka-blog`,
  },
};

// Schema markup for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Apache Kafka for Beginners: Build Real-Time Apps',
  description: 'Learn Apache Kafka, the distributed streaming platform for real-time, event-driven apps, with beginner-friendly explanations, Node.js code examples, and real-world use cases.',
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
  image: `${BASE_URL}/images/kafka-og.jpg`,
  url: `${BASE_URL}/kafka-blog`,
};

export default function KafkaBlog() {
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
          🟠 Apache Kafka: Build Real-Time Event-Driven Apps with Ease
        </h1>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Table of Contents */}
          <section className="mb-10 lg:w-[310px] w-full lg:sticky top-24 self-start space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><Link href="#intro" className="text-blue-600 hover:underline">Introduction</Link></li>
              <li><Link href="#what-is-kafka" className="text-blue-600 hover:underline">What is Apache Kafka?</Link></li>
              <li><Link href="#how-it-works" className="text-blue-600 hover:underline">How Kafka Works</Link></li>
              <li><Link href="#why-use-kafka" className="text-blue-600 hover:underline">Why Choose Kafka?</Link></li>
              <li><Link href="#analogy" className="text-blue-600 hover:underline">Kafka as a Post Office</Link></li>
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
                Modern apps thrive on <strong>real-time data</strong>—think instant notifications, live analytics, or seamless messaging. Traditional databases struggle with this speed and scale, but <strong>Apache Kafka</strong> shines as a distributed streaming platform built for real-time, event-driven applications.
              </p>
              <p>
                Companies like LinkedIn, Uber, and Netflix rely on Kafka to process millions of events per second with unmatched reliability [1]. Whether you’re new to backend development or a seasoned pro, this beginner-friendly guide will make Kafka easy to understand!
              </p>
              <p>In this blog, we’ll cover:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>✅ What Apache Kafka is (in simple terms)</li>
                <li>✅ How Kafka processes events, step by step</li>
                <li>✅ Why it’s perfect for real-time apps</li>
                <li>✅ Everyday examples of Kafka in action</li>
                <li>✅ A fun analogy to make it clear</li>
                <li>✅ Node.js code examples you can try</li>
              </ul>
              <p>
                By the end, you’ll be ready to build real-time apps with Kafka! Check out our <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB guide</Link> for database integration or <Link href="/fastify-blog" className="text-blue-600 hover:underline">Fastify guide</Link> for API development.
              </p>
            </section>

            {/* What is Kafka */}
            <section id="what-is-kafka" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 What is Apache Kafka?</h2>
              <p>
                Apache Kafka is a <strong>distributed event streaming platform</strong> that lets apps publish and subscribe to streams of events (messages) in real-time. It’s like a super-fast, scalable messaging system for handling massive data flows [2].
              </p>
              <p>Key concepts:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Topics</strong>: Categories for messages, like “orders” or “user-events.”</li>
                <li><strong>Producers</strong>: Apps that send messages to topics.</li>
                <li><strong>Consumers</strong>: Apps that read messages from topics.</li>
                <li><strong>Brokers</strong>: Servers that store and manage topics, ensuring reliability.</li>
                <li><strong>Partitions</strong>: Splits within topics for scalability and parallel processing.</li>
              </ul>
              <p>
                Kafka is open-source, fault-tolerant, and designed to handle millions of events per second, making it ideal for real-time data pipelines and microservices [3].
              </p>
            </section>

            {/* How Kafka Works */}
            <section id="how-it-works" className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold mb-3">🔹 How Kafka Works</h2>
              <p>
                Let’s see how Kafka handles an event, like a user placing an order. Here’s the flow:
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>A <strong>producer</strong> (e.g., an e-commerce app) sends an order event to a Kafka topic.</li>
                <li>Kafka’s <strong>broker</strong> stores the event in the topic’s partitions.</li>
                <li><strong>Consumers</strong> (e.g., inventory or analytics services) subscribe to the topic.</li>
                <li>Consumers process the event in real-time or at their own pace.</li>
                <li>Kafka ensures fault tolerance by replicating events across brokers.</li>
              </ol>
              <p>Here’s a diagram of the flow:</p>
              <div className="flex flex-wrap items-center gap-4 md:gap-10">
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">📤 Producer</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sends event</p>
                </div>
                <div className="text-3xl">➡️</div>
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">🟠 Kafka</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stores in topic</p>
                </div>
                <div className="text-3xl">➡️</div>
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">📥 Consumer</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Processes event</p>
                </div>
              </div>
              <p>
                This setup makes Kafka fast, scalable, and reliable for real-time apps [4].
              </p>
            </section>

            {/* Why Use Kafka */}
            <section id="why-use-kafka" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Why Choose Kafka?</h2>
              <p>
                Kafka stands out for real-time, event-driven systems. Here’s why it’s a top choice in 2025:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>High Throughput</strong>: Handles millions of events per second with low latency [2].</li>
                <li><strong>Scalability</strong>: Scales horizontally by adding brokers for massive data loads [3].</li>
                <li><strong>Fault Tolerance</strong>: Replicates data across brokers to prevent loss [4].</li>
                <li><strong>Real-Time Processing</strong>: Ideal for live analytics, notifications, and microservices [5].</li>
                <li><strong>Ecosystem</strong>: Integrates with tools like MongoDB, Spark, and Kubernetes [6].</li>
              </ul>
              <p>
                Kafka is perfect for apps needing real-time data pipelines, from analytics to microservices. Pair it with <Link href="/fastify-blog" className="text-blue-600 hover:underline">Fastify</Link> or <Link href="/nestjs-blog" className="text-blue-600 hover:underline">NestJS</Link> for APIs.
              </p>
            </section>

            {/* Analogy */}
            <section id="analogy" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Analogy: Kafka as a Post Office</h2>
              <p>
                Imagine Kafka as a high-tech post office for your app’s data:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Producers (Senders)</strong>: Apps sending letters (events) like user actions.</li>
                <li><strong>Topics (Mailboxes)</strong>: Organized mailboxes for specific events, like “orders” or “logs.”</li>
                <li><strong>Consumers (Readers)</strong>: Services reading letters to process them, like updating dashboards.</li>
                <li><strong>Brokers (Post Office)</strong>: Stores and delivers letters reliably, even during outages.</li>
              </ul>
              <p>
                Kafka ensures every letter reaches its destination in order, no matter how many senders or readers there are!
              </p>
            </section>

            {/* Real-World Use Cases */}
            <section id="real-world-examples" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Real-World Use Cases</h2>
              <p>
                Kafka powers real-time systems across industries in 2025:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Activity Tracking</strong>: LinkedIn tracks user interactions in real-time [1].</li>
                <li><strong>Log Aggregation</strong>: Uber collects logs from thousands of services for monitoring [5].</li>
                <li><strong>Data Pipelines</strong>: Netflix streams data to analytics systems for recommendations [6].</li>
                <li><strong>Microservices</strong>: Event-driven triggers for inventory or payment services [4].</li>
                <li><strong>Messaging</strong>: Real-time chat or notification systems with multiple consumers [3].</li>
              </ul>
              <p>
                Kafka’s flexibility makes it a go-to for high-performance, real-time apps.
              </p>
            </section>

            {/* Code Examples */}
            <section id="code-examples" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Node.js Code Examples with Kafka</h2>
              <p>
                Let’s build a simple Kafka producer and consumer using Node.js! You’ll need Kafka installed (e.g., via Docker: <code>docker run -p 9092:9092 apache/kafka:latest</code>) and Node.js. We’ll use the <code>kafkajs</code> library for simplicity.
              </p>
              <p>Install the Kafka client:</p>
              <CodeBlock language="bash">{`npm install kafkajs`}</CodeBlock>

              <h3 className="text-xl font-semibold mt-6">Example 1: Basic Kafka Producer</h3>
              <p>
                Create a producer to send messages to a topic. Save as <code>producer.js</code>:
              </p>
              <CodeBlock language="javascript">{`const { Kafka } = require('kafkajs');

const kafka = new Kafka({ clientId: 'my-app', brokers: ['localhost:9092'] });
const producer = kafka.producer();

const runProducer = async () => {
  try {
    await producer.connect();
    await producer.send({
      topic: 'test-topic',
      messages: [{ value: 'Hello Kafka!' }],
    });
    console.log('Message sent successfully ✅');
  } catch (error) {
    console.error('Error sending message:', error.message);
  } finally {
    await producer.disconnect();
  }
};

runProducer();
`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Initialize Kafka with a broker at <code>localhost:9092</code>.</li>
                <li>Send a message to the <code>test-topic</code> topic.</li>
                <li>Add error handling for robust production use.</li>
                <li>Run with <code>node producer.js</code>.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 2: Basic Kafka Consumer</h3>
              <p>
                Create a consumer to read messages. Save as <code>consumer.js</code>:
              </p>
              <CodeBlock language="javascript">{`const { Kafka } = require('kafkajs');

const kafka = new Kafka({ clientId: 'my-app', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'test-group' });

const runConsumer = async () => {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(\`Received: \${message.value.toString()} from partition \${partition}\`);
      },
    });
  } catch (error) {
    console.error('Error consuming message:', error.message);
  }
};

runConsumer();
`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Subscribe to <code>test-topic</code> with a consumer group.</li>
                <li>Process each message and log its value.</li>
                <li>Error handling ensures the consumer doesn’t crash.</li>
                <li>Run with <code>node consumer.js</code> while the producer is active.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 3: TypeScript Producer</h3>
              <p>
                Use TypeScript for type safety. Save as <code>producer.ts</code>:
              </p>
              <CodeBlock language="typescript">{`import { Kafka } from 'kafkajs';

const kafka = new Kafka({ clientId: 'my-app', brokers: ['localhost:9092'] });
const producer = kafka.producer();

const runProducer = async (): Promise<void> => {
  try {
    await producer.connect();
    await producer.send({
      topic: 'test-topic',
      messages: [{ value: 'Hello Kafka with TypeScript!' }],
    });
    console.log('Message sent successfully ✅');
  } catch (error: any) {
    console.error('Error sending message:', error.message);
  } finally {
    await producer.disconnect();
  }
};

runProducer();
`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Same producer logic but written in TypeScript with type annotations.</li>
                <li>Requires <code>ts-node</code> or compilation: <code>npx tsc producer.ts && node producer.js</code>.</li>
                <li>Install TypeScript dependencies: <code>npm install typescript ts-node @types/node @types/kafkajs</code>.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 4: Kafka with MongoDB</h3>
              <p>
                Stream events to MongoDB. Save as <code>consumer-mongo.js</code>:
              </p>
              <CodeBlock language="javascript">{`const { Kafka } = require('kafkajs');
const { MongoClient } = require('mongodb');

const kafka = new Kafka({ clientId: 'my-app', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'mongo-group' });
const mongoUrl = 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl);

const runConsumer = async () => {
  try {
    await client.connect();
    const db = client.db('kafka_db');
    const collection = db.collection('events');

    await consumer.connect();
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ message }) => {
        const event = { value: message.value.toString(), timestamp: new Date() };
        await collection.insertOne(event);
        console.log('Event saved to MongoDB:', event);
      },
    });
  } catch (error) {
    console.error('Error processing event:', error.message);
  }
};

runConsumer().finally(() => client.close());
`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Connect to MongoDB and Kafka.</li>
                <li>Save each Kafka message to a MongoDB collection.</li>
                <li>Requires MongoDB running: <code>docker run -d -p 27017:27017 mongo</code>.</li>
                <li>Install MongoDB client: <code>npm install mongodb</code>.</li>
                <li>Run with <code>node consumer-mongo.js</code>.</li>
              </ul>
              <p>
                <strong>Try it out!</strong> Start Kafka (<code>docker run -p 9092:9092 apache/kafka:latest</code>), run the producer, then the consumer. Test MongoDB integration with a MongoDB client.
              </p>
            </section>

            {/* Wrapping Up */}
            <section id="wrapping-up" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Wrapping Up</h2>
              <p>
                Apache Kafka is a powerhouse for real-time, event-driven apps, offering scalability, fault tolerance, and high throughput. From analytics to microservices, it’s a game-changer for modern systems [7].
              </p>
              <p>
                You’ve learned Kafka’s basics, seen real-world use cases, and tried code—now you’re ready to build real-time apps! Start with a simple event pipeline and explore integrations with <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB</Link> or <Link href="/express-nodejs-blog" className="text-blue-600 hover:underline">Express.js</Link>.
              </p>
              <p>
                For more, check the <a href="https://kafka.apache.org/documentation/" className="text-blue-600 hover:underline">Kafka documentation</a> or try <a href="https://kafka.apache.org/quickstart" className="text-blue-600 hover:underline">Kafka Quickstart</a>.
              </p>
              <p>
                <strong>Next Steps</strong>: Deploy Kafka with Docker or Kubernetes, and combine it with <Link href="/fastify-blog" className="text-blue-600 hover:underline">Fastify</Link> or <Link href="/nestjs-blog" className="text-blue-600 hover:underline">NestJS</Link> for APIs. Happy coding! [6]
              </p>
            </section>

            {/* References */}
            <section id="references" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 References</h2>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>
                  <a href="https://kafka.apache.org/uses" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Kafka Use Cases
                  </a>
                </li>
                <li>
                  <a href="https://kafka.apache.org/intro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Kafka Introduction
                  </a>
                </li>
                <li>
                  <a href="https://kafka.apache.org/documentation/#scalability" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Kafka Scalability
                  </a>
                </li>
                <li>
                  <a href="https://kafka.apache.org/documentation/#fault-tolerance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Kafka Fault Tolerance
                  </a>
                </li>
                <li>
                  <a href="https://www.confluent.io/resources/kafka-uber-case-study" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Uber’s Kafka Usage
                  </a>
                </li>
                <li>
                  <a href="https://netflixtechblog.com/streaming-data-with-kafka" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Netflix’s Kafka Pipelines
                  </a>
                </li>
                <li>
                  <a href="https://kafka.js.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    KafkaJS Documentation
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
