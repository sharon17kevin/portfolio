import { Code, User } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import ArrowLeft from "../icons/ArrowLeft";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleY = useSpring(scrollYProgress);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-primary">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="flex flex-col w-11/12 mx-auto md:flex-row items-center justify-start gap-12">
          <div className="h-screen flex items-center justify-start bg-customGreen-light w-1/3">
            <div className="bg-primary h-screen flex flex-col justify-center items-center space-y-1">
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
              className="bg-primary flex flex-grow h-32 items-center justify-end pr-14 space-x-2"
            >
              <p className="font-ebgaramond font-thin text-xl">ABOUT</p>
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
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border-black border text-black">
                  <User className=" mb-2" />
                  <h3 className="font-semibold">Background</h3>
                  <p className="text-sm text-gray-600">
                    Computer Science Graduate
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-black border text-black">
                  <Code className=" mb-2" />
                  <h3 className="font-semibold ">Tech Stack</h3>
                  <p className="text-sm text-gray-600">
                    React, Node.js, TypeScript, Python,...
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hellen = () => {
  return (
    <div className="md:w-1/2 py-20">
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg border-black border text-black">
          <User className=" mb-2" />
          <h3 className="font-semibold">Background</h3>
          <p className="text-sm text-gray-600">Computer Science Graduate</p>
        </div>
        <div className="p-4 bg-white rounded-lg border-black border text-black">
          <Code className=" mb-2" />
          <h3 className="font-semibold ">Tech Stack</h3>
          <p className="text-sm text-gray-600">
            React, Node.js, TypeScript, Python,...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
