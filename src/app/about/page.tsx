'use client';
import { motion } from 'framer-motion';
import Circles from "@/components/Circles";
import Avatar from "@/components/Avatar";
import { fadeIn } from "../../../variants";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const About = () => {
  const qualifications = [
    { title: "Diploma in Software Engineering + Intermediate", detail: "Government Polytechnic Institute, Landhi" },
    { title: "Cloud Applied GenAI", detail: "Governor Sindh IT Initiative" },
    { title: "Web Development Bootcamp", detail: "Completed with hands-on projects" },
  ];

  return (
    <div className="h-full w-full bg-primary/30 py-16 xl:py32 pt-32 text-center xl:text-left ">
      <Circles />
      {/* Avatar Image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto w-full px-6 md:px-10 flex flex-col xl:flex-row items-center xl:items-start gap-y-8 md:gap-y-12 xl:gap-y-0 gap-x-0 xl:gap-x-12">
        {/* About Me Section */}
        <div className="flex-1 order-2 xl:order-1">
        <h2 className="hidden lg:block text-3xl font-bold mb-4 text-accent">
            About Me <span className="text-white">:</span>
          </h2>
          <div className="relative max-w-[500px] mx-auto xl:mx-0 flex-1">
            <span className="absolute -top-10 left-0 text-2xl xl:text-4xl text-accent">
              <FaQuoteLeft />
            </span>
            <p className="relative max-w-[450px] text-base md:text-md leading-7  mt-4 xl:mt-12 ml-6 xl:ml-0 mb-6 xl:mb-12 px-2 xl:px-0">
              As a frontend developer with a Diploma in Software Engineering (completed in 2024) and an ongoing certification in Cloud Applied GenAI (2024), I am passionate about crafting seamless user experiences. Proficient in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS, I specialize in designing and building responsive, dynamic web applications. My approach blends technical expertise with creativity, ensuring every project is both functional and visually engaging. With a strong commitment to continuous learning and staying at the forefront of industry trends, I strive to solve complex challenges and deliver impactful solutions that exceed expectations.
            </p>
            <span className="absolute -bottom-6 right-4 xl:right-20 text-2xl xl:text-4xl text-accent">
              <FaQuoteRight />
            </span>
          </div>
        </div>

        {/* Right Side - Qualification Section */}
        <div className="flex-1 order-1 xl:order-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">
            Qualification <span className="text-white">:</span>
          </h2>
          {/* Qualification Cards */}
          <div className="space-y-4 md:space-y-6">
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-4 md:p-6 rounded-lg shadow-md relative overflow-hidden"
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg blur-lg"></div>
                <h3 className="text-base md:text-xl font-semibold text-accent">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-300">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
