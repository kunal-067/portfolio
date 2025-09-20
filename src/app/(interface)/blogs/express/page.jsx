import { CodeBlock } from '@/components/CodeBlock';

export default function ExpressNodeJSBlog() {
  return (
    <div className="max-w-6xl mx-auto py-6 md:py-8 px-4 md:px-8 text-gray-800 dark:text-gray-200">
      {/* Blog Header */}
      <h1 className="flex items-center gap-2 text-3xl md:text-4xl font-extrabold mb-6 md:mb-10">
        🚀 Express & Node.js: Build Fast and Flexible Web Apps
      </h1>

      <article>
        {/* Intro Paragraph */}
        <section id="intro" className="mb-10 space-y-4">
          <p>
            Building a web app can feel like assembling a puzzle—each piece needs to fit perfectly. <strong>Node.js</strong> lets you run JavaScript on the server to handle backend logic, and <strong>Express.js</strong> makes it super easy to create web servers and APIs. Together, they’re like a dynamic duo that powers fast, scalable apps!
          </p>
          <p>
            Companies like Uber, Twitter, and PayPal use Node.js and Express to handle millions of requests daily. Don’t worry if you’re new to backend development—this guide is designed to be beginner-friendly and easy to follow!
          </p>
          <p>In this blog, we’ll cover:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>✅ What Node.js and Express are (in simple terms)</li>
            <li>✅ How they work together, step by step</li>
            <li>✅ Why they’re great for building web apps</li>
            <li>✅ Everyday examples of Express and Node.js in action</li>
            <li>✅ A fun analogy to make it clear</li>
            <li>✅ Easy code examples you can copy and try</li>
          </ul>
          <p>
            By the end, you’ll understand how Express and Node.js can help you build awesome web apps, even as a beginner!
          </p>
        </section>

        {/* What is Express and Node.js */}
        <section id="what-is-express-nodejs" className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold mb-3">🔹 What are Node.js and Express?</h2>
          <p>
            <strong>Node.js</strong> is a tool that lets you run JavaScript outside the browser, on a server. It’s like turning JavaScript into a chef who can cook up backend logic, like handling user requests or talking to a database.
          </p>
          <p>
            <strong>Express.js</strong> is a lightweight framework that runs on Node.js. It simplifies building web servers and APIs by providing easy-to-use tools for handling routes, requests, and responses. Think of Express as a recipe book that makes Node.js easier to work with.
          </p>
          <p>Key concepts:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Node.js Runtime</strong>: The engine that runs JavaScript on the server, handling tasks like file operations or network requests.</li>
            <li><strong>Express Routes</strong>: Rules that say, “When a user visits this URL, do this.”</li>
            <li><strong>Middleware</strong>: Functions that process requests before sending a response, like checking if a user is logged in.</li>
            <li><strong>API Endpoints</strong>: URLs that your app uses to send or receive data, like fetching a list of products.</li>
          </ul>
          <p>
            Together, Node.js and Express are like a fast, flexible toolkit for building web servers and APIs with JavaScript.
          </p>
        </section>

        {/* Visual Flow */}
        <section id="how-it-works" className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold mb-3">🔹 How Express and Node.js Work</h2>
          <p>
            Let’s see how Express and Node.js handle a user request, like visiting a webpage or fetching data. Here’s the simple flow:
          </p>
          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li>A user sends a request (e.g., visits <code>/products</code> in their browser).</li>
            <li>Node.js receives the request and passes it to your Express app.</li>
            <li>Express matches the request to a <strong>route</strong> (e.g., “GET /products”).</li>
            <li><strong>Middleware</strong> processes the request (e.g., checks authentication).</li>
            <li>Express sends a response, like a webpage or JSON data.</li>
          </ol>
          <p>Here’s a diagram of the flow:</p>
          <div className="flex flex-wrap items-center gap-4 md:gap-10">
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <span className="text-xl">🌐 User</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sends request</p>
            </div>
            <div className="text-3xl">➡️</div>
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <span className="text-xl">⚙️ Express</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Routes & processes</p>
            </div>
            <div className="text-3xl">➡️</div>
            <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
              <span className="text-xl">📤 Response</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sends webpage or data</p>
            </div>
          </div>
          <p>
            This setup ensures your app responds quickly and efficiently, even with thousands of users!
          </p>
        </section>

        {/* Why Use Express and Node.js */}
        <section id="why-use-express-nodejs" className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold mb-3">🔹 Why Choose Express and Node.js?</h2>
          <p>
            You might wonder, “Why not use Python with Flask or Ruby on Rails?” While those are great, Express and Node.js have unique advantages for 2025:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>One Language Everywhere</strong>: Use JavaScript for both frontend and backend—no need to learn another language [1].</li>
            <li><strong>Blazing Fast</strong>: Node.js’s non-blocking, event-driven model handles many requests at once, perfect for real-time apps [2].</li>
            <li><strong>Simple with Express</strong>: Express simplifies Node.js with easy routing and middleware, great for beginners [3].</li>
            <li><strong>Huge Ecosystem</strong>: Access thousands of Node.js packages via npm for databases, authentication, and more [4].</li>
            <li><strong>Scalable</strong>: Powers apps like Netflix and Uber, handling millions of users with ease [5].</li>
          </ul>
          <p>
            In short, Express and Node.js make backend development fast, flexible, and beginner-friendly, especially if you already know JavaScript.
          </p>
          <p>
            <strong>Quick Tip</strong>: Pair Express with tools like MongoDB or PostgreSQL for a full-stack JavaScript app.
          </p>
        </section>

        {/* Analogy */}
        <section id="analogy" className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold mb-3">🔹 Analogy: Express & Node.js as a Restaurant</h2>
          <p>
            Think of Node.js as a busy restaurant kitchen, and Express as the head chef organizing everything:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Customers (Users)</strong>: Send orders (requests) like “I want a webpage.”</li>
            <li><strong>Node.js (Kitchen)</strong>: Powers the cooking process, handling multiple orders at once without slowing down.</li>
            <li><strong>Express (Head Chef)</strong>: Organizes orders by assigning them to the right stations (routes) and adding prep steps (middleware).</li>
            <li><strong>Dishes (Responses)</strong>: Sends finished meals (webpages or data) back to customers quickly.</li>
          </ul>
          <p>
            With Express and Node.js, your “restaurant” (app) serves customers efficiently, even during a rush, keeping everyone happy!
          </p>
        </section>

        {/* Real-World Use Cases */}
        <section id="real-world-examples" className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold mb-3">🔹 Where Express and Node.js are Used</h2>
          <p>
            Express and Node.js power apps you use every day. Here are some examples in 2025:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>APIs for Mobile Apps</strong>: Uber’s app uses Node.js APIs to handle ride requests in real-time [5].</li>
            <li><strong>Social Media Backends</strong>: Twitter’s backend relies on Node.js for fast tweet processing [6].</li>
            <li><strong>E-Commerce</strong>: Walmart uses Express to power APIs for product searches and checkouts [2].</li>
            <li><strong>Real-Time Chat</strong>: Apps like Slack use Node.js for instant messaging with WebSockets [7].</li>
            <li><strong>Streaming Services</strong>: Netflix uses Node.js to serve video metadata quickly [1].</li>
          </ul>
          <p>
            These examples show how Express and Node.js handle everything from small APIs to massive, real-time systems.
          </p>
        </section>

        {/* Code Examples */}
        <section id="code-examples" className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold mb-3">🔹 Express & Node.js Code Examples</h2>
          <p>
            Let’s try some simple code to build a web server with Express and Node.js! We’ll assume you have Node.js installed (download from <a href="https://nodejs.org" className="text-blue-600 hover:underline">nodejs.org</a>). Don’t worry—we’ll explain every step.
          </p>
          <p>First, create a project and install Express:</p>
          <CodeBlock language="bash">{`mkdir my-express-app
cd my-express-app
npm init -y
npm install express`}</CodeBlock>

          <h3 className="text-xl font-semibold mt-6">Example 1: Basic Web Server</h3>
          <p>
            Create a simple server that responds with “Hello, Express!”. Save as <code>server.js</code>:
          </p>
          <CodeBlock language="javascript">{`const express = require('express');
const app = express();
const port = 3000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
`}</CodeBlock>
          <p><strong>What’s happening?</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Import Express and create an app instance.</li>
            <li>Define a route for <code>/</code> that sends a response.</li>
            <li>Start the server on port 3000.</li>
            <li>Run with <code>node server.js</code> and visit <code>http://localhost:3000</code>.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Example 2: Simple API Endpoint</h3>
          <p>
            Create an API that returns a list of users. Update <code>server.js</code>:
          </p>
          <CodeBlock language="javascript">{`const express = require('express');
const app = express();
const port = 3000;

// Sample data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// API route to get users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
`}</CodeBlock>
          <p><strong>What’s happening?</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Define an API route at <code>/api/users</code>.</li>
            <li>Return JSON data when users visit the route.</li>
            <li>Test it at <code>http://localhost:3000/api/users</code>.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Example 3: Middleware for Logging</h3>
          <p>
            Add middleware to log requests. Update <code>server.js</code>:
          </p>
          <CodeBlock language="javascript">{`const express = require('express');
const app = express();
const port = 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(\`\${req.method} request to \${req.url}\`);
  next(); // Move to the next middleware or route
});

// Sample data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
`}</CodeBlock>
          <p><strong>What’s happening?</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><code>app.use</code> adds middleware that runs for every request.</li>
            <li>Logs the request method and URL (e.g., “GET /api/users”).</li>
            <li><code>next()</code> passes control to the next function.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Example 4: POST Request for Adding Users</h3>
          <p>
            Allow users to add data via a POST request. Update <code>server.js</code>:
          </p>
          <CodeBlock language="javascript">{`const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// API route to get users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// API route to add a user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
`}</CodeBlock>
          <p><strong>What’s happening?</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><code>express.json()</code> parses incoming JSON data.</li>
            <li>The POST route adds a new user to the array.</li>
            <li>Test with a tool like Postman: Send a POST to <code>http://localhost:3000/api/users</code> with JSON like <code>{`{ "name": "Charlie" }`}</code>.</li>
          </ul>
          <p>
            <strong>Try it out!</strong> Run <code>node server.js</code>, visit <code>http://localhost:3000</code>, and test the API routes with a browser or Postman.
          </p>
        </section>

        {/* Wrapping Up */}
        <section id="wrapping-up" className="mb-10 space-y-4">
          <h2 className="text-2xl font-bold mb-3">🔹 Wrapping Up</h2>
          <p>
            Node.js and Express are a powerful combo for building fast, flexible web servers and APIs. They let you use JavaScript everywhere, scale to millions of users, and simplify backend development with easy routing and middleware.
          </p>
          <p>
            You’ve learned the basics, seen real-world examples, and tried code—now you’re ready to build your own Express app! Start with a small project like a to-do list API.
          </p>
          <p>
            For more, check the <a href="https://nodejs.org/en/docs" className="text-blue-600 hover:underline">Node.js docs</a> or the <a href="https://expressjs.com/en/guide/routing.html" className="text-blue-600 hover:underline">Express guide</a>.
          </p>
          <p>
            <strong>Next Steps</strong>: Try adding a database like MongoDB or deploy your app to a platform like Render or Heroku. Happy coding! [8]
          </p>
        </section>

        {/* References */}
        <section id="references" className="mb-10 space-y-4">
  <h2 className="text-2xl font-bold mb-3">🔹 References</h2>
  <ol className="list-decimal list-inside ml-4 space-y-1">
    <li>
      <a href="https://nodejs.org/en/docs/guides/getting-started-guide" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
        Node.js Introduction
      </a>
    </li>
    <li>
      <a href="https://nodejs.org/en/learn/discover-javascript-concepts/why-is-node-js-fast" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
        Why Node.js is Fast
      </a>
    </li>
    <li>
      <a href="https://expressjs.com/en/starter/basic-routing.html" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
        Express.js Guide
      </a>
    </li>
    <li>
      <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
        npm Ecosystem
      </a>
    </li>
    <li>
      <a href="https://www.uber.com/en-IN/blog/engineering/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
        Node.js in Production: Uber Case Study
      </a>
    </li>
    <li>
      <a href="https://blog.twitter.com/engineering/en_us/topics/infrastructure/2013/twitter-architecture" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
        Twitter’s Use of Node.js
      </a>
    </li>
    <li>
      <a href="https://socket.io/docs/v4/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
        Node.js for Real-Time Apps
      </a>
    </li>
    <li>
      <a href="https://render.com/docs/deploy-node-express-app" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
        Deploying Node.js Apps
      </a>
    </li>
  </ol>
</section>

      </article>
    </div>
  );
}