/*import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";

const exclusions = [
  "We do not manage or accept client funds",
  "We do not provide personalized investment advice",
  "We do not act as a broker-dealer or investment advisor",
  "We do not guarantee profits or performance",
];

export default function Transparency() {
  return (
    <section id="transparency" className="py-24 bg-surface">
      <Container>
        <SectionHeader title="What We Do Not Do" />

        <Card>
          <ul className="space-y-3">
            {exclusions.map((item) => (
              <li key={item} className="text-muted">
                — {item}
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}*/
import { useState } from "react";
import Container from "../components/layout/Container";

const items = [
  {
    title: "We do not manage or accept client funds",
    image: "/trading5.jpg",
    description:
      "Our firm operates only with proprietary capital. This ensures full accountability and protects clients from any potential risk.",
    cta: "Learn More",
  },
  {
    title: "We do not provide personalized investment advice",
    image: "/trading1.jpg",
    description:
      "We offer general educational insights and transparency about our operations, but we do not give tailored financial advice to individuals.",
    cta: "Learn More",
  },
  {
    title: "We do not act as a broker-dealer or investment advisor",
    image: "/trading2.jpg",
    description:
      "Our operations are strictly internal. We do not execute trades on behalf of clients or offer investment advisory services.",
    cta: "Learn More",
  },
  {
    title: "We do not guarantee profits or performance",
    image: "/trading3.jpg",
    description:
      "Trading inherently carries risk. We are transparent about our strategies but cannot promise returns or financial outcomes.",
    cta: "Learn More",
  },
];

export default function Transparency() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);

  const next = () =>
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);

  const item = items[activeIndex];

  return (
    <section id="transparency" className="bg-gray-400 py-32 relative text-blue-900">
      {/* BIG CENTERED TITLE */}
      <h2 className="text-center text-5xl md:text-5xl font-bold mb-24">
        What We Do Not Do
      </h2>

      <Container>
        <div className="relative flex items-center justify-center">
          {/* PREVIOUS ARROW */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 text-5xl text-blue-900/70 hover:opacity-80 z-20"
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
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-lg leading-relaxed mb-6 text-blue-900/80">
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
