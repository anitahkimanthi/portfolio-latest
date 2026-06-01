import React, { type JSX } from "react";
import { ArrowUpRight, Mail, Linkedin, Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(6px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function Contact(): JSX.Element {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white"
        >
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px]" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="relative mx-auto max-w-5xl"
            >
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-14">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">
                            Contact
                        </p>

                        <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
                            Let’s build something thoughtful.
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                            I’m always interested in meaningful products,
                            engineering challenges, and collaborative work across
                            modern web, mobile, and AI systems.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-3">
                        {/* Email */}
                        <motion.a
                            variants={fadeUp}
                            whileHover={{ y: -3 }}
                            href="mailto:anitah.kimanthi@gmail.com"
                            className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                                <Mail size={20} />
                            </div>

                            <p className="mb-2 text-sm text-slate-500">
                                Email
                            </p>

                            <div className="flex items-center justify-between gap-4">
                                <h3 className="font-medium text-white">
                                    Get in touch
                                </h3>

                                <ArrowUpRight
                                    size={18}
                                    className="text-slate-500 transition group-hover:text-cyan-300"
                                />
                            </div>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                            variants={fadeUp}
                            whileHover={{ y: -3 }}
                            href="https://www.linkedin.com/in/anitakimanthi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                                <Linkedin size={20} />
                            </div>

                            <p className="mb-2 text-sm text-slate-500">
                                LinkedIn
                            </p>

                            <div className="flex items-center justify-between gap-4">
                                <h3 className="font-medium text-white">
                                    Connect professionally
                                </h3>

                                <ArrowUpRight
                                    size={18}
                                    className="text-slate-500 transition group-hover:text-cyan-300"
                                />
                            </div>
                        </motion.a>

                        {/* Phone */}
                        <motion.a
                            variants={fadeUp}
                            whileHover={{ y: -3 }}
                            href="tel:+254759559415"
                            className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                                <Phone size={20} />
                            </div>

                            <p className="mb-2 text-sm text-slate-500">
                                Phone
                            </p>

                            <div className="flex items-center justify-between gap-4">
                                <h3 className="font-medium text-white">
                                    Let’s talk
                                </h3>

                                <ArrowUpRight
                                    size={18}
                                    className="text-slate-500 transition group-hover:text-cyan-300"
                                />
                            </div>
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Contact;