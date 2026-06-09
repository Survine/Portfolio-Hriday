import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaPython, FaReact, FaEthereum, FaDocker } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTensorflow, SiFastapi, SiMysql, SiOpencv, SiSolidity } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Frontend",
    items: [
      { icon: FaReact, name: "React", color: "text-cyan-400" },
      { icon: TbBrandNextjs, name: "Next.js", color: "text-white" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
      { icon: FaPython, name: "Python", color: "text-yellow-400" },
      { icon: SiFastapi, name: "FastAPI", color: "text-teal-400" },
    ],
  },
  {
    title: "Database",
    items: [
      { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
      { icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-sky-600" },
      { icon: SiMysql, name: "MySQL", color: "text-blue-400" },
    ],
  },
  {
    title: "AI / ML & Other",
    items: [
      { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-400" },
      { icon: SiOpencv, name: "OpenCV", color: "text-green-300" },
      { icon: SiSolidity, name: "Solidity", color: "text-gray-300" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Technologies = () => {
  return (
    <div id="tech" className="pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Technologies
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {techCategories.map((category, catIdx) => (
          <div key={catIdx}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-6 text-center"
            >
              {category.title}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {category.items.map((tech, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="group relative flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-white/10 transition-all duration-300 cursor-default min-w-[100px]"
                >
                  <tech.icon className={`text-5xl ${tech.color} transition-all duration-300`} />
                  <span className="text-xs font-medium text-stone-400 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;