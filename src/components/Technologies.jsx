import { motion } from "framer-motion";
import {
  SiReact,
  SiPython,
  SiFastapi,
  SiTensorflow,
  SiOpencv,
  SiSolidity,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKeras,
  SiNodedotjs,
  SiEthereum,
  SiGit,
  SiKotlin,
  SiScikitlearn,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const techCategories = [
  {
    title: "Frontend",
    color: "#61DAFB",
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    ],
  },
  {
    title: "Backend",
    color: "#00C7B7",
    techs: [
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: TbBrandCpp, color: "#00599C" },
    ],
  },
  {
    title: "AI / ML",
    color: "#FF6F00",
    techs: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    ],
  },
  {
    title: "Blockchain",
    color: "#627EEA",
    techs: [
      { name: "Solidity", icon: SiSolidity, color: "#363636" },
      { name: "Ethereum", icon: SiEthereum, color: "#627EEA" },
    ],
  },
  {
    title: "Database",
    color: "#4479A1",
    techs: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "#2496ED",
    techs: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Technologies = () => {
  return (
    <div id="tech" className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
          What I Work With
        </p>
        <h2 className="text-4xl font-bold text-white">
          Tech{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Stack
          </span>
        </h2>
        <p className="text-stone-500 mt-3 max-w-lg mx-auto text-sm">
          Technologies I use to build scalable, high-performance applications
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
      >
        {techCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-sm"
          >
            {/* Category accent glow */}
            <div
              className="absolute -top-px left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(90deg, transparent, ${category.color}60, transparent)`,
              }}
            />

            {/* Category title */}
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-5"
              style={{ color: category.color }}
            >
              {category.title}
            </h3>

            {/* Tech items */}
            <div className="flex flex-wrap gap-3">
              {category.techs.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="group/tech flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.08] transition-all duration-300 cursor-default"
                  >
                    <Icon
                      className="text-lg transition-colors duration-300 opacity-70 group-hover/tech:opacity-100"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm font-medium text-stone-400 group-hover/tech:text-stone-200 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;