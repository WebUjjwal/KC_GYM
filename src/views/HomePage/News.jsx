import SubHeading from "@/components/SubHeading";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  const POSTDATA = [
    {
      _id: 76008,
      title: "The Ultimate Guide to Meal Preparing for Fitness Success",
      description:
        "Discover the best workouts to burn fat, boost metabolism, and achieve your weight loss goals faster.",
      image: "/post-2.jpg",
    },
    {
      _id: 76008,
      title: "Top Benefits of Strength Training for All Ages",
      description:
        "Discover the best workouts to burn fat, boost metabolism, and achieve your weight loss goals faster.",
      image: "/post-3.jpg",
    },
    {
      _id: 98878,
      title: "How to Stay Motivated in Your Fitness Journey",
      description:
        "Discover the best workouts to burn fat, boost metabolism, and achieve your weight loss goals faster.",
      image: "/post-4.jpg",
    },
  ];

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

          <div className="flex items-start gap-7.5">
            <div className="w-full max-w-1/2">
              <div className="group">
                <figure className="overflow-hidden h-115 rounded-2xl">
                  <Image
                    src="/post-1.jpg"
                    className="relative! object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
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
            <div className="w-full flex flex-col gap-7.5 max-w-1/2">
              {POSTDATA.map(({ _id, title, description, image }) => {
                return (
                  <div key={_id} className="flex items-start gap-7.5 group">
                    <figure className="overflow-hidden w-full max-w-73.75 h-50 rounded-2xl">
                      <Image
                        src={image}
                        className="relative! object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                        fill
                        alt=""
                      />
                    </figure>
                    <div className="w-full">
                      <h5 className="font-bold text-white text-[20px] leading-7 mb-3">
                        {title}
                      </h5>
                      <p className="text-white text-[18px] leading-7.25 mb-5 line-clamp-2">
                        {description}
                      </p>
                      <Link
                        className="text-[20px] leading-4.5 font-medium capitalize text-[#d7fb00] flex items-center gap-2"
                        href=""
                      >
                        learn more
                        <Image
                          src="arrow-accent.svg"
                          alt=""
                          width={25}
                          height={25}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
