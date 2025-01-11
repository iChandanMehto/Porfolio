
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6"; 



const Navbar = () => {
  return (
  <nav className='md:mb-5  mb-3 flex items-center item-center justify-between  py-4 md:py-6'>
    <div className='flex flex-shrink-0 items-start'>
       {/* <img className='mx-8 w-14' src={logo} alt="logo" /> */}
    </div>
    <div className='md:m-8 mx-3 my-6 flex items-center justify-center  gap-4 text-2xl '>
     
     <a href="https://github.com/Iamchandanmehto"><FaGithub/></a>

<a href="https://linkedin.com/in/chandanmehto"><FaLinkedin/></a>
<FaSquareXTwitter/>
    </div>
     
  </nav>
  )
}

export default Navbar