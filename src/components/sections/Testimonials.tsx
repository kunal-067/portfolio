import React from 'react'

const Testimonials = () => {
  return (
     <section id="testimonials" className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">What clients & colleagues say</p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { text: "Kunal delivered fast and reliable APIs — shipped ahead of schedule.", name: "Riya Patel", role: "Product Manager" },
            { text: "Great eye for performance and code quality. Highly recommended.", name: "Amit Sharma", role: "CTO, Startup X" },
            { text: "Excellent communication and a pleasure to work with.", name: "Neha Verma", role: "Founder" },
          ].map((t, i) => (
            <div key={i} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <p className="text-sm text-gray-700 dark:text-gray-200">“{t.text}”</p>
              <div className="mt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Testimonials