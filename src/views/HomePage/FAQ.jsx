import FAQCard from "@/components/FAQCard";
import SubHeadingV2 from "@/components/SubHeadingV2";
import Image from "next/image";

const FAQ = () => {
  return (
    <>
      <div
        className="w-full
    py-25
    bg-[#202737]
    bg-[url('/section-bg-circle-shape.png')]
    bg-cover
    bg-center
    bg-no-repeat"
      >
        <div className="container flex items-center">
          <div className="w-full max-w-1/2 relative">
            <div className="">
              <div className="">
                <div className=""></div>
                <Image
                  className="object-cover"
                  src="/frequently_image.jpg"
                  alt=""
                  height={100}
                  width={550}
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-1/2">
            <SubHeadingV2
              headingTitle="faqs"
              tag="Frequently Asked Questions"
              mainHeading={
                <>
                  <span className="block">Answers to your</span>

                  <span className="block">
                    <span className="text-[#d7fb00]">most common</span>{" "}
                    questions
                  </span>
                </>
              }
              description={`We offer a wide variety of fitness classes.`}
            />
            <div className="mb-10"></div>
            <FAQCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
