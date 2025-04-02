import logo from '../assets/hbprofilepic.png'
import { navItems } from '../constants'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/20 backdrop-blur-xl shadow-lg' : 'py-4 bg-transparent backdrop-blur-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo with Name */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <a href="/" aria-label="Home" className="flex items-center">
              <img 
                src={logo} 
                alt='logo' 
                className={`h-9 w-9 rounded-full object-cover border-2 transition-all duration-300 ${scrolled ? 'border-white/40' : 'border-white/30'}`} 
              />
              <span className="ml-3 text-xl font-semibold text-white hidden sm:block">Hriday</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className={`hidden md:flex items-center space-x-1 rounded-full px-2 py-1 transition-all duration-300 ${scrolled ? 'bg-white/10' : 'bg-white/5'}`}>
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

          {/* Social Icons + Contact */}
          <div className="flex items-center space-x-2">
            <div className={`flex items-center space-x-1 rounded-full px-2 py-1 transition-all duration-300 ${scrolled ? 'bg-white/10' : 'bg-white/5'}`}>
              <a 
                href="https://www.linkedin.com/in/hriday-bardhan-53a114264/"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/Survine"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github'
                className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a 
                href="https://www.instagram.com/survine_og/"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
                className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a 
                href="https://x.com/Survine_"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='XTwitter'
                className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
            
            {/* Contact Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block ml-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md shadow-indigo-500/20"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar