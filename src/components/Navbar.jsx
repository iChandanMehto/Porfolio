import { useState, useEffect } from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6"; 
// import { FaDiscord } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full left-0 md:z-50  z-10 md:px-4 px-2.5  md:py-3 py-1 transition-all duration-200 ${
      scrolled
        ? 'bg-black/25 backdrop-blur-md '
        : 'bg-transparent' 
    }`}>
  <div className='md:m-3   my-6 flex items-center justify-center gap-4 text-xl'>
        <a href="https://github.com/Iamchandanmehto" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/chandanmehto" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/ichandanmehto" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        {/* <a href="https://x.com/ichandanmehto" target="_blank" rel="noopener noreferrer">
        <FaDiscord />
        </a> */}
        <a href="https://leetcode.com/u/mehtochandan" target="_blank" rel="noopener noreferrer">
        <SiLeetcode />
        </a>
      </div>
    
      <div>

      </div>
    </nav>
  );
};

export default Navbar;
