import React, { useState } from "react";
import mainImg from "../../Assets/products/indoor-p18.png";
import thumb1 from "../../Assets/products/indoor-p18.png";
import thumb2 from "../../Assets/indoor-led2.jpg";
import thumb3 from "../../Assets/asset04.jpg";
import thumb4 from "../../Assets/indoor-led3.jpg";

const IndoorP18 = () => {
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
              alt="Indoor LED P-1.8"
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
              Indoor LED Video Display P-1.8
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Deliver stunning indoor visuals with precision and reliability 
              using the Beneicon LED Video Display P-1.8 Indoor — engineered 
              to perform, designed to impress.
            </p>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition mb-6">
              Know More
            </button>

            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-semibold">CATEGORY:</span> LED Wall Indoor</p>
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
                  High-Definition Indoor LED Video Wall for Exceptional Visual Clarity
                </h2>
                <p>
                  The Beneicon LED Video Display P-1.8 Indoor is a high-resolution 
                  indoor LED video wall designed for environments where image 
                  precision, color accuracy, and seamless performance are critical. 
                  Manufactured by Beneicon Pixel LLP, this advanced display solution 
                  delivers crisp, detailed visuals with a fine 1.8mm pixel pitch, 
                  making it ideal for close-range viewing in premium indoor spaces.
                </p>
                <p className="mt-4">
                  Engineered for corporate, commercial, and professional applications, 
                  the Beneicon P-1.8 Indoor LED Video Display offers vivid brightness, 
                  smooth motion, and true-to-life color reproduction, ensuring an 
                  immersive viewing experience across all types of content.
                </p>
                <p className="mt-4">
                  Its seamless modular cabinet design creates a clean, edge-to-edge 
                  display surface, enhancing the overall visual impact of any space. 
                  Built with energy-efficient LED technology and a service-friendly 
                  design, this display ensures long-term reliability and easy maintenance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Key Features
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Fine Pixel Pitch (P-1.8) for sharp close-viewing visuals</li>
                  <li>High Brightness & Accurate Color Performance</li>
                  <li>Seamless Modular Cabinet Design</li>
                  <li>High Refresh Rate ≥ 3840 Hz (Flicker-Free)</li>
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
                  <li><strong>Model:</strong> LED Video Display P-1.8 Indoor</li>
                  <li><strong>Pixel Pitch:</strong> 1.8 mm</li>
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
                Deliver stunning indoor visuals with precision and reliability 
                using the Beneicon LED Video Display P-1.8 Indoor — engineered 
                to perform, designed to impress.
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

export default IndoorP18;