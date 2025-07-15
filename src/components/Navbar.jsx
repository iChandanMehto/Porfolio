import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { RxHamburgerMenu } from "react-icons/rx";
import TextSwitcher from '../ui/TextSwitcher';
import { LuHandshake } from "react-icons/lu";

import { SiGmail } from "react-icons/si";
const socials = [
  {
    name: 'Github',
    icon: <FaGithub className="text-xl md:text-2xl" />,
    url: 'https://github.com/iChandanMehto',
  },
  {
    name: 'Leetcode',
    icon: <SiLeetcode className="text-xl md:text-2xl" />,
    url: 'https://leetcode.com/u/mehtochandan',
  },
  {
    name: 'Linkedin',
    icon: <FaLinkedin className="text-xl md:text-2xl" />,
    url: 'https://www.linkedin.com/in/chandanmehto',
  },
  {
    name: 'X',
    icon: <FaXTwitter className="text-xl md:text-2xl" />,
    url: 'https://x.com/ichandanmehto',
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (    <nav
      className={`
         sm:block fixed top-0 left-0 w-full z-50 transition-all duration-200
        ${scrolled
          ? 'md:bg-black/80 md:backdrop-blur-lg shadow-xl bg-neutral-950'
          : 'md:bg-black/60 md:backdrop-blur-md bg-neutral-950'}
      `}
      style={{
        borderBottom: ' 1.5px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2 md:py-3">
        {/* Name & Status */}
        <div className="flex items-center gap-2 sm:gap-4 select-none">
          <span className=" hidden sm:block text-lg sm:text-xl font-medium tracking-widest md:flex md:flex-row gap-3 text-slate-400 truncate">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-locate-fixed-icon lucide-locate-fixed"><line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/></svg>

            
<p className='text-sm  hidden sm:block text-white'>DELHI, INDIA</p>
          </span>
        {/* <TextSwitcher /> */}
          <span className="hidden sm:flex px-3 py-2 border  border-slate-800 rounded-md bg-white/10 text-gray-200 text-sm items-center gap-2">
         <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_2px_rgba(74,222,128,0.6)] hover:bg-emerald-400 hover:shadow-[0_0_12px_3px_rgba(52,211,153,0.7)] transition-all duration-300" />
            <span className="font-medium">Actively seeking developer opportunities </span>
          </span>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex gap-4 items-center">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group px-3 py-1.5 rounded-md
                transition-all duration-150 hover:bg-white/10"
            >
              <span className="mr-2 text-gray-300 group-hover:text-white transition">{social.icon}</span>
              <span className="text-base font-medium text-gray-100 group-hover:text-white transition">
                {social.name}
              </span>
              <MdArrowOutward className="ml-1 text-base text-gray-400 group-hover:text-white transition" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-300 transform transition-transform duration-300 ease-in-out md:bg-black/60 backdrop-blur-md "
        >
          {isMobileMenuOpen ? (
            <RiCloseLine className="text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </button>
      </div>      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-0 top-[57px]  transform transition-transform duration-300 ease-in-out md:bg-black/60 backdrop-blur-md 
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col p-6 space-y-6">
          {/* Mobile Status Badge */}
          <div className="flex items-center  text-center justify-center  w-auto  py-3 rounded-lg bg-black shadow-md border-slate-900 border  text-slate-400 leading-normal font-light text-base gap-3">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_2px_rgba(74,222,128,0.6)] hover:bg-emerald-400 hover:shadow-[0_0_12px_3px_rgba(52,211,153,0.7)] transition-all duration-300 " />
            <span className="font-medium">Currently available</span>
            < LuHandshake
            className='text-lg text-gray-300'
            />
          </div>

          {/* Mobile Social Links */}
          <div className="grid grid-cols-2 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-black shadow-md border border-slate-900 hover:bg-white/10 transition-all duration-150"
              >
                <span className="text-gray-300">{social.icon}</span>
                <span className="text-base text-slate-400 leading-normal font-light">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;