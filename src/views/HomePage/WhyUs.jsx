import SubHeadingV2 from "@/components/SubHeadingV2";
import Image from "next/image";

const WhyUs = () => {
  const WHY_CHOOSE_POINT_DATA = [
    {
      _id: 8787667,
      num: "01",
      title: "personalized fitness plans",
      description:
        "We tailor every workout to fit your unique goals and fitness level ensuring that you make the most progress.",
    },
    {
      _id: 98876767,
      num: "02",
      title: "results-driven focus",
      description:
        "Everything we do is designed to help you achieve measurable results, whether you're aiming for weight loss.",
    },
    {
      _id: 988797,
      num: "03",
      title: "state-of-the-art equipment",
      description:
        "We provide the latest in gym equipment, from cardio machines to free weights, designed to support every type.",
    },
  ];

  return (
    <>
      <div
        className="w-full
        py-25
        bg-[#171e2e]
        bg-[url('/section-bg-circle-shape.png')]
        bg-cover
        bg-center
        bg-no-repeat"
      >
        <div className="container ">
          <div className="flex items-center gap-12.5">
            <div className="w-full max-w-1/2">
              <SubHeadingV2
                headingTitle="Why Us"
                tag="why choose us"
                mainHeading={
                  <>
                    <span className="block">Elevate fitness with the</span>

                    <span className="block">
                      <span className="text-[#d7fb00]">best way</span> possible
                    </span>
                  </>
                }
                description={`We believe fitness is more than just a workout—it's a lifestyle. With top-of-\nthe-line facilities, certified trainers, and a supportive community, we're\nhere to inspire and guide you every step of the way.`}
              />

              <ul className="mt-15">
                {WHY_CHOOSE_POINT_DATA.map(
                  ({ _id, num, title, description }) => {
                    return (
                      <li key={_id} className="mb-12 group">
                        <div className="flex items-start gap-4 text-white">
                          <div
                            className="w-full flex items-center justify-center max-w-15 h-15 rounded-full border border-[#ffffff24] transition-all
                            duration-600 ease-in-out  group-hover:bg-[#d7fb00] group-hover:text-black"
                          >
                            <h4 className="lg:text-[16px] lg:leading-4.75 font-bold">
                              {" "}
                              {num}
                            </h4>
                          </div>
                          <div className="">
                            <h5
                              className="lg:text-[20px] lg:leading-6 font-bold capitalize mb-2 transition-all
                            duration-600 ease-in-out group-hover:text-[#d7fb00]"
                            >
                              {title}
                            </h5>
                            <p className="lg:text-[16px] lg:leading-6.5 font-normal">
                              {description}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
            <div className="w-full max-w-1/2 flex flex-col gap-4">
              <div className="flex items-end gap-4">
                <Image
                  className="rounded-[10px] w-full h-full object-contain"
                  src="/why-choose-image-1.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
                <Image
                  className="rounded-[10px] w-full h-full object-contain"
                  src="/why-choose-image-3.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
              <div className="flex items-start gap-4">
                <Image
                  className="rounded-[10px] w-full h-full object-contain"
                  src="/why-choose-image-2.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
                <Image
                  className="rounded-[10px] w-full h-full object-contain"
                  src="/why-choose-image-4.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
