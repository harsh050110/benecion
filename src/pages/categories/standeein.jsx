import React from "react";
import { Link } from "react-router-dom";
import standeeP2 from "../../Assets/asset04.jpg";
import standeeP25 from "../../Assets/StandeeP2.jpeg";
import standeeP18 from "../../Assets/asset04.jpg";
import standeeIndoorImg from "../../Assets/standee-indoor.jpg";
import retailImg from "../../Assets/asset02.jpg";
import mallImg from "../../Assets/Standee.jpeg";
import corporateImg from "../../Assets/asset02.jpg";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  LayoutTemplate,
  Wifi,
  Volume2,
  Settings,
  Sparkles
} from "lucide-react";

const features = [
  { title: "Full HD / 4K Display", icon: <MonitorSmartphone size={36} /> },
  { title: "Slim & Elegant Design", icon: <LayoutTemplate size={36} /> },
  { title: "WiFi & USB Connectivity", icon: <Wifi size={36} /> },
  { title: "Built-in Audio System", icon: <Volume2 size={36} /> },
  { title: "Easy Content Management", icon: <Settings size={36} /> },
  { title: "Vibrant Indoor Brightness", icon: <Sparkles size={36} /> },
];

const StandeeIndoor = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#F4F2F3] min-h-screen flex items-center px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-blue-600">Indoor</span> LED <br />
              Video Standee
            </h1>

            <p className="text-gray-600 text-lg max-w-xl mb-10 leading-relaxed">
              Elegant and high-performance indoor LED standees designed
              for retail stores, corporate offices, showrooms, and exhibitions.
              Deliver engaging visual content with clarity and style.
            </p>

                      <a
  href="https://wa.me/+917065993135"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg inline-block"
>
  Request Your Demo
</a>
          </div>

          <div className="flex justify-center">
            <img
              src={standeeIndoorImg}
              alt="Indoor LED Standee"
              className="w-full max-w-xl rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-[#F4F2F3] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-12 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-black">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
            </motion.div>
          ))}

        </div>
      </section>
      <section className="bg-[#F4F2F3] py-20 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl font-bold mb-12">
      Related Products
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      <Link to="/standeeP2" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
        <img src={standeeP2} alt="Digital Standee LED P-2" className="h-64 w-full object-contain group-hover:scale-105 transition duration-500" />
        <div className="p-6 text-center font-semibold">
          Digital Standee LED P-2
        </div>
      </Link>

      <Link to="/standeeP25" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
        <img src={standeeP25} alt="Digital Standee LED P-2.5" className="h-64 w-full object-contain group-hover:scale-105 transition duration-500" />
        <div className="p-6 text-center font-semibold">
          Digital Standee LED P-2.5
        </div>
      </Link>

      <Link to="/standeeP18" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
        <img src={standeeP18} alt="Digital Standee LED P-1.8" className="h-64 w-full object-contain group-hover:scale-105 transition duration-500" />
        <div className="p-6 text-center font-semibold">
          Digital Standee LED P-1.8
        </div>
      </Link>

    </div>
  </div>
</section>
   {/* ================= APPLICATIONS ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-700 mb-4">
              Applications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Indoor LED standees enhance communication and brand visibility
              across various professional environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Retail */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={retailImg}
                  alt="Retail"
                  className="w-full h-64 object-contain group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Retail Stores
                </h3>
                <p className="text-gray-600 text-sm">
                  Promote products, discounts, and brand campaigns dynamically inside stores.
                </p>
              </div>
            </div>

            {/* Shopping Mall */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={mallImg}
                  alt="Shopping Malls"
                  className="w-full h-64 object-contain group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Shopping Malls
                </h3>
                <p className="text-gray-600 text-sm">
                  Engage customers in high-footfall areas with vibrant digital displays.
                </p>
              </div>
            </div>

            {/* Corporate */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={corporateImg}
                  alt="Corporate Offices"
                  className="w-full h-64 object-contain group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Corporate Offices
                </h3>
                <p className="text-gray-600 text-sm">
                  Display announcements, branding, and internal communications effectively.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* FOOTER TAGLINE */}
        <div className="mt-20 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Beneicon — TRUST <span className="text-blue-700">TECHNOLOGY </span> IMPACT.
          </p>
        </div>
      </section>

    </>
  );
};

export default StandeeIndoor;
