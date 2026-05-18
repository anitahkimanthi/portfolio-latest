import React, { type JSX } from "react";
import {
    BrainCircuit,
    Code2,
    Layers3,
    Server,
    Smartphone,
    Cloud,
    ShieldCheck,
    Workflow,
    Sparkles,
    Cpu,
    Palette,
    GitBranch,
} from "lucide-react";

type Skill = {
    name: string;
    detail: string;
    icon: React.ElementType;
};

const coreSkills: Skill[] = [
    { name: "React", detail: "Scalable web interfaces", icon: Code2 },
    { name: "React Native", detail: "Production mobile apps", icon: Smartphone },
    { name: "TypeScript", detail: "Clean, reliable systems", icon: Layers3 },
    { name: "Node.js", detail: "APIs & backend logic", icon: Server },
    { name: "Python", detail: "AI & automation workflows", icon: Cpu },
    { name: "AWS / GCP", detail: "Cloud deployment", icon: Cloud },
    { name: "Firebase", detail: "Realtime apps & auth", icon: Sparkles },
    { name: "Git / GitHub", detail: "Version control & delivery", icon: GitBranch },
];

const specialities = [
    {
        title: "AI Integration",
        text: "Building smart features, automation flows, and AI-powered product experiences.",
        icon: BrainCircuit,
    },
    {
        title: "Product UI/UX",
        text: "Designing polished, intuitive interfaces that feel simple and premium.",
        icon: Palette,
    },
    {
        title: "End-to-End Builds",
        text: "From idea, architecture, frontend, backend, testing, deployment, and iteration.",
        icon: Workflow,
    },
    {
        title: "Secure Systems",
        text: "Payment integrations, reliable APIs, authentication, and scalable foundations.",
        icon: ShieldCheck,
    },
];

function Skills(): JSX.Element {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white"
        >
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.3),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.22),transparent_35%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />

            <div className="relative mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
                        Skills Matrix
                    </p>

                </div>

                {/* Specialty cards */}
                <div className="mb-10 grid gap-5 md:grid-cols-4">
                    {specialities.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-white/[0.09]"
                            >
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 shadow-lg shadow-violet-500/30">
                                    <Icon className="h-7 w-7 text-white" />
                                </div>

                                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                                <p className="text-sm leading-6 text-slate-400">{item.text}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Main skills panel */}
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-8">
                    <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <h3 className="text-2xl font-black text-white">
                                Engineering Toolkit
                            </h3>
                            <p className="mt-2 max-w-2xl text-slate-400">
                                A practical stack for building beautiful interfaces, reliable
                                systems, AI-powered workflows, and deployable products.
                            </p>
                        </div>

                        <div className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-200">
                            Senior + Product-minded
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {coreSkills.map((skill) => {
                            const Icon = skill.icon;

                            return (
                                <div
                                    key={skill.name}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/[0.08]"
                                >
                                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-pink-500/20 blur-2xl transition group-hover:scale-150" />

                                    <Icon className="relative mb-5 h-8 w-8 text-cyan-300" />

                                    <h4 className="relative text-lg font-bold text-white">
                                        {skill.name}
                                    </h4>

                                    <p className="relative mt-2 text-sm text-slate-400">
                                        {skill.detail}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;