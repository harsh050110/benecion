import React, { useState } from "react";
import mainImg from "../../Assets/products/outdoorP3.jpg";
import thumb1 from "../../Assets/products/outdoorP3.jpg";
import thumb2 from"../../Assets/outdoorads.jpeg";
import thumb3 from "../../Assets/asset05.jpg";
import thumb4 from "../../Assets/outdoor-led.jpg";

const OutdoorP3 = () => {
  const [selectedImg, setSelectedImg] = useState(mainImg);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT IMAGE SECTION */}
          <div>
            <img
              src={selectedImg}
              alt="Outdoor LED P-3"
              className="w-full rounded-xl shadow-lg"
            />

            {/* THUMBNAILS */}
            <div className="flex gap-4 mt-6">
              {[thumb1, thumb2, thumb3, thumb4].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumbnail"
                  onClick={() => setSelectedImg(img)}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                    selectedImg === img
                      ? "border-green-500"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold mb-6">
              Outdoor LED Video Display P-3
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Experience bold, high-impact visuals with Beneicon Pixel’s Outdoor P-3 LED Video Wall.
              Designed for clarity, brightness, and all-weather durability —
              perfect for outdoor advertising and large-scale displays.
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
              <p><span className="font-semibold">TAGS:</span> Bright, Durable, Outdoor Performance</p>
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
            <div className="mt-10 space-y-8">

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Key Features
                </h2>

                <ul className="list-disc pl-6 space-y-3 text-gray-700">

                  <li>Fine Pixel Pitch P-3 for Clear Outdoor Visibility</li>
                  <li>High Brightness Performance</li>
                  <li>Excellent Sunlight Readability</li>
                  <li>Smooth Visual Output with High Refresh Rate</li>
                  <li>Weather-Resistant Outdoor Design</li>
                  <li>Designed for Professional Outdoor Installations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Specifications
                </h2>

                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Brand: Beneicon</li>
<li>Product: Beneicon LED Digital Standee (Outdoor)</li>
<li>Model No: BLSO3.0-1</li>
<li>Pixel Pitch: 3.0 mm</li>
<li>Brightness: 4500 – 5500 nits</li>
<li>Standee Size Options: 6 × 2 ft / 6 × 3 ft</li>
<li>Refresh Rate: ≥ 3840 Hz</li>
<li>Viewing Angle: 140° (H) / 140° (V)</li>
<li>Processing Depth: 12 – 14 Bit</li>
<li>Frame Rate: 60 Hz</li>
<li>Protection Grade: IP65</li>
<li>Control System: Plug & Play / Mobile Phone Content Control Supported</li>
<li>Content Support: 2K HD / 4K UHD</li>
<li>Installation Type: Floor Standing</li>
<li>Usage: Outdoor</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Ideal Applications
                </h2>

                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Outdoor Billboards</li>
                  <li>Stadiums & Arenas</li>
                  <li>Retail & Mall Exteriors</li>
                  <li>Corporate Outdoor Branding</li>
                  <li>Smart City Displays</li>
                </ul>
              </div>

            </div>
          )}

          {/* REVIEWS CONTENT */}
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

export default OutdoorP3;