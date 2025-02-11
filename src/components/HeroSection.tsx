import NavBar from "./NavBar";
import photoCard from "../assets/photoCard.webp";
import { useRive } from "@rive-app/react-canvas";

const HeroSection = () => {
  const { rive, RiveComponent } = useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    stateMachines: "bumpy",
    autoplay: false,
  });
  return (
    <div className="w-full min-h-screen flex flex-col text-black bg-white">
      <NavBar />
      <div className=" max-w-screen-xl w-full mx-auto bg-black flex flex-row items-center justify-center">
        <div className="bg-blue-200 flex flex-col pl-10 justify-end w-2/5 overflow-visible">
          <div className="z-10 w-[800px] h-52 -mr-10 font-cormorantUpright font-bold text-8xl overflow-visible">
            <p>
              HEY, I'M <br />
              SHARON-KEVIN
            </p>
          </div>
          <div className="bg-green-200 h-52">
            <RiveComponent
              // onMouseEnter={() => rive && rive.play()}
              // onMouseLeave={() => rive && rive.pause()}
              onScroll={() => rive && rive.play()}
            />
          </div>
        </div>
        <div className="bg-yellow-200 ml-12 pt-20 w-3/5 flex justify-end items-center">
          <div className="w-[600px] h-[550px] bg-blue-200">
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
  );
};

export default HeroSection;
