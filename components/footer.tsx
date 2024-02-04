import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { Container } from './container';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-zinc-950">
      <div className="py-4 border-t-[1px] dark:border-0">
        <Container>
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="font-semibold uppercase">fabanyo corps</h3>
              <span className="text-muted-foreground text-sm">
                © {format(new Date(), 'yyyy')} Assembly Team. All rights
                reserved.
              </span>
              <div className="flex items-center gap-x-4">
                <InstagramLogoIcon />
                <TwitterLogoIcon />
                <LinkedInLogoIcon />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
