import Head from 'next/head';
import { CodeBlock } from '@/components/CodeBlock';

export default function RabbitMQBlog() {

  return (
    <>
      <Head>
        <title>RabbitMQ: Easy Messaging for Your Apps</title>
        <meta name="description" content="Learn how RabbitMQ helps apps talk to each other reliably with simple examples and explanations." />
      </Head>
      <div className="max-w-6xl mx-auto py-6 md:py-8 px-4 md:px-8 text-gray-800 dark:text-gray-200">
        {/* Blog Header */}
        <h1 className="flex items-center gap-2 text-3xl md:text-4xl font-extrabold mb-6 md:mb-10">
          🟣 RabbitMQ: Reliable Messaging for Modern Apps
        </h1>

        <article>
          {/* Intro Paragraph */}
          <section id="intro" className="mb-10 space-y-4">
            <p>
              Building an app is like running a busy kitchen where different chefs need to work together. Imagine one chef handles orders while another prepares food. If the order chef waits for the food to be ready, everything slows down! <strong>RabbitMQ</strong> is like a helpful assistant who passes notes between chefs, so no one gets stuck waiting.
            </p>
            <p>
              Companies like Pinterest, PayPal, and Shopify use RabbitMQ to manage millions of messages every day, making their apps fast and reliable. Don’t worry if you’re new to coding—this guide is designed to be super easy to follow!
            </p>
            <p>In this blog, we’ll cover:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>✅ What RabbitMQ is (explained simply)</li>
              <li>✅ How it works, step by step</li>
              <li>✅ Why it’s better than direct app communication</li>
              <li>✅ Everyday examples of RabbitMQ in action</li>
              <li>✅ A fun analogy to make it clear</li>
              <li>✅ Easy Node.js code you can copy and try</li>
            </ul>
            <p>
              By the end, you’ll understand how RabbitMQ can make your apps run smoothly, even if you’re just starting out!
            </p>
          </section>

          {/* What is RabbitMQ */}
          <section id="what-is-rabbitmq" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 What is RabbitMQ?</h2>
            <p>
              RabbitMQ is a tool that helps different parts of your app talk to each other. Imagine you’re sending a text message to a friend, but instead of waiting for them to reply, you know the message is safely stored until they’re ready to read it. That’s what RabbitMQ does for apps!
            </p>
            <p>
              It’s called a <strong>message broker</strong>, which means it acts like a middleman. One part of your app sends a message, RabbitMQ holds it in a safe spot, and another part picks it up when it’s ready.
            </p>
            <p>Here are the key pieces you need to know:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Producer</strong>: The part of your app that sends a message, like “Send a welcome email to a new user.”</li>
              <li><strong>Queue</strong>: A safe “mailbox” where messages wait until someone picks them up.</li>
              <li><strong>Consumer</strong>: The part of your app that grabs the message and does the work, like sending the email.</li>
              <li><strong>Exchange</strong>: A smart helper that decides which mailbox (queue) the message should go to.</li>
            </ul>
            <p>
              Think of RabbitMQ as a super-organized post office for your app, making sure every message gets to the right place without getting lost.
            </p>
          </section>

          {/* Visual Flow */}
          <section id="how-it-works" className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold mb-3">🔹 How RabbitMQ Works</h2>
            <p>
              Let’s walk through how RabbitMQ helps your app, step by step. Imagine your app needs to send a message like “Process this order.” Here’s what happens:
            </p>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li>The <strong>producer</strong> creates a message, like “Process this order.”</li>
              <li>It sends the message to RabbitMQ’s <strong>exchange</strong>.</li>
              <li>The exchange looks at the message and picks the right <strong>queue</strong> to put it in (like sorting mail).</li>
              <li>The queue holds the message safely until a <strong>consumer</strong> is ready.</li>
              <li>The consumer picks up the message and does the job, like updating the order in a database.</li>
            </ol>
            <p>Here’s a simple diagram to show the flow:</p>
            <div className="flex flex-wrap items-center gap-4 md:gap-10">
              <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-xl">📤 Producer</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sends “Process order”</p>
              </div>
              <div className="text-3xl">➡️</div>
              <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-xl">📬 Exchange</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sorts message</p>
              </div>
              <div className="text-3xl">➡️</div>
              <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-xl">📦 Queue</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">Holds message safely</p>
              </div>
              <div className="text-3xl">➡️</div>
              <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                <span className="text-xl">📥 Consumer</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">Processes message</p>
              </div>
            </div>
            <p>
              This setup means your app doesn’t slow down, even if one part is busy or offline!
            </p>
          </section>

          {/* Why Use RabbitMQ */}
          <section id="why-use-rabbitmq" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 Why Choose RabbitMQ?</h2>
            <p>
              You might wonder, “Why not just have one part of my app talk directly to another?” For example, when a user signs up, why not have the sign-up system directly tell the email system to send a welcome email? Here’s why RabbitMQ is often better:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>No Waiting (Asynchronous)</strong>: Without RabbitMQ, the sign-up system waits for the email system to finish, which can slow things down. With RabbitMQ, it sends the message and keeps working on other tasks.</li>
              <li><strong>Safe Storage</strong>: If the email system is offline or busy, RabbitMQ keeps the message safe until it’s ready to be processed.</li>
              <li><strong>Handles Big Jobs</strong>: RabbitMQ can manage thousands or even millions of messages without crashing your app.</li>
              <li><strong>Teamwork</strong>: You can have multiple workers (consumers) process messages at the same time, like having several people send emails to speed things up.</li>
              <li><strong>Grows with You</strong>: As your app gets bigger, RabbitMQ makes it easy to add more queues or workers.</li>
            </ul>
            <p>
              RabbitMQ is like a superhero that keeps your app fast, reliable, and ready to grow!
            </p>
            <p>
              <strong>Quick Tip</strong>: RabbitMQ doesn’t replace databases like MySQL. It works alongside them to handle messages and tasks, making your app more efficient.
            </p>
          </section>

          {/* Analogy */}
          <section id="analogy" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 Analogy: RabbitMQ as a Post Office</h2>
            <p>
              Imagine your app is a busy town where people (parts of your app) need to send letters (messages) to each other. Without RabbitMQ, you’d have to hand-deliver every letter and wait for the recipient to read it, which takes time and effort.
            </p>
            <p>With RabbitMQ, it’s like having a post office:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>You (Producer)</strong>: You write a letter (message) and drop it off at the post office.</li>
              <li><strong>Post Office Clerk (Exchange)</strong>: The clerk checks the address and puts the letter in the right mailbox.</li>
              <li><strong>Mailbox (Queue)</strong>: The mailbox holds the letter safely until the recipient is ready.</li>
              <li><strong>Recipient (Consumer)</strong>: The recipient picks up the letter and does something with it, like reading it or taking action.</li>
            </ul>
            <p>
              RabbitMQ makes sure your messages are delivered safely and on time, even if the recipient is busy or away. It keeps your app running smoothly, just like a post office keeps a town connected!
            </p>
          </section>

          {/* Real-World Use Cases */}
          <section id="real-world-examples" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 Where RabbitMQ is Used</h2>
            <p>
              RabbitMQ is used in all kinds of apps you use every day. Here are some examples to show how it works in the real world:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Sending Emails</strong>: When you sign up for an app like Spotify, RabbitMQ queues a “send welcome email” task so the sign-up process stays fast.</li>
              <li><strong>Online Shopping</strong>: In a store like Amazon, RabbitMQ handles “process order” messages to update inventory or notify warehouses without slowing down your checkout.</li>
              <li><strong>Chat Apps</strong>: In apps like WhatsApp, RabbitMQ sends chat messages to the right users, even if they’re offline for a moment.</li>
              <li><strong>Photo Editing</strong>: When you upload a photo to Instagram, RabbitMQ queues it for resizing or adding filters in the background.</li>
              <li><strong>App Notifications</strong>: RabbitMQ sends alerts, like “New post on your feed” or “Server needs attention,” to different parts of an app.</li>
            </ul>
            <p>
              These examples show how RabbitMQ helps apps stay fast and reliable by handling tasks behind the scenes.
            </p>
          </section>

          {/* Node.js Example */}
          <section id="code-examples" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 Node.js Example: Producer & Consumer</h2>
            <p>
              Let’s try some simple code to see RabbitMQ in action! We’ll create a <strong>producer</strong> to send a message and a <strong>consumer</strong> to receive it. Don’t worry if you’re new to coding—we’ll explain every step and make it easy to follow.
            </p>
            <p>
              <strong>First, you need RabbitMQ running</strong>. The easiest way is to use Docker. Run this command in your terminal:
            </p>
            <CodeBlock language="bash">{`docker run -d -p 5672:5672 rabbitmq`}</CodeBlock>
            <p>
              This starts RabbitMQ on your computer. If you don’t have Docker, you can <a href="https://www.rabbitmq.com/download.html" className="text-blue-600 hover:underline">download and install RabbitMQ</a> directly.
            </p>
            <p>Next, install the RabbitMQ library for Node.js:</p>
            <CodeBlock language="bash">{`npm install amqplib`}</CodeBlock>

            <h3 className="text-xl font-semibold mt-6">Example 1: Sending a Message (Producer)</h3>
            <p>
              This code sends a “Hello RabbitMQ!” message to a queue. It’s like dropping a letter at the post office.
            </p>
            <CodeBlock language="javascript">{`const amqp = require('amqplib');

async function sendMessage() {
  // Step 1: Connect to RabbitMQ (like calling the post office)
  const connection = await amqp.connect('amqp://localhost');

  // Step 2: Create a channel (like a delivery truck)
  const channel = await connection.createChannel();

  // Step 3: Name our queue (like a mailbox labeled "task_queue")
  const queue = 'task_queue';

  // Step 4: Create the queue if it doesn’t exist (durable: true keeps messages safe)
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

sendMessage().catch(error => console.error("Error:", error));
`}</CodeBlock>
            <p><strong>What’s happening here?</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>We connect to RabbitMQ, which is running on your computer (`localhost`).</li>
              <li>We create a <strong>channel</strong>, like a delivery truck that carries messages.</li>
              <li>We name a queue (`task_queue`) to store our messages.</li>
              <li>We make sure the queue exists and is durable (messages won’t be lost if RabbitMQ restarts).</li>
              <li>We send a message (“Hello RabbitMQ!”) to the queue.</li>
              <li>We close the connection after a short delay.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Example 2: Receiving a Message (Consumer)</h3>
            <p>
              This code listens for messages in the queue and processes them, like a mail carrier picking up letters from a mailbox.
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

consumeMessage().catch(error => console.error("Error:", error));
`}</CodeBlock>
            <p><strong>What’s happening here?</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>We connect to RabbitMQ and create a channel.</li>
              <li>We use the same queue name (`task_queue`) as the producer.</li>
              <li>We make sure the queue exists and is durable.</li>
              <li>We listen for messages and print them when they arrive.</li>
              <li>We <strong>acknowledge</strong> (ack) the message to tell RabbitMQ we’ve processed it, so it can be removed from the queue.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">How to Try It</h3>
            <p>
              Let’s test the code to see RabbitMQ in action! Follow these steps:
            </p>
            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li>Make sure RabbitMQ is running (use the Docker command above).</li>
              <li>Save the producer code in a file called <code>producer.js</code>.</li>
              <li>Save the consumer code in a file called <code>consumer.js</code>.</li>
              <li>Open a terminal, go to your project folder, and run the consumer:
                <CodeBlock language="bash">{`node consumer.js`}</CodeBlock>
                It will say “Waiting for messages...” and keep running.
              </li>
              <li>Open another terminal and run the producer:
                <CodeBlock language="bash">{`node producer.js`}</CodeBlock>
              </li>
              <li>Watch the consumer terminal—it should print “Received: Hello RabbitMQ!”.</li>
            </ol>
            <p>
              <strong>Congrats!</strong> You just sent and received a message with RabbitMQ. Try changing the message in the producer code to something else and run it again!
            </p>

            <h3 className="text-xl font-semibold mt-6">Example 3: Sending a JSON Message</h3>
            <p>
              Let’s make it more realistic. Instead of a simple text message, let’s send a JSON object, like an order from an online store.
            </p>
            <CodeBlock language="javascript">{`const amqp = require('amqplib');

async function sendOrder() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'order_queue';

  await channel.assertQueue(queue, { durable: true });

  const order = {
    userId: 123,
    item: 'Book',
    price: 19.99
  };
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(order)));
  console.log("✅ Sent order:", order);

  setTimeout(() => {
    connection.close();
  }, 500);
}

sendOrder().catch(error => console.error("Error:", error));
`}</CodeBlock>
            <p><strong>Consumer for JSON Message</strong></p>
            <CodeBlock language="javascript">{`const amqp = require('amqplib');

async function consumeOrder() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'order_queue';

  await channel.assertQueue(queue, { durable: true });
  console.log('⏳ Waiting for orders...');

  channel.consume(queue, (msg) => {
    if (msg !== null) {
      const order = JSON.parse(msg.content.toString());
      console.log('✅ Received order:', order);
      channel.ack(msg);
    }
  });
}

consumeOrder().catch(error => console.error("Error:", error));
`}</CodeBlock>
            <p><strong>What’s new?</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>We’re sending a JSON object (an order with user ID, item, and price).</li>
              <li>We use <code>JSON.stringify</code> to turn the object into a string for sending.</li>
              <li>The consumer uses <code>JSON.parse</code> to turn the string back into an object.</li>
              <li>We used a new queue (<code>order_queue</code>) to keep things separate.</li>
            </ul>
            <p>
              This is closer to how real apps use RabbitMQ, like queuing orders for an online store.
            </p>
          </section>

          {/* Wrapping Up */}
          <section id="wrapping-up" className="mb-10 space-y-4">
            <h2 className="text-2xl font-bold mb-3">🔹 Wrapping Up</h2>
            <p>
              RabbitMQ is like a trusty assistant that keeps your app running smoothly by handling messages between its parts. It’s perfect for tasks like sending emails, processing orders, or managing notifications without slowing down your app.
            </p>
            <p>
              You’ve learned what RabbitMQ is, how it works, and why it’s awesome for modern apps. Plus, you’ve seen code examples you can try yourself! As a beginner, you’re now ready to experiment with RabbitMQ in your projects.
            </p>
            <p>
              Want to learn more? Check out the <a href="https://www.rabbitmq.com/docs/" className="text-blue-600 hover:underline">official RabbitMQ docs</a> or try their <a href="https://www.rabbitmq.com/tutorials/" className="text-blue-600 hover:underline">tutorials</a> for more examples.
            </p>
            <p>
              <strong>Next Steps</strong>: Try adding RabbitMQ to a small project, like queuing tasks for a to-do list app. Start small, and you’ll be amazed at how powerful it is!
            </p>
          </section>
        </article>
      </div>
    </>
  );
}