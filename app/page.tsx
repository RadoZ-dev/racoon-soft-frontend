import { Hero } from './components/hero';
import { Services } from './components/services';
import { WorkWith } from './components/work-with';
import { Portfolio } from './components/portfolio';
import { Process } from './components/process';
import { AboutSection } from './components/about-section';
import { CTA } from './components/cta';

export default function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <WorkWith />
      <Portfolio />
      <Process />
      <AboutSection />
      <CTA />
    </main>
  );
}

