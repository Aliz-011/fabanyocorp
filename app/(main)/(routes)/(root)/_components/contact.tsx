'use client';

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';

import { Container } from '@/components/container';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      id="contact"
      className="min-h-[64vh] py-20 xl:py-24 dark:bg-zinc-950"
      ref={ref}
    >
      <Container>
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.5, delayChildren: 0.2 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-center gap-x-8"
        >
          <div className="w-full">
            <span
              style={{
                transform: isInView ? 'none' : 'translateX(-200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
              className="text-2xl font-bold block -translate-x-[100px]"
            >
              Contact
            </span>
            <form className="mt-8 sm:mt-12">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">
                    Nama sekolah<sup className="text-primary">*</sup>
                  </Label>
                  <div className="mt-2.5">
                    <Input placeholder="shadcnui..." id="name" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">
                    Email<sup className="text-primary">*</sup>
                  </Label>
                  <div className="mt-2.5">
                    <Input placeholder="shadcnui@gmail.com" id="email" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="phone">
                    Phone number<sup className="text-primary">*</sup>
                  </Label>
                  <div className="mt-2.5">
                    <Input type="tel" id="phone" />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Button className="block w-full">Daftar</Button>
              </div>
            </form>
          </div>

          <motion.div
            variants={{
              hidden: {
                x: 100,
                y: 100,
                opacity: 0,
              },
              show: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  type: 'tween',
                  delay: 0.3,
                  duration: 1,
                  ease: 'easeOut',
                },
              },
            }}
            className="relative mt-[68px] flex w-full h-[550px]"
          >
            <Image
              src="/images/map.png"
              alt="map"
              fill
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
