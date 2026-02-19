import React from "react";
import standeeOutdoorImg from "../../Assets/standee-outdoor.jpg";
import adImg from "../../Assets/outdoor-led.jpg";
import eventImg from "../../Assets/asset02.jpg";
import mallImg from "../../Assets/asset02.jpg";

import { motion } from "framer-motion";
import {
  Sun,
  CloudRain,
  ShieldCheck,
  Wifi,
  Settings,
  Maximize2
} from "lucide-react";

const features = [
  { title: "High Brightness for Daylight", icon: <Sun size={36} /> },
  { title: "Weather Resistant Design", icon: <CloudRain size={36} /> },
  { title: "Durable Outdoor Cabinet", icon: <ShieldCheck size={36} /> },
  { title: "WiFi & USB Connectivity", icon: <Wifi size={36} /> },
  { title: "Easy Remote Content Management", icon: <Settings size={36} /> },
  { title: "Customizable Sizes", icon: <Maximize2 size={36} /> },
];

const StandeeOutdoor = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#F4F2F3] min-h-screen flex items-center px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-blue-600">Outdoor</span> LED <br />
              Video Standee
            </h1>

            <p className="text-gray-600 text-lg max-w-xl mb-10 leading-relaxed">
              Rugged and high-brightness outdoor LED standees built for
              advertising, events, exhibitions, and public spaces.
              Designed to deliver impactful visuals in all weather conditions.
            </p>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg">
              Request a Demo
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={standeeOutdoorImg}
              alt="Outdoor LED Standee"
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
              Outdoor LED standees provide high-visibility branding and communication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Outdoor Advertising */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={adImg}
                  alt="Outdoor Advertising"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Outdoor Advertising
                </h3>
                <p className="text-gray-600 text-sm">
                  Promote brands and products effectively in public areas and high-traffic zones.
                </p>
              </div>
            </div>

            {/* Events & Exhibitions */}
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
                  Engage audiences dynamically at trade shows and outdoor events.
                </p>
              </div>
            </div>

            {/* Shopping Areas */}
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={mallImg}
                  alt="Shopping Areas"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Public & Shopping Areas
                </h3>
                <p className="text-gray-600 text-sm">
                  High-impact visual communication in malls, streets, and public spaces.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default StandeeOutdoor;
