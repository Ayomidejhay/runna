import Image from "next/image";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <HowItWorks />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  );
}
