import Image from "next/image";

const SubHeadingV2 = ({ headingTitle }) => {
  return (
    <>
      <div className="relative">
        <h1
          className="
                z-20
                    text-[100px]
                    font-extrabold
                    uppercase
                    leading-none
                    relative
                    text-transparent
                    [-webkit-text-fill-color:transparent]
                    [-webkit-text-stroke:2px_#303747]

                    mask-[linear-gradient(to_bottom,black_0%,black_20%,rgba(0,0,0,0.35)_55%,transparent_95%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_20%,rgba(0,0,0,0.35)_55%,transparent_85%)]
                "
        >
          {headingTitle}
        </h1>
        <h5 className="flex items-center gap-3 text-[#d7fb00] absolute bottom-0">
          <Image src="icon-sub-heading.svg" alt="" width={50} height={20} />
          {headingTitle}
        </h5>
      </div>
    </>
  );
};

export default SubHeadingV2;
