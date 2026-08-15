const Banner = () => {
  return (
    <>
      <div className="overflow-hidden relative flex items-center">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 right-0 bottom-0 z-10"
          src="fitwell-video.mp4"
        ></video>

        <div className="h-screen w-screen flex items-center bg-[#171e2e8c] z-20">
          <div className="container">
           <div className="max-w-3/6">
             <h2 className="lg:text-[68px] lg:leading-20 font-bold text-white uppercase mb-4">Your body can <span className="text-[#d7fb00]">stand <br/> almost</span> anything.</h2>
            <p className="text-white lg:text-lg lg:leading-7.25">
              It&apos;s your mind that needs convincing. Push past your limits,
              stay committed, and watch as your body transform into powerhouse
              of strength and resilience. Start your journey today & truly
              capable of!
            </p>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
