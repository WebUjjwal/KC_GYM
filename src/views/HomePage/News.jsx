import SubHeading from "@/components/SubHeading";
import Image from "next/image";
import Link from "next/link";

const News = () => {
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
        <div className="container">
          <SubHeading
            headingTitle="news"
            tag="latest post"
            mainHeading={
              <>
                <span className="block">
                  stay informed with{" "}
                  <span className="text-[#d7fb00]"> our latest</span>
                </span>

                <span className="block">articles</span>
              </>
            }
          />

          <div className="w-full max-w-1/2">
            <div className="">
              <figure className="overflow-hidden h-115 rounded-2xl">
                <Image
                  src="/post-1.jpg"
                  className="relative! object-cover"
                  fill
                  alt=""
                />
              </figure>
              <h5 className="font-bold text-white text-[20px] leading-7 mt-7 mb-3">
                10 Effective Exercises for Weight Loss
              </h5>
              <p className="text-white text-[18px] leading-7.25 mb-5">
                Discover the best workouts to burn fat, boost metabolism, and
                achieve your weight loss goals faster.
              </p>

              <Link
                className="text-[20px] leading-4.5 font-medium capitalize text-[#d7fb00] flex items-center gap-2"
                href=""
              >
                learn more
                <Image src="arrow-accent.svg" alt="" width={25} height={25} />
              </Link>
            </div>
          </div>
          <div className="w-full max-w-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default News;
