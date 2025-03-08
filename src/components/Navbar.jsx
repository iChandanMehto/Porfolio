import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6"; // Corrected import

const Navbar = () => {

  return (
    <nav className='md:mb-5 right-0 mb-3 z-10 flex flex-row items-center justify-between py-4 md:py-6'>
      <div className='md:m-3 mx-3 my-6 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/Iamchandanmehto" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/chandanmehto" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/ichandanmehto" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
      {/* <hr className="border-t-2 border-slate-800 w-full " /> */}
      <div>

      </div>
    </nav>
  );
};

export default Navbar;
