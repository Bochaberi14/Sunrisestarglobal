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
    <section
      id="what-we-do"
      className="bg-gray-100 py-16 sm:py-24 lg:py-32 relative overflow-x-hidden"
    >
      <Container>
        {/* Card Wrapper */}
        <div className="relative bg-gray-300 rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 mx-auto max-w-6xl">
          {/* TITLE */}
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-blue-900">
            What We Do
          </h2>

          {/* SLIDER CONTENT */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 relative">

            {/* IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-[320px] h-[360px] sm:h-[400px] rounded-xl overflow-hidden shadow-2xl bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-blue-900">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-6 text-blue-900/80">
                {item.description}
              </p>
              <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
                {item.cta}
              </button>
            </div>

            {/* DESKTOP ARROWS INSIDE CARD */}
            <button
              onClick={prev}
              className="hidden md:flex items-center justify-center absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 text-4xl text-blue-900/70 hover:opacity-80 z-10"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="hidden md:flex items-center justify-center absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 text-4xl text-blue-900/70 hover:opacity-80 z-10"
            >
              ›
            </button>
          </div>

          {/* MOBILE ARROWS */}
          <div className="flex md:hidden justify-between w-full mt-10 px-4">
            <button onClick={prev} className="text-3xl text-blue-900/70">
              ‹
            </button>
            <button onClick={next} className="text-3xl text-blue-900/70">
              ›
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-12 sm:mt-16 space-x-4">
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
        </div>
      </Container>
    </section>
  );
}
