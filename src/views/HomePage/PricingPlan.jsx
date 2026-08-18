import Button from "@/components/Button";
import SubHeading from "@/components/SubHeading";
import Image from "next/image";

const PricingPlan = () => {
  const PRICING_DATA = [
    {
      _id: 55343427,
      passType: "Weekly pass",
      validFor: "week",
      price: "19",
      features: [
        {
          _id: 989743,
          avb: "Fitness Floor & Cardio",
        },
        {
          _id: 324,
          avb: "30-Minute Consultation",
        },
        {
          _id: 664,
          avb: "Recovery Room Access",
        },
        {
          _id: 9889,
          avb: "Club 360 Class",
        },
        {
          _id: 5456,
          avb: "50% Off On Guest Passes",
        },
        {
          _id: 6644,
          avb: "Staffed Hours Only",
        },
      ],
    },

    {
      _id: 76776565,
      passType: "Monthly pass",
      validFor: "month",
      price: "39",
      features: [
        {
          _id: 8789,
          avb: "Fitness Floor & Cardio",
        },
        {
          _id: 1212,
          avb: "30-Minute Consultation",
        },
        {
          _id: 7656,
          avb: "Recovery Room Access",
        },
        {
          _id: 9987776,
          avb: "Club 360 Class",
        },
        {
          _id: 6755566,
          avb: "50% Off On Guest Passes",
        },
        {
          _id: 9884667,
          avb: "Staffed Hours Only",
        },
      ],
    },

    {
      _id: 9987876,
      passType: "yearly pass",
      validFor: "year",
      price: "199",
      features: [
        {
          _id: 90087,
          avb: "Fitness Floor & Cardio",
        },
        {
          _id: 870098,
          avb: "30-Minute Consultation",
        },
        {
          _id: 887800,
          avb: "Recovery Room Access",
        },
        {
          _id: 324002,
          avb: "Club 360 Class",
        },
        {
          _id: 67098,
          avb: "50% Off On Guest Passes",
        },
        {
          _id: 768890,
          avb: "Staffed Hours Only",
        },
      ],
    },
  ];

  const PRICE_POLICY = [
    {
      _id: 76550,
      icon: "./icon-pricing-benefit-1.svg",
      give: "Get 30 day free trial",
    },
    {
      _id: 6509,
      icon: "./icon-pricing-benefit-2.svg",
      give: "No any hidden fees pay",
    },
    {
      _id: 3340,
      icon: "./icon-pricing-benefit-3.svg",
      give: "You can cancel anytime",
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
            headingTitle="pricing"
            tag="pricing plan"
            mainHeading={
              <>
                <span className="block">Transform Your Body with Our</span>

                <span className="block">
                  <span className="text-[#d7fb00]">Dynamic Fitness</span>{" "}
                  Classes
                </span>
              </>
            }
          />

          <div className="flex gap-3.75 items-start w-full">
            {PRICING_DATA.map(
              ({ _id, passType, validFor, price, features }) => {
                return (
                  <div
                    key={_id}
                    className="first:bg-[#ffffff24] py-20 px-10 w-full max-w-1/3 rounded-[18px] "
                  >
                    <h4 className="text-white lg:text-[18px] lg:leading-5.5 uppercase font-bold lg:mb-2.5">
                      {passType}
                    </h4>

                    <h2 className="lg:text-[46px] lg:leading-13.75 font-bold text-[#d7fb00] lg:mb-10">
                      ${price}/
                      <span className="lg:text-[20px] font-bold">
                        {validFor}
                      </span>
                    </h2>

                    <ul className="lg:mb-10">
                      {features.map(({ _id, avb }) => {
                        return (
                          <li key={_id} className="mb-3.5 text-white">
                            <div className="flex items-center gap-2 w-full">
                              <Image
                                src="arrow-accent.svg"
                                alt=""
                                width={24}
                                height={24}
                              />
                              <p className="text-[18px] lg:leading-6.25 font-normal">
                                {avb}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>

                    <Button btnLink="/contact" btnName="Get Membership" />
                  </div>
                );
              },
            )}
          </div>

          <div className="flex items-center justify-center gap-25 lg:mt-17.5">
            {PRICE_POLICY.map(({ _id, icon, give }) => {
              return (
                <div key={_id} className="flex items-center gap-3 text-white">
                  <Image src={icon} alt="" width={22} height={22} />
                  <p className="lg:text-[18px] lg:leading-4.5 font-normal">
                    {give}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
