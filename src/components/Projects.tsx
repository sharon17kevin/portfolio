import { motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import wildsport from "../assets/wildsport.webp";
import a3c from "../assets/A3C.webp";
import StaggeredMotion from "./StaggeredMotion";

const projects = [
  {
    name: "Fantasy Football App",
    subtitle: "An app for my undergrad fantasy football league",
    link: "Github",
    address: "https://github.com/sharon17kevin/WildSport",
    image: wildsport,
  },
  {
    name: "Used Car Price Prediction",
    subtitle:
      "A machine learning project that predicts the price of used cars based on features.",
    link: "Kaggle",
    address: "https://www.kaggle.com/code/sharonkevin/used-car-prices",
    image:
      "https://images.unsplash.com/photo-1621568670853-268e3dc835b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Image Caption Generator",
    subtitle:
      "An image caption generator built with PyTorch that uses a CNN-RNN architecture.",
    link: "Github",
    address: "https://github.com/sharon17kevin/captionGenerator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  },
  {
    name: "Crop Rotation Decision Support System",
    subtitle:
      "A crop rotation decision support app that uses Random Forest to predict yeild based on parameters",
    link: "Github",
    address: "https://github.com/sharon17kevin/WildSport",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  },
  {
    name: "A3C Agent for Atari Gymnasium",
    subtitle: "An A3C Agent trained to play Atari Kung-Fu Master",
    link: "Collab",
    address:
      "https://colab.research.google.com/drive/14p55LF8d3bz26dzSHaeTw_MofbK4p7EU?usp=sharing",
    image: a3c,
  },
  {
    name: "RAWG Clone",
    subtitle: "A clone of the RAWG website",
    link: "Github",
    address: "https://github.com/sharon17kevin/pmg-prints",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  },
  // {
  //   name: "Neural Network",
  //   subtitle: "An app for my undergrad fantasy football league",
  //   link: "Github",
  //   address: "https://github.com/sharon17kevin/WildSport",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  // },
];

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const totalSlides = projects.length;
      const step = 1 / totalSlides; // Define scroll threshold per slide

      // Determine which slide should be active
      let newSlide = Math.floor(value / step);
      if (newSlide >= totalSlides) newSlide = totalSlides - 1;
      if (newSlide !== currentSlide) setCurrentSlide(newSlide);
    });

    return () => unsubscribe();
  }, [scrollYProgress, currentSlide]);

  return (
    <section ref={containerRef} className=" bg-white">
      <div className="flex w-full items-center overflow-hidden">
        <div className="flex w-10/12 mx-auto flex-col items-center justify-start py-16 gap-4 space-y-0">
          <div className="flex w-full items-center justify-start">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className=" flex flex-grow h-20 md:h-32 items-center justify-center"
            >
              <p className=" font-ebgaramond font-thin text-lg sm:text-2xl md:text-4xl">
                PROJECTS
              </p>
            </motion.div>
          </div>
          <div className="w-full bg-emerald-200">
            <StaggeredMotion
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              childClassName=""
              staggerDelay={0.15}
              duration={0.6}
            >
              {projects.map((card, index) => (
                <Card
                  key={index}
                  name={card.name}
                  subtitle={card.subtitle}
                  link={card.link}
                  address={card.address}
                  image={card.image}
                />
              ))}
            </StaggeredMotion>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Props {
  name: string;
  subtitle: string;
  link: string;
  address: string;
  image: string;
}

const Card = ({ name, subtitle, link, address, image }: Props) => {
  return (
    <div
      className={`relative group p-4 h-52 rounded-sm overflow-hidden font-darkerGrotesque`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-customGreen-dark opacity-30 transition-all duration-300 group-hover:opacity-50"></div>

      {/* Text Content */}
      <div className="z-10 flex flex-col justify-center h-full text-white text-xl border-0 border-white group-hover:border-2 ">
        <div className="text-center text-2xl font-darkerGrotesque font-bold -translate-y-2 transition-all duration-500 transform group-hover:translate-y-0">
          {name}
        </div>
        <div className="text-center text-lg opacity-0 transition-all translate-y-4 duration-1000 group-hover:opacity-100 group-hover:translate-y-0">
          <p>
            {subtitle}
            <a href={`${address}`} className="font-light cursor-pointer">
              {" | " + link}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
