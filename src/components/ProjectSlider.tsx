import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { RxArrowRight } from "react-icons/rx";
import Image from "next/image";
import { link } from "fs";

// data
const projectSlides = [
  {
    title: "Foodio",
    description: "Restaurant and food ordering website.",
    path: "/project1.png",
    link: 'https://foodio-gamma.vercel.app/'
  },
  {
    title: "RiseBlog",
    description: "Personal blogging platform with CMS.",
    path: "/project2.png",
    link: 'https://rise-blog-mu.vercel.app/'
  },
  {
    title: "TravelX",
    description: "Travel agency landing page.",
    path: "/project4.png",
    link: 'https://travel-x-jet.vercel.app/'
  },
  {
    title: "Resume Builder",
    description: "Build and export resumes easily.",
    path: "/project3.png",
    link: 'https://resume-builder-7us2.vercel.app/'
  },
  
];

const ProjectSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      modules={[Pagination, Autoplay]}
      className="h-[280px] sm:h-[400px]"
    >
      {projectSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <a 
          href={slide.link}
          target="_blank"
          >
          <div className="flex flex-col gap-4 cursor-pointer">
            {/* Card */}
            <div className="relative rounded-lg overflow-hidden flex group">
              <div className="flex relative overflow-hidden flex-col group">
                {/* Image Container */}
                <div className="relative">
                  {/* Image */}
                  <Image
                    src={slide.path}
                    width={500}
                    height={300}
                    alt={slide.title}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                </div>

                {/* Title and Description */}
                <div className="mt-8">
                  <h3 className="text-xl text-accent font-bold">
                    {slide.title}
                  </h3>
                  <p className="text-sm">{slide.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="flex justify-center items-center gap-x-2">
                    {/* LIVE */}
                    <div className="text-[13px]  tracking-[0.2em] delay-100 group-hover:-translate-y-6 translate-y-10 transition-all duration-300">
                      LIVE
                    </div>
                    {/* PROJECT */}
                    <div className="text-[13px]  tracking-[0.2em] delay-200 group-hover:-translate-y-6 translate-y-10 transition-all duration-300">
                      PROJECT
                    </div>
                    {/* Arrow */}
                    <div className="text-2xl delay-300 group-hover:-translate-y-6 translate-y-10 transition-all duration-300">
                      <RxArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
