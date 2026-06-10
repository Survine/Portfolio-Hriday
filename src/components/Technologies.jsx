import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import { motion } from "framer-motion";

// Exact tech from resume — Simple Icons slugs
// https://simpleicons.org/ for slug reference
const slugs = [
  // Languages
  "python",
  "javascript",
  "cplusplus",
  "openjdk",
  // Frontend
  "react",
  "html5",
  "css3",
  "tailwindcss",
  // Backend
  "fastapi",
  "nodedotjs",
  "express",
  // AI / ML
  "tensorflow",
  "keras",
  "opencv",
  "scikitlearn",
  // Databases
  "mysql",
  "mongodb",
  "postgresql",
  // Blockchain
  "solidity",
  "ethereum",
  // Tools
  "git",
  "github",
  "vscodium",
  "postman",
  "androidstudio",
  "kotlin",
  "docker",
  "vercel",
  "linux",
];

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    dragControl: true,
  },
};

const renderCustomIcon = (icon) => {
  return renderSimpleIcon({
    icon,
    minContrastRatio: 2,
    bgHex: "#080510",
    size: 48,
    fallbackHex: "#ffffff",
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const Technologies = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData);
  }, []);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  return (
    <div id="tech" className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
          Tech Stack
        </p>
        <h2 className="text-4xl font-bold text-white">
          My{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-stone-500 mt-3 max-w-lg mx-auto text-sm">
          Drag to interact · Hover for details
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-xl mx-auto mt-8"
      >
        {/* Glow effects */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-violet-600/8 blur-3xl" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 rounded-full bg-fuchsia-500/5 blur-2xl" />
        </div>

        {data ? (
          <Cloud {...cloudProps}>{renderedIcons}</Cloud>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <div className="w-10 h-10 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
          </div>
        )}
      </motion.div>

      {/* Skill categories legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl mx-auto"
      >
        {[
          "Python", "JavaScript", "C++", "Java", "React", "FastAPI",
          "Node.js", "TensorFlow", "OpenCV", "Solidity", "MySQL", "Git"
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-stone-400 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;