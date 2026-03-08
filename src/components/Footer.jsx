function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm">

        <p>
          © {new Date().getFullYear()} Abhishek Shukla
        </p>

        <p className="mt-2">
          Built with React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}

export default Footer;