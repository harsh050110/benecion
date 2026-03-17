import React from "react";
import standeeImg from "../../Assets/image/LED-Video-Standee-Outdoor-P-4.jpg";

const OutdoorStandeeP4 = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HERO SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Product Image */}
          <div>
            <img
              src={standeeImg}
              alt="LED Video Standee Outdoor P-4"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Product Intro */}
          <div>
            <h1 className="text-4xl text-blue-700 font-bold mb-4">
              LED Video Standee Outdoor P-4
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Beneicon  Outdoor P-4 LED Standee provides bright, clear, 
              and weatherproof visuals in a portable design — ideal for 
              outdoor advertising and events.
            </p>

            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg">
              Know More
            </button>

            <div className="mt-6 text-sm text-gray-500">
              <p>
                <span className="font-semibold text-black">Category:</span> LED Standee Outdoor
              </p>
            </div>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="mt-20">
          <h2 className="text-3xl text-blue-700 font-bold mb-6">
            High-Impact Outdoor Display for Large-Scale Visibility
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Beneicon  LED Standee Outdoor P-4 is designed to deliver 
            bright, sharp, and engaging visuals in outdoor environments. 
            With a 4mm pixel pitch, it is ideal for advertising, events, 
            exhibitions, and public spaces where maximum visibility and 
            high performance are required.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Its portable, freestanding design ensures flexible installation 
            and convenient setup for various outdoor promotional applications.
          </p>
        </div>

        {/* ================= KEY FEATURES ================= */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>

          <ul className="space-y-4 text-gray-700">
            <li>• Pixel Pitch (4mm) – Clear visuals for medium-to-long range viewing</li>
            <li>• High Brightness & Vivid Colors – Excellent sunlight visibility</li>
            <li>• Portable & Freestanding Design – Easy transport and flexible setup</li>
            <li>• Weatherproof & Durable – IP65-rated protection against harsh weather</li>
            <li>• Seamless Display Surface – Professional edge-to-edge presentation</li>
            <li>• Energy Efficient & Reliable – Long-term stable performance</li>
          </ul>
        </div>

        {/* ================= TECHNICAL SPECIFICATIONS ================= */}
        <div className="mt-20 bg-gray-50 p-10 rounded-2xl">
          <h2 className="text-3xl text-blue-700 font-bold mb-8">Technical Specifications</h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <p><span className="font-semibold">Pixel Pitch:</span> 4 mm</p>
              <p><span className="font-semibold">Brightness:</span> ≥ 6000 nits</p>
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
            Outdoor Advertising • Events & Exhibitions • Retail Promotions • 
            Public Displays • Roadside Campaigns
          </p>
        </div>

        {/* ================= TAGLINE ================= */}
        <div className="mt-20 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Make your outdoor message stand out with clarity and impact — 
            Beneicon  Outdoor P-4 LED Standee.
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

export default OutdoorStandeeP4;