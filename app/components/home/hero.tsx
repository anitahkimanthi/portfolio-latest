import React from "react";
import bg from "../../assets/bg.jpg";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 text-white"
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.7]"
                style={{ backgroundImage: `url(${bg})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/75 to-slate-950/85" />

            {/* Soft glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.14),transparent_45%)]" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">
                {/* Top tag */}
                <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium tracking-wide backdrop-blur-md">
                    <span className="text-cyan-300">Engineering</span>

                    <span className="mx-3 text-slate-600">•</span>

                    <span className="text-violet-300">Product Design</span>

                    <span className="mx-3 text-slate-600">•</span>

                    <span className="text-pink-300">AI Systems</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-white md:text-6xl">
                    Engineering modern digital experiences                </h1>

                {/* Supporting text */}
                <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                    Full-stack developer combining engineering, product design,
                    and AI systems to build scalable, human-centered applications.
                </p>

                {/* Philosophy */}
                <p className="mx-auto mt-10 max-w-3xl text-base leading-8 text-slate-500 italic">
                    “The definition of good engineering is changing.
                    AI can generate code — judgment is now the differentiator”
                </p>

                {/* CTA */}
                <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="group flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-medium text-slate-950 transition hover:scale-[1.01]"
                    >
                        View Work
                        <ArrowRight
                            size={18}
                            className="transition group-hover:translate-x-1"
                        />
                    </button>

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="rounded-2xl border border-white/10 bg-white/[0.02] px-7 py-4 font-medium text-slate-300 transition hover:bg-white/[0.04]"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;