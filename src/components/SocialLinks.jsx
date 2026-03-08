import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/gauravshukla16062005/"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/abhishek-shukla-8963a32b2"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="gauravshukla199918@gmail.com"
        className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialLinks;