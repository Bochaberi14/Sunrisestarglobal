/*import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Badge from "../components/ui/Badge";

export default function Education() {
  return (
    <section id="education" className="bg-white py-24">
      <Container>
        <SectionHeader
          title="Education & Market Commentary"
          subtitle="General learning resources and market concepts."
        />

        <Badge label="Educational & Informational Only" />

        <p className="mt-6 max-w-3xl text-lg text-muted leading-relaxed">
          Sunrise Star Global Trading LLC may share general educational content
          related to market structure, risk management, and trading psychology.
          This content is not personalized, does not constitute investment
          advice, and is provided solely for learning and discussion purposes.
        </p>
      </Container>
    </section>
  );
}*/

import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Badge from "../components/ui/Badge";

export default function Education() {
  return (
    <section id="education" className="bg-gray-50 py-24">
      <Container>
        <div className="bg-white shadow-md rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/2 flex-shrink-0">
            <img
              src="/trading4.jpg"
              alt="Education"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col">
            <SectionHeader
              title="Education & Market Commentary"
              subtitle="General learning resources and market concepts."
            />

            <Badge label="Educational & Informational Only" />

            <p className="mt-6 text-lg text-muted leading-relaxed">
              Sunrise Star Global Trading LLC may share general educational content
              related to market structure, risk management, and trading psychology.
              This content is not personalized, does not constitute investment
              advice, and is provided solely for learning and discussion purposes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
