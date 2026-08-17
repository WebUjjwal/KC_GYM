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
      <div className="overflow-hidden relative flex items-center">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full top-0 left-0 right-0 bottom-0 z-10"
          src="fitwell-video.mp4"
        ></video>

        <div className="h-screen w-screen flex items-center bg-[#171e2ea6] z-20">
          <div className="container">
            <div className="max-w-3/5">
              <h2 className="lg:text-[68px] lg:leading-20 font-extrabold text-white uppercase mb-4">
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
                lg:leading-7.25 
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

              <ul className="text-white flex gap-14 mb-10">
                {DATA.map(({ _id, count, title }) => {
                  return (
                    <li key={_id}>
                      <h4 className="lg:text-[30px] lg:leading-9 font-bold mb-1">
                        {count}+
                      </h4>
                      <p className="lg:text-lg lg:leading-7.25">{title}</p>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center gap-15">
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
