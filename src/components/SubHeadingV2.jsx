import Image from "next/image";

const SubHeadingV2 = ({ headingTitle, mainHeading, description }) => {
  return (
    <>
      <div className="">
        <div className="relative">
          <h3
            className="
                z-20
                    lg:text-[100px]
                    lg:leading-25
                    font-extrabold
                    uppercase
                    relative
                    text-transparent
                    [-webkit-text-fill-color:transparent]
                    [-webkit-text-stroke:2px_#303747]

                    mask-[linear-gradient(to_bottom,black_0%,black_20%,rgba(0,0,0,0.35)_55%,transparent_95%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_20%,rgba(0,0,0,0.35)_55%,transparent_85%)]
                "
          >
            {headingTitle}
          </h3>
          <h5 className="flex items-center gap-3 text-[#d7fb00] lg:text-[16px] lg:leading-6.5 absolute bottom-3 font-bold">
            <Image src="icon-sub-heading.svg" alt="" width={35} height={20} />
            {headingTitle}
          </h5>
        </div>

        <h2 className="whitespace-pre-line relative lg:text-[46px] lg:leading-13.75 font-bold mb-4 text-white">
          {mainHeading}
        </h2>
        <p className="whitespace-pre-line text-white lg:text-[18px] lg:leading-7.25">
          {description}
        </p>
      </div>
    </>
  );
};

export default SubHeadingV2;
