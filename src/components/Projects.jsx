import { PROJECTS } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section id="projects" className="pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl font-bold text-white"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-violet-500/10 hover:border-violet-500/30 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay Links */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.githubLink && project.githubLink !== "" && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-violet-500/80 transition-all duration-200"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                )}
                {project.liveLink && project.liveLink !== "" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/60 backdrop-blur-sm rounded-full text-white hover:bg-teal-500/80 transition-all duration-200"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <FaExternalLinkAlt className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h3>
                {/* Inline links for accessibility */}
                <div className="flex gap-2">
                  {project.githubLink && project.githubLink !== "" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== "" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-teal-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-stone-400 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-violet-500/10 border border-violet-500/20 px-3 py-1 text-xs font-medium text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
