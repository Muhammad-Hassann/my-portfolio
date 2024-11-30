'use client'
import React from "react";
import { motion } from "framer-motion";

const skillData = [
  {
    skillName: "JavaScript",
    proficiency: "80",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    skillName: "TypeScript",
    proficiency: "60",
    imageLink: "https://i.ibb.co/V3Fw2Ft/Typescript-logo-2020-svg.png",
  },
  {
    skillName: "HTML",
    proficiency: "90",
    imageLink: "https://i.ibb.co/ZXpZGFG/Screenshot-2023-07-07-223352.png",
  },
  {
    skillName: "CSS",
    proficiency: "70",
    imageLink: "https://i.ibb.co/tq84XMc/css.png",
  },
  {
    skillName: "React",
    proficiency: "70",
    imageLink: "https://i.ibb.co/YyGmCM0/react.png",
  },
  {
    skillName: "Next.js",
    proficiency: "70",
    imageLink: "https://i.ibb.co/3vDj7JL/Next-js-900x0.png",
  },
  {
    skillName: "Framer Motion",
    proficiency: "50",
    imageLink:
      "https://i.ibb.co/C2X2KyM/70574400-9e6a-11e9-8708-22d4bf4c3322.png",
  },
  {
    skillName: "GSAP",
    proficiency: "50",
    imageLink: "/gsap.png",
  },
  {
    skillName: "Tailwind",
    proficiency: "90",
    imageLink: "https://i.ibb.co/mD3rstb/z8hzeszc9eb3sp3vp3qc.jpg",
  },
  {
    skillName: "github",
    proficiency: "70",
    imageLink:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
];

const SkillsPage = () => {
  return (
    <div
      className="relative pt-28 lg:pt-36 p-8 md:p-16  w-full h-screen bg-primary/30 text-white overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="w-[200px] h-[200px] bg-accent/30 rounded-full absolute top-10 left-20 blur-3xl"
          animate={{ x: [0, 200, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div
          className="w-[300px] h-[300px] bg-accent/50 rounded-full absolute bottom-10 right-20 blur-3xl"
          animate={{ x: [0, -150, 0], y: [0, -100, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full  w-full flex flex-col justify-center items-center">
        {/* Title */}
        <div className="text-center mb-2 lg:mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Skills and Expertise<span className="text-accent">.</span>
          </h1>
          <p className="hidden lg:block text-lg mt-4 max-w-[600px]">
            I'm a passionate developer with expertise in frontend technologies,
            animations, and modern tools. Here's a quick glance at my skill set.
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex flex-wrap px-0 xl:px-36 justify-center gap-2 lg:gap-6">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 w-[100px]  lg:w-[180px] p-4 rounded-lg flex flex-col flex-wrap items-center justify-center gap-y-2 relative group"
            >
              {/* Skill Content */}
              <div className="z-10 group-hover:opacity-0 transition-opacity duration-300">
                <img
                  src={skill.imageLink}
                  alt={skill.skillName}
                  className="w-8 h-8 lg:w-12 lg:h-12 mb-2 mx-auto"
                />
                <div className="text-md lg:text-xl text-center font-semibold capitalize">
                  {skill.skillName}
                </div>
              </div>

              {/* Proficiency Overlay */}
              <div className="absolute inset-0 bg-accent/90 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                {skill.proficiency}%
              </div>
              {/* Progress Bar */}
              <div className="w-full mt-2">
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-accent h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        {/* <div className="absolute bottom-16 left-8 text-white">
          <p className="text-lg">
            Years of Experience: <span className="font-bold">3+</span>
          </p>
          <p className="text-lg">
            Projects Completed: <span className="font-bold">15+</span>
          </p>
        </div>

        <a
          href="/contact"
          className="absolute bottom-16 right-8 px-6 py-3 bg-accent rounded-full text-white hover:bg-transparent border border-white transition-all"
        >
          Hire Me
        </a> */}
      </div>
    </div>
  );
};

export default SkillsPage;
