import { motion } from "motion/react";
import wildsport from "../assets/wildsport.webp";
import a3c from "../assets/A3C.webp";
import rawg from "../assets/rawg.webp";
import final from "../assets/final.webp";
import StaggeredMotion from "./StaggeredMotion";

const projects = [
  {
    name: "Fantasy Football App",
    subtitle: "An app for my undergrad fantasy football league",
    link: "Github",
    address: "https://github.com/sharon17kevin/WildSport",
    image: wildsport,
    tag: "Full Stack",
  },
  {
    name: "Used Car Price Prediction",
    subtitle:
      "A machine learning project that predicts the price of used cars based on features.",
    link: "Kaggle",
    address: "https://www.kaggle.com/code/sharonkevin/used-car-prices",
    image:
      "https://images.unsplash.com/photo-1621568670853-268e3dc835b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Machine Learning",
  },
  {
    name: "Image Caption Generator",
    subtitle:
      "An image caption generator built with PyTorch that uses a CNN-RNN architecture.",
    link: "Github",
    address: "https://github.com/sharon17kevin/captionGenerator",
    image:
      "https://images.unsplash.com/photo-1641840296052-1b41c4bce493?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Deep Learning",
  },
  {
    name: "Crop Rotation DSS",
    subtitle:
      "A crop rotation decision support app that uses Random Forest to predict yield based on parameters",
    link: "Github",
    address: "https://github.com/sharon17kevin/FinalYearProject",
    image: final,
    tag: "Agriculture AI",
  },
  {
    name: "A3C Atari Agent",
    subtitle: "An A3C Agent trained to play Atari Kung-Fu Master",
    link: "Colab",
    address:
      "https://colab.research.google.com/drive/14p55LF8d3bz26dzSHaeTw_MofbK4p7EU?usp=sharing",
    image: a3c,
    tag: "Reinforcement Learning",
  },
  {
    name: "RAWG Clone",
    subtitle: "A clone of the RAWG website",
    link: "Github",
    address: "https://github.com/sharon17kevin/sharonz-game-hub",
    image: rawg,
    tag: "Frontend",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-outfit text-xs tracking-[0.3em] uppercase text-sage mb-3">
              Selected Work
            </p>
            <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-medium text-forest-800">
              Projects
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-outfit text-sm text-forest-800/40 max-w-xs mt-4 md:mt-0 md:text-right"
          >
            A curated selection of projects spanning AI, full-stack development, and agricultural technology.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="editorial-rule mb-12 md:mb-16 origin-left"
        />

        {/* Project grid */}
        <StaggeredMotion
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          childClassName=""
          staggerDelay={0.12}
          duration={0.7}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </StaggeredMotion>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    name: string;
    subtitle: string;
    link: string;
    address: string;
    image: string;
    tag: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <a
      href={project.address}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block relative overflow-hidden ${
        index === 0 || index === 3 ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
      }`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-forest-950/50 transition-all duration-500 group-hover:bg-forest-950/70" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
        {/* Tag */}
        <div className="flex justify-between items-start">
          <span className="font-outfit text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/50 border border-white/15 px-3 py-1">
            {project.tag}
          </span>
          <span className="font-playfair text-sm text-white/30">
            0{index + 1}
          </span>
        </div>

        {/* Bottom content */}
        <div>
          <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            {project.name}
          </h3>

          <div className="overflow-hidden">
            <p className="font-outfit text-sm text-white/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">
              {project.subtitle}
            </p>
          </div>

          <div className="overflow-hidden mt-3">
            <div className="flex items-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-150">
              <span className="font-outfit text-xs tracking-[0.2em] uppercase text-forest-400">
                View on {project.link}
              </span>
              <svg
                className="w-4 h-4 text-forest-400 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300 delay-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Projects;
