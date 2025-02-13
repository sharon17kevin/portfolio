import NavBar from "./NavBar";
import photoCard from "../assets/photoCard.webp";
import vine from "../assets/vine.riv";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect, useRef } from "react";
import { useScroll } from "motion/react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const STATE_MACHINE_NAME = "Main";
  const { rive, RiveComponent } = useRive({
    src: "vine.riv",
    stateMachines: STATE_MACHINE_NAME,
    layout: new Layout({
      fit: Fit.FitHeight,
      alignment: Alignment.CenterLeft,
    }),
    autoplay: true,
  });

  const scrollInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    "scrollNumber",
    -2
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (scrollInput) {
        const newValue = Math.floor(value * 120);
        scrollInput.value = Math.max(-2, Math.min(120, newValue));
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, scrollInput]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-primary">
      <div className="sticky top-0 w-full min-h-screen flex flex-col text-black bg-white">
        {/* <NavBar /> */}
        <div className=" max-w-screen-xl h-screen mx-auto flex items-center justify-center">
          <div className=" flex flex-col flex-1 h-full pl-10 justify-start w-2/5 overflow-visible">
            <div className="z-10 w-[800px] flex flex-1 -mr-10 font-cormorantUpright font-bold text-8xl overflow-visible items-center">
              <p className="text-customGreen-dark">
                HEY, I'M <br />
                SHARON-KEVIN
              </p>
            </div>
            <div className=" flex flex-1">
              <RiveComponent />
            </div>
          </div>
          <div className=" ml-12 pt-20 w-3/5 flex flex-1 justify-end items-center">
            <div className="w-[600px] h-[550px]">
              <img
                src={photoCard}
                alt="Photo Card"
                className="w-auto h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
