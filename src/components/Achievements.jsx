import { ACHIEVEMENTS, CERTIFICATIONS } from "../constants/achievements";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaStar, FaCode, FaCertificate } from "react-icons/fa";

const iconMap = {
  trophy: FaTrophy,
  medal: FaMedal,
  star: FaStar,
  code: FaCode,
};

const colorMap = {
  trophy: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  medal: "text-gray-300 bg-gray-400/10 border-gray-400/20",
  star: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  code: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Achievements = () => {
  return (
    <section id="achievements" className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold text-white">
          Achievements &{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
      </motion.div>

      {/* Achievements Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-12"
      >
        {ACHIEVEMENTS.map((item, index) => {
          const Icon = iconMap[item.icon] || FaStar;
          const colors = colorMap[item.icon] || colorMap.star;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm text-center"
            >
              <div
                className={`inline-flex p-3 rounded-full border ${colors} mb-4`}
              >
                <Icon className="text-xl" />
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors duration-300 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-stone-500">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <h3 className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-5 text-center">
          Certifications
        </h3>
        <div className="space-y-3">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/20 transition-all duration-300"
            >
              <div className="p-2.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                <FaCertificate className="text-violet-400 text-sm" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{cert.title}</p>
                <p className="text-xs text-stone-500">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
