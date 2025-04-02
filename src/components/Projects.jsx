import { PROJECTS } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Projects = () => {
  return (
    <section id="projects" className="pb-20">
      <h2 className="my-16 text-center text-4xl font-bold text-white">Projects</h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="max-w-6xl mx-auto px-4"
      >
        {PROJECTS.map((project, index) => (
          <SwiperSlide key={index} className="p-6">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 w-64 h-64 rounded-lg object-cover"
                />
                <h3 className="mb-2 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
