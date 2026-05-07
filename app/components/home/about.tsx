import React, { type JSX } from "react";
import about from "../../assets/about.png"

function About(): JSX.Element {
    return (
        <section id="about" className="py-20 px-6 bg-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left: Text */}
                <div className="md:w">
                    <h2 className="text-3xl font-bold text-gray-100 mb-4">
                        About
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        I’m a full-stack engineer passionate about building digital experiences that solve real problems. My work sits at the intersection of product thinking, clean architecture, and user-centered design.                    </p>
                    <br />

                    <p className="text-lg text-gray-400 leading-relaxed">

                        Over the years, I’ve built everything from interactive frontends and mobile applications to backend systems, analytics dashboards, and workflow automation tools. I’m passionate about building products that solve real business challenges and create meaningful experiences for users.                    </p>
                    <br />

                    <p className="text-lg text-gray-400 leading-relaxed">
                        Beyond writing code, I enjoy simplifying complexity, improving developer workflows, and helping teams build with clarity and purpose.                    </p>
                </div>

                {/* Right: Image */}
                <div className="md:w-1/2">
                    <img
                        src={about}
                        alt="About me"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
