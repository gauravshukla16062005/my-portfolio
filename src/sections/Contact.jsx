import resumeFile from "../assets/resume/resume.pdf";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Contact</h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Feel free to reach out for collaborations, research discussions,
            internship opportunities, or startup ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Details</h3>

              <div className="space-y-4">
                <a
                  href="mailto:gauravshukla199918@gmail.com"
                  className="block text-gray-300 hover:text-white transition"
                >
                  Email: gauravshukla199918@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/abhishek-shukla-8963a32b2"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-gray-300 hover:text-white transition"
                >
                  LinkedIn: abhishek-shukla-8963a32b2
                </a>

                <a
                  href="https://github.com/gauravshukla16062005"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-gray-300 hover:text-white transition"
                >
                  GitHub: gauravshukla16062005
                </a>
              </div>

              <div className="mt-6">
                <a
                  href={resumeFile}
                  download
                  className="inline-block px-5 py-3 rounded-xl border border-white text-white font-medium hover:bg-white hover:text-black transition"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form
              action="mailto:gauravshukla199918@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <div>
                <label className="block text-sm text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message"
                  className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 text-white outline-none focus:border-white/30"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;