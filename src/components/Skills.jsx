import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Java",
    "C++",
    "MySQL",
    "GitHub",
  ];

  // Animation for container (stagger effect)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation for each skill
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        {/* Skills Container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1 }}
              className="bg-[#0f172a] border border-gray-700 rounded-xl p-6 text-center
              hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20
              transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {skill}
              </h3>
            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default Skills;