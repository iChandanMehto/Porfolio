import musciweb from '../assets/imagesTwo/Musicweb.png'
import currconv from '../assets/imagesTwo/currconv.png'
import cloneProject from '../assets/imagesTwo/Project_Clone.png';
import codedocs from  '../assets/imagesTwo/codedocs.png'
import { FiGithub } from 'react-icons/fi';
import { FaReact } from "react-icons/fa";
import { FiLogOut } from 'react-icons/fi';
import { SiJavascript } from "react-icons/si";


const Projects = () => {
  return (
    <div>
          <div className='  m-1  p-1 md:p-3 w-full flex md:justify-start justify-center text-center align-middle  '>
  <h2  className='bg-gradient-to-r from-gray-100 via-slate-500 to-gray-600 bg-clip-text text-center  m-3 text-5xl tracking-tight text-transparent p-3' >
         React Projects
          </h2>
      </div>
          {/* ==================== PROJECT SECTION START ==================== */}
    <div className="flex  flex-col  md:flex-row lg:flex-row items-center justify-center  gap-3 md:gap-7 px-4" >

    <div className="cursor-pointer md:h-auto group relative flex flex-col my-3 justify-between  md:my-2 bg-black shadow-sm border border-slate-900 rounded-2xl w-full md:w-96 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56  border  leading-normal border-slate-800 text-6xl gap-3 flex flex-row items-center justify-center m-3 overflow-hidden  rounded-xl"> 
        <img
          className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 h-full w-fit"
          
          src={musciweb}
          alt="investment-seed-round"
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-200 text-xl font-semibold">
          Bittsmax Music Player - Front-End
        </h6>
        <p className="text-slate-400 leading-normal font-light">
        🎵 Music Player fullstack Web Application  Not completed yet, Upcoming Featureplaylist management, advanced controls, and theme switching.
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2 flex flex-row gap-3 items-center">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
           <a href="https://bitts-music-player.vercel.app/">Live</a>
           {/* <FaCode/> */}
        </button>
       <FiGithub 
                className='text-xl'
                />
      </div>
    </div>
   
 


    <div className="cursor-pointer group relative flex flex-col my-6  bg-black shadow-sm md:h-auto justify-between border border-slate-900 rounded-2xl w-full md:w-96 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56  border  leading-normal border-slate-800 text-6xl gap-3 flex flex-row items-center justify-center m-3 overflow-hidden  rounded-xl">
        <img
          className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 w-full h-full "
          src={currconv}
          alt="investment-seed-round"
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-200 text-xl font-semibold">
          Currency Converter
        </h6>
        <p className="text-slate-400 leading-normal font-light">
        A Currency Converter Web App. convert values between currencies with real-time exchange rates from reliable APIs, supporting multiple global currencies.
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2 flex flex-row gap-3 items-center">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
<a href="https://currency-converter-omega-seven.vercel.app/">Live</a>
        </button>
   <FiGithub 
            className='text-xl'
            />
      </div>
    </div>

   

   <div className="cursor-pointer md:h-auto group relative flex flex-col my-3 justify-between md:my-2 bg-black shadow-sm border border-slate-900 rounded-2xl w-full md:w-96 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-56  border  leading-normal border-slate-800 text-6xl gap-3 flex flex-row items-center justify-center m-3 overflow-hidden  rounded-xl">
        <img
          className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 w-full h-full "
                src={cloneProject}
          alt="investment-seed-round"
        />

            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-200 text-xl font-semibold">
        AI VoiceMaker Clone
              </h6>
              <p className="text-slate-400 leading-normal font-light">
              Half clone of AI VoiceMaker. The purpose of making it is to improve my front-end skills and become familiar with the Next.js framework, using Shadcn UI library.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2 flex flex-row gap-3 items-center justify-start">
              <a
                href="https://assignment-clone-sigma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                    Live
              </a>
               <FiGithub 
            className='text-xl'
            />
            </div>
          </div>




   <div className="cursor-pointer md:h-auto group relative flex flex-col my-3 justify-between md:my-2 bg-black shadow-sm border border-slate-900 rounded-2xl w-full md:w-96 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-56  border  leading-normal border-slate-800 text-6xl gap-3 flex flex-row items-center justify-center m-3 overflow-hidden  rounded-xl">
<SiJavascript className=" hover:text-yellow-400 transition-colors duration-300" />

            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-200 text-xl font-semibold">
            Javascript Small Projects
              </h6>
              <p className="text-slate-400 leading-normal font-light">
        A GitHub repo where I built small JavaScript projects to improve my fundamentals and gain expertise in the language.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2 flex flex-row gap-3 items-center justify-start">
              <a
                href="https://github.com/iChandanMehto/My_Javascript_Small_Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                            <FiLogOut
              className='text-xl right-0'
              />
              </a>
            </div>
          </div>
    
    </div>
  {/* ==================== PROJECT SECTION END ==================== */}
    </div>
  )
}

export default Projects