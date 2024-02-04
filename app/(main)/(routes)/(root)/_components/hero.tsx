'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView, motion } from 'framer-motion';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 xl:py-24">
      <Container>
        <div className="flex items-center gap-x-8 h-[70vh]">
          {/* LEFT */}
          <div className="flex flex-col gap-y-4 max-w-[600px] justify-center mx-auto xl:mx-0 text-center xl:text-left w-full">
            <span className="text-xs font-semibold uppercase text-primary">
              fabanyo corp
            </span>
            <h1 className="text-4xl font-bold xl:text-7xl leading-10 tracking-tighter">
              Elevating Service Excellence
            </h1>
            <p className="text-muted-foreground text-sm font-light mb-4 max-w-[490px]">
              We are dedicated to providing exceptional services, guided by a
              commitment to excellence. Our team strives to exceed expectations,
              ensuring unparalleled experiences for our clients.
            </p>
            <div>
              <Button asChild>
                <Link href="#contact" className="flex items-center gap-x-2">
                  Daftar
                  <ArrowRightIcon />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center justify-center w-full relative">
            <Image
              src="/images/heart.png"
              alt="heart"
              width={400}
              height={400}
              className="object-contain translate-x-0"
              style={{
                transform: isInView ? 'none' : 'translateX(200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
