import Container from "../components/layout/Container";
import { FiAlertCircle } from "react-icons/fi"; // Using react-icons for the icon

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="bg-slate-100 py-12 sm:py-16 overflow-x-hidden">
      <Container>
        {/* Title with icon */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <FiAlertCircle className="text-red-500 w-6 h-6" />
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-800 font-sans">
            Disclaimer
          </h2>
        </div>

        {/* Disclaimer text */}
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
          All content provided by Sunrise Star Global Trading LLC is for
          educational and informational purposes only and should not be
          construed as financial, investment, or trading advice. Trading in
          financial markets involves risk, and past performance is not
          indicative of future results.
        </p>
      </Container>
    </section>
  );
}

