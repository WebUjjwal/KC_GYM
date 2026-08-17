import Marquee from "@/components/Marquee";
import Banner from "./Banner";
import AboutUs from "./About";
import TrainingSlider from "./TrainingSlider";
import WhyUs from "./WhyUs";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Marquee />
      <AboutUs />
      <TrainingSlider />
      <WhyUs />
    </>
  );
};

export default HomePage;
