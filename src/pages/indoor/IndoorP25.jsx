import React, { useState } from "react";
import mainImg from "../../Assets/products/indoor-p18.png";
import thumb1 from "../../Assets/products/indoor-p18.png";
import thumb2 from "../../Assets/P25.jpeg";
import thumb3 from "../../Assets/indoor4.jpeg";
import thumb4 from "../../Assets/indoor-led3.jpg";

const IndoorP25 = () => {
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
              Indoor LED Video Display P-2.5
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              
Beneicon Pixel Indoor P-2.5 LED Video Wall delivers crisp, vibrant, and seamless visuals — ideal for corporate spaces, studios, and indoor events.
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
              <p><span className="font-semibold">CATEGORY:</span> LED Wall Indoor,Trending </p>
              <p><span className="font-semibold">TAG:</span> Every Pixel Counts,Seamless Clarity</p>
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
                    High-Resolution Indoor LED Display for Immersive Visual Experiences
                </h2>
                <p>
                    The Beneicon Indoor LED Video Display P-2.5 is a high-performance indoor display solution designed to deliver sharp image quality, vivid colors, and seamless visuals in professional environments. Manufactured by Beneicon Pixel LLP, this advanced LED display features a 2.5mm fine pixel pitch, making it ideal for mid-range indoor viewing where clarity and detail are essential.
                </p>
               
                <p className="mt-4">
                    P-2.5 Indoor LED Video Display offers consistent brightness, accurate color reproduction, and smooth motion, ensuring an engaging and immersive visual experience. Its precision-engineered modular cabinet design enables smooth, edge-to-edge visuals that enhance the overall aesthetics of any indoor space.
Built with energy-efficient LED technology and a service-friendly structure, this display ensures long-term reliability, reduced power consumption, and easy maintenance, even in continuous-use environments.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Key Features
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Fine Pixel Pitch (P-2.5) for High Resolution Clarity</li>
                  <li>High Brightness Performance</li>
                  <li>Smooth Visual Output with High Refresh Rate</li>
                  <li>Energy Efficient LED Technology</li>
                  <li>Seamless Modular Display Design</li>
                  <li>Designed for Professional Indoor Installations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Specifications
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Brand:</strong> Beneicon</li>
<li><strong>Product:</strong> Indoor LED Video Display P-2.5</li>
<li><strong>Pixel Pitch:</strong> 2.5 mm</li>
<li><strong>Brightness:</strong> 500 – 1000 nits</li>
<li><strong>Refresh Rate:</strong> ≥ 3840 Hz (Standard) / 7680 Hz (Optional)</li>
<li><strong>Viewing Angle:</strong> 140° (H) / 140° (V)</li>
<li><strong>Processing Depth:</strong> 12 – 14 Bit</li>
<li><strong>Frame Rate:</strong> 60 Hz</li>
<li><strong>Video Support:</strong> 2K HD / 4K UHD</li>
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
                using the Beneicon LED Video Display P-2.5 Indoor — engineered 
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

export default IndoorP25;