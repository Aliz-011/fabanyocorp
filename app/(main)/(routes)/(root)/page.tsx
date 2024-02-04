import { About } from './_components/about';
import { Contact } from './_components/contact';
import { FAQ } from './_components/faq';
import { Hero } from './_components/hero';
import { Project } from './_components/project';
import { Service } from './_components/service';

export default async function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Project />
      <Contact />
      <FAQ />
    </main>
  );
}
