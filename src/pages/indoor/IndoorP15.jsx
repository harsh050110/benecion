import React, { useState } from "react";
import mainImg from "../../Assets/products/indoor-p15.jpg";
import thumb1 from "../../Assets/products/indoor-p15.jpg";
import thumb2 from "../../Assets/indoor-led2.jpg";
import thumb3 from "../../Assets/asset04.jpg";
import thumb4 from "../../Assets/indoor-led3.jpg";

const IndoorP15 = () => {
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
              alt="Indoor LED P-1.5"
              className="w-full rounded-xl shadow-lg"
            />

            <div className="flex gap-4 mt-6">
              {[thumb1, thumb2, thumb3, thumb4].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumbnail"
                  onClick={() => setSelectedImg(img)}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
                    selectedImg === img
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold mb-6">
              Indoor LED Video Display P-1.5
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Experience ultra-clear visuals with Beneicon Pixel Indoor P-1.5 LED Video Wall — 
              perfect for corporate spaces, studios, and indoor events.
            </p>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition mb-6">
              Know More
            </button>

            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-semibold">CATEGORY:</span> LED Wall Indoor</p>
              <p><span className="font-semibold">TAG:</span> Precision in Every Pixel</p>
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
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              DESCRIPTION
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-3 font-medium ${
                activeTab === "reviews"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              REVIEWS (0)
            </button>
          </div>

          {activeTab === "description" && (
            <div className="mt-10 space-y-10 text-gray-700">

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Ultra-Fine Indoor LED Display for Stunning Visual Clarity
                </h2>
                <p>
                  The Beneicon Indoor LED Video Display P-1.5 is a high-performance 
                  indoor display solution engineered for premium environments 
                  where precision, clarity, and visual excellence matter most.
                  Manufactured by Beneicon Pixel LLP, this advanced LED display 
                  features an ultra-fine 1.5mm pixel pitch, delivering crystal-clear 
                  visuals and exceptional detail for close-range viewing.
                </p>
                <p className="mt-4">
                  Designed for corporate, commercial, and professional indoor 
                  applications, the Beneicon P-1.5 Indoor LED Video Display offers 
                  vivid brightness, superior contrast, and accurate color reproduction.
                  Its sleek modular cabinet design creates a smooth, edge-to-edge 
                  display surface, enhancing the aesthetics of modern interiors.
                </p>
                <p className="mt-4">
                  Built with energy-efficient LED technology and a service-friendly 
                  structure, this display ensures long-term reliability, reduced 
                  power consumption, and easy maintenance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Key Features
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Ultra-Fine Pixel Pitch (P-1.5)</li>
                  <li>High Brightness & Contrast</li>
                  <li>Seamless Modular Cabinet Design</li>
                  <li>High Refresh Rate ≥ 3840 Hz</li>
                  <li>Energy Efficient LED Technology</li>
                  <li>Front & Rear Service Access</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Specifications
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Brand:</strong> Beneicon</li>
                  <li><strong>Manufacturer:</strong> Beneicon Pixel LLP</li>
                  <li><strong>Model:</strong> Indoor LED Video Display P-1.5</li>
                  <li><strong>Pixel Pitch:</strong> 1.5 mm</li>
                  <li><strong>Brightness:</strong> ≥ 1000 nits</li>
                  <li><strong>Refresh Rate:</strong> ≥ 3840 Hz</li>
                  <li><strong>Viewing Angle:</strong> 160° (H) / 140° (V)</li>
                  <li><strong>Operating Temperature:</strong> 0°C to +40°C</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Ideal Applications
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Corporate Lobbies & Experience Centers</li>
                  <li>Control Rooms & Command Centers</li>
                  <li>Studios & Broadcast Environments</li>
                  <li>Conference & Boardrooms</li>
                  <li>Indoor Events & Exhibitions</li>
                </ul>
              </div>

              <p className="font-medium text-gray-800">
                Deliver crisp, vibrant, and professional indoor visuals with the 
                Beneicon Indoor LED Video Display P-1.5 — engineered for clarity, 
                precision, and reliability.
              </p>

            </div>
          )}

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

export default IndoorP15;
