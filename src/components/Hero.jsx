import { HERO_CONTENT } from '../constants'
// import { animate, scroll  } from "motion";
import {motion} from "framer-motion";

const container = (delay)=>({
hidden : {x: -100, opacity:0}, 
visible :{
    x:0,
    opacity:1,
    transition:{duriation:0.5, delay:delay},    
},
})

const Hero = () => {
  return (
    
    <div className='border-b flex justify-center items-center relative container   w-full border-neutral-900 pb-4 lg:mb35'>
      
        <div className='flex flex-wrap '>
            <div className='w-full '>
            <div className='flex flex-col items-center lg:items-center ' >
<motion.h1
variants={container(0 )}
initial ="hidden"
animate = "visible"

className='md:pb-16 px-4 pb-8 text-gray-300 text-6xl navClass md:text-6xl font-medium tracking-tight lg:mt-10 lg:text-8xl text-center '>Chandan Mehto</motion.h1>
<motion.span
variants={container(0.5 )}
initial ="hidden"
animate = "visible"
 className='bg-gradient-to-r from-gray-100 via-slate-500 to-gray-600 bg-clip-text text-center px-4 text-5xl tracking-tight text-transparent'>
Full Stack Developer</motion.span>
<motion.p 
variants={container(1)}
initial ="hidden"
animate = "visible"
className='my-2 text-white  max-w-[768px] md:py-6 py-3 px-3 text-base md:text-2xl text-center font-light  '>{HERO_CONTENT}</motion.p>
            </div>

            </div>

        </div>

    </div>
  )
}

export default Hero