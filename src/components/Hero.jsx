import profilePic from "../assets/hbprofilepic.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="mt-30 pb-8 lg:mb-36 lg:ml-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Profile Image */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex justify-center lg:p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={profilePic}
              alt="Hriday Bardhan"
              width={500}
              height={500}
              className="border border-stone-900 rounded-3xl shadow-2xl shadow-violet-500/10"
            />
          </motion.div>
        </div>

        {/* Hero Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-20">
            {/* Domain Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium tracking-wide"
            >
              hridaybardhan.dev
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gradient-to-r from-stone-100 via-violet-300 to-violet-600 bg-clip-text text-transparent pb-2 text-4xl tracking-tighter lg:text-7xl font-bold"
            >
              Hriday Bardhan
            </motion.h1>

            {/* Role */}
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="bg-gradient-to-r from-stone-300 to-teal-500 bg-clip-text text-3xl tracking-tight text-transparent font-semibold"
            >
              Full Stack Developer
            </motion.span>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="my-2 max-w-lg py-6 text-lg leading-relaxed tracking-tight text-stone-400"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex gap-4 mt-2"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("resume")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 text-sm font-semibold text-white/80 border border-white/20 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;