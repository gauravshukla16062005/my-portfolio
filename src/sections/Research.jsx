function Research() {
  return (
    <section
      id="research"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
            Academic Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Research
          </h2>
        </div>

        {/* Main Research Card */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">

          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
              📚
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                AI Career Navigator – Research Project
              </h3>

              <span className="text-sm text-gray-400">
                Research in Progress
              </span>
            </div>
          </div>

          {/* Overview */}
          <p className="text-gray-300 leading-8 mb-8">
            This research focuses on developing an AI-driven Career Navigation
            framework that helps students and early-career professionals
            identify suitable career paths based on their skills, interests,
            personality traits, and industry requirements. The system aims to
            provide personalized career recommendations, skill gap analysis,
            and intelligent learning roadmaps to support informed career
            decisions.
          </p>

          {/* Grid Content */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Problem */}
            <div className="border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-3">
                Problem Being Addressed
              </h4>

              <p className="text-gray-400 text-sm leading-7">
                Many learners face career uncertainty and lack personalized
                guidance. Existing platforms often provide generic
                recommendations and fail to analyze individual skills,
                interests, and evolving job market demands.
              </p>
            </div>

            {/* Role */}
            <div className="border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-3">
                My Role
              </h4>

              <p className="text-gray-400 text-sm leading-7">
                Leading the research direction including literature review,
                system architecture design, methodology development, and
                evaluation strategies for the AI-based recommendation system.
              </p>
            </div>

            {/* Methods */}
            <div className="border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-3">
                Methods & Concepts
              </h4>

              <ul className="text-gray-400 text-sm leading-7 list-disc list-inside">
                <li>NLP for skill extraction and profile analysis</li>
                <li>SBERT embeddings for semantic similarity</li>
                <li>Reinforcement-based personalized recommendation</li>
                <li>VADER sentiment analysis</li>
                <li>RIASEC vocational alignment model</li>
                <li>Generative AI for learning roadmap creation</li>
              </ul>
            </div>

            {/* Outcome */}
            <div className="border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg mb-3">
                Expected Outcome
              </h4>

              <p className="text-gray-400 text-sm leading-7">
                A data-driven AI Career Navigator framework capable of
                generating personalized career recommendations, identifying
                skill gaps, and producing actionable learning paths for career
                readiness.
              </p>
            </div>

          </div>

          {/* Technologies */}
          <div className="mt-8">
            <h4 className="font-semibold text-lg mb-4">
              Technologies & Tools
            </h4>

            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "NLP",
                "SBERT",
                "Reinforcement Learning",
                "VADER Sentiment Analysis",
                "Generative AI",
                "RIASEC Model",
                "Data Analysis",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Research;