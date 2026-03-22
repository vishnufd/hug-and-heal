import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Team } from './components/Team';
import { BookSession } from './components/BookSession';
import { About } from './components/About';
import { Location } from './components/Location';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-800">
      <Navbar />
      <main className="grow pt-24">
        <Hero />
        <Services />
        <WhyUs />
        <Team />
        <BookSession />
        <About />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
