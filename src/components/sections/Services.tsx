import React from 'react'
import {
    Code,
    Server,
    Globe,
    Rocket,
} from "lucide-react";


const Services = () => {
    return (
        <section id="services" className="max-w-6xl mx-auto px-6 md:px-8 py-6 md:py-12">
                <h3 className="text-2xl font-bold">Services</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
                    {[
                        { icon: Code, title: "Frontend Development", desc: "Modern, responsive UI with Next.js & React." },
                        { icon: Server, title: "Backend APIs", desc: "Scalable APIs using Nest.js, Fastify & Express." },
                        { icon: Globe, title: "Deployment", desc: "Hosting & deployment on Vercel, AWS, etc." },
                        { icon: Rocket, title: "Full-Stack Apps", desc: "End-to-end product development & launch." },
                    ].map((service) => (
                        <div
                            key={service.title}
                            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl text-center"
                        >
                            <service.icon className="w-10 h-10 mx-auto mb-4 text-blue-500" />
                            <h4 className="font-semibold mb-2 text-cyan-500">{service.title}</h4>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
                        </div>
                    ))}
                </div>
        </section>
    )
}

export default Services