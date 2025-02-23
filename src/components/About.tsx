import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";

const slides = [
  {
    title: "My Background",
    title2: "RoadMap an Efficient Farm",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Precision Agriculture",
    title2: "RoadMap an Efficient Farm",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "App Development",
    title2: "Capture the Attention of Viewers",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Machine Learning",
    title2: "Megan Has Done Time",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
  },
];

const About = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const totalSlides = slides.length;
      const step = 1 / totalSlides; // Define scroll threshold per slide

      // Determine which slide should be active
      let newSlide = Math.floor(value / step);
      if (newSlide >= totalSlides) newSlide = totalSlides - 1;
      if (newSlide !== currentSlide) setCurrentSlide(newSlide);
    });

    return () => unsubscribe();
  }, [scrollYProgress, currentSlide]);

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-primary">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="flex md:w-10/12 w-full h-screen mx-auto flex-row items-center justify-start gap-12">
          <div className=" h-full w-14 flex-col-reverse flex md:flex-row items-center justify-center md:justify-start md:w-1/3">
            {/* Indicator Numbers */}
            <div className=" flex h-52">
              <div className="h-full flex flex-col justify-around font-ebgaramond font-thin">
                <p className={`${currentSlide == 0? "md:text-2xl sm:text-xl text-base text-customBlue-dark": "text-xs sm:text-sm md:text-base text-gray-400"}`}>01</p>
                <p className={`${currentSlide == 1? "md:text-2xl sm:text-xl text-base text-customBlue-dark": "text-xs sm:text-sm md:text-base text-gray-400"}`}>02</p>
                <p className={`${currentSlide == 2? "md:text-2xl sm:text-xl text-base text-customBlue-dark": "text-xs sm:text-sm md:text-base text-gray-400"}`}>03</p>
                <p className={`${currentSlide == 3? "md:text-2xl sm:text-xl text-base text-customBlue-dark": "text-xs sm:text-sm md:text-base text-gray-400"}`}>04</p>
              </div>
              <div className=" h-full flex flex-col justify-center items-center space-y-1">
                <div className="bg-gray-300 rounded-full w-2 h-2 md:w-4 md:h-4"></div>
                <motion.div
                  style={{ scaleY, transformOrigin: "top" }}
                  className="w-[2px] flex-grow bg-gray-300"
                ></motion.div>
                <div className="bg-gray-300 rounded-full w-2 h-2 md:w-4 md:h-4"></div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex md:flex-grow h-10 md:h-56 items-start pl-10 space-x-2"
            >
              <div className=" flex justify-start items-center">
                <p className="font-ebgaramond font-thin text-base sm:text-lg md:text-xl">ABOUT</p>
                <div className="hidden md:flex">
                  <ArrowLeft />
                </div>
              </div>
            </motion.div>
          </div>
          <div className=" overflow-hidden w-2/3 h-screen">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <div
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                className="flex transition-transform duration-500 ease-out"
              >
                {slides.map((card, index) => Card({ ...card, index }))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Props {
  title: string;
  text: string;
  image: string;
  index: number;
}

const Card = ({ title, text, image, index }: Props) => {
  return (
    <div
      key={index}
      className=" w-full h-screen flex-shrink-0 flex items-center justify-center p-0 md:p-4"
    >
      <div className="flex flex-col sm:flex-row w-full h-full">
        <div className="flex flex-1 flex-col space-y-0 md:space-y-2 justify-center md:items-start text-left pr-0 md:pr-10">
          <h1 className="text-customGreen font-ebgaramond lg:text-4xl md:text-2xl sm:text-lg text-base">{"0" + (index + 1)}</h1>
          <h1 className="font-cormorantUpright font-bold lg:text-2xl md:text-xl sm:text-lg text-base text-left text-black">
            {title.toUpperCase()}
          </h1>
          <p className="font-darkerGrotesque text-black lg:text-lg md:text-base text-sm">{text}</p>
        </div>
        <div className="flex flex-1">
          <img
            src={image}
            alt="Profile"
            className="rounded-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
