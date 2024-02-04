'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from './ui/badge';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const ProjectCard = ({ index }: { index: number }) => {
  return (
    <Link href="/">
      <Card className="group overflow-hidden relative">
        <CardHeader className="p-0">
          <div className="relative w-full h-80 flex items-center justify-center bg-accent dark:bg-secondary/40 xl:bg-[110%]">
            <Image
              src={`/images/image_premium.png`}
              alt={`image`}
              priority
              width={245}
              height={250}
              className="absolute bottom-0"
            />
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
          <Badge className="absolute text-sm font-medium mb-2 uppercase top-4 left-5">
            futsal
          </Badge>
          <h4 className="mb-1 font-semibold text-base">Pertamina Futsal Cup</h4>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </Card>
    </Link>
  );
};
