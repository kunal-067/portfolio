import { CodeBlock } from '@/components/CodeBlock';
import type { Metadata } from 'next';
import Link from 'next/link';

// Define metadata for SEO
export const metadata: Metadata = {
    title: 'NestJS for Beginners: Build Scalable Node.js Apps | MyApp',
    description: 'Learn NestJS, the progressive Node.js framework for server-side apps. This beginner-friendly guide covers how NestJS works, why to use it, real-world examples, and code tutorials.',
    keywords: ['NestJS', 'Node.js framework', 'NestJS tutorial', 'beginner NestJS', 'NestJS API', 'NestJS microservices'],
    openGraph: {
        title: 'NestJS for Beginners: Build Scalable Node.js Apps',
        description: 'Discover NestJS’s power for modern apps with this beginner-friendly guide, including code examples and real-world use cases.',
        url: 'https://kunalshroff.vercel.app/nestjs-blog',
        type: 'article',
        images: [
            {
                url: 'https://kunalshroff.vercel.app/images/nestjs-blog-og.jpg',
                width: 1200,
                height: 630,
                alt: 'NestJS logo with code example',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NestJS for Beginners: Build Scalable Node.js Apps',
        description: 'Learn NestJS with this beginner-friendly guide, featuring code examples and real-world use cases.',
        images: ['https://kunalshroff.vercel.app/images/nestjs-blog-og.jpg'],
    },
};

// Schema markup for Article
const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'NestJS for Beginners: Build Scalable Node.js Apps',
    description: 'Learn NestJS, the progressive Node.js framework for server-side apps, with beginner-friendly explanations, code examples, and real-world use cases.',
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
    image: 'https://kunalshroff.vercel.app/images/nestjs-blog-og.jpg',
    url: 'https://kunalshroff.vercel.app/nestjs-blog',
};

export default function NestJSBlog() {
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
                    🪺 NestJS: The Progressive Node.js Framework for Scalable Apps
                </h1>


                <div className='flex flex-col lg:flex-row gap-4'>
                    {/* Table of Contents */}
                    <section className="mb-10 lg:w-[790px] w-full lg:sticky top-24 self-start space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-3">Table of Contents</h2>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><Link href="#intro" className="text-blue-600 hover:underline">Introduction</Link></li>
                            <li><Link href="#what-is-nestjs" className="text-blue-600 hover:underline">What is NestJS?</Link></li>
                            <li><Link href="#how-it-works" className="text-blue-600 hover:underline">How NestJS Works</Link></li>
                            <li><Link href="#why-use-nestjs" className="text-blue-600 hover:underline">Why Choose NestJS?</Link></li>
                            <li><Link href="#analogy" className="text-blue-600 hover:underline">NestJS as a Modular Building Kit</Link></li>
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
                                Building server-side apps with plain Node.js can be like assembling a car from scratch—you get control, but it takes effort to make it structured and scalable. Enter <strong>NestJS</strong>, a progressive framework that adds TypeScript support, modular architecture, and tools for APIs and microservices, making your apps robust and easy to maintain!
                            </p>
                            <p>
                                Companies like Tinkoff, Adidas, and many startups use NestJS to build scalable applications. Don’t worry if you’re new to backend development—this guide is designed to be super beginner-friendly and easy to follow!
                            </p>
                            <p>In this blog, we’ll cover:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>✅ What NestJS is (in simple terms)</li>
                                <li>✅ How it works, step by step</li>
                                <li>✅ Why it’s great for web apps</li>
                                <li>✅ Everyday examples of NestJS in action</li>
                                <li>✅ A fun analogy to make it clear</li>
                                <li>✅ Easy code examples you can copy and try</li>
                            </ul>
                            <p>
                                By the end, you’ll understand how NestJS can make your apps powerful and easy to build, even as a beginner! Check out our <Link href="/express-nodejs-blog" className="text-blue-600 hover:underline">Express & Node.js guide</Link> to compare frameworks.
                            </p>
                        </section>

                        {/* What is NestJS */}
                        <section id="what-is-nestjs" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 What is NestJS?</h2>
                            <p>
                                NestJS is a progressive <strong>Node.js framework</strong> for building efficient, scalable server-side applications. It uses TypeScript (but supports JavaScript) and draws inspiration from Angular for its modular design, making it structured and enterprise-ready.
                            </p>
                            <p>
                                It’s open-source, free to use, and perfect for APIs, microservices, and full-stack apps. NestJS provides built-in tools for dependency injection, controllers, and modules, simplifying development.
                            </p>
                            <p>Key concepts:</p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Modules</strong>: Organize your app into feature-based groups, like user or auth modules.</li>
                                <li><strong>Controllers</strong>: Handle incoming requests and return responses, like Express routes but more structured.</li>
                                <li><strong>Services</strong>: Reusable classes for business logic, like fetching data from a database.</li>
                                <li><strong>Decorators</strong>: Use @ annotations for routing, injection, and more, making code clean.</li>
                            </ul>
                            <p>
                                NestJS is like a well-organized toolbox for Node.js developers, making your apps scalable and maintainable.
                            </p>
                        </section>

                        {/* Visual Flow */}
                        <section id="how-it-works" className="space-y-4 mb-8">
                            <h2 className="text-2xl font-bold mb-3">🔹 How NestJS Works</h2>
                            <p>
                                Let’s see how NestJS handles a request, like fetching users from an API. Here’s the simple flow:
                            </p>
                            <ol className="list-decimal list-inside ml-4 space-y-2">
                                <li>A user sends a request (e.g., GET /users).</li>
                                <li>NestJS’s <strong>controller</strong> catches the route.</li>
                                <li>The controller calls a <strong>service</strong> for logic (e.g., query a database).</li>
                                <li>The service processes data and returns it to the controller.</li>
                                <li>NestJS sends the response (e.g., JSON users list).</li>
                            </ol>
                            <p>Here’s a diagram of the flow:</p>
                            <div className="flex flex-wrap items-center gap-4 md:gap-10">
                                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                                    <span className="text-xl">🌐 User</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Sends request</p>
                                </div>
                                <div className="text-3xl">➡️</div>
                                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                                    <span className="text-xl">🪺 NestJS</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Controller & Service</p>
                                </div>
                                <div className="text-3xl">➡️</div>
                                <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                                    <span className="text-xl">📤 Response</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Returns data</p>
                                </div>
                            </div>
                            <p>
                                This modular setup makes NestJS efficient and easy to scale!
                            </p>
                        </section>

                        {/* Why Use NestJS */}
                        <section id="why-use-nestjs" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 Why Choose NestJS?</h2>
                            <p>
                                Why not use Express or plain Node.js? NestJS builds on Node.js but adds structure for larger apps. Here’s why it’s a top choice in 2025:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Modular Architecture</strong>: Organizes code with modules, controllers, and services for maintainability [1].</li>
                                <li><strong>TypeScript Support</strong>: Built-in TypeScript for type-safe, error-free code [2].</li>
                                <li><strong>Scalable</strong>: Excellent for microservices and APIs, with built-in tools for dependency injection [3].</li>
                                <li><strong>Easy Integration</strong>: Works seamlessly with databases like MongoDB and messaging queues like RabbitMQ [4].</li>
                                <li><strong>Community & Tools</strong>: Strong ecosystem with decorators, CLI, and testing tools for faster development [5].</li>
                            </ul>
                            <p>
                                NestJS is like an upgraded Node.js—structured, scalable, and beginner-friendly for complex apps.
                            </p>
                            <p>
                                <strong>Quick Tip</strong>: NestJS pairs great with <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB</Link> for databases and <Link href="/express-nodejs-blog" className="text-blue-600 hover:underline">Express</Link> for migration.
                            </p>
                        </section>

                        {/* Analogy */}
                        <section id="analogy" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 Analogy: NestJS as a Modular Building Kit</h2>
                            <p>
                                Imagine Node.js as a pile of Lego bricks—you can build anything, but it’s messy without organization. NestJS is like a modular Lego kit:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Bricks (Services)</strong>: Reusable pieces for logic, like fetching data.</li>
                                <li><strong>Blueprints (Controllers)</strong>: Guides for assembling routes and handling requests.</li>
                                <li><strong>Kits (Modules)</strong>: Groups related pieces, like a “user” kit with services and controllers.</li>
                                <li><strong>Instructions (Decorators)</strong>: Simple labels (@) to connect everything easily.</li>
                            </ul>
                            <p>
                                NestJS makes building apps as fun and structured as playing with Legos, perfect for beginners and complex projects!
                            </p>
                        </section>

                        {/* Real-World Use Cases */}
                        <section id="real-world-examples" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 Where NestJS is Used</h2>
                            <p>
                                NestJS powers apps in 2025. Here are some examples:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Banking APIs</strong>: Tinkoff uses NestJS for secure, scalable financial APIs [6].</li>
                                <li><strong>E-Commerce Backends</strong>: Adidas builds robust e-commerce systems with NestJS [7].</li>
                                <li><strong>Microservices</strong>: Startups use NestJS with RabbitMQ for distributed services [4].</li>
                                <li><strong>Full-Stack Apps</strong>: Integrate with MongoDB for data-driven apps like content platforms [1].</li>
                                <li><strong>Enterprise</strong>: Companies use NestJS for TypeScript-based, maintainable codebases [2].</li>
                            </ul>
                            <p>
                                NestJS handles everything from APIs to microservices with ease.
                            </p>
                        </section>

                        {/* Code Examples */}
                        <section id="code-examples" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 NestJS Code Examples</h2>
                            <p>
                                Let’s try some simple code to use NestJS! You’ll need Node.js installed. We’ll explain every step for beginners.
                            </p>
                            <p>First, set up a NestJS project:</p>
                            <CodeBlock language="bash">{`npm i -g @nestjs/cli
nest new my-nest-app
cd my-nest-app
npm run start:dev`}</CodeBlock>

                            <h3 className="text-xl font-semibold mt-6">Example 1: Basic Hello World Controller</h3>
                            <p>
                                Create a controller for a simple endpoint. In <code>src/app.controller.ts</code>:
                            </p>
                            <CodeBlock language="typescript">{`import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello, NestJS!';
  }
}
`}</CodeBlock>
                            <p><strong>What’s happening?</strong></p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Use @Controller to define a class for routes.</li>
                                <li>@Get handles GET requests to the root path.</li>
                                <li>Test at <code>http://localhost:3000</code>.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6">Example 2: Creating a Module and Service</h3>
                            <p>
                                Add a module and service for users. Generate with CLI:
                            </p>
                            <CodeBlock language="bash">{`nest generate module users
nest generate service users`}</CodeBlock>
                            <p>In <code>src/users/users.service.ts</code>:</p>
                            <CodeBlock language="typescript">{`import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'Alice' }];

  findAll() {
    return this.users;
  }
}
`}</CodeBlock>
                            <p>In <code>src/users/users.controller.ts</code>:</p>
                            <CodeBlock language="typescript">{`import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
`}</CodeBlock>
                            <p><strong>What’s happening?</strong></p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Service handles logic, injected into the controller.</li>
                                <li>Controller defines routes like GET /users.</li>
                                <li>Test at <code>http://localhost:3000/users</code>.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6">Example 3: Integrating MongoDB</h3>
                            <p>
                                Add MongoDB integration. Install packages:
                            </p>
                            <CodeBlock language="bash">{`npm install @nestjs/mongoose mongoose`}</CodeBlock>
                            <p>In <code>src/app.module.ts</code>:</p>
                            <CodeBlock language="typescript">{`import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
`}</CodeBlock>
                            <p>Create a schema in <code>src/users/schemas/user.schema.ts</code>:</p>
                            <CodeBlock language="typescript">{`import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  age: Number,
});
`}</CodeBlock>
                            <p>Update <code>src/users/users.module.ts</code>:</p>
                            <CodeBlock language="typescript">{`import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
`}</CodeBlock>
                            <p>Update <code>src/users/users.service.ts</code>:</p>
                            <CodeBlock language="typescript">{`import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<any>) {}

  async findAll() {
    return this.userModel.find().exec();
  }
}
`}</CodeBlock>
                            <p><strong>What’s happening?</strong></p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Integrate Mongoose for MongoDB schema and models.</li>
                                <li>Service uses injected model to query data.</li>
                                <li>Test at <code>http://localhost:3000/users</code> after adding data.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6">Example 4: Building a Microservice</h3>
                            <p>
                                Create a microservice with RabbitMQ. Install packages:
                            </p>
                            <CodeBlock language="bash">{`npm install @nestjs/microservices amqp-connection-manager`}</CodeBlock>
                            <p>In <code>src/main.ts</code>:</p>
                            <CodeBlock language="typescript">{`import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'nest_queue',
    },
  });
  await app.listen();
}
bootstrap();
`}</CodeBlock>
                            <p>In a controller:</p>
                            <CodeBlock language="typescript">{`import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('hello')
  getHello(data: string) {
    return \`Hello from NestJS Microservice: \${data}\`;
  }
}
`}</CodeBlock>
                            <p><strong>What’s happening?</strong></p>
                            <ul className="list-disc list-inside ml-4 space-y-1">
                                <li>Configure NestJS as a microservice with RabbitMQ transport.</li>
                                <li>Use @MessagePattern to handle messages from a queue.</li>
                                <li>Test with a RabbitMQ client sending to {`'nest_queue'`}.</li>
                            </ul>
                            <p>
                                <strong>Try it out!</strong> Run <code>npm run start:dev</code> and test endpoints or microservices.
                            </p>
                        </section>

                        {/* Wrapping Up */}
                        <section id="wrapping-up" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 Wrapping Up</h2>
                            <p>
                                NestJS is a structured, scalable framework that makes Node.js development enterprise-ready. Its modules, TypeScript support, and integrations make it perfect for APIs and microservices.
                            </p>
                            <p>
                                You’ve learned the basics, seen examples, and tried code—now you’re ready to use NestJS! Start with a small API, and explore our <Link href="/mongodb-blog" className="text-blue-600 hover:underline">MongoDB guide</Link> for database tips.
                            </p>
                            <p>
                                For more, check the <a href="https://docs.nestjs.com/" className="text-blue-600 hover:underline">NestJS docs</a> or try <a href="https://docs.nestjs.com/first-steps" className="text-blue-600 hover:underline">NestJS tutorials</a>.
                            </p>
                            <p>
                                <strong>Next Steps</strong>: Combine NestJS with MongoDB and deploy to a platform like Vercel. Happy coding! [6]
                            </p>
                        </section>

                        {/* References */}
                        <section id="references" className="mb-10 space-y-4">
                            <h2 className="text-2xl font-bold mb-3">🔹 References</h2>
                            <ol className="list-decimal list-inside ml-4 space-y-1">
                                <li><a href="https://docs.nestjs.com/" className="text-blue-600 hover:underline">NestJS Documentation</a></li>
                                <li><a href="https://docs.nestjs.com/fundamentals/typescript" className="text-blue-600 hover:underline">NestJS with TypeScript</a></li>
                                <li><a href="https://docs.nestjs.com/microservices/basics" className="text-blue-600 hover:underline">NestJS Microservices</a></li>
                                <li><a href="https://docs.nestjs.com/recipes/mongodb" className="text-blue-600 hover:underline">NestJS with MongoDB</a></li>
                                <li><a href="https://docs.nestjs.com/" className="text-blue-600 hover:underline">NestJS CLI</a></li>
                                <li><a href="https://nestjs.com/" className="text-blue-600 hover:underline">NestJS Official Site</a></li>
                                <li><a href="https://docs.nestjs.com/techniques/validation" className="text-blue-600 hover:underline">NestJS Validation</a></li>
                            </ol>
                        </section>
                    </article>

                </div>
            </div>
        </>
    );
}
