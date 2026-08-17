import SubHeadingV2 from "@/components/SubHeadingV2";

const AboutUs = () => {
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
            <div className="max-w-1/2 w-full"></div>
            <div className="max-w-1/2 w-full">
              <SubHeadingV2 headingTitle="About us" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
