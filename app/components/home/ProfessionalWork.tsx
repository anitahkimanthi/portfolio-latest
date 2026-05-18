import type { JSX } from "react";
import { ArrowUpRight, BrainCircuit, Layers3, Smartphone } from "lucide-react";

type Work = {
    title: string;
    description: string;
    technologies: string[];
    icon: React.ElementType;
    link: string
};

const workExperience: Work[] = [
    {
        title: "Enterprise Digital Platforms",
        description:
            "Built and improved internal platforms, dashboards, workflow systems, and operational tools supporting real business processes.",
        technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
        icon: Layers3,
        link: "https://www.xaidi.life/organizations"
    },
    {
        title: "AI-Enabled Product Systems",
        description:
            "Developed AI-powered workflows, automation features, API integrations, and intelligent product tools that improved efficiency.",
        technologies: ["Python", "React", "AWS", "REST APIs"],
        icon: BrainCircuit,
        link: "https://www.xaidi.life/individuals/client"
    },
    {
        title: "Mobile & Web Applications",
        description:
            "Delivered production-ready web and mobile features with a focus on usability, performance, and reliable user experiences.",
        technologies: ["React Native", "React", "Firebase"],
        icon: Smartphone,
        link: "https://apps.apple.com/ke/app/xaidi/id6475586861"
    },
];

function ProfessionalWork(): JSX.Element {
    return (
        <section id="projects" className="bg-slate-950 px-6 py-24 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
                        Professional Work
                    </p>

                    <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
                        Products I’ve Helped Build
                    </h2>
                </div>

                <div className="space-y-4">
                    {workExperience.map((work) => {
                        const Icon = work.icon;

                        return (
                            <div
                                key={work.title}
                                className="group grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] md:grid-cols-[auto_1fr_auto]"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                                    <Icon size={22} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium text-white">
                                        {work.title}
                                    </h3>

                                    <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                                        {work.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {work.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-500 transition group-hover:border-cyan-300/40 group-hover:text-cyan-300 md:flex">
                                    <a href={work.link} target="_blank" rel="noopener noreferrer">
                                        <ArrowUpRight size={18} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProfessionalWork;