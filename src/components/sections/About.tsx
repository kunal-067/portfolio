import React from 'react'

const About = () => {
  return (
      <section id="about" className="max-w-4xl mx-auto px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold">About Me</h2>
        <img src="/my_img2.jpg" alt="Kunal" className="mx-auto rounded-full max-w-full w-72 mt-6 border-4 border-cyan-500" />
        <p className="mt-6 text-gray-600 dark:text-gray-300">
          I’m Kunal Shroff — a freelance full-stack developer focused on building reliable, maintainable systems. I like clean APIs,
          fast front-ends and clear documentation.
        </p>
      </section>
  )
}

export default About