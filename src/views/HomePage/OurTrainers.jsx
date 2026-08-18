import SubHeading from "@/components/SubHeading";
import TrainerCard from "@/components/TrainerCard";

const OurTrainers = () => {
  return (
    <>
      <div
        className="w-full
        py-25
        bg-[#171e2e]
        bg-[url('/section-bg-circle-shape.png')]
        bg-cover
        bg-center
        bg-no-repeat"
      >
        <div className="container">
          <SubHeading
            headingTitle="Trainers"
            tag="our Trainers"
            mainHeading={
              <>
                <span className="block">Your Fitness Journey Starts </span>

                <span className="block">
                  with <span className="text-[#d7fb00]">Our Expert</span>{" "}
                  Trainers
                </span>
              </>
            }
          />

          <div className="">
            <TrainerCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTrainers;
