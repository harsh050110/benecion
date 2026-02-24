import React from "react";

import g1 from"../Assets/indoor-led3.jpg";
import g2 from"../Assets/asset06.jpg";
import g3 from"../Assets/digital-standee.jpg";
import g4 from"../Assets/LED Video Wall Indoor P-2.5.jpg";
import g5 from "../Assets/outdoor-led.jpg";
import g6 from"../Assets/standee-indoor.jpg";

const galleryImages = [g1, g2, g3, g4, g5, g6];

const Gallery = () => {
  return (
    <div className="w-full bg-white min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-700">
          Gallery
        </h1>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <button className="px-6 py-2 rounded-full bg-black text-white text-sm font-medium">
            All (62)
          </button>
          <button className="px-6 py-2 rounded-full bg-green-500 text-white text-sm font-medium">
            LED Complete Project
          </button>
          <button className="px-6 py-2 rounded-full bg-green-500 text-white text-sm font-medium">
            Audio Visuals
          </button>
          <button className="px-6 py-2 rounded-full bg-green-500 text-white text-sm font-medium">
            LED Panel Design
          </button>
        </div>

        {/* IMAGE GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;