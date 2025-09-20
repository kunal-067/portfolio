import React from "react";

const projectsData = [
  {
    title: "Fruit Cups",
    description: "Scaled an e-commerce site to 50k+ users using Next.js + MongoDB.",
    image: "/project_1.png",
    liveDemo: "https://fruit-cups.vercel.app/",
    github: "https://github.com/kunal-067/FruitCups",
  },
  {
    title: "Genie Ai",
    description: "It is an AI voice assistant made over play AI.",
    image: "/genie_ai.png",
    liveDemo: "https://play.ai/",
    github: "https://github.com/tech7booth/GenieAi",
  },
  {
    title: "Omitrek Backend",
    description: "Omitrek is a backend project designed on Express for providing APIs for an e-commerce site with advanced MLM and coupon system features.",
    image: "/api.png",
    liveDemo: "https://omitrek-backend.vercel.app/api/v/products",
    github: "https://github.com/kunal-067/omitrek-backend",
  },
  {
    title: "Richtrek (Multi-level marketing)",
    description: "It is a website designed with Next.js to help businesses manage multi-level marketing programs.",
    image: "/mlmprod.png",
    liveDemo: "https://mlm-products.vercel.app/",
    github: "https://github.com/kunal-067/MLM-products",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-6 md:py-12 max-w-6xl px-6 lg:px-8 mx-auto">
      <h2 className="text-2xl font-bold">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 mx-auto mt-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="dark:bg-gray-800 bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-auto object-contain "
            />
            <div className="p-2 md:p-6 text-left">
              <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
              <p className="md:mt-2 max-md:text-[14px] dark:text-gray-400">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
