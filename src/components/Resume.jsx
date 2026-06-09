import { FiDownload } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Hriday_Bardhan.pdf";
    link.download = "Hriday_Bardhan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      id="resume"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-lg border border-white/10 text-white p-10 rounded-2xl shadow-2xl shadow-violet-500/5 w-full max-w-2xl mx-auto hover:border-violet-500/20 transition-all duration-500"
    >
      <h2 className="text-4xl font-bold text-stone-50">Resume</h2>
      <p className="text-gray-400 text-center mt-3 text-lg">
        Explore my professional journey and technical expertise
      </p>
      <p className="text-gray-500 text-sm text-center mt-2">
        Click icon to preview or button to download
      </p>

      <motion.div
        className="mt-6"
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaFilePdf className="text-violet-400 text-7xl bg-white/5 backdrop-blur-lg p-4 rounded-full border border-violet-500/20 shadow-lg shadow-violet-500/10 cursor-pointer" />
      </motion.div>

      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 px-8 py-4 mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
      >
        <FiDownload className="text-xl" />
        Download Resume
      </motion.button>

      <p className="text-gray-500 text-sm mt-5">
        PDF Format | Last Updated: June 2026
      </p>
    </motion.div>
  );
};

export default Resume;
