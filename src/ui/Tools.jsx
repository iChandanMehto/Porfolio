import React from 'react'
import { motion } from 'motion/react'
import cpp from '../assets/imagesTwo/cpp.svg'

const Tools = () => {
  return (
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
  )
}

export default Tools