"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const position = useRef({
    x: 0,
    y: 0,
  });

  const [isHeading, setIsHeading] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      if (target.closest("h2")) {
        setIsHeading(true);
      } else {
        setIsHeading(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    let animationFrame;

    const animate = () => {
      // Smooth follow
      position.current.x += (mouse.current.x - position.current.x) * 0.15;

      position.current.y += (mouse.current.y - position.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(
            ${position.current.x}px,
            ${position.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`
        fixed
        left-0
        top-0
        z-[99999]
        pointer-events-none
        flex
        items-center
        justify-center
        rounded-full
        transition-all
        duration-300
        ease-out
         mix-blend-difference


        ${
          isHeading
            ? "h-16 w-16 bg-white scale-100"
            : "h-2.5 w-2.5 bg-[#d7fb00] scale-100"
        }
      `}
    >
      {isHeading && (
        <span className="text-[9px] font-bold uppercase text-black"></span>
      )}
    </div>
  );
};

export default CustomCursor;
