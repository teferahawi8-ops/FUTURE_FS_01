import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-5 bg-gradient-to-r from-black via-[#0f172a] to-black"
    >
      {/* TOP TEXT */}
      <motion.p
        className="text-blue-500 text-xl mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome To My Portfolio
      </motion.p>

      {/* NAME */}
      <motion.h1
        className="text-6xl md:text-7xl font-bold mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Hawi Tefera
      </motion.h1>

      {/* TYPEWRITER */}
      <h2 className="text-3xl md:text-4xl text-blue-400 mb-8">
        <Typewriter
          words={[
            "Full Stack Developer",
            "React Developer",
            "Computer Science Student",
            "Frontend Engineer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      {/* DESCRIPTION */}
      <motion.p
        className="max-w-3xl text-gray-400 text-lg leading-8 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Passionate about building modern responsive websites,
        full-stack applications, and solving real-world problems
        using technology and creative development solutions.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        className="flex flex-wrap gap-5 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <a
          href="#projects"
          className="bg-blue-500 px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition duration-300"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-blue-500 px-8 py-4 rounded-xl hover:bg-blue-500 hover:shadow-lg transition duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;