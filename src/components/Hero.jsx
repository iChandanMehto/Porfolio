import { useEffect, useRef } from "react";
import { HERO_CONTENT } from "../constants";
import gsap from "gsap";

const Hero = () => {  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set([
      heroRef.current,
      titleRef.current,
      subtitleRef.current,
      descRef.current
    ], { opacity: 0, y: 40 });

    // Create and play the timeline
    const tl = gsap.timeline({
      defaults: { 
        ease: "power4.out",
        duration: 1
      }
    });

    tl.to(heroRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 1.2,
      clearProps: "all"
    })
    .to(titleRef.current, { 
      opacity: 1, 
      y: 0,
      duration: 1,
      clearProps: "all"
    }, "-=0.8")
    .to(subtitleRef.current, { 
      opacity: 1, 
      y: 0,
      duration: 1,
      clearProps: "all"
    }, "-=0.7")
    .to(descRef.current, { 
      opacity: 1, 
      y: 0,
      duration: 1,
      clearProps: "all"    }, "-=0.6");

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="border-b flex justify-center items-center relative container md:my-14  my-10 w-full border-neutral-900 pb-8"
    >
      <div className="flex flex-wrap w-full justify-center">
        <div className="w-full">
          <div className="flex flex-col items-center">
            <h1
              ref={titleRef}
              className="md:pb-16 px-4 pb-8 text-gray-300  text-6xl navClass md:text-6xl font-medium tracking-tight lg:mt-10 lg:text-8xl sm:text-center text-start"
            >
              Chandan Mehto
            </h1>
            <span
              ref={subtitleRef}
              className="bg-gradient-to-r from-gray-100 via-slate-500 to-gray-600 bg-clip-text sm:text-center text-start px-4 sm:text-5xl text-4xl tracking-tight text-transparent"
            >
              Front End Developer / Student
            </span>            <p
              ref={descRef}
              className="my-2 text-white max-w-[768px] md:py-6 py-3 px-4 text-base md:text-2xl text-start sm:text-center font-light"
            >
              {HERO_CONTENT}
            </p>
          </div>
        </div>
      </div>
      {/* Subtle fancy background gradients and animated light */}
      <div className="pointer-events-none absolute inset-0 w-full h-full z-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] bg-gradient-radial from-[#7b82c7]/40 via-transparent to-transparent blur-2xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#7b82c7]/20 via-transparent to-transparent blur-3xl opacity-30"></div>
      </div>
    </div>
  );
};

export default Hero;