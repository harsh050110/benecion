import React from "react";
import standeeImg from "../../Assets/image/LED-Video-Standee-Outdoor-P-2.5.jpg"; 

const OutdoorStandeeP25 = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Product Image */}
          <div>
            <img
              src={standeeImg}
              alt="LED Video Standee Outdoor P-2.5"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Product Intro */}
          <div>
            <h1 className="text-4xl  text-blue-700 font-bold mb-4">
              LED Video Standee Outdoor P-2.5
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Beneicon Outdoor P-2.5 LED Standee delivers bright, crisp visuals 
              in a portable, weatherproof design — perfect for outdoor advertising 
              and events.
            </p>

            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg">
              Know More
            </button>

            <div className="mt-6 text-sm text-gray-500">
              <p><span className="font-semibold text-black">Category:</span> LED Standee Outdoor</p>
              <p><span className="font-semibold text-black">Tags:</span> Durable, Eye-Catching, Portable</p>
            </div>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="mt-20">
          <h2 className="text-3xl  text-blue-700 font-bold mb-6">
            High-Impact Outdoor Display for Dynamic Advertising
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Beneicon Pixel LED Standee Outdoor P-2.5 combines portability 
            with powerful visual performance for outdoor environments. 
            With a 2.5mm pixel pitch, it delivers bright, sharp, and vibrant images, 
            making it ideal for advertising, events, exhibitions, and public spaces 
            where attention-grabbing visuals matter.
          </p>
        </div>

        {/* ================= KEY FEATURES ================= */}
        <div className="mt-20">
          <h2 className="text-3xl text-blue-700 font-bold mb-8">Key Features</h2>

          <ul className="space-y-4 text-gray-700">
            <li>• Fine Pixel Pitch (2.5mm) – Crisp visuals for close to mid-range outdoor viewing</li>
            <li>• High Brightness & Vivid Colors – Clear visibility even in direct sunlight</li>
            <li>• Portable & Freestanding Design – Flexible placement options</li>
            <li>• Weatherproof & Durable – IP65-rated protection against rain and dust</li>
            <li>• Seamless Display Surface – Smooth and professional visual presentation</li>
            <li>• Energy Efficient & Reliable – Optimized LED technology for long-term use</li>
          </ul>
        </div>

        {/* ================= TECHNICAL SPECIFICATIONS ================= */}
        <div className="mt-20 bg-gray-50 p-10 rounded-2xl">
          <h2 className="text-3xl  text-blue-700 font-bold mb-8">Technical Specifications</h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <p><span className="font-semibold">Pixel Pitch:</span> 2.5 mm</p>
              <p><span className="font-semibold">Brightness:</span> ≥ 5000 nits</p>
              <p><span className="font-semibold">Refresh Rate:</span> ≥ 3840 Hz</p>
            </div>

            <div>
              <p><span className="font-semibold">Viewing Angle:</span> 160° (H) / 140° (V)</p>
              <p><span className="font-semibold">IP Rating:</span> IP65 (Front) / IP54 (Rear)</p>
              <p><span className="font-semibold">Operating Temperature:</span> -20°C to +60°C</p>
            </div>
          </div>
        </div>

        {/* ================= APPLICATIONS ================= */}
        <div className="mt-20">
          <h2 className="text-3xl text-blue-700 font-bold mb-8">Applications</h2>

          <p className="text-gray-700 leading-relaxed">
            Outdoor Advertising • Events & Exhibitions • Retail Spaces • 
            Public Displays • Roadside Promotions
          </p>
        </div>

        {/* ================= TAGLINE ================= */}
        <div className="mt-20 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Grab attention outdoors with clarity and vibrance — 
            Beneicon  Outdoor P-2.5 LED Standee.
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

export default OutdoorStandeeP25;