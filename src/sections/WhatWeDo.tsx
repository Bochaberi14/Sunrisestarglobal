/*import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";

const items = [
  "Proprietary trading using firm capital only",
  "Publicly listed stocks, options, and ETFs",
  "Predefined risk management frameworks",
  "All trading conducted internally",
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-surface">
      <Container>
        <SectionHeader title="What We Do" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {items.map((item) => (
            <Card key={item}>
              <p className="text-primary font-medium">{item}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}*/
/*import { useState } from "react";
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";

const items = [
  {
    title: "Proprietary trading using firm capital only",
    image: "/trading.png",
    description:
      "We trade exclusively with our own capital, ensuring total accountability and risk management.",
    cta: "Learn More",
  },
  {
    title: "Publicly listed stocks, options, and ETFs",
    image: "/trading1.jpg",
    description:
      "Our team trades a variety of publicly listed assets, including stocks, options, and ETFs.",
    cta: "Learn More",
  },
  {
    title: "Predefined risk management frameworks",
    image: "/trading2.jpg",
    description:
      "All trades follow strict, predefined risk management rules to protect capital.",
    cta: "Learn More",
  },
  {
    title: "All trading conducted internally",
    image: "/trading3.jpg",
    description:
      "We execute every trade internally, guaranteeing full transparency and adherence to our strategies.",
    cta: "Learn More",
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);

  const next = () =>
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);

  return (
    <section id="what-we-do" className="bg-[#0b1220] py-32 text-white relative">
      
      {/* Section title *}
      <Container>
        <SectionHeader title="What We Do" />
      </Container>

      {/* SLIDER AREA *}
      <div className="relative mt-20">
        <Container>
          <div className="relative flex items-center justify-between">

            {/* Left Arrow *}
            <button
              onClick={prev}
              className="absolute -left-10 top-1/2 -translate-y-1/2 
                         text-4xl text-white/50 hover:text-white transition"
            >
              ‹
            </button>

            {/* Content Wrapper *}
            <div className="flex flex-col md:flex-row items-center gap-20 w-full">

              {/* IMAGE BLOCK (FIXED SIZE) *}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-[280px] h-[380px] md:w-[320px] md:h-[420px] 
                                bg-[#111827] rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={items[activeIndex].image}
                    alt={items[activeIndex].title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* TEXT BLOCK *}
              <div className="w-full md:w-1/2 max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-5">
                  {items[activeIndex].title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  {items[activeIndex].description}
                </p>

                <button className="bg-primary px-8 py-3 rounded-full 
                                   font-semibold hover:opacity-90 transition">
                  {items[activeIndex].cta}
                </button>
              </div>
            </div>

            {/* Right Arrow *}
            <button
              onClick={next}
              className="absolute -right-10 top-1/2 -translate-y-1/2 
                         text-4xl text-white/50 hover:text-white transition"
            >
              ›
            </button>
          </div>

          {/* Dots *}
          <div className="flex justify-center mt-14 space-x-3">
            {items.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  idx === activeIndex ? "bg-primary" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}*/
import { useState } from "react";
import Container from "../components/layout/Container";

const items = [
  {
    title: "Proprietary trading using firm capital only",
    image: "/trading.jpg",
    description:
      "We trade exclusively with our own capital, ensuring total accountability and disciplined risk management.",
    cta: "Learn More",
  },
  {
    title: "Publicly listed stocks, options, and ETFs",
    image: "/trading1.jpg",
    description:
      "Our team trades a diverse range of publicly listed assets including stocks, options, and ETFs.",
    cta: "Learn More",
  },
  {
    title: "Predefined risk management frameworks",
    image: "/trading2.jpg",
    description:
      "Every trade follows strict predefined risk frameworks designed to protect capital.",
    cta: "Learn More",
  },
  {
    title: "All trading conducted internally",
    image: "/trading3.jpg",
    description:
      "All trading activities are executed internally ensuring transparency and strategy integrity.",
    cta: "Learn More",
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);

  const next = () =>
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);

  const item = items[activeIndex];

  return (
    <section id="what-we-do" className="bg-gray-300 py-32 relative">
      {/* BIG CENTERED TITLE */}
      <h2 className="text-center text-5xl md:text-5xl font-bold mb-24 text-blue-900">
        What We Do
      </h2>

      <Container>
        <div className="relative flex items-center justify-center">

          {/* PREVIOUS ARROW */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 text-5xl text-blue-900/70 hover:opacity-80 z-10"
          >
            ‹
          </button>

          {/* SLIDER CONTENT */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-[320px] h-[420px] rounded-xl overflow-hidden shadow-2xl bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2 max-w-xl">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-900">
                {item.title}
              </h3>
              <p className="text-lg text-blue-900/80 leading-relaxed mb-6">
                {item.description}
              </p>
              <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
                {item.cta}
              </button>
            </div>
          </div>

          {/* NEXT ARROW */}
          <button
            onClick={next}
            className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 text-5xl text-blue-900/70 hover:opacity-80 z-10"
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-16 space-x-4">
          {items.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                idx === activeIndex ? "bg-blue-900" : "bg-blue-900/40"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
