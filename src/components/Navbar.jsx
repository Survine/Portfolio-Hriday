import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import logo from '../assets/hblogo.png'
import { FaXTwitter } from 'react-icons/fa6'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} width={70} height={40} alt='logo' />
                </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/hriday-bardhan-53a114264/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'>
                    <FaLinkedin />
                </a>
                <a href="https://www.linkedin.com/in/hriday-bardhan-53a114264/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Github'>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/hriday-bardhan-53a114264/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram'>
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/hriday-bardhan-53a114264/"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='XTwitter'>
                    <FaXTwitter/>
                </a>
            </div>
        </nav>
    )
}
export default Navbar