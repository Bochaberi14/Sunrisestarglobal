/*import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";

export default function About() {
  return (
    <section  id= "about" className="py-24 bg-white">
      <Container>
        <SectionHeader
          title="ABOUT US"
          subtitle="Professional, disciplined participation in public markets."
        />

        <p className="max-w-3xl text-muted text-lg leading-relaxed">
          Sunrise Star Global Trading LLC is a proprietary trading firm that
          operates exclusively with its own capital. We prioritize structure,
          emotional control, and clearly defined risk parameters over
          speculative or impulsive trading behavior.
        </p>
      </Container>
    </section>
  );
}*/

import Container from "../components/layout/Container";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        {/* Card wrapper */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
              <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 102 0V7zm-1 7a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">ABOUT US</h2>
            </div>

            <p className="text-muted text-lg leading-relaxed mb-2">
              Professional, disciplined participation in public markets.
            </p>

            <p className="text-muted text-lg leading-relaxed mb-4">
              Sunrise Star Global Trading LLC is a proprietary trading firm that
              operates exclusively with its own capital. We prioritize structure,
              emotional control, and clearly defined risk parameters over
              speculative or impulsive trading behavior.
            </p>

            <p className="text-muted text-lg leading-relaxed">
              Our team combines strategic insights, disciplined execution, and
              long-term perspectives to ensure consistent trading performance
              while emphasizing robust risk management.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/financial-success.jpg"
              alt="About Sunrise Star Global Trading"
              className="rounded-xl shadow-xl w-full max-w-[280px] lg:max-w-[280px] object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
