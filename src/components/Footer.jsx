import { FaTwitter, FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-gray-300 pt-20 pb-10 px-6 relative">

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition"
      >
        ↑
      </button>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Beneicon
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Beneicon is a trusted LED display and digital solutions partner
            delivering premium indoor and outdoor LED systems across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/aboutus" className="hover:text-white transition">About Us</a></li>
            <li><a href="/products" className="hover:text-white transition">Products</a></li>
            <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="/contactus" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-6">
            Our Products
          </h3>
          <ul className="space-y-3">
            <li>Led Video Display Outdoor</li>
            <li>Led Video Display Indoor</li>
            <li>Led Video Cube Outdoor</li>
            <li>Led Video Cube Indoor</li>
            <li>Digital Standee</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-6">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-yellow-500" />
              <span>info@beneicon.com</span>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-yellow-500" />
              <span>+91 62605 15436</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-yellow-500" />
              <span>
                Industrial Area, LED Tech Park,<br />
                India
              </span>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-[#2B2B2B] p-3 rounded-full hover:bg-yellow-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-[#2B2B2B] p-3 rounded-full hover:bg-yellow-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-[#2B2B2B] p-3 rounded-full hover:bg-yellow-500 transition">
              <FaFacebookF />
            </a>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-16 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Beneicon Pixel LLP. All rights reserved.</p>
        <p>Designed & Developed by Harsh</p>
      </div>

    </footer>
  );
};

export default Footer;
