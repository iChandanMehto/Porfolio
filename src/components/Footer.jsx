import { motion } from "motion/react"
import gmailicon from '../assets/imagesTwo/gmailicon.svg'
const textEffect = (delay)=>({
  hidden : {y: -50, opacity:0}, 
  visible :{
      y:0,
      opacity:1,
      transition:{duriation:0.5, delay:delay},    
  },
  })
const textEffectTwo = (delay)=>({
  hidden : {x: -50, opacity:0}, 
  visible :{
      x:0,
      opacity:1,
      transition:{duriation:0.5, delay:delay},    
  },
  })
const textEffectThree = (delay)=>({
  hidden : {x: 50, opacity:0}, 
  visible :{
      x:0,
      opacity:1,
      transition:{duriation:0.5, delay:delay},    
  },
  })
const Footer = () => {
  return (
<footer className='w-full '>
<div className='border-b  flex justify-center items-center relative my-10   border-neutral-900 md:pb-4 pb-2 lg:mb35'>  </div>
  <div className="flex flex-col items-center align-middle justify-center">

<motion.h4
className='bg-gradient-to-r from-gray-100 via-slate-500 to-gray-600 bg-clip-text text-center  text-3xl md:text-5xl tracking-tight text-transparent  md:p-3 p-2' 
variants={textEffect(1)}
initial ="hidden"
animate = "visible"
>Contact Me</motion.h4>
<div className="flex  flex-col  md:flex-row items-center justify-center align-middle">
  {/* <img className="h-5 w-5 hidden  block:sm md:h-7 md:w-7"  src={gmailicon} alt="" /> */}
  <motion.p
  className="mx-2  text-slate-400 leading-normal font-light  text-sm max-w-[768px] py-3  md:py-6 md:text-xl text-center"
  variants={textEffectTwo(1)}
  initial ="hidden"
  animate = "visible"
  >mehtochandanbusiness@gmail.com</motion.p>
<motion.p
  className="mx-2  text-slate-400 leading-normal font-light  text-sm max-w-[768px] pb-3 pt-1  md:py-6 md:text-xl text-center"
  variants={textEffectThree(1)}
  initial ="hidden"
  animate = "visible"
  >Made with {`<3`} by Chandan.</motion.p>
</div>
  </div>
</footer>

  )
}

export default Footer