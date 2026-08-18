import Marquee from "@/components/Marquee";
import Banner from "./Banner";
import AboutUs from "./About";
import TrainingSlider from "./TrainingSlider";
import WhyUs from "./WhyUs";
import PricingPlan from "./PricingPlan";
import OurTrainers from "./OurTrainers";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Marquee />
      <AboutUs />
      <TrainingSlider />
      <WhyUs />
      <PricingPlan />
      <OurTrainers />
    </>
  );
};

export default HomePage;
