import React, { useState } from "react";
import mainImg from "../../Assets/products/outdoor-p6.jpeg";

const OutdoorP6 = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={mainImg}
              alt="Outdoor LED P-6"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold mb-6">
              Outdoor LED Video Display P-6
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Power your outdoor advertising with Beneicon Pixel’s Outdoor P-6 LED Video Wall — 
              bright, durable, and built for large-scale visibility in any weather.
            </p>
                        <a
  href="https://wa.me/+917065993135"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg inline-block"
>
  Know More
</a>

            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-semibold">CATEGORY:</span> LED Wall Outdoor</p>
              <p><span className="font-semibold">TAGS:</span> Built to Perform Outdoors, Go Big. Stay Bright, Perform Outdoors.</p>
              <p><span className="font-semibold">BRAND:</span> Beneicon</p>
            </div>
          </div>
        </div>

        {/* TABS SECTION */}
        <div className="mt-16 border-t pt-10">

          <div className="flex gap-10 border-b">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-3 font-medium ${
                activeTab === "description"
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-600"
              }`}
            >
              DESCRIPTION
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-3 font-medium ${
                activeTab === "reviews"
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-600"
              }`}
            >
              REVIEWS (0)
            </button>
          </div>

          {/* DESCRIPTION CONTENT */}
          {activeTab === "description" && (
            <div className="mt-10 space-y-10">

              {/* Main Description */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Large-Scale Outdoor LED Display with Unmatched Visibility
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The Beneicon Outdoor LED Video Display P-6 is a powerful large-format 
                  outdoor display solution engineered to deliver exceptional brightness, 
                  vivid color performance, and long-distance visibility. Manufactured by 
                  Beneicon Pixel LLP, this advanced LED display is designed for demanding 
                  outdoor environments where scale, clarity, and durability are essential.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  With a 6mm pixel pitch, the Beneicon P-6 provides crystal-clear visuals 
                  across expansive viewing areas, making it ideal for highway billboards, 
                  stadiums, public squares, and large outdoor advertising installations.
                  Its ultra-high brightness output ensures sharp and vibrant visuals even 
                  under direct sunlight.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Built with rugged, weather-resistant construction, the display is 
                  protected against dust, rain, heat, and extreme weather conditions.
                  The modular design ensures seamless visuals and flexible installation.
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Optimized Pixel Pitch (P-6) for long-distance clarity</li>
                  <li>Ultra-High Brightness (≥ 6000 nits)</li>
                  <li>IP65 All-Weather Front Protection</li>
                  <li>Seamless Modular Cabinet Design</li>
                  <li>Durable & Energy Efficient</li>
                  <li>Front & Rear Service Access</li>
                </ul>
              </div>

              {/* Technical Specifications */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Specifications
                </h2>

                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Brand: Beneicon</li>
                  <li>Manufacturer: Beneicon Pixel LLP</li>
                  <li>Model: Outdoor LED Video Display P-6</li>
                  <li>Pixel Pitch: 6 mm</li>
                  <li>Brightness: ≥ 6000 nits</li>
                  <li>Refresh Rate: ≥ 3840 Hz</li>
                  <li>Viewing Angle: 160° / 140°</li>
                  <li>IP Rating: IP65 (Front) / IP54 (Rear)</li>
                  <li>Operating Temp: -20°C to +60°C</li>
                </ul>
              </div>

              {/* Ideal Applications */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Ideal Applications
                </h2>

                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Highway & Large-Format Billboards</li>
                  <li>Stadiums & Sports Venues</li>
                  <li>Outdoor Advertising & Media Displays</li>
                  <li>Public Squares & City Installations</li>
                  <li>Smart City & Infrastructure Displays</li>
                </ul>

                <p className="text-gray-700 mt-6 font-medium">
                  Make every outdoor moment bigger, brighter, and bolder with the Beneicon 
                  Outdoor LED Video Display P-6 — built to command attention at scale.
                </p>

                <p className="text-gray-800 font-semibold mt-2">
                  Beneicon — engineered for impact, built for trust.
                </p>
              </div>

            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div className="mt-10 text-gray-600">
              No reviews yet.
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default OutdoorP6;