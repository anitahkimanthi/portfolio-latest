import type { JSX } from "react";

type Work = {
    title: string;
    description: string;
    technologies: string[];
};

const workExperience: Work[] = [
    {
        title: "Enterprise Digital Platforms",
        description:
            "Contributed to the design and development of scalable digital products, including analytics dashboards, workflow automation systems, and user-facing applications serving real business operations.",
        technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    },
    {
        title: "AI-Driven Business Solutions",
        description:
            "Built intelligent workflow solutions, API integrations, and data-driven features that improved operational efficiency and supported product scalability.",
        technologies: ["Python", "React", "AWS", "REST APIs"],
    },
    {
        title: "Mobile & Web Applications",
        description:
            "Delivered cross-platform applications, optimized user experiences, and collaborated with product and design teams to ship production-ready features.",
        technologies: ["React Native", "React"],
    },
];

function ProfessionalWork(): JSX.Element {
    return (
        <section className="py-24 px-6 bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
                    Products I’ve Helped Build
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {workExperience.map((work) => (
                        <div
                            key={work.title}
                            className="bg-gray-950 p-6 rounded-2xl border border-gray-800"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4">
                                {work.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {work.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {work.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs bg-indigo-500/10 text-indigo-300 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProfessionalWork;