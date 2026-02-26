import React from "react";
import standeeImg from "../../Assets/standee-indoor.jpg";

const IndoorStandeeP25 = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Product Image */}
          <div>
            <img
              src={standeeImg}
              alt="LED Video Standee Indoor P-2.5"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Product Intro */}
          <div>
            <h1 className="text-4xl text-blue-700 font-bold mb-4">
              LED Video Standee Indoor P-2.5
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Beneicon Pixel Indoor P-2.5 LED Standee provides crisp, vibrant 
              visuals in a portable freestanding design — perfect for offices, 
              showrooms, and indoor events.
            </p>
                        <a
  href="https://wa.me/+917065993135"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg inline-block"
>
  Know More
</a>

            <div className="mt-6 text-sm text-gray-500">
              <p><span className="font-semibold text-black">Categories:</span> LED Standee Indoor, Trending</p>
              <p><span className="font-semibold text-black">Tags:</span> Portable, Powerful, Professional</p>
            </div>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="mt-20">
          <h2 className="text-3xl  text-blue-700 font-bold mb-6">
            Compact Indoor Display for Crisp, Vibrant Visuals
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Beneicon Pixel LED Standee Indoor P-2.5 delivers high-definition 
            visuals in a portable, freestanding design. With a 2.5mm pixel pitch, 
            it provides sharp, vivid images ideal for corporate offices, 
            showrooms, exhibitions, retail spaces, and indoor events — combining 
            convenience with professional-quality display performance.
          </p>
        </div>

        {/* ================= KEY FEATURES ================= */}
        <div className="mt-20">
          <h2 className="text-3xl  text-blue-700 font-bold mb-8">Key Features</h2>

          <ul className="space-y-4 text-gray-700">
            <li>• Fine Pixel Pitch (2.5mm) – Clear visuals for mid-range indoor viewing</li>
            <li>• High Brightness & Accurate Colors – Vibrant and lifelike display quality</li>
            <li>• Portable & Freestanding Design – Flexible placement and mobility</li>
            <li>• Seamless Display Surface – Edge-to-edge polished presentation</li>
            <li>• Energy Efficient & Reliable – Low power consumption with long lifespan</li>
            <li>• Easy Maintenance – Front and rear servicing access</li>
          </ul>
        </div>

        {/* ================= TECHNICAL SPECIFICATIONS ================= */}
        <div className="mt-20 bg-gray-50 p-10 rounded-2xl">
          <h2 className="text-3xl  text-blue-700 font-bold mb-8">Technical Specifications</h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <p><span className="font-semibold">Pixel Pitch:</span> 2.5 mm</p>
              <p><span className="font-semibold">Brightness:</span> ≥ 1000 nits</p>
              <p><span className="font-semibold">Refresh Rate:</span> ≥ 3840 Hz</p>
            </div>

            <div>
              <p><span className="font-semibold">Viewing Angle:</span> 160° (H) / 140° (V)</p>
              <p><span className="font-semibold">Operating Temperature:</span> 0°C to +40°C</p>
            </div>
          </div>
        </div>

        {/* ================= APPLICATIONS ================= */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Applications</h2>

          <p className="text-gray-700 leading-relaxed">
            Corporate Offices • Showrooms • Retail Spaces • Exhibitions • Indoor Events
          </p>
        </div>

        {/* ================= TAGLINE ================= */}
        <div className="mt-20 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Professional-quality indoor visuals in a compact, portable form — 
            Beneicon Pixel Indoor P-2.5 LED Standee.
          </p>
        </div>

        {/* ================= REVIEWS ================= */}
        <div className="mt-20 border-t pt-10">
          <h2 className="text-2xl font-bold mb-4">Reviews (0)</h2>
          <p className="text-gray-500">
            There are no reviews yet.
          </p>
        </div>

      </div>
    </div>
  );
};

export default IndoorStandeeP25;