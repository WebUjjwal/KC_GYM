import Image from "next/image";
import Link from "next/link";

const Button = ({ btnLink, btnName }) => {
  return (
    <>
      <div className="relative w-fit">
        <Link
          className="group relative lg:py-4 py-3 lg:px-7.5 px-5 bg-[#d7fb00] rounded-[50px] flex items-center w-fit lg:text-[16px] text-[14px] capitalize font-bold transition-transform duration-300 hover:bg-white"
          href={btnLink}
        >
          {btnName}

          <div
            className="
            absolute
            right-[-22%]
            top-1/2
            lg:w-12.5
            w-10
            lg:h-12.5
            h-10
            bg-[#d7fb00]
            rounded-full
            flex
            items-center
            justify-center
            border-2
            border-[#171e2e]
            -translate-y-1/2
            -rotate-45
            transition-transform
            duration-300
            group-hover:rotate-0
            group-hover:bg-white
            
            "
          >
            <Image
              className="opacity-70 group-hover:opacity-100"
              src="/arrow-black.svg"
              width={25}
              height={25}
              alt="link arrow"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Button;
