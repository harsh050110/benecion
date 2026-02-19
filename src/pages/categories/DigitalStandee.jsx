import React from "react";
import standeeImg from "../../Assets/digital-standee.jpg";
import retailImg from "../../Assets/asset02.jpg";
import mallImg from "../../Assets/asset02.jpg";
import eventImg from "../../Assets/asset02.jpg";

import { motion } from "framer-motion";
import { MonitorSmartphone, Wifi, Usb, LayoutTemplate, Volume2, Settings } from "lucide-react";

const features = [
  { title: "Full HD Display", icon: <MonitorSmartphone size={36} /> },
  { title: "WiFi & USB Connectivity", icon: <Wifi size={36} /> },
  { title: "Plug & Play Media Support", icon: <Usb size={36} /> },
  { title: "Slim & Modern Design", icon: <LayoutTemplate size={36} /> },
  { title: "Built-in Audio System", icon: <Volume2 size={36} /> },
  { title: "Easy Content Management", icon: <Settings size={36} /> },
];

const DigitalStandee = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#F4F2F3] min-h-screen flex items-center px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-blue-600">Digital</span> Standee <br />
              Display Solutions
            </h1>

            <p className="text-gray-600 text-lg max-w-xl mb-10 leading-relaxed">
              Sleek and modern digital standees designed to elevate
              advertising, promotions, and customer engagement in retail
              stores, malls, events, and corporate environments.
            </p>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg">
              Request a Demo
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={standeeImg}
              alt="Digital Standee"
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

      {/* ================= APPLICATIONS ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-700 mb-4">
              Applications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Digital standees are perfect for dynamic communication and brand promotion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Retail */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={retailImg}
                  alt="Retail Stores"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Retail Stores
                </h3>
                <p className="text-gray-600 text-sm">
                  Promote offers and enhance customer engagement inside retail environments.
                </p>
              </div>
            </div>

            {/* Malls */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={mallImg}
                  alt="Shopping Malls"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Shopping Malls
                </h3>
                <p className="text-gray-600 text-sm">
                  Eye-catching promotional displays in high-traffic areas.
                </p>
              </div>
            </div>

            {/* Events */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={eventImg}
                  alt="Events & Exhibitions"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Events & Exhibitions
                </h3>
                <p className="text-gray-600 text-sm">
                  Showcase products and information dynamically at trade shows and exhibitions.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default DigitalStandee;
