import { CodeBlock } from '@/components/CodeBlock';
import type { Metadata } from 'next';
import Link from 'next/link';

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'RabbitMQ for Beginners: Reliable Messaging in Apps | Kunal Shroff',
  description: 'Learn RabbitMQ, the reliable messaging broker for modern apps. This beginner-friendly guide covers how RabbitMQ works, why to use it, real-world examples, and Node.js code tutorials.',
  keywords: ['Kunal Shroff', 'RabbitMQ tutorial', 'message broker', 'beginner RabbitMQ', 'Node.js RabbitMQ', 'microservices messaging'],
  openGraph: {
    title: 'RabbitMQ for Beginners: Reliable Messaging in Apps',
    description: 'Discover RabbitMQ with Kunal Shroff’s beginner-friendly guide, including code examples and real-world use cases for event-driven apps.',
    url: 'https://kunalshroff.vercel.app/rabbitmq-blog',
    type: 'article',
    images: [
      {
        url: 'https://kunalshroff.vercel.app/images/rabbitmq-blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'RabbitMQ logo with code example',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RabbitMQ for Beginners: Reliable Messaging in Apps',
    description: 'Learn RabbitMQ with Kunal Shroff’s guide, featuring Node.js code examples and real-world use cases.',
    images: ['https://kunalshroff.vercel.app/images/rabbitmq-blog-og.jpg'],
  },
};

// Schema markup for Article
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'RabbitMQ for Beginners: Reliable Messaging in Apps',
  description: 'Learn RabbitMQ, the reliable messaging broker for modern apps, with beginner-friendly explanations, Node.js examples, and real-world use cases.',
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
  image: 'https://kunalshroff.vercel.app/images/rabbitmq-blog-og.jpg',
  url: 'https://kunalshroff.vercel.app/rabbitmq-blog',
};

export default function RabbitMQBlog() {
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
          🟣 RabbitMQ: Reliable Messaging for Modern Apps
        </h1>

        <div className='flex flex-col lg:flex-row gap-4'>
          {/* Table of Contents */}
          <section className="mb-10 lg:w-[310px] w-full lg:sticky top-24 self-start space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><Link href="#intro" className="text-blue-600 hover:underline">Introduction</Link></li>
              <li><Link href="#what-is-rabbitmq" className="text-blue-600 hover:underline">What is RabbitMQ?</Link></li>
              <li><Link href="#how-it-works" className="text-blue-600 hover:underline">How RabbitMQ Works</Link></li>
              <li><Link href="#why-use-rabbitmq" className="text-blue-600 hover:underline">Why Choose RabbitMQ?</Link></li>
              <li><Link href="#analogy" className="text-blue-600 hover:underline">RabbitMQ as a Post Office</Link></li>
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
                Modern apps often need to communicate in real-time, like sending notifications or processing orders without delays. If one part of your app waits for another, everything slows down. <strong>RabbitMQ</strong> solves this by acting as a reliable middleman to queue and deliver messages efficiently.
              </p>
              <p>
                Companies like Pinterest, PayPal, and Shopify use RabbitMQ to process millions of messages reliably every day [1]. Whether you’re a beginner or experienced developer, this guide makes RabbitMQ easy to understand!
              </p>
              <p>In this blog, we’ll cover:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>✅ What RabbitMQ is (explained simply)</li>
                <li>✅ How it works step-by-step</li>
                <li>✅ Why it’s better than direct communication</li>
                <li>✅ Real-world examples you’ll recognize</li>
                <li>✅ A beginner-friendly analogy to make it click</li>
                <li>✅ Easy Node.js code you can try yourself</li>
              </ul>
              <p>
                By the end, you’ll be ready to use RabbitMQ in your projects! Check out our <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB guide</Link> for database integration or <Link href="/express-nodejs-blog" className="text-blue-600 hover:underline">Express.js guide</Link> for API building.
              </p>
            </section>

            {/* What is RabbitMQ */}
            <section id="what-is-rabbitmq" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 What is RabbitMQ?</h2>
              <p>
                RabbitMQ is an open-source <strong>message broker</strong> that helps different parts of your app communicate asynchronously. It allows one part (producer) to send messages that are stored in queues until another part (consumer) is ready to process them.
              </p>
              <p>
                It supports multiple messaging protocols (e.g., AMQP) and is perfect for decoupling services in microservices architectures, ensuring reliability even if parts of the app are down.
              </p>
              <p>Key concepts:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Producer</strong>: Sends messages, like “send welcome email.”</li>
                <li><strong>Exchange</strong>: Routes messages to the right queues based on rules.</li>
                <li><strong>Queue</strong>: Stores messages until consumed.</li>
                <li><strong>Consumer</strong>: Processes messages, like sending the email.</li>
              </ul>
              <p>
                RabbitMQ is like a smart postal service for your app, ensuring messages are delivered reliably and efficiently [2].
              </p>
            </section>

            {/* Visual Flow */}
            <section id="how-it-works" className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold mb-3">🔹 How RabbitMQ Works</h2>
              <p>
                RabbitMQ processes messages through a series of steps. Let’s use an example of queuing an order for processing:
              </p>
              <ol className="list-decimal list-inside ml-4 space-y-2">
                <li>The <strong>producer</strong> creates and sends a message to an exchange.</li>
                <li>The <strong>exchange</strong> routes the message to one or more queues based on binding rules.</li>
                <li>The message is stored in the <strong>queue</strong> until a consumer is available.</li>
                <li>The <strong>consumer</strong> retrieves the message, processes it, and acknowledges completion.</li>
                <li>RabbitMQ removes the acknowledged message from the queue.</li>
              </ol>
              <p>Here’s a diagram of the flow:</p>
              <div className="flex flex-wrap items-center gap-4 md:gap-10">
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">📤 Producer</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sends “Process order”</p>
                </div>
                <div className="text-3xl">➡️</div>
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">📬 Exchange</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Routes to queue</p>
                </div>
                <div className="text-3xl">➡️</div>
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">📦 Queue</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Holds message</p>
                </div>
                <div className="text-3xl">➡️</div>
                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <span className="text-xl">📥 Consumer</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Processes & acknowledges</p>
                </div>
              </div>
              <p>
                This flow ensures reliable, asynchronous messaging, even in distributed systems [3].
              </p>
            </section>

            {/* Why Use RabbitMQ */}
            <section id="why-use-rabbitmq" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Why Choose RabbitMQ?</h2>
              <p>
                RabbitMQ excels in asynchronous communication, making it ideal for modern apps. Here’s why it’s a top choice in 2025:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Asynchronous Processing</strong>: Producers don’t wait for consumers, improving app responsiveness [4].</li>
                <li><strong>Reliability</strong>: Messages are persisted in queues, surviving crashes or downtime [5].</li>
                <li><strong>Scalability</strong>: Handles millions of messages with clustering and federation [2].</li>
                <li><strong>Flexible Routing</strong>: Exchanges support various patterns (direct, fanout, topic) for complex workflows [3].</li>
                <li><strong>Ecosystem</strong>: Integrates with Node.js, Python, Java, and tools like MongoDB [6].</li>
              </ul>
              <p>
                RabbitMQ is perfect for apps needing decoupling, like microservices or real-time systems. Pair it with <Link href="/kafka-blog" className="text-blue-600 hover:underline">Kafka</Link> for high-throughput streaming.
              </p>
            </section>

            {/* Analogy */}
            <section id="analogy" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Analogy: RabbitMQ as a Post Office</h2>
              <p>
                RabbitMQ is like a highly efficient post office in a bustling city:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Producers (Senders)</strong>: People dropping off letters (messages).</li>
                <li><strong>Exchange (Clerk)</strong>: Sorts letters to the right mailboxes based on address rules.</li>
                <li><strong>Queue (Mailbox)</strong>: Holds letters safely until delivery.</li>
                <li><strong>Consumers (Recipients)</strong>: Pick up and process letters when ready.</li>
              </ul>
              <p>
                RabbitMQ ensures reliable delivery, even if recipients are busy, keeping your app efficient [7].
              </p>
            </section>

            {/* Real-World Use Cases */}
            <section id="real-world-examples" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Where RabbitMQ is Used</h2>
              <p>
                RabbitMQ powers diverse applications in 2025:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Task Queues</strong>: Background jobs like email sending or image processing [4].</li>
                <li><strong>Microservices</strong>: Decouple services for asynchronous communication [5].</li>
                <li><strong>Event Notifications</strong>: Broadcast messages for chats or alerts [6].</li>
                <li><strong>Load Balancing</strong>: Distribute tasks across workers to prevent overload [3].</li>
                <li><strong>Reliable Delivery</strong>: Ensures messages aren’t lost during downtime [2].</li>
              </ul>
              <p>
                From e-commerce to IoT, RabbitMQ’s flexibility makes it indispensable.
              </p>
            </section>

            {/* Node.js Example */}
            <section id="code-examples" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Node.js Code Examples with RabbitMQ</h2>
              <p>
                Let’s implement a producer and consumer in Node.js! Use Docker to run RabbitMQ: <code>docker run -d -p 5672:5672 rabbitmq</code>. Install <code>amqplib</code>: <code>npm install amqplib</code>.
              </p>

              <h3 className="text-xl font-semibold mt-6">Example 1: Basic Producer</h3>
              <p>
                Send a message to a queue. Save as <code>producer.js</code>:
              </p>
             <CodeBlock language="javascript">
{`const amqp = require('amqplib');

async function sendMessage() {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'hello';
    const message = 'Hello RabbitMQ!';
    await channel.assertQueue(queue);
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(" [x] Sent %s", message);
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error(error);
  }
}

sendMessage();`}
</CodeBlock>

              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Connect to RabbitMQ and create a channel.</li>
                <li>Assert a durable queue to persist messages.</li>
                <li>Send a message and handle errors.</li>
                <li>Run with <code>node producer.js</code>.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 2: Basic Consumer</h3>
              <p>
                Receive messages from a queue. Save as <code>consumer.js</code>:
              </p>
              <CodeBlock language="javascript">{`const amqp = require('amqplib');

async function consumeMessage() {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'task_queue';

    await channel.assertQueue(queue, { durable: true });
    console.log('⏳ Waiting for messages...');

    channel.consume(queue, (msg) => {
      if (msg !== null) {
        console.log('✅ Received:', msg.content.toString());
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("Error consuming message:", error.message);
  }
}

consumeMessage();
`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Connect and assert the queue.</li>
                <li>Consume messages and acknowledge them.</li>
                <li>Handle errors for reliability.</li>
                <li>Run with <code>node consumer.js</code>.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 3: JSON Message with TypeScript</h3>
              <p>
                Send a JSON order message. Save as <code>producer.ts</code>:
              </p>
              <CodeBlock language="typescript">{`import * as amqp from 'amqplib';

async function sendMessage(): Promise<void> {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'task_queue';

    await channel.assertQueue(queue, { durable: true });

    const message = JSON.stringify({ type: 'order', details: 'Process order #123' });
    channel.sendToQueue(queue, Buffer.from(message));
    console.log("✅ Sent:", message);
  } catch (error) {
    console.error("Error sending message:", (error as Error).message);
  } finally {
    setTimeout(() => connection.close(), 500);
  }
}

sendMessage();
`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Use TypeScript for type safety and JSON for structured messages.</li>
                <li>Install <code>@types/amqplib</code>: <code>npm install --save-dev @types/amqplib</code>.</li>
                <li>Run with <code>ts-node producer.ts</code>.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Example 4: Advanced Consumer with MongoDB</h3>
              <p>
                Save received messages to MongoDB. Save as <code>consumer-mongo.js</code>:
              </p>
              <CodeBlock language="javascript">{`const amqp = require('amqplib');
const { MongoClient } = require('mongodb');

async function consumeMessage() {
  const mongoClient = new MongoClient('mongodb://localhost:27017');
  await mongoClient.connect();
  const db = mongoClient.db('rabbitmq_db');
  const collection = db.collection('messages');

  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    const queue = 'task_queue';

    await channel.assertQueue(queue, { durable: true });
    console.log('⏳ Waiting for messages...');

    channel.consume(queue, async (msg) => {
      if (msg !== null) {
        const content = msg.content.toString();
        console.log('✅ Received:', content);
        await collection.insertOne({ message: content, receivedAt: new Date() });
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

consumeMessage();
`}</CodeBlock>
              <p><strong>What’s happening?</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Connect to MongoDB and RabbitMQ.</li>
                <li>Save each message to a collection with a timestamp.</li>
                <li>Test with a producer, then query MongoDB.</li>
              </ul>
              <p>
                <strong>Try it out!</strong> Run <code>docker run -d -p 5672:5672 rabbitmq</code> and <code>docker run -d -p 27017:27017 mongo</code>, then start the consumer and producer.
              </p>
            </section>

            {/* Wrapping Up */}
            <section id="wrapping-up" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 Wrapping Up</h2>
              <p>
                RabbitMQ is a robust messaging broker that enables reliable, asynchronous communication in modern apps. Its queues, exchanges, and consumers make it perfect for decoupling services and handling real-time tasks [5].
              </p>
              <p>
                You’ve learned RabbitMQ’s basics, seen use cases, and tried code—now you’re ready to implement messaging! Start with a small project like a notification system.
              </p>
              <p>
                For more, check the <a href="https://www.rabbitmq.com/docs/" className="text-blue-600 hover:underline">official RabbitMQ docs</a> or try their <a href="https://www.rabbitmq.com/tutorials/" className="text-blue-600 hover:underline">tutorials</a>.
              </p>
              <p>
                <strong>Next Steps</strong>: Combine RabbitMQ with <Link href="/nestjs-blog" className="text-blue-600 hover:underline">NestJS</Link> for microservices or <Link href="/fastify-blog" className="text-blue-600 hover:underline">Fastify</Link> for APIs. Happy coding! [6]
              </p>
            </section>

            {/* References */}
            <section id="references" className="mb-10 space-y-4">
              <h2 className="text-2xl font-bold mb-3">🔹 References</h2>
              <ol className="list-decimal list-inside ml-4 space-y-1">
                <li>
                  <a href="https://www.rabbitmq.com/use-cases" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    RabbitMQ Use Cases
                  </a>
                </li>
                <li>
                  <a href="https://www.rabbitmq.com/tutorials/amqp-concepts.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    RabbitMQ AMQP Concepts
                  </a>
                </li>
                <li>
                  <a href="https://www.rabbitmq.com/docs/exchanges" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    RabbitMQ Exchanges
                  </a>
                </li>
                <li>
                  <a href="https://www.rabbitmq.com/docs/queues" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    RabbitMQ Queues
                  </a>
                </li>
                <li>
                  <a href="https://www.rabbitmq.com/reliability" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    RabbitMQ Reliability
                  </a>
                </li>
                <li>
                  <a href="https://www.rabbitmq.com/clients-nodejs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    RabbitMQ Node.js Client
                  </a>
                </li>
                <li>
                  <a href="https://www.rabbitmq.com/tutorials" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    RabbitMQ Tutorials
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
