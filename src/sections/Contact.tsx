import Container from "../components/layout/Container";
import SectionHeader from "../components/ui/SectionHeader";
import { MdContactMail } from "react-icons/md"; // Using Material Design contact icon

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-300 py-16 sm:py-20 lg:py-24 overflow-x-hidden">
      <Container>
        {/* Card Wrapper */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Map + General Inquiries */}
          <div className="w-full lg:flex-1 flex flex-col gap-6">
            
            {/* Title with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <MdContactMail className="text-blue-600 text-3xl sm:text-4xl" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Contact Us</h2>
            </div>

            {/* Map */}
            <div className="w-full h-72 sm:h-80 lg:h-[420px] rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Texas Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d134455.99494766394!2d-99.43679156553598!3d31.968598899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cb71ab7a4904f%3A0x8d17c8e8f8a8ed!2sTexas%2C%20USA!5e0!3m2!1sen!2ske!4v1703660831234!5m2!1sen!2ske"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* General Inquiries */}
            <div className="text-center lg:text-left mt-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-700">
                For General Inquiries:
              </h3>
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
                info@sunrisestarglobal.com
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:flex-1 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Get in Touch</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full max-w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                  className="w-full max-w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                  className="w-full max-w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg mt-2 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
