import Marquee from "@/components/Marquee";
import Banner from "./Banner";
import AboutUs from "./About";
import TrainingSlider from "./TrainingSlider";
import WhyUs from "./WhyUs";
import PricingPlan from "./PricingPlan";
import OurTrainers from "./OurTrainers";
import FAQ from "./FAQ";
import TestimonialSlider from "./TestimonialSlider";

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
      <FAQ />
      <TestimonialSlider />
    </>
  );
};

export default HomePage;
