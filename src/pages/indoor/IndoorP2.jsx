import React, { useState } from "react";
import mainImg from "../../Assets/products/indoorp2.jpeg";
import thumb1 from "../../Assets/products/indoorp2.jpeg";
import thumb2 from "../../Assets/indoor-led2.jpg";
import thumb3 from "../../Assets/LED panel Design/LEd complete.jpg";
import thumb4 from "../../Assets/indoor-led3.jpg";

const IndoorP2 = () => {
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
              alt="Indoor LED P-2"
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
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold mb-6 text-blue-600">
             Beneicon  Indoor LED Video Display P-2
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Beneicon  Indoor P-2 LED Video Wall offers sharp, seamless,
              and vibrant indoor visuals — perfect for corporate spaces,
              studios, and events.
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
              <p><span className="font-semibold">TAGS:</span> High Definition, Indoor Perfection</p>
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

          {/* DESCRIPTION CONTENT */}
          {activeTab === "description" && (
            <div className="mt-10 space-y-10 text-gray-700">

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Crystal-Clear Indoor LED Display for Premium Visual Experiences
                </h2>
                <p>
                  The Beneicon Indoor LED Video Display P-2 is a high-performance
                  indoor display solution designed to deliver bright, detailed,
                  and seamless visuals in professional environments.
                  Manufactured by Beneicon Pixel LLP, this advanced LED display
                  features a 2mm fine pixel pitch, ensuring sharp imagery,
                  accurate color reproduction, and an immersive viewing
                  experience for close-range indoor applications.
                </p>
                <p className="mt-4">
                  Engineered for corporate, commercial, and control environments,
                  the Beneicon P-2 Indoor LED Video Display offers high brightness,
                  wide viewing angles, and smooth motion. Its precision-engineered
                  modular cabinet design creates a clean, edge-to-edge display
                  surface that enhances the aesthetics of modern interiors.
                </p>
                <p className="mt-4">
                  With energy-efficient LED technology and a service-friendly
                  structure, this display delivers long-term performance,
                  reduced power consumption, and easy maintenance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Key Features
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Fine Pixel Pitch (P-2) for high-resolution indoor viewing</li>
                  <li>High Brightness & Accurate Color Performance</li>
                  <li>Seamless Modular Cabinet Design</li>
                  <li>High Refresh Rate ≥ 3840 Hz (Flicker-Free Display)</li>
                  <li>Energy Efficient LED Technology</li>
                  <li>Front & Rear Service Access for Easy Maintenance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Specifications
                </h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Brand:</strong> Beneicon</li>
                  <li><strong>Manufacturer:</strong> Beneicon Pixel LLP</li>
                  <li><strong>Model:</strong> Indoor LED Video Display P-2</li>
                  <li><strong>Pixel Pitch:</strong> 2 mm</li>
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
                Deliver high-definition indoor visuals with precision and reliability
                using the Beneicon Indoor LED Video Display P-2 — built for
                professional performance and visual excellence.
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

export default IndoorP2;