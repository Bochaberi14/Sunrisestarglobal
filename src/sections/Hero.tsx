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
      className="relative min-h-screen bg-white flex items-center overflow-x-hidden"
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
            className="bg-blue-900 text-white px-10 sm:px-16 py-4 text-lg sm:text-xl hover:bg-blue-700 w-full sm:w-max"
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
                className="w-60 h-72 object-cover rounded-xl"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute z-10 transform translate-x-20 translate-y-16 rotate-[5deg] shadow-xl">
              <img
                src="/trading4.jpg"
                alt="Market Analysis"
                className="w-60 h-72 object-cover rounded-xl"
              />
            </div>

            {/* Image 3 */}
            <div className="absolute translate-x-24 translate-y-10 rotate-[10deg] shadow-xl">
              <img
                src="/trading2.jpg"
                alt="Financial Success"
                className="w-60 h-72 object-cover rounded-xl"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
