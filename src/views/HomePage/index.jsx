import Marquee from "@/components/Marquee";
import Banner from "./Banner";
import AboutUs from "./About";
import TrainingSlider from "./TrainingSlider";
import WhyUs from "./WhyUs";
import PricingPlan from "./PricingPlan";
import OurTrainers from "./OurTrainers";
import FAQCard from "@/components/FAQCard";
import FAQ from "./FAQ";

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
    </>
  );
};

export default HomePage;
