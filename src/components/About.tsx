import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";

const slides = [
  {
    title: "My Background",
    title2: "RoadMap an Efficient Farm",
    text: "Computer Science graduate blending software development with AI and cloud expertise. Passionate about applying tech to real-world problems, especially in agriculture and education.",
    image:
      "https://images.unsplash.com/photo-1572816225927-d08fb138f2b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Artificial Intelligence",
    title2: "Megan Has Done Time",
    text: "Driven by AI’s power to automate and solve complex problems. Experienced in machine learning, deep learning, and computer vision through practical, impactful projects.",
    image:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Precision Agriculture",
    title2: "RoadMap an Efficient Farm",
    text: "Fusing early farming roots with AI to boost productivity and sustainability. Focused on building data-driven tools for smarter agricultural decisions.",
    image:
      "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Computing",
    title2: "Scale Seamlessly with the Cloud",
    text: "I specialize in deploying scalable cloud-native applications using AWS and serverless technologies. Whether it's building APIs with AWS Lambda or managing infrastructure with Terraform, I ensure performance, reliability, and efficiency in every solution.",
    image:
      "https://images.unsplash.com/photo-1667984390533-64bdefe719ea?auto=format&fit=crop&w=800&q=80",
  }  
];

const About = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `${window.innerHeight * 4}px`;
    }
  }, []);

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
    <section ref={containerRef} className="relative bg-primary">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden will-change-transform">
        <div className="flex md:w-11/12 w-full h-screen mx-auto flex-row items-center justify-start gap-12">
          <div className=" h-full w-14 flex-col-reverse flex md:flex-row items-center justify-center md:justify-start md:w-1/4">
            {/* Indicator Numbers */}
            <div className=" flex h-52">
              <div className="h-full flex flex-col justify-around font-ebgaramond font-thin">
                <p
                  className={`${
                    currentSlide == 0
                      ? "md:text-2xl sm:text-xl text-base text-customBlue-dark"
                      : "text-xs sm:text-sm md:text-base text-gray-400"
                  }`}
                >
                  01
                </p>
                <p
                  className={`${
                    currentSlide == 1
                      ? "md:text-2xl sm:text-xl text-base text-customBlue-dark"
                      : "text-xs sm:text-sm md:text-base text-gray-400"
                  }`}
                >
                  02
                </p>
                <p
                  className={`${
                    currentSlide == 2
                      ? "md:text-2xl sm:text-xl text-base text-customBlue-dark"
                      : "text-xs sm:text-sm md:text-base text-gray-400"
                  }`}
                >
                  03
                </p>
                <p
                  className={`${
                    currentSlide == 3
                      ? "md:text-2xl sm:text-xl text-base text-customBlue-dark"
                      : "text-xs sm:text-sm md:text-base text-gray-400"
                  }`}
                >
                  04
                </p>
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
                <p className="font-ebgaramond font-thin text-base sm:text-lg md:text-xl">
                  ABOUT
                </p>
                <div className="hidden md:flex">
                  <ArrowLeft />
                </div>
              </div>
            </motion.div>
          </div>
          <div className=" overflow-hidden w-3/4 h-screen">
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
          <h1 className="text-customGreen font-ebgaramond lg:text-4xl md:text-2xl sm:text-lg text-base">
            {"0" + (index + 1)}
          </h1>
          <h1 className="font-cormorantUpright font-bold lg:text-2xl md:text-xl sm:text-lg text-base text-left text-black">
            {title.toUpperCase()}
          </h1>
          <p className="font-darkerGrotesque text-black lg:text-lg md:text-base text-sm">
            {text}
          </p>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="aspect-[4/3] md:aspect-auto h-auto md:h-1/2 w-full">
            <img
              src={image}
              alt="Profile"
              className="rounded-md object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
