import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import {Link } from "react-router-dom";
import logo from "../Assets/logo-removebg-preview.png";

import { FaTwitter, FaFacebookF,  FaWhatsapp,FaLinkedin, FaYoutube , FaInstagram} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-gray-300 pt-20 pb-10 px-6 relative">

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition"
      >
        ↑
      </button>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
                <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Beneicon Logo"
            className="h-20 w-20 object-contain"
          />
        </Link>
          <p className="text-gray-200 leading-relaxed">
            Beneicon is a trusted name in led video display & digital standee, manufactured by Beneicon Pixel LLP

          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about-us" className="hover:text-white transition">About Us</a></li>
            <li><a href="/products" className="hover:text-white transition">Products</a></li>
            <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="/contact-us" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-6">
            Our Products
          </h3>
          <ul className="space-y-3">
            <li><a href="/led-video-display-outdoor" className="hover:text-white transition">Led Video Display Outdoor</a></li>
            <li><a href="/led-video-display-indoor" className="hover:text-white transition">Led Video Display Indoor</a></li>
            <li><a href="/led-video-cube-indoor" className="hover:text-white transition">Led Video Cube Indoor</a></li>
            <li><a href="/digital-standee" className="hover:text-white transition">Digital Standee</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-6">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-blue-700" />
              <span>beneicon@gmail.com<br/> sales@beneicon.com</span>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-blue-700" />
              <span>+91 70659 93135
</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-blue-700" />
              <span>
                482, Sunview Apt., Dwarka Sector 11  Dwarka, Delhi-110075
                India
              </span>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
  <a
    href="https://x.com/beneicon"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-[#1DA1F2] transition"
  >
    <FaTwitter className="text-white text-sm" />
  </a>

  <a
    href="https://www.facebook.com/people/Beneicon/61579151452650/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-[#1877F2] transition"
  >
    <FaFacebookF className="text-white text-sm" />
  </a>
  <a
    href="https://wa.me/+917065993135"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-[#25D366] transition"
  >
    <FaWhatsapp className="text-white text-sm" />
  </a>
  <a href="https://www.linkedin.com/company/beneicon/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-[#0077B5] transition"
  >
    <FaLinkedin className="text-white text-sm" />
  </a>
    <a href="https://www.instagram.com/beneicon/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-[#E1306C] transition"
  >
    <FaInstagram className="text-white text-sm" />
  </a>
    <a href="https://www.youtube.com/@beneicon?si=xBAhhNCfutGjDIqC" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-[#FF0000] transition"
  >
    <FaYoutube className="text-white text-sm" />
  </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-16 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Beneicon Pixel LLP. All rights reserved.</p>
        <p>Designed & Developed by Brainixt</p>
      </div>

    </footer>
  );
};

export default Footer;
