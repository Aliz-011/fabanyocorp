'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Container } from '@/components/container';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';

export const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      className="py-20 xl:py-24 min-h-[70vh] mx-auto"
      id="projects"
      ref={ref}
    >
      <Container>
        <div className="flex items-center justify-between w-full">
          <div className="space-y-2 md:space-y-4 w-full max-w-[400px] sm:mx-0 mx-auto mb-8 md:mb-16 text-center sm:text-left sm:items-start justify-center">
            <span
              style={{
                transform: isInView ? 'none' : 'translateX(-200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
              className="text-lg font-medium text-primary -translate-x-[100px]"
            >
              Projek yang dibuat
            </span>
            <h2 className="text-xl font-bold xl:text-3xl leading-10 tracking-tighter">
              Recent projects
            </h2>
          </div>

          <Button variant="link" asChild>
            <Link href="/" className="inline-flex items-center gap-x-1">
              Lihat semua
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        {/* CAROUSEL */}
        <div className="w-full flex items-center">
          <Swiper
            className="h-[480px]"
            direction="horizontal"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
          >
            {[...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <ProjectCard index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
