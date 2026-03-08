import resumeFile from "../assets/resume/resume.pdf";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-bold text-sm">
            AS
          </div>
          <span className="text-white font-semibold text-lg whitespace-nowrap">
            Abhishek Shukla
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-5 text-sm font-medium">
          <a href="#home" className="text-white hover:text-gray-300 transition">Home</a>
          <a href="#about" className="text-white hover:text-gray-300 transition">About</a>
          <a href="#skills" className="text-white hover:text-gray-300 transition">Skills</a>
          <a href="#projects" className="text-white hover:text-gray-300 transition">Projects</a>
          <a href="#research" className="text-white hover:text-gray-300 transition">Research</a>
          <a href="#achievements" className="text-white hover:text-gray-300 transition">Achievements</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition">Contact</a>
          <a
  href={resumeFile}
  target="_blank"
  rel="noreferrer"
  className="px-4 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-black transition"
>
  Resume
</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;