import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import { link } from "motion/react-client";

const projects = [
  {
    name: "Fantasy Football App",
    subtitle: "An app for my undergrad fantasy football league",
    link: "Github",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  },
  {
    name: "AI walkthrough and upload",
    subtitle: "An app for my undergrad fantasy football league",
    link: "Github",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  },
  {
    name: "Full AWS AI walkthrough",
    subtitle: "An app for my undergrad fantasy football league",
    link: "Github",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  },
  {
    name: "AWS ETL project",
    subtitle: "An app for my undergrad fantasy football league",
    link: "Github",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  },
  {
    name: "Telecomunication website",
    subtitle: "An app for my undergrad fantasy football league",
    link: "Github",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  },
  {
    name: "Neural Network",
    subtitle: "An app for my undergrad fantasy football league",
    link: "Github",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  },
  {
    name: "Crop Rotation Decision Support System",
    subtitle: "An app for my undergrad fantasy football league",
    link: "Github",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhFPaEvzlN2XarX3WPG5X_rrkEjGYAuJpHQ&s",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleY = useSpring(scrollYProgress);

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
              <p className="font-ebgaramond font-thin text-xl">PROJECTS</p>
              <ArrowLeft />
            </motion.div>
          </div>
          <div className="md:w-2/3 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {projects.map((card, index) => (
                  <Card
                    key={index}
                    name={card.name}
                    subtitle={card.subtitle}
                    link={card.link}
                    image={card.image}
                  />
                ))}
              </div>
            </motion.div>
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
  image: string;
}

const Card = ({ name, subtitle, link, image }: Props) => {
  return (
    <div
      className={`relative group p-4 h-52 rounded-sm overflow-hidden font-darkerGrotesque`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-customGreen opacity-40 transition-all duration-300 group-hover:opacity-60"></div>

      {/* Text Content */}
      <div className="z-10 flex flex-col justify-center h-full text-white text-xl border-0 border-white group-hover:border-2 ">
        <div className="text-center text-2xl font-bold -translate-y-2 transition-all duration-500 transform group-hover:translate-y-0">
          {name}
        </div>
        <div className="text-center text-lg opacity-0 transition-all translate-y-4 duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <p>
            {subtitle}
            <span className="font-light">{" | " + link}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
