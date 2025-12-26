/*import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";

const principles = [
  "Risk management first",
  "Process over emotion",
  "Consistency over urgency",
  "Education over impulse",
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <Container>
        <SectionHeader title="Our Philosophy" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => (
            <Card key={p}>
              <p className="text-primary font-medium">{p}</p>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-muted italic">
          Markets are unpredictable. Discipline is not.
        </p>
      </Container>
    </section>
  );
}*/

import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import SectionHeader from "../components/ui/SectionHeader";

const principles = [
  "Risk management first",
  "Process over emotion",
  "Consistency over urgency",
  "Education over impulse",
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-gray-50">
      {/* Wrapping section in a card-like container */}
      <div className="mx-auto max-w-7xl bg-white rounded-3xl shadow-lg p-12">
        <Container>
          <SectionHeader title="Our Philosophy" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {principles.map((p) => (
              <Card
                key={p}
                className="bg-blue-900 text-white flex items-center justify-center h-36 text-center p-4 font-medium text-base sm:text-lg md:text-lg rounded-2xl"
              >
                {p}
              </Card>
            ))}
          </div>

          <p
            className="mt-10 text-center text-black font-semibold text-xl md:text-2xl italic tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }} // eye-catching font
          >
            Markets are unpredictable. Discipline is not.
          </p>
        </Container>
      </div>
    </section>
  );
}
