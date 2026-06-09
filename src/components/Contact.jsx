import { CONTACT } from "../constants";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="border-t border-white/10 pb-20 pt-16"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-2">
        Get in Touch
      </h2>
      <p className="text-center text-stone-500 mb-10">
        Have a project in mind? Let&apos;s connect.
      </p>

      <div className="max-w-lg mx-auto space-y-4">
        {/* Address */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/20 transition-all duration-300"
        >
          <div className="p-3 rounded-full bg-violet-500/10">
            <FaMapMarkerAlt className="text-violet-400" />
          </div>
          <span className="text-stone-400 text-sm">{CONTACT.address}</span>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/20 transition-all duration-300"
        >
          <div className="p-3 rounded-full bg-violet-500/10">
            <FaPhoneAlt className="text-violet-400" />
          </div>
          <a href={`tel:${CONTACT.phoneNo}`} className="text-stone-400 text-sm hover:text-white transition-colors">
            {CONTACT.phoneNo}
          </a>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/20 transition-all duration-300"
        >
          <div className="p-3 rounded-full bg-violet-500/10">
            <FaEnvelope className="text-violet-400" />
          </div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-stone-400 text-sm hover:text-white transition-colors border-b border-transparent hover:border-violet-400"
          >
            {CONTACT.email}
          </a>
        </motion.div>
      </div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex justify-center gap-4 mt-10"
      >
        {[
          { icon: FaLinkedin, href: "https://www.linkedin.com/in/hriday-bardhan/", label: "LinkedIn" },
          { icon: FaGithub, href: "https://github.com/Survine", label: "GitHub" },
          { icon: FaInstagram, href: "https://www.instagram.com/survine_og/", label: "Instagram" },
          { icon: FaXTwitter, href: "https://x.com/Survine_", label: "X/Twitter" },
        ].map((social, idx) => (
          <motion.a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            whileHover={{ scale: 1.2, y: -3 }}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300"
          >
            <social.icon className="h-5 w-5" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;