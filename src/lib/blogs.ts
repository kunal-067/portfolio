import { Database, Zap, Package, Cpu, Server } from 'lucide-react';

export const BLOG_POSTS = [
    {
        title: 'RabbitMQ Messaging Guide',
        date: 'Aug 29, 2025',
        excerpt: 'A guide to implementing messaging systems using RabbitMQ for microservices.',
        link: '/blogs/rabbitmq',
        icon: Package,
    },
    {
        title: 'Kafka for Event-Driven Architecture',
        date: 'Aug 22, 2025',
        excerpt: 'Explore how Kafka helps in building scalable and reliable event-driven systems.',
        link: '/blogs/kafka',
        icon: Zap,
    },
    {
        title: 'Redis Basics and Use Cases',
        date: 'jan 17, 2025',
        excerpt: 'Learn the fundamentals of Redis and how it can improve your application performance.',
        link: '/blogs/redis',
        icon: Database,
    },
    {
        title: 'MongoDB for Beginners: A Complete Guide',
        date: 'Oct 14, 2025',
        excerpt: 'Learn the basics of MongoDB, a NoSQL database, and how to use it for scalable web applications.',
        link: '/blogs/mongodb',
        icon: Database,
    },
    {
        title: 'Building APIs with Express.js and Node.js',
        date: 'Sep 10, 2024',
        excerpt: 'Discover how to create robust, scalable APIs using Express.js and Node.js for your web projects.',
        link: '/blogs/express',
        icon: Server,
    },
    {
        title: 'Full-Stack Development (Next.js)',
        date: 'Sep 8, 2025',
        excerpt: 'A complete guide to managing front-end and back-end development with Next.js and MongoDB.',
        link: '/blogs/nextjs',
        icon: Cpu,
    },
];