import React from 'react'
import {
  Users,
  Briefcase,
  Clock,
} from "lucide-react";

const Achivements = () => {
    return (
        <section id="achievements" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-12">Achievements</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: Briefcase, stat: "20+", label: "Projects Delivered" },
                        { icon: Users, stat: "10+", label: "Happy Clients" },
                        { icon: Clock, stat: "3+", label: "Years Experience" },
                    ].map((a) => (
                        <div
                            key={a.label}
                            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
                        >
                            <a.icon className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                            <div className="text-3xl font-bold mb-1">{a.stat}</div>
                            <p className="text-gray-600 dark:text-gray-300">{a.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achivements