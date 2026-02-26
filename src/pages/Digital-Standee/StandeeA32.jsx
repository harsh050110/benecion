import React from "react";
import standeeImg from "../../Assets/image/Digital-Standee-A-Shape-32-Inch.png";

const DigitalStandeeA32 = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Product Image */}
          <div>
            <img
              src={standeeImg}
              alt="Digital Standee A-Shape 32 Inch"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Product Intro */}
          <div>
            <h1 className="text-4xl text-blue-700 font-bold mb-4">
              Digital Standee A-Shape – 32 Inch
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Beneicon Pixel Digital Standee A-Shape 32 Inch offers sharp, 
              vibrant visuals in a compact, stable design — perfect for 
              indoor promotions and displays.
            </p>

            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg">
              Know More
            </button>

            <div className="mt-6 text-sm text-gray-500">
              <p>
                <span className="font-semibold text-black">Category:</span> Digital Standee
              </p>
            </div>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="mt-20">
          <h2 className="text-3xl  text-blue-700 font-bold mb-6">
            Compact and Versatile Display for Indoor Promotions
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Beneicon Pixel Digital Standee A-Shape 32 Inch is a sleek, 
            high-definition freestanding display designed for indoor spaces 
            such as retail stores, offices, exhibitions, and showrooms.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Its A-shape design ensures stability and visibility from multiple 
            angles, while the 32-inch screen delivers sharp and vibrant visuals 
            for effective communication.
          </p>
        </div>

        {/* ================= KEY FEATURES ================= */}
        <div className="mt-20">
          <h2 className="text-3xl text-blue-700 font-bold mb-8">Key Features</h2>

          <ul className="space-y-4 text-gray-700">
            <li>• 32-Inch High-Definition Screen – Clear and vivid indoor visuals</li>
            <li>• A-Shape Freestanding Design – Stable and visible from multiple directions</li>
            <li>• Portable & Lightweight – Easy to move and reposition</li>
            <li>• User-Friendly Interface – Supports images, videos & promotional content</li>
            <li>• Energy Efficient – Optimized power usage with bright display output</li>
          </ul>
        </div>

        {/* ================= TECHNICAL SPECIFICATIONS ================= */}
        <div className="mt-20 bg-gray-50 p-10 rounded-2xl">
          <h2 className="text-3xl  text-blue-700font-bold mb-8">Technical Specifications</h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <p><span className="font-semibold">Screen Size:</span> 32 Inch</p>
              <p><span className="font-semibold">Resolution:</span> Full HD / 1920×1080</p>
              <p><span className="font-semibold">Brightness:</span> ≥ 400 nits</p>
            </div>

            <div>
              <p><span className="font-semibold">Viewing Angle:</span> 160° (H) / 140° (V)</p>
              <p><span className="font-semibold">Operating Temperature:</span> 0°C to +40°C</p>
            </div>
          </div>
        </div>

        {/* ================= APPLICATIONS ================= */}
        <div className="mt-20">
          <h2 className="text-3xl  text-blue-700 font-bold mb-8">Applications</h2>

          <p className="text-gray-700 leading-relaxed">
            Retail Stores • Offices • Exhibitions • Showrooms • Indoor Promotions
          </p>
        </div>

        {/* ================= TAGLINE ================= */}
        <div className="mt-20 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Compact, stable, and visually striking — Beneicon Pixel 
            Digital Standee A-Shape 32 Inch enhances indoor communication effectively.
          </p>
        </div>

        {/* ================= REVIEWS ================= */}
        <div className="mt-20 border-t pt-10">
          <h2 className="text-2xl  text-blue-700 font-bold mb-4">Reviews (0)</h2>
          <p className="text-gray-500">
            There are no reviews yet.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DigitalStandeeA32;