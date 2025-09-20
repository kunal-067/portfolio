import React from 'react'

const Skills = () => {
    return (
        <section id="skills" className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold">Tech Stack</h2>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                    { name: "Next.js", desc: "SSR, ISR, SEO-friendly" },
                    { name: "Nest.js", desc: "Modular backend" },
                    { name: "Fastify", desc: "High-performance APIs" },
                    { name: "Express.js", desc: "Proven Node.js framework" },
                    { name: "MongoDB", desc: "Flexible NoSQL" },
                ].map((s) => (
                    <div key={s.name} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:scale-105 transition">
                        <h3 className="font-semibold text-cyan-500">{s.name}</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills