import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex h-16 md:h-20 justify-between items-center">
          <button
            onClick={() => scrollTo("hero")}
            className="font-playfair text-lg md:text-xl font-medium tracking-wide text-forest-800"
          >
            S<span className="text-forest-600">.</span>K
          </button>

          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-outfit text-sm tracking-widest uppercase text-forest-800/70 hover:text-forest-600 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-forest-600 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <a
            href="mailto:sharon14kevin@gmail.com"
            className="font-outfit text-xs md:text-sm tracking-widest uppercase border border-forest-800/20 px-4 py-2 hover:bg-forest-800 hover:text-ivory transition-all duration-300"
          >
            Say Hello
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
