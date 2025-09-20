'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { CodeBlock } from '@/components/CodeBlock';

export default function RabbitMQBlog() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('h2');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tocItems = [
    { id: 'what-is-rabbitmq', title: 'What is RabbitMQ?' },
    { id: 'how-it-works', title: 'How RabbitMQ Works' },
    { id: 'why-use-rabbitmq', title: 'Why Choose RabbitMQ?' },
    { id: 'real-world-examples', title: 'Where RabbitMQ is Used' },
    { id: 'analogy', title: 'Simple Analogy' },
    { id: 'code-examples', title: 'Node.js Code Examples' },
  ];

  return (
    <>
      <Head>
        <title>RabbitMQ: Easy Messaging for Your Apps</title>
        <meta name="description" content="Learn how RabbitMQ helps apps talk to each other reliably with simple examples and explanations." />
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h1 className="flex items-center gap-2 text-3xl md:text-4xl font-extrabold mb-4">
              🐰 RabbitMQ: Easy Messaging for Your Apps
            </h1>
            <p className="text-lg md:text-xl">
              A Beginner’s Guide to Building Reliable Apps
            </p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8 flex flex-col md:flex-row gap-8">
          {/* Mobile TOC Button */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setMobileTocOpen(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded font-semibold w-full"
            >
              Table of Contents
            </button>
          </div>

          {/* Desktop TOC */}
          <aside className="hidden md:block md:w-1/4 sticky top-24 self-start">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Table of Contents</h3>
              <ul className="space-y-2">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block text-sm hover:text-purple-600 transition-colors ${
                        activeSection === item.id ? 'text-purple-600 font-semibold' : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile TOC Modal */}
          {isMobileTocOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center md:hidden">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md w-full mx-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Table of Contents</h3>
                <ul className="space-y-2">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setMobileTocOpen(false)}
                        className={`block text-sm hover:text-purple-600 transition-colors ${
                          activeSection === item.id ? 'text-purple-600 font-semibold' : 'text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setMobileTocOpen(false)}
                  className="mt-4 bg-purple-600 text-white px-4 py-2 rounded font-semibold w-full"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="md:w-3/4 prose prose-lg max-w-none text-gray-800 dark:text-gray-200">
            <article>
              {/* Intro Paragraph */}
              <section id="intro" className="mb-10 space-y-4">
                <p>
                  Imagine you’re building an app where different parts need to talk to each other. For example, one part handles user sign-ups, while another sends a welcome email. If the email system is slow, the sign-up process could get stuck. That’s where <strong>RabbitMQ</strong> comes in! It acts like a super-reliable mailbox, making sure messages between app parts are delivered safely and on time.
                </p>
                <p>
                  Big companies like Pinterest and Shopify use RabbitMQ to handle millions of messages every day, keeping their apps fast and reliable. Don’t worry if you’re new to this—it’s easier than it sounds!
                </p>
                <p>In this blog, we’ll cover:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>✅ What RabbitMQ is (in simple terms)</li>
                  <li>✅ How it works step-by-step</li>
                  <li>✅ Why it’s better than direct calls between app parts</li>
                  <li>✅ Real-world examples you’ll recognize</li>
                  <li>✅ A beginner-friendly analogy to make it click</li>
                  <li>✅ Easy Node.js code you can try yourself</li>
                </ul>
              </section>

              {/* What is RabbitMQ */}
              <section id="what-is-rabbitmq" className="mb-10 space-y-4">
                <h2 className="text-2xl font-bold mb-3">🔹 What is RabbitMQ?</h2>
                <p>
                  RabbitMQ is a tool that helps different parts of an app send messages to each other. Think of it as a middleman who takes a message from one part of your app (called a <strong>producer</strong>) and holds it in a safe place (called a <strong>queue</strong>) until another part (called a <strong>consumer</strong>) is ready to process it.
                </p>
                <p>Here are the main pieces:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Producer</strong>: The part of your app that sends a message, like “Send a welcome email.”</li>
                  <li><strong>Queue</strong>: A safe storage box where messages wait until they’re picked up.</li>
                  <li><strong>Consumer</strong>: The part of your app that grabs the message and does something with it, like sending the email.</li>
                  <li><strong>Exchange</strong>: A smart router that decides which queue the message should go to.</li>
                </ul>
                <p>
                  RabbitMQ is like a super-organized post office that makes sure messages don’t get lost and are delivered to the right place.
                </p>
              </section>

              {/* How RabbitMQ Works */}
              <section id="how-it-works" className="mb-10 space-y-4">
                <h2 className="text-2xl font-bold mb-3">🔹 How RabbitMQ Works</h2>
                <p>Let’s break it down into simple steps:</p>
                <ol className="list-decimal list-inside ml-4 space-y-2">
                  <li>The <strong>producer</strong> creates a message (e.g., “Process this order”).</li>
                  <li>It sends the message to RabbitMQ’s <strong>exchange</strong>.</li>
                  <li>The exchange decides which <strong>queue</strong> to put the message in based on rules (like a sorting machine).</li>
                  <li>The queue holds the message safely until a <strong>consumer</strong> is ready.</li>
                  <li>The consumer picks up the message and processes it (e.g., updates the order in a database).</li>
                </ol>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <div className="flex flex-col items-center">
                    <span className="text-xl">📤 Producer</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sends “Process order”</p>
                  </div>
                  <div className="text-3xl">➡️</div>
                  <div className="flex flex-col items-center">
                    <span className="text-xl">📬 Exchange</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Routes to correct queue</p>
                  </div>
                  <div className="text-3xl">➡️</div>
                  <div className="flex flex-col items-center">
                    <span className="text-xl">📦 Queue</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Holds message safely</p>
                  </div>
                  <div className="text-3xl">➡️</div>
                  <div className="flex flex-col items-center">
                    <span className="text-xl">📥 Consumer</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Processes message</p>
                  </div>
                </div>
              </section>

              {/* Why Use RabbitMQ */}
              <section id="why-use-rabbitmq" className="mb-10 space-y-4">
                <h2 className="text-2xl font-bold mb-3">🔹 Why Choose RabbitMQ?</h2>
                <p>
                  You might be thinking, “Why not just have one part of my app directly call another?” For example, why not have your sign-up service directly tell the email service to send a welcome email? Here’s why RabbitMQ is often a better choice:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>No Waiting Around</strong>: Without RabbitMQ, the sign-up service waits for the email service to finish, which can slow things down. With RabbitMQ, it sends the message and moves on!</li>
                  <li><strong>Safe Delivery</strong>: If the email service is down, RabbitMQ holds the message safely until it’s back online.</li>
                  <li><strong>Handle Big Workloads</strong>: RabbitMQ can manage thousands or millions of messages without crashing.</li>
                  <li><strong>Teamwork</strong>: Multiple consumers can process messages at the same time, like having several workers handle emails to speed things up.</li>
                  <li><strong>Flexible</strong>: You can add more queues or consumers as your app grows.</li>
                </ul>
                <p>
                  In short, RabbitMQ makes your app faster, more reliable, and easier to scale.
                </p>
              </section>

              {/* Real-World Examples */}
              <section id="real-world-examples" className="mb-10 space-y-4">
                <h2 className="text-2xl font-bold mb-3">🔹 Where RabbitMQ is Used</h2>
                <p>RabbitMQ powers many real-world apps. Here are some examples:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Sending Emails</strong>: When you sign up for an app, RabbitMQ queues a “send welcome email” task so the sign-up process isn’t slowed down.</li>
                  <li><strong>Processing Orders</strong>: In an online store, RabbitMQ handles “process order” messages to update inventory or notify warehouses.</li>
                  <li><strong>Chat Apps</strong>: RabbitMQ sends chat messages to the right users, even if they’re offline temporarily.</li>
                  <li><strong>Image Processing</strong>: When you upload a photo, RabbitMQ queues it for resizing or filtering in the background.</li>
                  <li><strong>App Alerts</strong>: RabbitMQ notifies multiple parts of an app about events, like a new post or a system warning.</li>
                </ul>
              </section>

              {/* Analogy */}
              <section id="analogy" className="mb-10 space-y-4">
                <h2 className="text-2xl font-bold mb-3">🔹 Simple Analogy: RabbitMQ as a Post Office</h2>
                <p>
                  Think of your app as a busy town where people (app parts) need to send letters (messages) to each other. Without RabbitMQ, you’d hand-deliver every letter and wait for a response, which takes time. With RabbitMQ, it’s like having a post office:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>You (Producer)</strong>: Write a letter and drop it off at the post office.</li>
                  <li><strong>Post Office Clerk (Exchange)</strong>: Looks at the address and puts the letter in the right mailbox.</li>
                  <li><strong>Mailbox (Queue)</strong>: Holds the letter safely until the recipient picks it up.</li>
                  <li><strong>Recipient (Consumer)</strong>: Gets the letter when they’re ready and processes it.</li>
                </ul>
                <p>
                  RabbitMQ makes sure your letters (messages) are never lost and are delivered when the recipient is ready, keeping your town (app) running smoothly!
                </p>
              </section>

              {/* Node.js Example */}
              <section id="code-examples" className="mb-10 space-y-4">
                <h2 className="text-2xl font-bold mb-3">🔹 Node.js Code Examples</h2>
                <p>
                  Let’s try some simple code to see RabbitMQ in action. We’ll create a <strong>producer</strong> to send a message and a <strong>consumer</strong> to receive it. Don’t worry—we’ll explain every step!
                </p>
                <p>First, install the RabbitMQ library for Node.js:</p>
                <CodeBlock language="bash">{`npm install amqplib`}</CodeBlock>

                <h3 className="text-xl font-semibold mt-6">Example 1: Sending a Message (Producer)</h3>
                <p>
                  This code sends a “Hello RabbitMQ!” message to a queue. Think of it as dropping a letter at the post office.
                </p>
                <CodeBlock language="javascript">{`const amqp = require('amqplib');

async function sendMessage() {
  // Step 1: Connect to RabbitMQ (like calling the post office)
  const connection = await amqp.connect('amqp://localhost');
  
  // Step 2: Create a channel (like a delivery truck)
  const channel = await connection.createChannel();
  
  // Step 3: Name our queue (like a mailbox labeled "task_queue")
  const queue = 'task_queue';
  
  // Step 4: Create the queue if it doesn’t exist
  await channel.assertQueue(queue, { durable: true });
  
  // Step 5: Send a message to the queue
  const message = 'Hello RabbitMQ!';
  channel.sendToQueue(queue, Buffer.from(message));
  console.log("✅ Sent:", message);
  
  // Step 6: Close the connection after a moment
  setTimeout(() => {
    connection.close();
  }, 500);
}

sendMessage().catch(console.error);`}</CodeBlock>
                <p><strong>What’s happening?</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>We connect to RabbitMQ (running on your computer at `localhost`).</li>
                  <li>We create a channel to send messages.</li>
                  <li>We set up a queue called `task_queue` to hold messages.</li>
                  <li>We send a message and close the connection.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Example 2: Receiving a Message (Consumer)</h3>
                <p>
                  This code picks up messages from the queue and processes them, like a mail carrier delivering letters.
                </p>
                <CodeBlock language="javascript">{`const amqp = require('amqplib');

async function consumeMessage() {
  // Step 1: Connect to RabbitMQ
  const connection = await amqp.connect('amqp://localhost');
  
  // Step 2: Create a channel
  const channel = await connection.createChannel();
  
  // Step 3: Use the same queue name as the producer
  const queue = 'task_queue';
  
  // Step 4: Make sure the queue exists
  await channel.assertQueue(queue, { durable: true });
  
  // Step 5: Wait for messages
  console.log('⏳ Waiting for messages...');
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      // Step 6: Print the message
      console.log('✅ Received:', msg.content.toString());
      
      // Step 7: Tell RabbitMQ we’re done with the message
      channel.ack(msg);
    }
  });
}

consumeMessage().catch(console.error);`}</CodeBlock>
                <p><strong>What’s happening?</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>We connect to RabbitMQ and create a channel.</li>
                  <li>We use the same queue (`task_queue`) as the producer.</li>
                  <li>We wait for messages and print them when they arrive.</li>
                  <li>We acknowledge (`ack`) the message to remove it from the queue.</li>
                </ul>
                <p>
                  <strong>Try it out!</strong> Run the consumer in one terminal (it will wait for messages). Then run the producer in another terminal to send a message. You’ll see the consumer print “Hello RabbitMQ!”.
                </p>
              </section>
            </article>
          </main>
        </div>
      </div>
    </>
  );
}