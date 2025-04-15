import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import photoCard from "../assets/passport.png";

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
    if (!scrollInput) return;
  
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newValue = Math.floor(value * 120);
      scrollInput.value = Math.max(-2, Math.min(120, newValue));
      console.log(scrollInput.value)
    });
  
    return () => unsubscribe();
  }, [scrollYProgress, scrollInput]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] bg-primary md:h-[300vh]"
    >
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="sticky top-0 w-full min-h-screen flex flex-col text-black bg-white"
      >
        <div className="absolute inset-0 bg-white/90 flex flex-col w-full h-full">
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
                <div className="bg-primary border border-black rounded-xl w-56 h-56 md:w-64 md:h-64 overflow-hidden">
                  <img
                    src={photoCard}
                    alt="Photo Card"
                    className="w-auto h-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className=" w-full h-2/6 flex justify-center items-end pb-3 md:pb-0 md:items-center">
                <div className="h-auto m-2 md:h-24 w-full lg:w-8/12 px-2 py-2 bg-primary rounded-lg flex justify-around items-center">
                  <div className="border-r border-black flex justify-center flex-1">
                    <FaTwitter size={40} className="text-customGreen-dark cursor-pointer"/>
                  </div>
                  <div className="border-r border-black flex justify-center flex-1">
                    <FaGithub size={40} className="text-customGreen-dark cursor-pointer"/>
                  </div>
                  <div className="border-r border-black flex justify-center flex-1">
                    <SiMedium size={40} className="text-customGreen-dark cursor-pointer"/>
                  </div>
                  <div className="flex justify-center flex-1">
                    <FaLinkedin size={40} className="text-customGreen-dark cursor-pointer"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
