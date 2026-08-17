"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import SubHeading from "@/components/SubHeading";
import Link from "next/link";

const cards = [
  {
    title: "Nutrition Plans",
    image: "/service-1.jpg",
  },
  {
    title: "Group Workout",
    image: "/service-2.jpg",
  },
  {
    title: "Personal Training",
    image: "/service-3.jpg",
  },
  {
    title: "Live Classes",
    image: "/service-4.jpg",
  },
];

const TrainingSlider = () => {
  return (
    <section
      className="w-full
    py-25
    bg-[#202737]
    bg-[url('/section-bg-circle-shape.png')]
    bg-cover
    bg-center
    bg-no-repeat"
    >
      <div className="container w-full">
        <SubHeading
          headingTitle="classes"
          tag="fitness class"
          mainHeading={
            <>
              <span className="block">Transform Your Body with Our</span>

              <span className="block">
                <span className="text-[#d7fb00]">Dynamic Fitness</span> Classes
              </span>
            </>
          }
        />
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="training-swiper pb-20!"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-100 overflow-hidden rounded-[20px]">
                {/* Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Dark overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-[#171e2e]
                    via-[#171e2e]/30
                    to-transparent
                  "
                />

                {/* Content */}
                <div className="absolute bottom-6 left-7">
                  <h3
                    className="
                      text-[24px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-white
                    "
                  >
                    {card.title}
                  </h3>

                  <a
                    href="#"
                    className="
                      mt-3
                      flex
                      w-fit
                      items-center
                      gap-2
                      font-rubik
                      text-[18px]
                      font-bold
                      text-[#d7fb00]
                    "
                  >
                    Read More
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        bg-[#d7fb00]
                        text-[12px]
                        text-[#171e2e]
                      "
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="text-center text-[18px] text-white mt-8">
          Expert guidance for your fitness journey.{" "}
          <Link href="/contact" className="text-[#d7fb00] underline">
            Join us today and start transforming!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default TrainingSlider;
