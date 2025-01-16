import HTML from '../assets/imagesTwo/HTML.svg'
import newcss from '../assets/imagesTwo/newcss.svg'
import javascript from '../assets/imagesTwo/javascript.svg'
import codedocs from  '../assets/imagesTwo/codedocs.png'
// import reactJs from '../assets/imagesTwo/reactJs.svg'
import reactJs from '../assets/imagesTwo/reactJs.svg'
import materialui from '../assets/imagesTwo/materialui.svg'
import { motion } from 'motion/react'
import git from '../assets/imagesTwo/git.svg'
import cpp from '../assets/imagesTwo/cpp.svg'
import github from '../assets/imagesTwo/github.svg'
import tailwind from '../assets/imagesTwo/tailwind.svg'
import express from '../assets/imagesTwo/express.svg'
import mongodb from '../assets/imagesTwo/mongodb.svg'
import nodejs from '../assets/imagesTwo/nodejs.svg'
import vsCode from '../assets/imagesTwo/vsCode.svg';
import vercel from '../assets/imagesTwo/Vercel.svg';
import npm  from '../assets/imagesTwo/NPM.svg'
// import redux from '../assets/imagesTwo/Redux.svg'
import postman from '../assets/imagesTwo/postman.svg';
import vite from '../assets/imagesTwo/vite.svg';
import nexjs from '../assets/imagesTwo/Nextjs.svg'
import musciweb from '../assets/imagesTwo/Musicweb.png'
import currconv from '../assets/imagesTwo/currconv.png'
import cloneProject from '../assets/imagesTwo/Project_Clone.png'
// import mongodb from '../assets/imagesTwo/mongodb.svg'



const Section = () => {
  return (
    <>
  <section className="w-full">
  <div className='  m-1 md:m-2 p-1 md:p-3 w-full flex justify-start text-center  align-middle  '>
  <h2  className='bg-gradient-to-r from-gray-100 via-slate-500 to-gray-600 bg-clip-text text-center  m-3 text-5xl tracking-tight text-transparent p-3' >
            Tools & Tech Stack
          </h2>
      </div>
  <div className=" flex  flex-row justify-center items-center md:p-10 w-full   font-style">

      <div className="grid grid-cols-1 md:grid-cols-1  w-full  items-center justify-centers shadow-md rounded-3xl">
      <div className="relative  flex flex-wrap rounded-3xl border-[1px] border-slate-900  md::h-h-fit  top-0 z-[-2]  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="flex flex-wrap  justify-center text-center align-middle  border-slate-900 rounded-3xl  text-white text-xl  shadow-lg  p-10    md:gap-60 items-center ">
        <div className=" grid grid-cols-3  gap-8 md:flex md:flex-wrap md:items-center md:justify-center md:gap-14 md:m-3 md:ml-4 mt-5">
        <motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 3, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={HTML} height={72} width={92} alt="HTML Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">HTML</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 2, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={newcss} height={72} width={92} alt="CSS Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">CSS</p>
</motion.div>

<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 3, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={tailwind} height={72} width={92} alt="Tailwind CSS Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">Tailwind CSS</p>
</motion.div>
<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 2, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={javascript} height={72} width={92} alt="JavaScript Logo" />
  <p className="pt-2 text-slate-200">Javascript</p>
</motion.div>
<motion.div
      className="flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0], // Oscillates between 0, -10, and back to 0
      }}
      transition={{
        duration: 3, // Time for one full oscillation
        repeat: Infinity, // Repeat animation infinitely
        repeatType: "loop", // Continuously loop the animation
      }}
    >
      <img src={mongodb} height={72} width={92} alt="MongoDB Logo" />
      <p className="pt-2 text-slate-200 text-lg md:text-xl">MongoDB</p>
    </motion.div>
    

<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 2, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img
    className="border rounded-full  bg-white md:h-24 h-15 w-15 p-2 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
    src={express}
    height={72}
    width={92}
    alt="ExpressJs Logo"
  />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">ExpressJs</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 3, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={reactJs} height={72} width={92} alt="ReactJs Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">ReactJs</p>
</motion.div>

<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 2, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={nodejs} height={72} width={92} alt="Node.js Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">NodeJs</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 3, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img
    className="border rounded-full w-15 h-15 md:w-full bg-white md:h-24 md:p-[2px] p-[1px]"
    src={nexjs}
    height={72}
    width={92}
    alt="Next.js Logo"
  />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">NextJs</p>
</motion.div>

<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -12, 0], // Moves up and down
  }}
  transition={{
    duration: 2, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={postman} height={72} width={92} alt="Postman Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">Postman</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 3, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={cpp} height={72} width={92} alt="C++ Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">C++</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 2, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={git} height={72} width={92} alt="Git Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">Git</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 3, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={github} height={72} width={92} alt="GitHub Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">GitHub</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 2, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={npm} height={72} width={92} alt="NPM Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">NPM</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 3, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={vite} height={72} width={92} alt="Vite Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">Vite</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 2, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={vercel} height={72} width={92} alt="Vercel Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">Vercel</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 3, // Duration of one oscillation
    repeat: Infinity, // Infinite repetition
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={vsCode} height={72} width={92} alt="VSCode Logo" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">VSCode</p>
</motion.div>


<motion.div
  className="flex flex-col items-center justify-center"
  initial={{ y: 0 }}
  animate={{
    y: [0, -10, 0], // Moves up and down
  }}
  transition={{
    duration: 2, // Duration of one full oscillation
    repeat: Infinity, // Repeats infinitely
    repeatType: "loop", // Smooth looping
  }}
>
  <img src={materialui} height={72} width={92} alt="Material UI" />
  <p className="pt-2 text-slate-200 text-lg md:text-xl">Material UI</p>
</motion.div>
  </div>
        </div>
        </div>
      </div>
    </div>
  <div className='  m-1  p-1 md:p-3 w-full flex md:justify-start justify-center text-center align-middle  '>
  <h2  className='bg-gradient-to-r from-gray-100 via-slate-500 to-gray-600 bg-clip-text text-center  m-3 text-5xl tracking-tight text-transparent p-3' >
           Projects
          </h2>
      </div>
    <div className="flex  flex-col  md:flex-row lg:flex-row items-center justify-center  gap-3 md:gap-7 px-4" >
    <div className="cursor-pointer md:h-[62vh] group relative flex flex-col my-3  md:my-6 bg-black shadow-sm border border-slate-900 rounded-2xl w-full md:w-96 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56 m-3 overflow-hidden text-white rounded-xl ">
        <img
          className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 h-full w-fit"
          
          src={musciweb}
          alt="investment-seed-round"
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-200 text-xl font-semibold">
          Bittsmax Music Website
        </h6>
        <p className="text-slate-400 leading-normal font-light">
        🎵 Music Player fullstack Web Application  Not completed yet, Upcoming Featureplaylist management, advanced controls, and theme switching.
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
           <a href="https://bitts-music-player.vercel.app/">Live</a>
        </button>
      </div>
    </div>


    <div className="cursor-pointer group relative flex flex-col my-6  bg-black shadow-sm md:h-[62vh] border border-slate-900 rounded-2xl w-full md:w-96 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56 m-3 overflow-hidden text-white rounded-xl">
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
      <div className="px-4 pb-4 pt-0 mt-2">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
<a href="https://currency-converter-omega-seven.vercel.app/">Live</a>
        </button>
      </div>
    </div>


    <div className="cursor-pointer group relative flex flex-col my-6  bg-black shadow-sm md:h-[62vh] border border-slate-900 rounded-2xl w-full md:w-96 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56 m-3 overflow-hidden text-white rounded-xl">
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
      <div className="px-4 pb-4 pt-0 mt-2">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
<a href="https://currency-converter-omega-seven.vercel.app/">Live</a>
        </button>
      </div>
    </div>


    <div className="cursor-pointer group relative flex flex-col my-6  bg-black shadow-sm md:h-[62vh] border border-slate-900 rounded-2xl w-full md:w-96 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56 m-3 overflow-hidden text-white rounded-xl">
        <img
          className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 w-full h-full "
          src={codedocs}
          alt="investment-seed-round"
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-200 text-xl font-semibold">
        CodeDocs
        </h6>
        <p className="text-slate-400 leading-normal font-light">
        Educational website that provides tutorials, references, and for web development and programming languages.It covers topics like HTML, CSS, JavaScript, and more.
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
       <a href="https://codedocs-theta.vercel.app/">Live</a>
        </button>
      </div>
    </div>

    
    </div>


  </section>
    </>
  )
}

export default Section
