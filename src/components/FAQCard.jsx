"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "WHAT TYPES OF FITNESS CLASSES DO YOU OFFER?",
    answer:
      "We offer a wide variety of fitness classes including HIIT, yoga, spin, strength training, cardio, and more.",
  },
  {
    question: "DO I NEED TO BE A MEMBER TO ATTEND A CLASS?",
    answer:
      "No, you don't need to be a member to attend a class. We also offer flexible options for non-members.",
  },
  {
    question: "WHAT SHOULD I BRING TO MY FIRST WORKOUT?",
    answer:
      "Bring comfortable workout clothes, training shoes, a water bottle, and a towel. Most importantly, bring your energy!",
  },
  {
    question: "WHAT IS YOUR CANCELLATION POLICY FOR CLASSES?",
    answer:
      "You can cancel your class up to 12 hours before the scheduled start time without any cancellation fee.",
  },
  {
    question: "DO YOU HAVE ANY SPECIAL OFFERS FOR NEW MEMBERS?",
    answer:
      "Yes! We regularly offer special discounts and introductory packages for new members.",
  },
];

const FAQCard = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col gap-7">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={`
                  overflow-hidden
                  rounded-lg
                  bg-white
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${isOpen ? "ring-2 ring-[#d7fb00]" : ""}
                `}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-5
                    py-4.5
                    text-left
                    transition-colors
                    duration-300
                    md:px-5
                    ${isOpen ? "bg-[#d7fb00]" : "bg-white hover:bg-gray-100"}
                  `}
              >
                <h2
                  className="
                      text-[16px]
                      font-bold
                      leading-5
                      tracking-wide
                      text-[#111827]
                      md:text-[15px]
                    "
                >
                  {faq.question}
                </h2>

                <ChevronDown
                  size={22}
                  strokeWidth={2.5}
                  className={`
                      shrink-0
                      text-black
                      transition-transform
                      duration-500
                      ease-out
                      ${isOpen ? "rotate-180" : "rotate-0"}
                    `}
                />
              </button>

              {/* Answer */}
              <div
                className={`
                    grid
                    transition-[grid-template-rows]
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="px-5 pb-6 pt-5 md:px-5">
                    <p
                      className="
                          w-full
                          text-[17px]
                          leading-[1.7]
                          text-[#111827]
                        "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQCard;
