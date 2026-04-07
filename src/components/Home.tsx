import { Hero } from './Hero';
import { Services } from './Services';
import { WhyUs } from './WhyUs';
import { Team } from './Team';
import { BookSession } from './BookSession';
import { About } from './About';
import { Location } from './Location';
import { CTA } from './CTA';

import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    document.title = 'Hug and Heal | Professional Counseling & Psychotherapy';
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Team />
      <BookSession />
      <About />
      <Location />
      <CTA />
    </>
  );
}
