import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["about", "skills", "projects", "contact"];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }

        setOpen(false);
    };

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                {/* Logo */}
                <button
                    onClick={() => handleClick("hero")}
                    className="text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-80"
                >
                    Anitah Kimanthi
                </button>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
                    {sections.map((sec) => (
                        <li
                            key={sec}
                            onClick={() => handleClick(sec)}
                            className="cursor-pointer capitalize transition-colors duration-300 hover:text-white"
                        >
                            {sec}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="text-slate-300 transition hover:text-white md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t border-white/5 bg-slate-950/95 backdrop-blur-xl md:hidden">
                    <ul className="space-y-6 px-6 py-6 text-sm text-slate-400">
                        {sections.map((sec) => (
                            <li
                                key={sec}
                                onClick={() => handleClick(sec)}
                                className="cursor-pointer capitalize transition-colors duration-300 hover:text-white"
                            >
                                {sec}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;