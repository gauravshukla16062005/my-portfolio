function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "SQLite"],
    },
    {
      title: "AI / Learning",
      icon: "🤖",
      skills: ["AI Basics", "Machine Learning Concepts", "Problem Solving"],
    },
    {
      title: "Core Strengths",
      icon: "🚀",
      skills: ["Full Stack Development","C++","Java" ,"Research Interest", "Hackathons"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-[0_0_20px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
                {category.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {skill}
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

export default Skills;