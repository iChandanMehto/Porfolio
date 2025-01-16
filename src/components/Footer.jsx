import { motion } from "motion/react"

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
className='bg-gradient-to-r from-gray-100 via-slate-500 to-gray-600 bg-clip-text text-center  text-3xl md:text-5xl tracking-tight text-transparent  p-3' 
variants={textEffect(1)}
initial ="hidden"
animate = "visible"
>Contact Me</motion.h4>
<div className="flex flex-col md:flex-row items-center justify-center align-middle">
  <motion.p
  className="mx-2  text-white  text-sm max-w-[768px] py-1  md:py-6 md:text-xl text-center"
  variants={textEffectTwo(1)}
  initial ="hidden"
  animate = "visible"
  >mehtochandanbusiness@gmail.com</motion.p>


</div>


  </div>
</footer>

  )
}

export default Footer