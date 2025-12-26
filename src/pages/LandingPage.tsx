import Hero from "../sections/Hero";
import About from "../sections/About";
import WhatWeDo from "../sections/WhatWeDo";
import Philosophy from "../sections/Philosophy";
import Transparency from "../sections/Transparency";
import Education from "../sections/Education";
import Disclaimer from "../sections/Disclaimer";
import Contact from "../sections/Contact";

export default function LandingPage() {
  return (
    <main className="pt-12 bg-surface">
      <Hero />
      <About />
      <WhatWeDo />
      <Philosophy />
      <Transparency />
      <Education />
      <Disclaimer />
      <Contact />
    </main>
  );
}