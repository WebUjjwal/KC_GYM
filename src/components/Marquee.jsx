const marqueeItems = [
  "PERSONAL TRAINERS",
  "LIVE CLASSES",
  "OUTDOOR & ONLINE TRAINERS",
  "PERSONAL TRAINING",
  "LIVE CLASSES",
];

const items = [...marqueeItems, ...marqueeItems];

const Marquee = () => {
  return (
    <div className="overflow-hidden bg-[#d7fb00] py-5">
      <div className="flex w-max animate-marquee">
        <div className="flex shrink-0 items-center">
          {items.map((item, index) => (
            <div key={index} className="flex shrink-0 items-center">
              <h3 className="mx-5 whitespace-nowrap font-rajdhani lg:text-[24px] font-bold">
                {item}
              </h3>

              <span className="lg:text-[30px]">✦</span>
            </div>
          ))}
        </div>

        <div className="flex shrink-0 items-center">
          {items.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex shrink-0 items-center"
            >
              <h3 className="mx-5 whitespace-nowrap font-rajdhani lg:text-[24px] font-bold">
                {item}
              </h3>

              <span className="lg:text-[30px]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
