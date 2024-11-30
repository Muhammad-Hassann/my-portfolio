import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import {
  RxArrowTopRight,
  RxPencil2,
  RxDesktop,
  RxBarChart,
  RxRocket,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description:
      "Building responsive, feature-rich websites tailored for restaurants and businesses.",
  },
  {
    icon: <RxPencil2 />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces with a focus on usability.",
  },
  {
    icon: <RxRocket />,
    title: "E-commerce Solutions",
    description:
      "Developing online ordering systems, shopping carts, and payment integrations.",
  },
  {
    icon: <RxBarChart />,
    title: "Performance Optimization",
    description:
      "Improving website speed, responsiveness, and SEO for better visibility and user experience.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="h-[340px] w-[300px] sm:w-full px-4 sm:px-6 lg:px-0 "
    >
      {serviceData.map((item, index) => {
        return (
          
          <SwiperSlide key={index}>
            <div className="w-full max-w-[300px] md:max-w-[400px] h-[250px] md:h-[300px] bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-4">
                <div className="mb-2 text-lg font-semibold">{item.title}</div>
                <p className="leading-normal text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
