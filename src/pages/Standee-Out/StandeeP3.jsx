import React from "react";
import standeeImg from "../../Assets/image/LED-Video-Standee-Outdoor-P-3.png";

const OutdoorStandeeP3 = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Product Image */}
          <div>
            <img
              src={standeeImg}
              alt="LED Video Standee Outdoor P-3"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Product Intro */}
          <div>
            <h1 className="text-4xl text-blue-700 font-bold mb-4">
              LED Video Standee Outdoor P-3
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Beneicon  Outdoor P-3 LED Standee offers bright, crisp, and 
              weatherproof visuals in a portable design — perfect for outdoor 
              advertising and events.
            </p>

            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg">
              Know More
            </button>

            <div className="mt-6 text-sm text-gray-500">
              <p>
                <span className="font-semibold text-black">Categories:</span> LED Standee Outdoor, Trending
              </p>
            </div>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="mt-20">
          <h2 className="text-3xl  text-blue-700 font-bold mb-6">
            High-Visibility Outdoor Display for Maximum Impact
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Beneicon  LED Standee Outdoor P-3 delivers bright, sharp, 
            and engaging visuals in outdoor environments. With a 3mm pixel pitch, 
            it is ideal for advertising, live events, exhibitions, and public spaces 
            where attention-grabbing displays are essential.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Its portable, freestanding design combines convenience with 
            high performance, making it a versatile solution for outdoor 
            promotional and branding needs.
          </p>
        </div>

        {/* ================= KEY FEATURES ================= */}
        <div className="mt-20">
          <h2 className="text-3xl text-blue-700 font-bold mb-8">Key Features</h2>

          <ul className="space-y-4 text-gray-700">
            <li>• Pixel Pitch (3mm) – Clear visuals for medium-range outdoor viewing</li>
            <li>• High Brightness & Vivid Colors – Excellent visibility under direct sunlight</li>
            <li>• Portable & Freestanding Design – Easy transport and installation</li>
            <li>• Weatherproof & Durable – IP65-rated protection from rain and dust</li>
            <li>• Seamless Display Surface – Smooth, professional presentation</li>
            <li>• Energy Efficient & Reliable – Long-term consistent performance</li>
          </ul>
        </div>

        {/* ================= TECHNICAL SPECIFICATIONS ================= */}
        <div className="mt-20 bg-gray-50 p-10 rounded-2xl">
          <h2 className="text-3xl  text-blue-700 font-bold mb-8">Technical Specifications</h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <p><span className="font-semibold">Pixel Pitch:</span> 3 mm</p>
              <p><span className="font-semibold">Brightness:</span> ≥ 5500 nits</p>
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
          <h2 className="text-3xl  text-blue-700 font-bold mb-8">Applications</h2>

          <p className="text-gray-700 leading-relaxed">
            Outdoor Advertising • Events & Exhibitions • Retail Promotions • 
            Public Displays • Roadside Campaigns
          </p>
        </div>

        {/* ================= TAGLINE ================= */}
        <div className="mt-20 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Deliver bright, engaging outdoor visuals anywhere with 
            Beneicon  Outdoor P-3 LED Standee.
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

export default OutdoorStandeeP3;