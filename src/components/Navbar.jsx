import logo from "../assets/hbprofilepic.png";
import { navItems } from "../constants";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-black/60 backdrop-blur-xl shadow-lg shadow-black/20"
          : "py-4 bg-transparent backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo with Name */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <a href="/" aria-label="Home" className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className={`h-9 w-9 rounded-full object-cover border-2 transition-all duration-300 ${
                  scrolled ? "border-violet-400/40" : "border-white/30"
                }`}
              />
              <span className="ml-3 text-xl font-semibold text-white hidden sm:block font-['Outfit']">
                Hriday
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div
            className={`hidden md:flex items-center space-x-1 rounded-full px-2 py-1 transition-all duration-300 ${
              scrolled ? "bg-white/10" : "bg-white/5"
            }`}
          >
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Icons + Contact + Hamburger */}
          <div className="flex items-center space-x-2">
            <div
              className={`hidden sm:flex items-center space-x-1 rounded-full px-2 py-1 transition-all duration-300 ${
                scrolled ? "bg-white/10" : "bg-white/5"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/hriday-bardhan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Survine"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/survine_og/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/Survine_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="XTwitter"
                className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>

            {/* Contact Button (desktop) */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:block ml-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md shadow-indigo-500/20"
            >
              Contact Me
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 bg-black/80 backdrop-blur-xl border-t border-white/10 space-y-1">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mt-2"
          >
            Contact Me
          </button>

          {/* Mobile Social Icons */}
          <div className="flex items-center justify-center space-x-4 pt-3 border-t border-white/10 mt-3">
            <a href="https://www.linkedin.com/in/hriday-bardhan/" target="_blank" rel="noopener noreferrer" className="p-2 text-white/70 hover:text-white"><FaLinkedin className="h-5 w-5" /></a>
            <a href="https://github.com/Survine" target="_blank" rel="noopener noreferrer" className="p-2 text-white/70 hover:text-white"><FaGithub className="h-5 w-5" /></a>
            <a href="https://www.instagram.com/survine_og/" target="_blank" rel="noopener noreferrer" className="p-2 text-white/70 hover:text-white"><FaInstagram className="h-5 w-5" /></a>
            <a href="https://x.com/Survine_" target="_blank" rel="noopener noreferrer" className="p-2 text-white/70 hover:text-white"><FaXTwitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
