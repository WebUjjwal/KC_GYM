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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const heading = e.target.closest("h2");

      setIsHeading(!!heading);
    };

    window.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    document.addEventListener("mouseover", handleMouseOver);

    let animationFrame;

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.12;

      position.current.y += (mouse.current.y - position.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${position.current.x}px`;
        cursorRef.current.style.top = `${position.current.y}px`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

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
        z-[999999]
        pointer-events-none
        -translate-x-1/2
        -translate-y-1/2
        rounded-full

        transition-all
        duration-300
        ease-out

        mix-blend-difference

        ${isVisible ? "opacity-100" : "opacity-0"}

        ${
          isHeading
            ? "h-[70px] w-[70px] bg-white"
            : "h-[10px] w-[10px] bg-[#d7fb00]"
        }
      `}
    />
  );
};

export default CustomCursor;
