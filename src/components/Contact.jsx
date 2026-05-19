import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#020617] text-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gray-800 px-4 py-1 rounded-full text-sm">
            Get In Touch
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Let’s collaborate on your next{" "}
            <span className="text-blue-500">big idea.</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-7">
            I am open to discussing internship opportunities,
            creative projects, or full-time roles in software development.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-6">

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-4 rounded-xl">
                <FaEnvelope className="text-blue-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">EMAIL ME</p>
                <p className="font-semibold">teferahawi8@gmail.com</p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-4 rounded-xl">
                <FaGithub className="text-blue-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400">SOURCE CODE</p>
                <p className="font-semibold">
                  github.com/teferahawi8-ops
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f172a] p-8 rounded-3xl border border-gray-800 shadow-xl"
        >

          <form className="space-y-6">

            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm text-gray-400">
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-2 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full mt-2 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-400">
                YOUR MESSAGE
              </label>
              <textarea
                rows="5"
                placeholder="What's on your mind?"
                className="w-full mt-2 p-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded-xl text-white font-semibold hover:bg-blue-700 transition"
            >
              Send Message 
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;