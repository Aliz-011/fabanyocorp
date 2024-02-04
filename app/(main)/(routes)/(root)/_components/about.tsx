'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useInView, motion } from 'framer-motion';

import { Container } from '@/components/container';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="py-20 xl:py-24 bg-gray-50 dark:bg-zinc-950 dark:border-2 dark:border-x-0 dark:border-dashed relative overflow-hidden"
      ref={ref}
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 z-10">
          <span className="text-lg font-semibold text-primary">
            Tentang perusahaan
          </span>
          <h2 className="text-xl font-bold xl:text-3xl leading-10 tracking-tighter">
            Elevating Service Excellence
          </h2>
          <p className="text-muted-foreground font-light mb-4 max-w-[600px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dolorum, officia voluptatibus labore rerum, necessitatibus
            cupiditate cum itaque recusandae, repellendus ex consectetur
            accusantium ipsam eos?
          </p>
        </div>
      </Container>
    </section>
  );
};
