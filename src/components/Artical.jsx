import { motion, } from "framer-motion";
import madara from "../assets/imagesTwo/madara.jpeg";
import pain from "../assets/imagesTwo/pain.jpeg";
import itachi from "../assets/imagesTwo/itachi.jpeg";
import shakura from "../assets/imagesTwo/shakura.jpeg";
import kakashiguy from "../assets/imagesTwo/kakashiguy.jpeg";
import hinata from "../assets/imagesTwo/hinata.jpeg";
import paintwo from "../assets/imagesTwo/paintwo.jpeg";
import hinatatwo from "../assets/imagesTwo/hinatatwo.jpeg";
import leaf from "../assets/imagesTwo/leaf.jpeg";
import itachitwo from '../assets/imagesTwo/itachitwo.jpg';
import itachithree from '../assets/imagesTwo/itachithree.jpg'
// import useMeasure from "react-use-measure";
// import { useEffect } from "react";

const images = [
  madara,
  pain,
  itachi,
  shakura,
  hinata,
  paintwo,
  hinatatwo,
  kakashiguy,
  leaf,
  itachitwo ,
  itachithree ,
  pain,
];
// let [ref, {width}] = useMeasure();

// const xTranslation = useMotionValue(0);


// useEffect(()=>{
//   let controls;
//   let finalePosition = -width / 1 -5;

// controls = animate(xTranslation, [0, finalePosition], {
//   ease:"liner",
//   duration:25,
//   repeat:Infinity,
//   repeatType:"loop",
//   repeatDelay:0,

// });
// reuturn contorls.stop
// })
const Article = () => {
  return (
    <>
      <article>
        <div className="m-1 p-1  md:p-3 w-full flex md:justify-start justify-center text-center align-middle">
          <h2  className='bg-gradient-to-r from-gray-100 via-slate-500 to-gray-600 bg-clip-text text-center m-3 text-3xl md:text-5xl tracking-tight text-transparent   md:p-3' >
            Random Images
          </h2>
        </div>

        {/* Auto-scrolling container */}
        <div   className="hide-scrollbar  overflow-hidden flex items-center flex-row justify-start w-full">
          <motion.div
            className="flex gap-3  md:gap-5"
            animate={{ x: ["0%", "-100%"] }} // Smooth transition across duplicate images
            transition={{
              duration: 20, // Adjust for slower speed
              repeat: Infinity, // Infinite loop
              ease: "linear",
            }}
          >
            {/* Duplicating the images for seamless loop */}
            {[...images, ...images].map((image, index) => (
              <img
                key={index}

                className="object-cover w-[40wh] h-[40vh] rounded-2xl "
                src={image}
                alt={`Image ${index}`}
              />
            ))}
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default Article;
