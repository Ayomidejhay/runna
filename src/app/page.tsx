import Image from "next/image";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import EarnRewards from "./components/EarnRewards";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WellnessCardsSection from "./components/WellnessCardsSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <WellnessCardsSection />
      <HowItWorks />
      <Features />
      <EarnRewards />
      <CTA />
      <Footer />
    </div>
  );
}


{/*mobile caurosel*/}
      // <div
      //   className="lg:hidden relative max-w-6xl mx-auto text-black"
      //   onMouseEnter={() => setIsPaused(true)}
      //   onMouseLeave={() => setIsPaused(false)}
      // >
      //   <div
      //     className="relative  rounded-2xl  select-none"
      //     style={{ position: "relative", overflow: "hidden" }}
      //   >
      //     <AnimatePresence mode="wait">
      //       <motion.div
      //         key={currentIndex}
      //         layout
      //         layoutId="carousel-content"
      //         initial={{ opacity: 0, x: 300 }}
      //         animate={{ opacity: 1, x: 0 }}
      //         exit={{ opacity: 0, x: -300 }}
      //         transition={{ duration: 0.5, ease: "easeInOut" }}
      //         drag="x"
      //         dragConstraints={{ left: -100, right: 100 }}
      //         dragElastic={0.2}
      //         onDragStart={() => setIsPaused(true)}
      //         onDragEnd={handleDragEnd}
      //         whileDrag={{ cursor: "grabbing" }}
      //         style={{ position: "relative" }}
      //         className=" flex flex-col-reverse gap-8  items-center cursor-grab"
      //       >
      //         <div className="space-y-6 text-center">
      //           <motion.h3
      //             initial={{ opacity: 0, y: 20 }}
      //             animate={{ opacity: 1, y: 0 }}
      //             transition={{ delay: 0.3, duration: 0.5 }}
      //             className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 "
      //           >
      //             {steps[currentIndex].title}
      //           </motion.h3>

      //           <motion.p
      //             initial={{ opacity: 0, y: 20 }}
      //             animate={{ opacity: 1, y: 0 }}
      //             transition={{ delay: 0.4, duration: 0.5 }}
      //             className="text-[18px] max-w-[500px]"
      //           >
      //             {steps[currentIndex].description}
      //           </motion.p>
      //         </div>

      //         <motion.div
      //           initial={{ opacity: 0, scale: 0.8 }}
      //           animate={{ opacity: 1, scale: 1 }}
      //           transition={{ delay: 0.2, duration: 0.5 }}
      //           className="relative "
      //         >
      //           <div className="relative  rounded-xl overflow-hidden shadow-lg">
      //             <Image
      //               src={steps[currentIndex].image}
      //               alt={steps[currentIndex].title}
      //               width={600}
      //               height={500}
      //               className="object-cover"
      //             />
      //           </div>
      //         </motion.div>
      //       </motion.div>
      //     </AnimatePresence>
      //   </div>

      //   {/* Progress indicators */}
      //   <div className="flex justify-center mt-8 space-x-2">
      //     {steps.map((_, index) => (
      //       <motion.button
      //         key={index}
      //         onClick={() => setCurrentIndex(index)}
      //         className={`h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
      //           index === currentIndex
      //             ? "w-2 bg-brightblue"
      //             : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
      //         }`}
      //         initial={false}
      //         animate={{
      //           scale: index === currentIndex ? 1 : 1,
      //         }}
      //         transition={{ duration: 0.3 }}
      //         aria-label={`Go to slide ${index + 1}`}
      //       />
      //     ))}
      //   </div>
      // </div>

      // <div className="lg:hidden">
      //   <Install />
      // </div>