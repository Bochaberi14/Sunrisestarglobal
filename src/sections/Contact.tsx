/*import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <Container>
        <SectionHeader title="Contact" />

        <p className="text-lg text-muted">
          For general inquiries:
        </p>

        <p className="mt-2 text-primary font-medium">
          info@sunrisestarglobal.com
        </p>
      </Container>
    </section>
  );
}*/
import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <Container>
        <SectionHeader title="Contact" />

        <div className="mt-10 flex flex-col lg:flex-row gap-12">
          {/* Map */}
          <div className="flex-1 h-80 lg:h-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Texas Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d134455.99494766394!2d-99.43679156553598!3d31.968598899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cb71ab7a4904f%3A0x8d17c8e8f8a8ed!2sTexas%2C%20USA!5e0!3m2!1sen!2ske!4v1703660831234!5m2!1sen!2ske"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg mt-2 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* General Inquiries */}
        <div className="mt-10">
          <h1 className="text-lg text-muted">For general inquiries:</h1>
          <h1 className="mt-2 text-primary font-medium">
            info@sunrisestarglobal.com
          </h1>
        </div>
      </Container>
    </section>
  );
}

