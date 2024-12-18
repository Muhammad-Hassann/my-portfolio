'use client'
import ProjectSlider from "@/components/ProjectSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import { fadeIn } from "../../../variants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className=" bg-primary/30 pt-40 lg:pt-32 flex items-center md:overflow-hidden md:h-screen">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quod, quia, voluptate quae voluptates quibusdam
              voluptatibus quidem doloribus quos dolorum. Quisquam, quae.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ProjectSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Projects;
