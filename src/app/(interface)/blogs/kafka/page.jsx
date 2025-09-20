import {CodeBlock} from "@/components/CodeBlock"

export default function KafkaBlog() {
    return (
        <div className="max-w-6xl mx-auto py-6 md:py-8 px-4 md:px-8 text-gray-800 dark:text-gray-200">
            {/* Blog Header */}
            <h1 className="flex items-center gap-2 text-3xl md:text-4xl font-extrabold mb-6 md:mb-10">
                🟠 Kafka: Building Real-Time Event-Driven Apps with Ease
            </h1>

            <article>
                {/* Intro Paragraph */}
                <section className="mb-10 space-y-4">
                    <p>
                        Modern applications often need to process data <strong>in real-time</strong>, like notifications, analytics, or messages. 
                        Traditional databases are not designed for this. Enter <strong>Kafka</strong>, a high-performance distributed messaging system.
                    </p>
                    <p>
                        Kafka is used by companies like LinkedIn, Uber, and Netflix to process millions of events per second reliably.
                    </p>
                    <p>In this blog, we’ll cover:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>✅ What Kafka is</li>
                        <li>✅ How Kafka works</li>
                        <li>✅ Real-world use cases</li>
                        <li>✅ Simple analogy to understand it</li>
                        <li>✅ Node.js example code</li>
                    </ul>
                </section>

                {/* What is Kafka */}
                <section className="mb-10 space-y-4">
                    <h2 className="text-2xl font-bold mb-3">🔹 What is Kafka?</h2>
                    <p>
                        Kafka is a <strong>distributed event streaming platform</strong>. It allows applications to publish and subscribe to streams of events (messages) in real-time.
                    </p>
                    <p>Key points:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Stores streams of records (messages) in <strong>topics</strong></li>
                        <li>Can handle millions of events per second</li>
                        <li>Supports multiple consumers reading from the same topic</li>
                        <li>Durable, fault-tolerant, and scalable</li>
                    </ul>
                </section>

                {/* Why Use Kafka */}
                <section className="mb-10 space-y-4">
                    <h2 className="text-2xl font-bold mb-3">🔹 Why Use Kafka?</h2>
                    <p>
                        Kafka is perfect for building real-time data pipelines and event-driven applications.
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>⚡ Real-time data processing</li>
                        <li>📊 Analytics pipelines (monitoring, metrics)</li>
                        <li>🔄 Event-driven microservices</li>
                        <li>🎯 Reliable message delivery with multiple consumers</li>
                        <li>📈 Scalable and fault-tolerant for big data</li>
                    </ul>
                </section>

                {/* Analogy */}
                <section className="mb-10 space-y-4">
                    <h2 className="text-2xl font-bold mb-3">🔹 Analogy: Kafka as a Post Office</h2>
                    <p>
                        Imagine your system as a busy post office:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>
                            <strong>Producer:</strong> People sending letters → your apps sending events/messages
                        </li>
                        <li>
                            <strong>Topic:</strong> Mailbox for a type of message → like "orders" or "notifications"
                        </li>
                        <li>
                            <strong>Consumer:</strong> Mail clerk reading letters → your apps processing events
                        </li>
                        <li>
                            <strong>Kafka:</strong> The post office building → stores and delivers letters reliably
                        </li>
                    </ul>
                    <p>
                        Kafka ensures all messages are delivered to consumers in order, even if some consumers are temporarily offline.
                    </p>
                </section>

                {/* Use Cases */}
                <section className="mb-10 space-y-4">
                    <h2 className="text-2xl font-bold mb-3">🔹 Real-World Use Cases</h2>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Activity Tracking:</strong> Track user actions on websites in real-time.</li>
                        <li><strong>Log Aggregation:</strong> Collect logs from multiple servers for monitoring.</li>
                        <li><strong>Data Pipeline:</strong> Stream data from databases to analytics systems.</li>
                        <li><strong>Event-Driven Microservices:</strong> Trigger actions across multiple services.</li>
                        <li><strong>Messaging:</strong> Reliable publish-subscribe system for multiple consumers.</li>
                    </ul>
                </section>

                {/* Node.js Example */}
                <section className="mb-10 space-y-4">
                    <h2 className="text-2xl font-bold mb-3">🔹 Node.js Example: Simple Kafka Producer & Consumer</h2>
                    <p>
                        Install Kafka client for Node.js:
                    </p>
                    <CodeBlock>{`npm install kafkajs`}</CodeBlock>

                    <p>Producer Example:</p>
                    <CodeBlock>{`const { Kafka } = require("kafkajs");

const kafka = new Kafka({ clientId: "app", brokers: ["localhost:9092"] });
const producer = kafka.producer();

const runProducer = async () => {
  await producer.connect();
  await producer.send({
    topic: "test-topic",
    messages: [{ value: "Hello Kafka!" }],
  });
  console.log("Message sent ✅");
  await producer.disconnect();
};

runProducer();`}</CodeBlock>

                    <p>Consumer Example:</p>
                    <CodeBlock>{`const { Kafka } = require("kafkajs");

const kafka = new Kafka({ clientId: "app", brokers: ["localhost:9092"] });
const consumer = kafka.consumer({ groupId: "test-group" });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log("Received:", message.value.toString());
    },
  });
};

runConsumer();`}</CodeBlock>
                </section>
            </article>
        </div>
    );
}
