import React, { useState } from "react";
import mainImg from "../../Assets/P4.jpeg";
import thumb1 from "../../Assets/products/indoor-p15.jpg";
import thumb2 from "../../Assets/indoor4.jpeg";
import thumb3 from "../../Assets/P41.jpeg";
import thumb4 from "../../Assets/P42.jpeg";

const IndoorP4 = () => {
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
              Indoor LED Video Display P-4
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
             Beneicon  Indoor P-4 LED Video Wall provides bright, seamless visuals — perfect for auditoriums, conference halls, and large indoor spaces.
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
              <p><span className="font-semibold">CATEGORY:</span> LED Wall Indoor</p>
              <p><span className="font-semibold">TAG:</span> Clarity That Captivates</p>
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
                    Indoor LED Display for Stunning Visual Clarity
                </h2>
                <p>
                  The Beneicon Indoor LED Video Display P-4 is a high-performance indoor display engineered for
premium environments where precision and visual excellence matter most. Manufactured by
Beneicon Pixel LLP, this display features a 4.0mm pixel pitch, delivering sharp visuals and
consistent clarity for professional indoor viewing. Designed for corporate and commercial
applications, it ensures vivid visual output and a seamless modular design for a refined,
edge-to-edge display experience. Built using premium-grade LED modules and professional control
systems, each unit is precision-engineered and performance-tested to ensure reliable operation
and long service life.
                </p>
                <p className="mt-4">
                  Designed for corporate, commercial, and professional indoor 
                  applications, the Beneicon P-4 Indoor LED Video Display offers 
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
                  <li>Fine Pixel Pitch (P-4) for High Resolution Clarity</li>
                  <li>High Brightness Performance</li>
                  <li>Smooth Visual Output with High Refresh Rate</li>
<li>Seamless Modular Display Design</li>

                  
                  <li>Energy Efficient LED Technology</li>
                  <li>Designed for Professional Indoor Installations</li>
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
                  <li><strong>Pixel Pitch:</strong> 4.0 mm</li>
                  <li><strong>Brightness:</strong> ≥ 1000 nits</li>
                  <li><strong>Refresh Rate:</strong> ≥ 3840 Hz(Standard)/7680Hz(Optional)</li>
                  <li><strong>Viewing Angle:</strong> 140° (H) / 140° (V)</li>
                  <li><strong>Processing Depth:</strong> 12-14 Bit</li>
                  <li><strong>Frame Rate:</strong> 60Hz (Standard)</li>
                  <li><strong>Video Support:</strong>2K HD, 4K UHD</li>
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
                Beneicon Indoor LED Video Display P-4 — engineered for clarity, 
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

export default IndoorP4;
