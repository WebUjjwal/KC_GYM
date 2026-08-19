"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Joining this gym has been life-changing! The trainers are incredibly knowledgeable, and the community is so welcoming. I've lost 15 pound and feel stronger than ever.",
    name: "Jemmy D",
    company: "UKco - United Kingdom Co.",
    image: "/author-1.jpg",
  },
  {
    text: "The trainers are amazing and the atmosphere is fantastic. Every workout feels motivating and I have seen a huge improvement in my strength.",
    name: "Sarah Wilson",
    company: "Fitness Enthusiast",
    image: "/author-2.jpg",
  },
  {
    text: "Joining this gym has been life-changing! The trainers are incredibly knowledgeable, and the community is so welcoming. I've lost 15 pound and feel stronger than ever.",
    name: "Jemmy D",
    company: "UKco - United Kingdom Co.",
    image: "/author-1.jpg",
  },
];

const TestimonialCard = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full overflow-hidden ">
      <div className="relative mx-auto w-full">
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="
            absolute
            left-4
            top-1/2
            z-20
            flex
            h-[60px]
            w-[60px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#d7fb00]
            text-black
            transition-all
            duration-300
            hover:scale-110
            active:scale-95
            md:left-4
            lg:left-5
          "
        >
          <ChevronLeft size={30} strokeWidth={2} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="
            absolute
            right-4
            top-1/2
            z-20
            flex
            h-15
            w-15
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-[#d7fb00]
            text-black
            transition-all
            duration-300
            hover:scale-110
            active:scale-95
            md:right-4
            lg:right-5
          "
        >
          <ChevronRight size={30} strokeWidth={2} />
        </button>

        <div className="overflow-hidden px-20 md:px-28">
          <div
            className="
              flex
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  min-w-full
                  shrink-0
                  px-4
                  md:px-10
                "
              >
                <div className="mx-auto flex max-w-225 flex-col items-center text-center">
                  <p
                    className="
                      max-w-[900px]
                      text-[24px]
                      font-medium
                      leading-[1.45]
                      text-white
                      md:text-[28px]
                      lg:text-[30px]
                    "
                  >
                    {testimonial.text}
                  </p>

                  <div className="mt-8">
                    <div
                      className="
                        relative
                        h-25
                        w-25
                        overflow-hidden
                        rounded-full
                        border
                        border-white/10
                      "
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3
                    className="
                      mt-4
                      text-[17px]
                      font-black
                      text-white
                    "
                  >
                    {testimonial.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[16px]
                      font-medium
                      text-white/90
                    "
                  >
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300
              ${current === index ? "w-7 bg-[#d7fb00]" : "w-2 bg-white/30"}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCard;
