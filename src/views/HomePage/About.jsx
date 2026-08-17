import Button from "@/components/Button";
import SubHeadingV2 from "@/components/SubHeadingV2";
import Image from "next/image";

const AboutUs = () => {
  const ABOUT_DATA = [
    {
      _id: 767674777,
      tag: "Personal Trainer",
      detail:
        "Achieve your fitness goals with the guidance of our certified trainers.",
    },
    {
      _id: 6764447879,
      tag: "Cardio Programs",
      detail:
        "From steady-state runs to interval sprints, our treadmill programs.",
    },
    {
      _id: 886665680,
      tag: "Quality Equipment",
      detail: "Our gym is equipped with the latest cardio & strength machines.",
    },
    {
      _id: 98676434,
      tag: "Healthy Nutritions",
      detail: "Fuel your fitness journey with customized meal plans for you.",
    },
  ];

  return (
    <>
      <div
        className=" w-full
    py-25
    bg-[#171e2e]
    bg-[url('/section-bg-circle-shape.png')]
    bg-cover
    bg-center
    bg-no-repeat"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="max-w-1/2 w-full">
              {/* <Image
                src="why-choose-image-1.jpg"
                height={100}
                width={100}
                alt=""
              /> */}

              <Image
                className=""
                src="/about-section-image.jpg"
                alt=""
                width={560}
                height={400}
              />
            </div>
            <div className="max-w-1/2 w-full">
              <SubHeadingV2
                headingTitle="About us"
                mainHeading={
                  <>
                    <span className="block">EMPOWERING YOU TO ACHIEVE</span>

                    <span className="block">
                      <span className="text-[#d7fb00]">YOUR FITNESS</span> GOALS
                    </span>
                  </>
                }
                description={`We believe fitness is more than just a workout—it's a lifestyle. With top-of-\nthe-line facilities, certified trainers, and a supportive community, we're\nhere to inspire and guide you every step of the way.`}
              />

              <ul className="my-12 flex flex-wrap gap-y-12">
                {ABOUT_DATA.map(({ _id, tag, detail }) => {
                  return (
                    <li key={_id} className="max-w-1/2 group">
                      <h5 className="lg:text-[20px] lg:leading-6 text-white font-bold mb-2 flex items-center gap-2">
                        <Image
                          className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
                          src="arrow-accent.svg"
                          alt=""
                          width={27}
                          height={27}
                        />
                        {tag}
                      </h5>
                      <p className="lg:text-[18px] lg:leading-7.25 text-white">
                        {detail}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <Button btnLink="/aboutus" btnName="more about us" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
