import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const TrainerCard = () => {
  const TRAINER_DATA = [
    {
      _id: 9800,
      name: "Darlene Robertson",
      role: "FITNESS Trainer",
      image: "/team-1.jpg",
    },
    {
      _id: 980,
      name: "Savannah Nguyen",
      role: "FITNESS Trainer",
      image: "/team-2.jpg",
    },
    {
      _id: 96670,
      name: "Cameron Williamson",
      role: "FITNESS Trainer",
      image: "/team-3.jpg",
    },
    {
      _id: 2310,
      name: "Leslie Alexander",
      role: "FITNESS Trainer",
      image: "/team-4.jpg",
    },
  ];
  return (
    <>
      <div className="w-full flex items-center lg:gap-7.5">
        {" "}
        {TRAINER_DATA.map(({ _id, name, role, image }) => {
          return (
            <div
              key={_id}
              className="group relative h-105 w-full max-w-1/4 overflow-hidden rounded-[22px] bg-black
      "
            >
              {/* Image */}
              <Image
                src={image}
                alt={name}
                fill
                priority
                className="
          object-cover
          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:scale-105
        "
              />

              {/* Bottom Gradient */}
              <div
                className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-[60%]
          bg-gradient-to-t
          from-black/95
          via-black/50
          to-transparent
        "
              />

              {/* Content */}
              <div
                className="
          absolute
          inset-x-0
          bottom-0
          flex
          flex-col
          items-center
          px-4
          pb-7
        "
              >
                {/* Role */}
                <span
                  className="
            mb-1
            text-[13px]
            font-bold
            tracking-wide
            text-[#d7fb00]
            transition-all
            duration-500
            ease-out
            group-hover:-translate-y-1
          "
                >
                  {role}
                </span>

                {/* Name */}
                <h3
                  className="
            text-xl
            font-bold
            text-white
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:-translate-y-2
          "
                >
                  {name}
                </h3>

                {/* Social Icons */}
                <div
                  className="
            mt-4
            flex
            items-center
            gap-3

            opacity-0
            translate-y-5
            pointer-events-none

            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:translate-y-0
            group-hover:opacity-100
            group-hover:pointer-events-auto
          "
                >
                  {/* Facebook */}
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

                  {/* Instagram */}
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

                  {/* Website */}
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
          );
        })}
      </div>
    </>
  );
};

export default TrainerCard;
