function Projects() {

  const projects = [
    {
      title: "Student Support Ethiopia",
      description:
        "A platform designed to help students access educational support and resources.",
      github: "https://github.com/teferahawi8-ops/student-support",
      demo: "#",
      image: "/project1.png"
    },

    {
      title: "Mentorship Management System",
      description:
        "A platform that connects mentors and students for collaboration and communication.",
      github: "https://github.com/teferahawi8-ops/mentorship-system",
      demo: "#",
      image: "/project2.png"
    },
  ]


  return (
    <section id="projects" className="py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        {/* Projects List */}
        <div className="space-y-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center bg-[#0f172a] p-8 rounded-3xl shadow-xl hover:shadow-blue-500/20 transition"
            >

              {/* LEFT: IMAGE */}
              <div className="flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                />
              </div>

              {/* RIGHT: CONTENT */}
              <div>

                <h3 className="text-3xl font-bold mb-4 text-blue-500">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 px-6 py-2 rounded-lg text-white hover:bg-blue-700 transition"
                  >
                    View Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 px-6 py-2 rounded-lg hover:border-white transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects;