import Button from "@/components/Button";

const Banner = () => {
  const DATA = [
    {
      _id: 1243234,
      count: 1200,
      title: "Active Members",
    },
    {
      _id: 29078897,
      count: 12,
      title: "Certified Trainers",
    },
    {
      _id: 39898689,
      count: 20,
      title: "Year Of Experience",
    },
  ];

  return (
    <>
      <div className="overflow-hidden h-screen relative flex items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
          absolute
          inset-0
          z-10
          h-full
          w-full
          object-cover
          object-center
        "
          src="fitwell-video.mp4"
        />

        <div className="h-screen w-screen flex items-center bg-[#171e2ea6] z-20">
          <div className="container">
            <div className="w-full lg:max-w-3/5 md:max-w-4/5">
              <h2 className="lg:text-[68px] md:text-[45px] text-[30px] lg:leading-20 md:leading-14 leading-10 font-extrabold text-white uppercase mb-4">
                Your body can{" "}
                <span className="text-[#d7fb00]">
                  stand <br /> almost
                </span>{" "}
                anything.
              </h2>
              <p
                className="
                text-white 
                lg:text-lg 
                text-[16px]
                lg:leading-7.25 
                leading-6
                relative
                pl-5
                before:absolute
                before:left-0
                before:top-0
                before:h-full
                before:w-1
                overflow-hidden
                before:bg-[#d7fb00]
                before:content-['']
                mb-10"
              >
                It&apos;s your mind that needs convincing. Push past your
                limits, stay committed, and watch as your body transform into
                powerhouse of strength and resilience. Start your journey today
                & truly capable of!
              </p>

              <ul className="text-white flex md:gap-14 gap-8 mb-10 flex-wrap">
                {DATA.map(({ _id, count, title }) => {
                  return (
                    <li key={_id}>
                      <h4 className="lg:text-[30px] text-[20px] lg:leading-9 leading-7 font-bold mb-1">
                        {count}+
                      </h4>
                      <p className="lg:text-lg text-[16px] lg:leading-7.25 leading-5">
                        {title}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap items-center lg:gap-15 gap-10">
                <Button btnLink="/about" btnName="get started" />
                <Button btnLink="/about" btnName="Explore More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
