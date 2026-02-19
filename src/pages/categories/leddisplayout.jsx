import React from "react";
import outdoorImg from "../../Assets/outdoor-led.jpg";
import { motion } from "framer-motion";
import { Sparkles, Sun, Puzzle, CloudRain, Maximize2, Wrench } from "lucide-react";
import adImg from "../../Assets/outdoor-led.jpg";
import controlImg from "../../Assets/asset02.jpg";
import retailImg from "../../Assets/outdoor-led.jpg";


const features = [
  { title: "Crystal Clear Resolution", icon: <Sparkles size={36} /> },
  { title: "High Brightness", icon: <Sun size={36} /> },
  { title: "Seamless Integration", icon: <Puzzle size={36} /> },
  { title: "Weather Resistance", icon: <CloudRain size={36} /> },
  { title: "Customizable Sizes", icon: <Maximize2 size={36} /> },
  { title: "Easy Maintenance & Installation Ports", icon: <Wrench size={36} /> },
];


const Hero = () => {
  return (
    <>
      <section className="bg-[#F4F2F3] min-h-screen flex items-center px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-blue-600">Outdoor</span> LED <br />
              Video Display <br />
              Solutions
            </h1>

            <p className="text-gray-600 text-lg max-w-xl mb-10 leading-relaxed">
              High-brightness, weather-resistant outdoor LED displays designed 
              for advertising, events, stadiums, and large-scale digital 
              installations. Delivering powerful visuals that shine 
              day and night.
            </p>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg">
              Request a Demo
            </button>
          </div>

         
          <div className="flex justify-center">
            <img
              src={outdoorImg}
              alt="Outdoor LED Display"
              className="w-full max-w-xl rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>
      
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
      <section className="bg-white py-24 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-blue-700 mb-4">
        Applications
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Outdoor LED displays designed for impactful communication across industries.
      </p>
    </div>

    {/* 3 Boxes */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* Advertisement & Marketing */}
      <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="overflow-hidden">
          <img
            src={adImg}
            alt="Advertisement & Marketing"
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Advertisement & Marketing
          </h3>
          <p className="text-gray-600 text-sm">
            High-impact digital billboards and outdoor screens for brand promotions, events, and large-scale advertising.
          </p>
        </div>
      </div>

      {/* Control Room */}
      <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="overflow-hidden">
          <img
            src={controlImg}
            alt="Control Room"
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Control Room
          </h3>
          <p className="text-gray-600 text-sm">
            Reliable real-time monitoring displays for traffic management, security surveillance, and operations control.
          </p>
        </div>
      </div>

      {/* Retail */}
      <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="overflow-hidden">
          <img
            src={retailImg}
            alt="Retail"
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Retail
          </h3>
          <p className="text-gray-600 text-sm">
            Eye-catching storefront displays that attract customers and enhance in-store engagement.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

    </>
  );
};

export default Hero;
