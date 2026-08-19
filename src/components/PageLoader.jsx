"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PageLoader = () => {
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Page navigation
    let timer;
    const startTimer = setTimeout(() => {
      setLoading(true);

      timer = setTimeout(() => {
        setLoading(false);
      }, 900);
    }, 0);

    return () => {
      clearTimeout(startTimer);
      if (timer) clearTimeout(timer);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-999999
        flex
        items-center
        justify-center
        bg-[#d7fb00]
      "
    >
      {/* Loader */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        {/* Top Arc */}
        <span
          className="
            absolute
            left-1/2
            top-0
            h-10
            w-10
            -translate-x-1/2
            rounded-t-full
            border-t
            border-black
            animate-spin
          "
          style={{
            animationDuration: "1.5s",
          }}
        />

        {/* Bottom Arc */}
        <span
          className="
            absolute
            bottom-0
            left-1/2
            h-10
            w-10
            -translate-x-1/2
            rounded-b-full
            border-b
            border-black
            animate-spin
          "
          style={{
            animationDuration: "1.5s",
            animationDirection: "reverse",
          }}
        />

        {/* Center Logo */}
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black
            text-[#d7fb00]
            text-xl
            font-black
          "
        >
          ⚡
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
