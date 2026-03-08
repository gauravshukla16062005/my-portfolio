import ProfileImage from "../components/ProfileImage";
import SocialLinks from "../components/SocialLinks";
import resumeFile from "../assets/resume/resume.pdf";
function Hero() {
  return (
    <section
  id="home"
    className="min-h-screen bg-black text-white pt-28 sm:pt-32 lg:pt-28 px-6 flex items-center"
>
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            Hello, I&apos;m Abhishek Shukla
          </h1>

          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
            B.Tech CSE Student | Full Stack Developer | AI Enthusiast
          </h2>

          <p className="mt-6 max-w-2xl text-gray-400 text-base sm:text-lg leading-8">
            Passionate about building intelligent web applications and scalable
            systems with a strong interest in research, startups, hackathons,
            and real-world problem solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              View Projects
            </a>

           <a
  href={resumeFile}
  target="_blank"
  rel="noreferrer"
  className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-black transition"
>
  Download Resume
</a>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div>
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;