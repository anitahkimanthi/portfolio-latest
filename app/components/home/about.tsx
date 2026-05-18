import React, { type JSX } from "react";
import { motion, type Variants } from "framer-motion";

import {
    BrainCircuit,
    Code2,
    Layout,
    Workflow,
} from "lucide-react";

const strengths = [
    {
        title: "Engineering",
        text: "Scalable web, mobile, and backend systems.",
        icon: Code2,
    },
    {
        title: "Product Design",
        text: "Interfaces designed with clarity and usability.",
        icon: Layout,
    },
    {
        title: "AI Systems",
        text: "Workflow automation and intelligent experiences.",
        icon: BrainCircuit,
    },
    {
        title: "Delivery",
        text: "From architecture to deployment and iteration.",
        icon: Workflow,
    },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

function About(): JSX.Element {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px]" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={container}
                className="relative mx-auto max-w-7xl"
            >
                <div className="max-w-4xl">
                    <motion.p
                        variants={fadeUp}
                        className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300"
                    >
                        About
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="max-w-3xl text-2xl font-medium leading-tight tracking-tight text-white md:text-4xl"
                    >
                        Building modern systems with engineering,
                        product thinking, and AI.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-8 max-w-5xl text-lg leading-8 text-slate-400"
                    >
                        I’m a full-stack and mobile developer focused on creating
                        scalable digital products that feel thoughtful, reliable,
                        and human-centered. My work combines clean engineering,
                        product design, and AI-powered workflows to solve
                        practical problems through modern software systems.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
                >
                    {strengths.map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeUp}
                                whileHover={{ y: -4 }}
                                transition={{
                                    duration: 0.35,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                                    <Icon size={22} />
                                </div>

                                <h3 className="mb-3 text-lg font-medium text-white">
                                    {item.title}
                                </h3>

                                <p className="leading-7 text-slate-500">
                                    {item.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default About;