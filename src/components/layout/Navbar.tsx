import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", id: "about" },
  { label: "What We Do", id: "what-we-do" },
  { label: "Philosophy", id: "philosophy" },
  { label: "Transparency", id: "transparency" },
  { label: "Education", id: "education" },
  { label: "Disclaimer", id: "disclaimer" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 96;
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-surface/90 backdrop-blur"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/sunrise.png"
            alt="Sunrise Star Global Trading"
            className="h-12 w-auto"
          />
          <span className="text-lg font-semibold tracking-tight text-primary font-rem">
            Sunrise Star Global Trading
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-primary hover:text-accent transition-colors"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg
          transition-all duration-300 overflow-hidden
          ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="block text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

