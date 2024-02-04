import Link from 'next/link';
import {
  ArrowRightIcon,
  HamburgerMenuIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Container } from './container';
import { ModeToggle } from './mode-toggle';

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-20 bg-background/80 backdrop-blur border-b w-full shadow-sm">
      <div className="py-4 border-b-[1px] dark:border-0">
        <Container>
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold uppercase">
              fabanyo
            </Link>

            {/* desktop & tablet */}
            <ul className="hidden sm:flex items-center gap-x-8 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>

            <div className="hidden sm:flex items-center gap-x-4">
              <ModeToggle />
              <Button asChild>
                <Link
                  href="/sign-in"
                  className="inline-flex items-center gap-x-2"
                >
                  Daftar
                  <ArrowRightIcon />
                </Link>
              </Button>
            </div>

            {/* mobile */}
            <div className="block sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <HamburgerMenuIcon className="h-4 w-4 text-muted-foreground" />
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col justify-between items-center h-full py-8">
                    <div className="flex flex-col items-center gap-y-8">
                      <Link href="/">Home</Link>
                      <Link href="#about">About</Link>
                      <Link href="#contact">Contact</Link>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <InstagramLogoIcon />
                      <TwitterLogoIcon />
                      <LinkedInLogoIcon />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};
