import React from "react";
import About from "./components/About";
import Footer from "../components/Footer";
import FifthSection from "../components/FifthSection";

const page = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <About
          caption="About Us"
          header="More Than an App — A Movement for Pet Wellness"
          headerClassName="text-5xl"
          text="We’re reimagining how pet owners build healthy habits with their animals — through simple routines, fun challenges, and a community that celebrates every small win."
          imageSrc="/about-one.png"
          imageAlt="about"
          flexDirection="flex-row"
        />
        <About
          caption="Our Vision"
          header="Where We're Headed"
          headerClassName="text-3xl"
          text="A world where pets and their humans thrive through connected, joyful, and healthy everyday moments."
          imageSrc="/about-two.png"
          imageAlt="about"
          flexDirection="flex-row-reverse"
        />
        <About
          caption="Our Mission"
          header="Why We Exist"
          headerClassName="text-3xl"
          text="To inspire better wellness habits for pets and their humans through fun, goal-driven challenges that strengthen bonds, encourage movement, and build thriving communities."
          imageSrc="/about-three.png"
          imageAlt="about"
          flexDirection="flex-row"
        />
        <About
          caption="Our Core Values"
          header="What We Stand For"
          headerClassName="text-3xl"
          text="Integrity, joy, care, innovation, and connection — the compass that guides every product, challenge, and interaction on our platform."
          imageSrc="/about-four.png"
          imageAlt="about"
          flexDirection="flex-row-reverse"
        />
        <About
          caption="Our Story"
          header="How It All Began"
          headerClassName="text-3xl"
          text="Born from a love for pets and the pursuit of meaningful wellness, we set out to make every walk, challenge, and connection count."
          imageSrc="/about-five.png"
          imageAlt="about"
          flexDirection="flex-row"
        />
      </div>
      <div className="-mt-24">
        <FifthSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;
