import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div
        className="w-full
    pt-25
    bg-[#202737]
    bg-[url('/section-bg-circle-shape.png')]
    bg-cover
    bg-center
    bg-no-repeat"
      >
        <div className="container flex items-start gap-7.5 mb-20!">
          <div className="w-full max-w-1/4">
            <Link className="w-fit block mb-5" href="/">
              <Image src="logo.svg" alt="" width={220} height={50} />
            </Link>

            <p className="text-white text-[18px] leading-7.25 mb-7.5">
              Push harder, go further. Your fitness journey starts today!
            </p>

            <div className="relative w-full">
              <input
                className="border-b border-[#ffffff24] outline-0 py-2.5 pr-9.5 text-[18px] text-white w-full"
                type="text"
                placeholder="Enter your email"
                required
              />
              <Image
                className="absolute right-0 -top-1.25 transform translate-y-1/2 grayscale-100 cursor-pointer"
                src="arrow-accent.svg"
                alt=""
                width={27}
                height={27}
              />
            </div>
          </div>

          <div className="w-full max-w-1/4 flex flex-col gap-5">
            <h4 className="text-[24px] leading-7.25 font-bold uppercase text-white">
              contact us
            </h4>

            <div className="flex items-center gap-3.75">
              <div className="w-10 h-10 rounded-full border border-[#ffffff24] flex items-center justify-center">
                <Image src="icon-phone.svg" height={15} width={15} alt="" />
              </div>
              <Link
                className="text-[18px] leading-7.25 text-white"
                href="tel:123456789"
              >
                +91 123 456 789
              </Link>
            </div>

            <div className="flex items-center gap-3.75">
              <div className="w-10 h-10 rounded-full border border-[#ffffff24] flex items-center justify-center">
                <Image src="icon-mail.svg" height={15} width={15} alt="" />
              </div>
              <Link
                className="text-[18px] leading-7.25 text-white"
                href="mailto:info@domainname.com"
              >
                info@domainname.com
              </Link>
            </div>
          </div>

          <div className="w-full max-w-1/4 flex flex-col gap-5">
            <h4 className="text-[24px] leading-7.25 font-bold uppercase text-white">
              our gym timing
            </h4>

            <div className="">
              <p className="text-[18px] leading-7.25 text-white">
                Mon - Fri : 08:00 AM - 10:00 PM
              </p>
            </div>

            <div className="">
              <p className="text-[18px] leading-7.25 text-white">
                Sat - Sun : 08:00 AM - 09:00 PM
              </p>
            </div>
          </div>

          <div className="w-full max-w-1/4 flex flex-col gap-5">
            <h4 className="text-[24px] leading-7.25 font-bold uppercase text-white">
              our location
            </h4>

            <div className="">
              <p className="text-[18px] leading-7.25 text-white">
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
            </div>
          </div>
        </div>

        <div className="container border-t border-[#ffffff24] py-10">
          <div className="flex items-center justify-between">
            <p className="text-[18px] leading-7.25 text-white font-normal">
              Copyright © 2025 All Rights Reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              bg-white
              text-black
              transition-all
              duration-300
              ease-out
              hover:scale-110
              hover:bg-[#d7fb00]
            "
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              bg-white
              text-black
              transition-all
              duration-300
              ease-out
              hover:scale-110
              hover:bg-[#d7fb00]
            "
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Website"
                className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              bg-white
              text-black
              transition-all
              duration-300
              ease-out
              hover:scale-110
              hover:bg-[#d7fb00]
            "
              >
                <FiGlobe size={19} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
