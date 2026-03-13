import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { motion, useScroll } from "motion/react";
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
    -2,
  );

  useEffect(() => {
    if (!scrollInput) return;

    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newValue = Math.floor(value * 120);
      scrollInput.value = Math.max(-2, Math.min(120, newValue));
    });

    return () => unsubscribe();
  }, [scrollYProgress, scrollInput]);

  const socialLinks = [
    {
      icon: <FaTwitter size={18} />,
      href: "https://x.com/Sharonkvn",
      label: "Twitter",
    },
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/sharon17kevin",
      label: "GitHub",
    },
    {
      icon: <SiMedium size={18} />,
      href: "https://medium.com/@sharon14kevin",
      label: "Medium",
    },
    {
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/in/sharon-kevin-anyanwu-8b8b0929a/",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-[800px] md:h-[300vh] pt-16 md:pt-20"
    >
      <div className="sticky top-0 w-full min-h-full md:min-h-screen flex flex-col bg-ivory overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1a3a2a 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative flex flex-col md:flex-row w-full max-w-[1400px] h-full mx-auto items-center justify-center px-6 lg:px-12">
          {/* Left: Text Content */}
          <div className="w-full lg:w-3/5 md:w-1/2 flex flex-col justify-center pt-20 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="font-outfit text-xs md:text-sm tracking-[0.3em] uppercase text-sage mb-4 md:mb-6">
                Software Developer & AI Enthusiast
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h1 className="font-playfair font-medium text-5xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[0.95] text-forest-800 mb-6 md:mb-8">
                Sharon
                <br />
                <span className="italic text-forest-600">Kevin</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="editorial-rule w-24 md:w-32 mb-6 md:mb-8" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="font-outfit text-base md:text-lg text-forest-800/60 max-w-md leading-relaxed mb-8 md:mb-12"
            >
              Building intelligent solutions at the intersection of software
              engineering, artificial intelligence, and precision agriculture.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex gap-5"
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 border border-forest-800/15 flex items-center justify-center text-forest-800/50 hover:text-ivory hover:bg-forest-800 hover:border-forest-800 transition-all duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo + Rive Animation */}
          <div className="w-full lg:w-2/5 md:w-1/2 flex flex-col items-center justify-center md:justify-end h-auto md:h-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative mt-10 md:mt-0"
            >
              {/* Decorative frame */}
              <div className="absolute -inset-3 md:-inset-4 border border-forest-600/20" />
              <div className="absolute -inset-6 md:-inset-8 border border-forest-600/10" />

              <div className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden bg-forest-100">
                <img
                  src={photoCard}
                  alt="Sharon-Kevin Anyanwu"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Rive animation container */}
            <div className="hidden md:block absolute top-0 left-0 w-56 h-48 opacity-50 -translate-y-16 translate-x-2 xl:translate-x-14">
              <RiveComponent />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-outfit text-[10px] tracking-[0.3em] uppercase text-sage">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-sage to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
