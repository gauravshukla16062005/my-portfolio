import internshipCertificate from "../assets/certificates/internship.pdf";
import hackerrankCertificate from "../assets/certificates/hackerrank.pdf";
import nptelCertificate from "../assets/certificates/nptel.pdf";

function Achievements() {
  const achievements = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      description:
        "Maintained a CGPA of 9.56 / 10 in B.Tech CSE, reflecting strong academic consistency and dedication.",
    },
    {
      icon: "💼",
      title: "Internship Experience",
      description:
        "Completed a Frontend Developer Internship at LaunchED Global from March 2025 to April 2025.",
      certificate: internshipCertificate,
    },
    {
      icon: "📚",
      title: "Research Work",
      description:
        "Leading research on an AI-based Career Navigator for personalized recommendations, skill gap analysis, and learning path generation.",
    },
    {
      icon: "📜",
      title: "Technical Certifications",
      description:
        "Earned certifications including HackerRank Java Basics and NPTEL Introduction to Operating Systems.",
      certificates: [
        {
          name: "HackerRank Java Basics",
          file: hackerrankCertificate,
        },
        {
          name: "NPTEL Operating Systems",
          file: nptelCertificate,
        },
      ],
    },
    {
      icon: "⚡",
      title: "Hackathons & Competitions",
      description:
        "Actively participating in hackathons and technical competitions to build innovative and practical solutions.",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
            Milestones & Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Achievements</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 shadow-[0_0_20px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                {item.description}
              </p>

              {item.certificate && (
                <div className="mt-6">
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 rounded-lg border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition"
                  >
                    View Certificate
                  </a>
                </div>
              )}

              {item.certificates && (
                <div className="mt-6 flex flex-col gap-3">
                  {item.certificates.map((cert, i) => (
                    <a
                      key={i}
                      href={cert.file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-4 py-2 rounded-lg border border-white text-white text-sm font-medium hover:bg-white hover:text-black transition"
                    >
                      {cert.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;