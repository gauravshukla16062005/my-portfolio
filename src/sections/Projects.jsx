import flyease from "../assets/images/flyease.jpg";

function Projects() {
  const featuredProject = {
    title: "WhatNext!! – AI Career Clarity Tool",
    icon: "🧠",
    status: "Initial Development Phase",
    description:
      "An AI-powered platform designed to analyze student interests, skills, and academic profiles to provide personalized career guidance. It uses NLP-based profile analysis and sentiment understanding to identify suitable career paths and generate tailored recommendations with learning roadmaps.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "NLP",
      "VADER Sentiment Analysis",
      "Personalized Recommendation",
    ],
  };

  const flyEaseProject = {
    title: "Fly-Ease – Smart Flight Booking System",
    status: "About to Complete",
    description:
      "A web-based flight booking system that enables users to search and reserve flights with intelligent insights such as crowd level indicators, booking confidence scores, and waitlist management for better travel decisions.",
    tech: ["HTML", "CSS", "Java", "JDBC", "MySQL", "Git", "GitHub"],
    github: "https://github.com/gauravshukla16062005/Fly-Ease",
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
        </div>

        <div className="space-y-10">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 md:p-10 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-white/20">
            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-5xl">
                {featuredProject.icon}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {featuredProject.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs border border-white/15 bg-white/5 text-gray-300">
                    {featuredProject.status}
                  </span>
                </div>

                <p className="text-gray-400 leading-8 text-base md:text-lg">
                  {featuredProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {featuredProject.tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <span className="inline-block px-4 py-2 rounded-xl bg-white text-black font-medium text-sm">
                    In Progress
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-white/20">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-full">
                <img
                  src={flyease}
                  alt="Fly-Ease project screenshot"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {flyEaseProject.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs border border-white/15 bg-white/5 text-gray-300">
                    {flyEaseProject.status}
                  </span>
                </div>

                <p className="text-gray-400 leading-8 text-base md:text-lg">
                  {flyEaseProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {flyEaseProject.tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={flyEaseProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl border border-white text-white font-medium hover:bg-white hover:text-black transition"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;