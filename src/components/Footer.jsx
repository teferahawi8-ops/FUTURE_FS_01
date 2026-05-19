import { FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-[#020617] text-white py-12 px-6 border-t border-gray-800">

      <div className="max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT: NAME + DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold">
              Hawi<span className="text-blue-500">.</span>
            </h2>

            <p className="text-gray-400 mt-2 max-w-md">
              3rd-year Computer Science student & Full Stack Developer passionate
              about building scalable, user-friendly, and impactful digital solutions.
            </p>
          </motion.div>

          {/* RIGHT: SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-6"
          >

            {/* GitHub */}
            <a
              href="https://github.com/teferahawi8-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-blue-500 transition"
            >
              <FaGithub size={20} />
            </a>

            {/* Email */}
            <a
              href="mailto:teferahawi8@gmail.com"
              className="bg-gray-800 p-4 rounded-full hover:bg-blue-500 transition"
            >
              <FaEnvelope size={20} />
            </a>

          </motion.div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">

          <p>
            © 2026 Hawi Tefera Deti. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with <FaHeart className="text-blue-500" /> in Ethiopia
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;