import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";

const slides = [
  {
    title: "Precision Agriculture",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "App Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Machine Learning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
  },
];

const Interests = () => {
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

  const scaleY = useSpring(scrollYProgress);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="flex flex-col w-11/12 mx-auto md:flex-row items-center justify-start gap-12">
          <div className="h-screen flex items-center justify-start bg-customGreen-light w-1/3">
            <div className="bg-white h-screen flex flex-col justify-center items-center space-y-1">
              <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="w-[4px] flex-grow bg-customGreen"
              ></motion.div>
              <div className="bg-customGreen rounded-full w-4 h-4"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white flex flex-grow h-32 items-center justify-end pr-14 space-x-2"
            >
              <p className="font-ebgaramond font-thin text-xl">INTERESTS</p>
              <ArrowLeft />
            </motion.div>
          </div>
          <div className="bg-white overflow-hidden w-2/3 h-96">
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
      className="bg-primary rounded-lg border border-black shadow-lg w-full h-96 flex-shrink-0 flex items-center justify-center p-4"
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="font-darkerGrotesque font-bold text-2xl text-center">{title}</h1>
          <p className="font-darkerGrotesque text-xl">{text}</p>
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

export default Interests;
