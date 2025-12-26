/*import Container from "../components/layout/Container";

export default function Hero() {
  return (
    <section id="hero" className="bg-surface py-24">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-primary">
            Sunrise Star Global Trading LLC
          </h1>

          <p className="mt-6 text-xl text-muted">
            Discipline. Strategy. Long-Term Perspective.
          </p>

          <p className="mt-6 text-muted max-w-2xl">
            A Texas-based proprietary trading firm focused on disciplined
            market participation, risk management, and long-term consistency.
          </p>
        </div>
      </Container>
    </section>
  );
}*/
/*import React from "react";
import Button from "../components/ui/Button";

interface HeroProps {
  onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">

          {/* LEFT — TEXT *}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight text-gray-900 mb-6">
              Sunrise Star Global Trading LLC
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discipline. Strategy. Long-Term Perspective.
            </p>

            <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-10">
              A proprietary trading firm focused on structured market
              participation, defined risk management, and consistent
              long-term performance using firm capital only.
            </p>

            <Button
              variant="primary"
              className="px-10"
              onClick={onGetStartedClick}
            >
              GET STARTED
            </Button>
          </div>

          {/* RIGHT — IMAGES *}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-[520px] h-[420px]">

              {/* Image 1 *}
              <div className="absolute z-20 left-1/2 -translate-x-1/2 rotate-[-6deg] shadow-2xl">
                <img
                  src="/trading.jpg"
                  alt="Professional Trading"
                  className="w-[280px] h-[320px] object-cover rounded-xl"
                />
              </div>

              {/* Image 2 *}
              <div className="absolute z-10 top-16 left-10 rotate-[6deg] shadow-xl">
                <img
                  src="/financial success.jpg"
                  alt="Financial Success"
                  className="w-[260px] h-[300px] object-cover rounded-xl"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;*/

import Button from "../components/ui/Button";

export default function Hero() {
  const handleGetStarted = () => {
    const about = document.getElementById("about");
    if (about) {
      const offset = 96;
      const top =
        about.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white flex items-center"
    >
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

        {/* Left — Texts + Button */}
        <div className="flex-1 flex flex-col justify-center lg:justify-start text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight text-primary mb-4">
            Sunrise Star Global Trading LLC
          </h1>

          <h4 className="text-lg sm:text-xl text-muted mb-6">
            Discipline. Strategy. Long-Term Perspective.
          </h4>

          <p className="text-muted text-lg leading-relaxed max-w-xl mb-6">
            A proprietary trading firm focused on disciplined market
            participation, defined risk management, and long-term
            consistency using firm capital only.
          </p>

          <Button
            variant="primary"
            className="bg-blue-900 text-white px-16 py-4 text-lg sm:text-xl hover:bg-blue-700 w-full sm:w-max"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>

        {/* Right — Images */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[520px] h-[420px] flex items-center justify-center">

            {/* Image 1 */}
            <div className="absolute z-20 transform rotate-[-5deg] shadow-xl">
              <img
                src="/trading.jpg"
                alt="Trading"
                className="w-[260px] h-[320px] object-cover rounded-xl"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute z-10 transform translate-x-[-80px] translate-y-[-60px] rotate-[5deg] shadow-xl">
              <img
                src="/trading4.jpg"
                alt="Market Analysis"
                className="w-[240px] h-[300px] object-cover rounded-xl"
              />
            </div>

            {/* Image 3 */}
            <div className="absolute translate-x-[90px] translate-y-[40px] rotate-[10deg] shadow-xl">
              <img
                src="/trading2.jpg"
                alt="Financial Success"
                className="w-[240px] h-[300px] object-cover rounded-xl"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
