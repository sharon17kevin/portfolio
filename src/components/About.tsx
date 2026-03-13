import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "My Background",
    subtitle: "The Foundation",
    text: "Computer Science graduate blending software development with AI and cloud expertise. Passionate about applying tech to real-world problems, especially in agriculture and education.",
    image:
      "https://images.unsplash.com/photo-1572816225927-d08fb138f2b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "The Craft",
    text: "Driven by AI's power to automate and solve complex problems. Experienced in machine learning, deep learning, and computer vision through practical, impactful projects.",
    image:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Precision Agriculture",
    subtitle: "The Mission",
    text: "Fusing early farming roots with AI to boost productivity and sustainability. Focused on building data-driven tools for smarter agricultural decisions.",
    image:
      "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cloud Computing",
    subtitle: "The Scale",
    text: "Deploying scalable cloud-native applications using AWS and serverless technologies. Building APIs with Lambda, managing infrastructure with Terraform — ensuring performance and reliability.",
    image:
      "https://images.unsplash.com/photo-1667984390533-64bdefe719ea?auto=format&fit=crop&w=800&q=80",
  },
];

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef });

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const isMobile = window.innerWidth < 768;
        const multiplier = isMobile ? 4 : 3;
        containerRef.current.style.height = `${window.innerHeight * multiplier}px`;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const totalSlides = slides.length;
      const step = 1 / totalSlides;
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
    <section id="about" ref={containerRef} className="relative bg-forest-800">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="flex w-full h-full">
          {/* Left sidebar — Navigation & Label */}
          <div className="hidden md:flex w-16 lg:w-24 flex-shrink-0 flex-col items-center justify-center border-r border-white/10">
            <div className="flex flex-col items-center gap-5">
              <p className="font-outfit text-[10px] tracking-[0.4em] uppercase text-white/30 [writing-mode:vertical-lr] rotate-180 mb-6">
                About Me
              </p>

              <div className="flex flex-col items-center gap-2.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className="flex items-center justify-center w-5 h-5 cursor-pointer"
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    <div
                      className={`transition-all duration-500 rounded-full ${
                        currentSlide === i
                          ? "w-2.5 h-2.5 bg-forest-400"
                          : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="w-px h-16 bg-white/10 relative overflow-hidden">
                <motion.div
                  style={{ scaleY, transformOrigin: "top" }}
                  className="w-full h-full bg-forest-400"
                />
              </div>

              <p className="font-playfair text-sm text-white/40">
                <span className="text-white/80">0{currentSlide + 1}</span>
                <span className="mx-1">/</span>0{slides.length}
              </p>
            </div>
          </div>

          {/* Mobile top bar */}
          <div className="md:hidden absolute top-4 left-0 right-0 flex items-center justify-between px-6 z-10">
            <p className="font-outfit text-[10px] tracking-[0.3em] uppercase text-white/30">
              About Me
            </p>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-500 rounded-full ${
                    currentSlide === i
                      ? "w-4 h-1.5 bg-forest-400"
                      : "w-1.5 h-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main content area — slides */}
          <div className="flex-1 h-full overflow-hidden">
            <div
              className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  <SlideCard slide={slide} isActive={currentSlide === index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="hidden" />
    </section>
  );
};

interface SlideProps {
  slide: {
    title: string;
    subtitle: string;
    text: string;
    image: string;
  };
  isActive: boolean;
}

const SlideCard = ({ slide, isActive }: SlideProps) => {
  return (
    <div className="h-full w-full flex items-center px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-8 md:py-0 overflow-y-auto">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
        {/* Text content */}
        <div className="flex-1 flex flex-col justify-center order-2 md:order-1 w-full min-w-0">
          <motion.div
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : -30,
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-outfit text-[11px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-forest-400 mb-2 sm:mb-3">
              {slide.subtitle}
            </p>
          </motion.div>

          <motion.h2
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : -30,
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-playfair font-medium text-white leading-tight mb-4 sm:mb-5 md:mb-6 text-[clamp(1.5rem,5vw,3.75rem)]"
          >
            {slide.title}
          </motion.h2>

          <motion.div
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              scaleX: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-12 sm:w-16 h-px bg-forest-400 mb-4 sm:mb-5 md:mb-6 origin-left"
          />

          <motion.p
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : -20,
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-outfit text-white/60 leading-relaxed max-w-lg text-[clamp(0.8rem,1.8vw,1.125rem)]"
          >
            {slide.text}
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.95,
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full order-1 md:order-2 flex-shrink-0 md:w-[40%] lg:w-[42%]"
        >
          <div className="relative max-w-sm sm:max-w-md md:max-w-none mx-auto md:mx-0">
            <div className="absolute -inset-2 sm:-inset-3 border border-white/5" />
            <div className="aspect-[4/3] overflow-hidden bg-forest-700">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
