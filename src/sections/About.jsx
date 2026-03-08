function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
            Get To Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-5 text-white">
              Building with curiosity, purpose, and technology
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              I am a B.Tech Computer Science student passionate about building
              intelligent applications and scalable systems. My interests lie
              in Full Stack Development, Artificial Intelligence, and solving
              real-world problems through technology.
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              I actively work on projects related to web development, AI-based
              tools, and research-oriented systems. I enjoy participating in
              hackathons, startup initiatives, and building innovative
              solutions that create practical impact.
            </p>
          </div>

          {/* Right Side Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-[0_0_20px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
                💻
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Full Stack
              </h3>
              <p className="text-gray-400 text-sm leading-6">
                Building modern, responsive, and scalable web applications
                using frontend and backend technologies.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-[0_0_20px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
                🤖
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                AI & ML
              </h3>
              <p className="text-gray-400 text-sm leading-6">
                Exploring intelligent systems, machine learning concepts, and
                practical AI-driven solutions.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-[0_0_20px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
                📘
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Research
              </h3>
              <p className="text-gray-400 text-sm leading-6">
                Working on an AI Career Navigator under a faculty-mentored undergraduate research program at SRM IST Ramapuram.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-[0_0_20px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Problem Solving
              </h3>
              <p className="text-gray-400 text-sm leading-6">
                Interested in building meaningful solutions through projects,
                hackathons, and startup-driven thinking.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-[0_0_20px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
    💡
  </div>
  <h3 className="text-xl font-semibold mb-2 text-white">
    Entrepreneurship
  </h3>
  <p className="text-gray-400 text-sm leading-6">
    Interested in building startups, developing innovative ideas,
    and turning technology solutions into impactful products.
  </p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;