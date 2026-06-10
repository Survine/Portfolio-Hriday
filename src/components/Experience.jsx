import { EXPERIENCES } from "../constants/experience";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const accentColors = ["#a78bfa", "#34d399", "#f472b6", "#60a5fa"];

const Experience = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="experience" className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
          Where I've Worked
        </p>
        <h2 className="text-4xl font-bold text-white">
          Experience
        </h2>
      </motion.div>

      {/* Navigation arrows */}
      <div className="max-w-6xl mx-auto relative">
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 backdrop-blur-sm hidden md:flex"
          aria-label="Scroll left"
        >
          <FaChevronLeft className="text-sm" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 backdrop-blur-sm hidden md:flex"
          aria-label="Scroll right"
        >
          <FaChevronRight className="text-sm" />
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {EXPERIENCES.map((exp, index) => {
            const accent = accentColors[index % accentColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="snap-start shrink-0 w-[340px] md:w-[360px]"
              >
                <div className="group relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-sm overflow-hidden">
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                    }}
                  />

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${accent}15`, border: `1px solid ${accent}30` }}
                    >
                      <FaBriefcase style={{ color: accent }} className="text-sm" />
                    </div>
                    <div className="min-w-0">
                      <span
                        className="inline-block mb-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${accent}12`,
                          border: `1px solid ${accent}25`,
                          color: accent,
                        }}
                      >
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-violet-200 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p
                        className="text-sm font-medium mt-0.5 opacity-80"
                        style={{ color: accent }}
                      >
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-stone-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 text-xs font-medium text-stone-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {EXPERIENCES.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/20"
            />
          ))}
        </div>

        {/* Horizontal timeline line under cards */}
        <div className="hidden md:block mt-8 relative max-w-3xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          <div className="flex justify-between px-8 -mt-2">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div className="w-3.5 h-3.5 rounded-full bg-violet-500/20 border-2 border-violet-500/50" />
                <span className="text-xs text-stone-500 font-medium mt-1">
                  {exp.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Experience;
