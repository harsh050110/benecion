import React, { useState } from "react";

import g1 from "../Assets/products/outdoor4.jpg";
import g2 from "../Assets/products/indoorp4.jpg";
import g3 from "../Assets/products/indoorp2.jpeg";
import g4 from "../Assets/products/indoor-p18.png";
import g5 from "../Assets/products/indoor-p15.jpg";
import g6 from "../Assets/asset01.jpg";
import g7 from "../Assets/asset02.jpg";
import g8 from "../Assets/asset03.jpg";
import g9 from "../Assets/asset04.jpg";
import g10 from "../Assets/asset05.jpg";
import g11 from "../Assets/asset06.jpg";
import g12 from "../Assets/digital-standee.jpg";
import g13 from "../Assets/indoor-led.jpg";
import g14 from "../Assets/indoor-led2.jpg";
import g15 from "../Assets/indoor-led3.jpg";
import g16 from "../Assets/LED Video Wall Indoor P-2.5.jpg";
import g17 from "../Assets/standee-indoor.jpg";
import g18 from "../Assets/outdoor-led.jpg";
import g19 from "../Assets/standee-outdoor.jpg";
import g20 from "../Assets/LED panel Design/beneicon Circular-led-display-cabinet-1-1024x740.jpg";
import g21 from "../Assets/LED panel Design/Double-side-front-opening-beneicon LED-Display .webp";
import g22 from"../Assets/LED panel Design/PHOTO-2025-08-10-22-07-50.jpg";
import g23 from "../Assets/LED panel Design/PHOTO-2025-09-26-23-40-31 2.jpg";
import g24 from "../Assets/LED panel Design/PHOTO-2025-10-07-14-36-04.jpg";
import g25 from "../Assets/LED panel Design/PHOTO-2025-10-07-14-36-40.jpg";
import g26 from "../Assets/LED panel Design/PHOTO-2025-10-07-14-35-50.jpg";
import g27 from "../Assets/LED panel Design/frame1.jpg";
import g28 from "../Assets/LED panel Design/frame7.jpg";
import g29 from "../Assets/LED panel Design/beneiconLED-Display-Cabinet-Types-1024x966.jpg";
import g30 from "../Assets/LED panel Design/PHOTO-2025-10-07-14-36-10.jpg";
import g31 from "../Assets/LED panel Design/Double-side-front-opening-beneicon LED-Display .webp";
import g32 from "../Assets/LED panel Design/PHOTO-2025-10-17-13-38-57.jpg";
import g33 from "../Assets/LED panel Design/PHOTO-2025-10-06-17-54-39.jpg";
import g34 from "../Assets/LED panel Design/PHOTO-2025-10-07-14-36-15.jpg";
import g35 from "../Assets/LED panel Design/PHOTO-2025-10-07-14-36-04.jpg";
import g36 from "../Assets/LED panel Design/PHOTO-2025-10-07-14-36-09.jpg";

// Example structure — continue for all 62
const galleryData = [
  { img: g1, category: "LED Complete Project" },
  { img: g2, category: "Audio Visuals" },
  { img: g3, category: "LED Panel Design" },
  { img: g4, category: "LED Complete Project" },
  { img: g5, category: "Audio Visuals" },
  { img: g6, category: "LED Panel Design"},
  {img: g7, category: "LED Complete Project"},
  {img: g8, category: "Audio Visuals"},
  {img: g9, category: "LED Panel Design"},
  {img:g10, category: "LED Complete Project"},
  {img:g11, category: "Audio Visuals"},
  {img:g12, category: "LED Panel Design"},
  {img:g13, category: "LED Complete Project"},
  {img:g14, category: "Audio Visuals"},
  {img:g15, category: "LED Panel Design"},
  {img:g16, category: "LED Complete Project"},
  {img:g17, cateogry: "Audio Visuals"},
  {img:g18, category: "LED Panel Design"},
  {img:g19, category: "LED Complete Project"},
  {img:g20, category: "LED Complete Project"},
  {img:g21, category: "LED Complete Project"},
  {img:g22, category: "LED Complete Project"},
  {img:g23, category: "LED Complete Project"},
  {img:g24, category: "LED Complete Project"},
  {img:g25, category: "LED Complete Project"},
  {img:g26, category: "LED Complete Project"},
  {img:g27, category: "LED Complete Project"},
  {img:g28, category: "LED Complete Project"},
  {img:g29, category: "LED Complete Project"},
  {img:g30, category: "LED Complete Project"},
  {img:g31, category: "LED Complete Project"},
  {img:g32, category: "LED Complete Project"},
  {img:g33, category: "LED Complete Project"},
  {img:g34, category: "LED Complete Project"},
  {img:g35, category: "LED Complete Project"},
  {img:g36, category: "LED Complete Project"}
  
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "LED Complete Project",
    "Audio Visuals",
    "LED Panel Design",
  ];

  const filteredImages =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

  const getCount = (category) => {
    if (category === "All") return galleryData.length;
    return galleryData.filter((item) => item.category === category).length;
  };

  return (
    <div className="w-full bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Gallery
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === category
                  ? "bg-black text-white"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              {category} ({getCount(category)})
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={item.img}
                alt="gallery"
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
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