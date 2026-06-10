import { CONTACT } from "../constants";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const socials = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/hriday-bardhan/",
    label: "LinkedIn",
    color: "#0A66C2",
    handle: "@hriday-bardhan",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Survine",
    label: "GitHub",
    color: "#ffffff",
    handle: "@Survine",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/survine_og/",
    label: "Instagram",
    color: "#E4405F",
    handle: "@survine_og",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/Survine_",
    label: "X / Twitter",
    color: "#ffffff",
    handle: "@Survine_",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="pb-20 pt-16">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">
          Contact
        </p>
        <h2 className="text-4xl font-bold text-white">
          Let&apos;s Work{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Together
          </span>
        </h2>
        <p className="text-stone-500 mt-3 max-w-md mx-auto text-sm">
          Have a project in mind or just want to connect? I&apos;m always open
          to new opportunities and collaborations.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 px-4">
        {/* Left — Contact info card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-lg font-semibold text-white mb-6">
            Contact Info
          </h3>

          <div className="space-y-5">
            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center gap-4 hover:translate-x-1 transition-transform duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors duration-300">
                <FaEnvelope className="text-violet-400 text-sm" />
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                  Email
                </p>
                <p className="text-sm text-stone-300 group-hover:text-white transition-colors duration-300">
                  {CONTACT.email}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="group flex items-center gap-4 hover:translate-x-1 transition-transform duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors duration-300">
                <FaPhoneAlt className="text-emerald-400 text-sm" />
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                  Phone
                </p>
                <p className="text-sm text-stone-300 group-hover:text-white transition-colors duration-300">
                  {CONTACT.phoneNo}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-amber-400 text-sm" />
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">
                  Location
                </p>
                <p className="text-sm text-stone-300">{CONTACT.address}</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href={`mailto:${CONTACT.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg shadow-violet-500/20"
          >
            <FaPaperPlane className="text-xs" />
            Send me an Email
          </motion.a>
        </motion.div>

        {/* Right — Socials grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Find me on
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-400 backdrop-blur-sm"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${social.color}10`,
                    border: `1px solid ${social.color}25`,
                  }}
                >
                  <social.icon
                    className="text-xl transition-colors duration-300"
                    style={{ color: social.color }}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-violet-200 transition-colors duration-300">
                    {social.label}
                  </p>
                  <p className="text-xs text-stone-500 group-hover:text-stone-400 transition-colors duration-300">
                    {social.handle}
                  </p>
                </div>
                <svg
                  className="ml-auto w-4 h-4 text-stone-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            ))}
          </div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-3 px-5 py-3 rounded-xl border border-emerald-500/15 bg-emerald-500/5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <p className="text-sm text-emerald-300/80 font-medium">
              Available for internships &amp; freelance projects
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 pt-8 border-t border-white/[0.06] text-center"
      >
        <p className="text-xs text-stone-600">
          © {new Date().getFullYear()} Hriday Bardhan. Built with React &amp;
          Framer Motion.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;