import { EXPERIENCES } from "../constants/experience";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent" />

        {EXPERIENCES.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-12 flex flex-col md:flex-row ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-violet-500/20 border-2 border-violet-500/40 flex items-center justify-center backdrop-blur-sm">
                  <FaBriefcase className="text-violet-400 text-sm" />
                </div>
              </div>

              {/* Card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:pr-8" : "md:pl-8 md:ml-auto"
                }`}
              >
                <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-white/[0.08] transition-all duration-500 backdrop-blur-sm">
                  {/* Period badge */}
                  <span className="inline-block mb-3 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
                    {exp.period}
                  </span>

                  <h3 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-violet-400/80 font-medium mt-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-stone-400 leading-relaxed mt-3">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-stone-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
