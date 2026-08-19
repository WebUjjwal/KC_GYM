"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const MENU_LINK = [
    {
      _id: 786766,
      name: "Home",
      link: "/",
    },
    {
      _id: 878777,
      name: "About us",
      link: "/about",
    },
    {
      _id: 54546878,
      name: "Services",
      link: "/service",
    },
    {
      _id: 433354567,
      name: "blog",
      link: "/blog",
    },
    {
      _id: 87678886,
      name: "contact us",
      link: "/contact",
    },
  ];

  return (
    <>
      <div className="absolute top-0 left-0 right-0 w-full z-50 pt-5">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div className="w-fit relative z-[1001]">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image src="logo.svg" alt="" height={50} width={150} />
            </Link>
          </div>

          {/* YOUR DESKTOP MENU */}
          <div className="hidden md:block">
            <ul className="flex items-center lg:gap-10 gap-6">
              {MENU_LINK.map(({ _id, name, link }) => {
                return (
                  <li key={_id}>
                    <h4 className="text-white font-bold capitalize lg:text-[18px]">
                      <Link href={link}>{name}</Link>
                    </h4>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* YOUR DESKTOP BUTTON */}
          <div className="hidden md:block">
            <Button btnLink="/contact" btnName="get started" />
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
                relative
                z-1001
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#d7fb00]
                md:hidden
            "
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative h-5 w-5">
              {/* Line 1 */}
              <span
                className={`
                absolute
                left-0
                top-1/2
                h-[2px]
                w-5
                bg-black
                transition-all
                duration-300
                ${menuOpen ? "rotate-45" : "-translate-y-[4px]"}
            `}
              />

              {/* Line 2 */}
              <span
                className={`
                absolute
                left-0
                top-1/2
                h-[2px]
                w-5
                bg-black
                transition-all
                duration-300
                ${menuOpen ? "-rotate-45" : "translate-y-[4px]"}
            `}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          fixed
          inset-0
          z-[1000]
          bg-[#171e2d]
          md:hidden
          transition-all
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-full opacity-0"
          }
        `}
      >
        <div className="flex h-full flex-col px-6 pt-[120px]">
          <ul className="flex flex-col">
            {MENU_LINK.map(({ _id, name, link }) => {
              return (
                <li key={_id}>
                  <Link
                    href={link}
                    onClick={() => setMenuOpen(false)}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/10
                      py-5
                      text-3xl
                      font-bold
                      capitalize
                      text-white
                      transition-colors
                      duration-300
                      hover:text-[#d7fb00]
                    "
                  >
                    <span>{name}</span>

                    <span
                      className="
                        text-[#d7fb00]
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-2
                        group-hover:opacity-100
                      "
                    >
                      ↗
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Get Started */}
          <div className="mt-8">
            <Button btnLink="/contact" btnName="get started" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
