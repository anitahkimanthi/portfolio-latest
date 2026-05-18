import React, { type JSX } from "react";
import wine from "../../assets/wine.jpg";
import cake from "../../assets/cake.png";
import club from "../../assets/club.jpg";
import realestate from "../../assets/realestate.jpg";
import music from "../../assets/music.jpg";
import portfolio from "../../assets/portfolio.png";
import { ArrowUpRight } from "lucide-react";

type Project = {
    name: string;
    image: string;
    link: string;
    category: string;
};

const projects: Project[] = [
    {
        name: "Real Estate Platform",
        image: realestate,
        link: "",
        category: "Property Discovery Platform",
    },
    {
        name: "E-Commerce Store",
        image: wine,
        link: "https://shopwine.netlify.app/",
        category: "Web Commerce",
    },

    {
        name: "Portfolio",
        image: portfolio,
        link: "https://anitahportfolio.netlify.app/",
        category: "Personal Brand",
    },
];

function Projects(): JSX.Element {
    return (
        <section id="projects" className="bg-slate-950 px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
                        Selected Work
                    </p>

                    <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
                        Personal Projects
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.link || "#"}
                            target={project.link ? "_blank" : undefined}
                            rel={project.link ? "noopener noreferrer" : undefined}
                            className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] ${!project.link ? "pointer-events-none opacity-70" : ""
                                }`}
                        >
                            <div className="overflow-hidden rounded-[1.25rem] bg-slate-900">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex items-center justify-between gap-4 px-2 pb-2 pt-5">
                                <div>
                                    <p className="mb-1 text-sm text-slate-500">
                                        {project.category}
                                    </p>

                                    <h3 className="text-lg font-medium text-white">
                                        {project.name}
                                    </h3>
                                </div>

                                {project.link && (
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition group-hover:border-cyan-300/40 group-hover:text-cyan-300">
                                        <ArrowUpRight size={18} />
                                    </div>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;