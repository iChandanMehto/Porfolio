
import { FiGithub } from 'react-icons/fi'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiPostman, SiTypescript } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import { BiLogoPostgresql } from 'react-icons/bi'


const BackEndProject = () => {
  return (
    <div>
      <div className='m-1 p-1 md:p-3 w-full flex md:justify-start justify-center text-center align-middle'>
        <h2 className='bg-gradient-to-r from-gray-100 via-slate-500 to-gray-600 bg-clip-text text-center m-3 text-5xl tracking-tight text-transparent p-3'>
          BackEnd Projects
        </h2>
      </div>
      {/* ==================== PROJECT SECTION START ==================== */}
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-3 md:gap-7 px-4">
        <div className="cursor-pointer md:h-auto group relative flex flex-col my-3 justify-between md:my-2 bg-black shadow-sm border border-slate-900 rounded-2xl w-full md:w-96 hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-56  border  leading-normal border-slate-800 text-6xl gap-3 flex flex-row items-center justify-center m-3 overflow-hidden  rounded-xl">
<FaNodeJs 
className='hover:text-[#339933] transition-colors duration-300'
/>
<SiExpress
className='hover:text-slate-100 transition-colors duration-300'
/>
<SiMongodb
className='hover:text-[#47A248] transition-colors duration-300'
/>
<SiPostman
className='hover:text-[#FF6C37] transition-colors duration-300'
/>
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-200 text-xl font-semibold">
          MusicPlayer Backend
            </h6>
            <p className="text-slate-400 leading-normal font-light">
              🎵 Music Player  backend service built with Node.js and Express that Manage 
              Features include user authentication, playlist management, and secure data handling.
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2 flex flex-row gap-3 items-center">
            <a
              href="https://github.com/iChandanMehto/MusicPlayer_Backend"
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

        <div className="cursor-pointer group relative flex flex-col my-6 bg-black shadow-sm md:h-auto justify-between border border-slate-900 rounded-2xl w-full md:w-96 hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-56  border  leading-normal border-slate-800 text-6xl gap-3 flex flex-row items-center justify-center m-3 overflow-hidden  rounded-xl">
    <SiTypescript className="hover:text-[#3178C6] transition-colors duration-300 text-6xl" />
  <RiNextjsFill className="hover:text-[#ffff] transition-colors duration-300 text-7xl" />
  <BiLogoPostgresql className="hover:text-[#336791] transition-colors duration-300 text-7xl" />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-200 text-xl font-semibold">
           ShakuraAI 
            </h6>
            <p className="text-slate-400 leading-normal font-light">
   Backend Authentication System (WIP)
A backend project in progress, building using Next.js 15 (App Router) and TypeScript, with PostgreSQL as the primary database.

            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2 flex flex-row gap-3 items-center">
            <a
              href="https://github.com/iChandanMehto/ShakuraAI"
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
      </div>
      {/* ==================== PROJECT SECTION END ==================== */}
    </div>
  )
}

export default BackEndProject