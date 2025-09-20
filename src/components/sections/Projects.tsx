import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-6 md:py-12 max-w-6xl px-6 lg:px-8 mx-auto">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 mx-auto mt-6">
                {/* Project Card Example */}
                <div className="dark:bg-gray-800 bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
                    <img
                        src="/project_1.png"
                        alt="Project screenshot"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-left">
                        <h3 className="text-xl font-bold">Fruit Cups</h3>
                        <p className="mt-2 dark:text-gray-400">
                            Scaled an e-commerce site to 50k+ users using Next.js + MongoDB.
                        </p>
                        <div className="mt-4 flex gap-4">
                            <a href="https://fruit-cups.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                Live Demo
                            </a>
                            <a href="https://github.com/kunal-067/FruitCups" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* genie ai */}
                <div className="dark:bg-gray-800 bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
                    <img
                        src="/genie_ai.png"
                        alt="Project screenshot"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-left">
                        <h3 className="text-xl font-bold">Genie Ai</h3>
                        <p className="mt-2 dark:text-gray-400">
                            It is an AI voice assistant made over play AI.
                        </p>
                        <div className="mt-4 flex gap-4">
                            <a href="https://play.ai/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                Live Demo
                            </a>
                            <a href="https://github.com/tech7booth/GenieAi" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* omitrek backend */}
                <div className="dark:bg-gray-800 bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
                    <img
                        src="/api.png"
                        alt="Project screenshot"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-left">
                        <h3 className="text-xl font-bold">Omitrek Backend</h3>
                        <p className="mt-2 dark:text-gray-400">
                            Omitrek is a backend project designed on Express for providing APIs for an e-commerce site with advanced MLM and coupon system features.
                        </p>
                        <div className="mt-4 flex gap-4">
                            <a href="https://omitrek-backend.vercel.app/api/v/products" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                Live Demo
                            </a>
                            <a href="https://github.com/kunal-067/omitrek-backend" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* mlm project */}
                <div className="dark:bg-gray-800 bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
                    <img
                        src="/mlmprod.png"
                        alt="Project screenshot"
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-left">
                        <h3 className="text-xl font-bold">Richtrek (Multi-level marketing)</h3>
                        <p className="mt-2 dark:text-gray-400">
                            It is a website designed with Next.js to help businesses manage multi-level marketing programs.
                        </p>
                        <div className="mt-4 flex gap-4">
                            <a href="https://mlm-products.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                Live Demo
                            </a>
                            <a href="https://github.com/kunal-067/MLM-products" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;