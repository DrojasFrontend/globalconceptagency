'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function ProjectsSwiper({ projects }) {
  return (
    <Swiper
      className="swiper--projects ps-lg-5"
      modules={[Pagination, Autoplay]}
      slidesPerView={1.2}
      spaceBetween={8}
      grabCursor={true}
      loop={false}
      speed={500}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        576: { slidesPerView: 1.5 },
        992: { slidesPerView: 2.1 },
        1200: { slidesPerView: 2.5 },
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="position-relative">
            <img
              className="d-block w-100 h-auto rounded-5"
              src={project.image}
              alt={project.title}
            />
            <div className="p-3 pb-0">
              <h3 className="mb-0 text-white">{project.title}</h3>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-white mb-0">{project.category}</p>
                <Link href={project.url || '#'}>
                  <span
                    className="d-flex align-items-center justify-content-center bg-white rounded-pill"
                    style={{ width: '36px', height: '36px' }}
                  >
                    <i className="bi bi-arrow-right-short fs-4 text-black"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
