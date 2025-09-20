import React from 'react'

const DevProcess = () => {
  return (
    <section id="process" className="py-20 px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold">My Development Process</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">How we starts! and finish our work.</p>

        <div className="grid md:grid-cols-4 gap-6 mt-6">
            {[{ step: "1. Discovery", desc: "Understanding client needs & planning." }, { step: "2. Design", desc: "Creating wireframes & UI/UX prototypes." }, { step: "3. Development", desc: "Building scalable apps with modern stacks." }, { step: "4. Deployment", desc: "Launching apps on Vercel/AWS with support." }].map((p) => (
                <div key={p.step} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">{p.step}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{p.desc}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default DevProcess