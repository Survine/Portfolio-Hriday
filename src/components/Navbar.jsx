
import logo from '../assets/hblogo.png'

import { navItems } from '../constants'

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} width={70} height={40} alt='logo' />
                </a>
            </div>
            <div>
                <ul className='hidden lg:flex space-x-4 ml-14 tracking-tighter'>
                    {navItems.map((item, index) => (
                        <li key={index} >
                            <button onClick={() => scrollToSection(item.href)} className="cursor-pointer font-semibold">{item.label}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar