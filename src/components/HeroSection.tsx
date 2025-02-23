import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import photoCard from '../assets/passport.png'
import { useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import Twitter from "../icons/Twitter";
import GitHub from "../icons/GitHub";
import Medium from "../icons/Medium";
import LinkedIn from "../icons/LinkedIn";

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
    <section ref={containerRef} className="relative h-[100vh] bg-primary md:h-[300vh]">
      <div className="sticky top-0 w-full min-h-screen flex flex-col text-black bg-white">
        <div className=" flex-col md:flex-row flex w-[1400px] max-w-full h-screen  mx-auto items-center justify-center">
          <div className="  w-full lg:w-1/2 md:w-3/5 flex flex-col h-full justify-start overflow-visible">
            <div className="flex flex-1 font-cormorantUpright font-semibold text-2xl sm:text-6xl md:text-[80px] overflow-visible items-center justify-center md:justify-start">
              <p className="text-customGreen-dark ml-10 text-center md:text-left ">
                HEY, I'M <br />
                SHARON-KEVIN
              </p>
            </div>
            <div className=" hidden md:flex flex-1 overflow-visible">
              <RiveComponent />
            </div>
          </div>
          <div className="  h-full w-full lg:w-1/2 md:w-2/5 flex flex-col justify-end items-center">
            {/* <div className="max-w-[600px] max-h-[550px]">
              <img
                src={photoCard}
                alt="Photo Card"
                className="w-auto h-full"
                loading="lazy"
              />
            </div> */}
            <div className=" w-full h-4/6 flex justify-center items-end">
              <div className="bg-customGreen-light border border-black rounded-xl w-56 h-56 md:w-64 md:h-64 overflow-hidden">
              <img
                src={photoCard}
                alt="Photo Card"
                className="w-auto h-full"
                loading="lazy"
              />
              </div>
            </div>
            <div className=" w-full h-2/6 flex justify-center items-end pb-3 md:pb-0 md:items-center">
              <div className="h-auto md:h-24 w-full lg:w-8/12 px-2 py-2 bg-customGreen-light border border-black rounded-lg flex justify-around items-center">
              <Twitter size={50}/><GitHub size={50}/><Medium width={79} height={50}/><LinkedIn size={50}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
