"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999999]
        flex
        items-center
        justify-center
        bg-[#d7fb00]
        overflow-hidden
      "
    >
      {/* Loader Wrapper */}
      <div className="relative h-[100px] w-[100px]">
        <div
          className="
          absolute
            grid
            aspect-square
            w-[100px]
            rounded-full
            border-[4px]
            border-transparent
            border-r-[#171e2e]
            animate-[l15_1s_linear_infinite]

            before:content-['']
            before:col-start-1
            before:row-start-1
            before:m-[2px]
            before:rounded-full
            before:border-[4px]
            before:border-transparent
            before:border-r-[#171e2e]
            before:animate-[l15_2s_infinite]

            after:content-['']
            after:col-start-1
            after:row-start-1
            after:m-[8px]
            after:rounded-full
            after:border-[4px]
            after:border-transparent
            after:border-r-[#171e2e]
            after:animate-[l15_3s_infinite]
          "
        />

        {/* Logo */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            flex
            items-center
            justify-center
            h-[42px]
            w-[42px]
          "
        >
          <Image
            className=""
            src="/loader.svg"
            alt="Gym Logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
