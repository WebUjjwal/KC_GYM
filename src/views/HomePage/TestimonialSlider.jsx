import SubHeading from "@/components/SubHeading";
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialSlider = () => {
  return (
    <>
      <div
        className="w-full
        py-25
        bg-[#171e2e]"
      >
        <div className="container relative">
          <div
            className=" w-full h-125 absolute bottom-15 bg-[url('/testimonials-bg.png')]
        bg-contain
        bg-center
        bg-no-repeat"
          ></div>
          <SubHeading
            headingTitle="reviews"
            tag="Client Testimonials"
            mainHeading={
              <>
                <span className="block">
                  Inspiring Journeys:
                  <span className="text-[#d7fb00]"> Client</span>
                </span>

                <span className="block">
                  <span className="text-[#d7fb00]">Testimonials</span>{" "}
                </span>
              </>
            }
          />
          <TestimonialCard />
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
