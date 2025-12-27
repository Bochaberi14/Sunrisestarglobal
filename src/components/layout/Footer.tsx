import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <img
              src="/images/Logo.png"
              alt="Sunrise Star Global Trading LLC"
              className="h-12 sm:h-16 mb-4 mx-auto sm:mx-0"
            />
            <p className="text-gray-400 text-sm sm:text-base">
              Providing innovative solutions for global trading and investment growth.
            </p>

            {/* Social Media */}
            <div className="flex justify-center sm:justify-start mt-4 gap-3">
              <a href="#Facebook" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#Twitter" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#Instagram" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-4 text-lg">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-4 text-lg">Subscribe</h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Stay updated with our latest trading insights and company news.
            </p>
            <div className="flex gap-2 max-w-xs mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 px-4 py-2 rounded flex-1 text-sm sm:text-base"
              />
              <button className="bg-primary px-4 py-2 rounded hover:bg-primary-dark transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center sm:text-left flex flex-col sm:flex-row sm:justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Sunrise Star Global Trading LLC. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
