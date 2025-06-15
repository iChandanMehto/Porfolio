import { useEffect, useRef } from "react";
import gsap from "gsap";
import pain from "../assets/imagesTwo/pain.jpeg";
import itachi from "../assets/imagesTwo/itachi.jpeg";
import shakura from "../assets/imagesTwo/shakura.jpeg";
import kakashiguy from "../assets/imagesTwo/kakashiguy.jpeg";
import hinata from "../assets/imagesTwo/hinata.jpeg";
import paintwo from "../assets/imagesTwo/paintwo.jpeg";
import hinatatwo from "../assets/imagesTwo/hinatatwo.jpeg";
import leaf from "../assets/imagesTwo/leaf.jpeg";
import itachitwo from '../assets/imagesTwo/itachitwo.jpg';
import itachithree from '../assets/imagesTwo/itachithree.jpg';
import rein from '../assets/imagesTwo/rein.jpeg';
import baddie from '../assets/imagesTwo/baddie.jpeg';

const images = [
  itachi,
  shakura,
  hinata,
  rein,
  baddie,
  paintwo,
  hinatatwo,
  kakashiguy,
  leaf,
  itachitwo,
  itachithree,
  pain,
];

const Article = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Create seamless animation
    const tween = gsap.to(el, {
      x: `-=${el.offsetWidth / 2}`,
      duration: 20,
      ease: "none",
      repeat: -1,
      onUpdate: () => {
        // Check if we need to reset the position
        if (-el.offsetLeft >= el.offsetWidth / 2) {
          gsap.set(el, { x: 0 });
        }
      }
    });

    // Add hover pause functionality
    const handleMouseEnter = () => tween.pause();
    const handleMouseLeave = () => tween.play();

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tween.kill();
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <article>
      <div className="m-1 p-1 md:p-3 w-full flex md:justify-start justify-center text-center align-middle">
        <h2 className="bg-gradient-to-r from-gray-100 via-slate-500 to-gray-600 bg-clip-text text-center m-3 text-3xl md:text-5xl tracking-tight text-transparent md:p-3">
          Random Images
        </h2>
      </div>

      {/* Auto-scrolling container */}
      <div className="hide-scrollbar overflow-hidden flex items-center flex-row justify-start w-full relative">
        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-5 will-change-transform"
          style={{ width: "max-content" }}
        >
          {/* Duplicate images for seamless loop */}
          {[...images, ...images].map((image, index) => (
            <img
              key={index}
              className="object-cover md:w-[40vw] md:h-[40vh] w-[30vh] h-[30vh] md:rounded-2xl rounded-xl"
              src={image}
              alt={`Image ${index}`}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Article;