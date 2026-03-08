import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import resumeFile from "../assets/resume/resume.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/95 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-bold text-sm">
            AS
          </div>
          <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">
            Abhishek Shukla
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-gray-300 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href={resumeFile}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
          >
            Resume
          </a>
        </div>

        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-black px-5 pb-5">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-base hover:text-gray-300 transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block w-fit px-4 py-2 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;