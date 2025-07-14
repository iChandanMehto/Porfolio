"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TextSwitcher = () => {
  const techs = ["React", "Tailwind CSS", "Next.js", "JavaScript"];
  const [index, setIndex] = useState(0);
  const wordRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      // animate out
      gsap.to(wordRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          // change text
          setIndex((prev) => (prev + 1) % techs.length);
          // animate in
          gsap.fromTo(
            wordRef.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3 }
          );
        },
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:hidden flex items-center justify-center h-auto bg-gray-900">
      <h1 className="text-xl md:text-3xl font-semibold text-white flex gap-2">
        <span>Front-end Developer</span>
        <span ref={wordRef} className="text-indigo-400">
          {techs[index]}
        </span>
      </h1>
    </div>
  );
};

export default TextSwitcher;
