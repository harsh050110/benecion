import React from "react";
import outdoorImg from "../../Assets/outdoor-led.jpg";


const Hero = () => {
  return (
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
  );
};

export default Hero;
