"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
// import Image from "next/image";
// import Link from "next/link";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { fadeIn } from "../../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 pt-28 md:h-screen md:overflow-hidden">
      <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        {/* text */}
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <div className="flex flex-col">
            {/* Top small text */}
            <h2 className="text-xl tracking-wide">Hello I&apos;m</h2>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold">Muhammad Hassan</h1>

            {/* Typewriter effect */}
            <div className="mt-4 text-2xl md:text-4xl text-accent relative overflow-hidden">
              <TypeAnimation
                sequence={[
                  "And I'm a Web Developer",
                  1000,
                  "And I'm a Frontend Developer",
                  1000,
                  "And I'm a UI/UX Enthausiast",
                  1000,
                  "And I'm Exploring Generative AI",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10  text-lg text-gray-300 mt-4"
          >
            Crafting interactive&#44; responsive web experiences is my passion. With 
            expertise in React&#44; Next&#46;js&#44; and Tailwind CSS&#44; I merge creativity
            and technology to design interfaces that feel intuitive and modern&#46;

          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:justify-start relative"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg image */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* particles */}
          <div>
            <ParticlesContainer />
          </div>
          {/* avatar */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full w-full max-w-[637px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
