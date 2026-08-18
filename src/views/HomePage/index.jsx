import Marquee from "@/components/Marquee";
import Banner from "./Banner";
import AboutUs from "./About";
import TrainingSlider from "./TrainingSlider";
import WhyUs from "./WhyUs";
import PricingPlan from "./PricingPlan";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Marquee />
      <AboutUs />
      <TrainingSlider />
      <WhyUs />
      <PricingPlan />
    </>
  );
};

export default HomePage;
