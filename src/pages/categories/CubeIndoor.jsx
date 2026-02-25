import React from "react";
import cubeImg from "../../Assets/image/cube.png";

const CubeIndoor = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src={cubeImg}
              alt="Cube LED Video Display"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Cube LED Video Display
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Beneicon LED Cube Video Display is a 360° multi-face LED display solution 
              for both indoor and outdoor environments. Manufactured by Beneicon Pixel LLP, 
              it delivers immersive visuals with seamless panels, vibrant colors, and 
              flexible installation options—ideal for brand experiences, exhibitions, 
              retail spaces, and public installations.
            </p>

            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg">
              Know More
            </button>

            <div className="mt-6 text-sm text-gray-500">
              <p><span className="font-semibold text-black">Categories:</span> Cube LED Display, Trending</p>
              <p><span className="font-semibold text-black">Brand:</span> Beneicon</p>
            </div>
          </div>

        </div>

        {/* DESCRIPTION SECTION */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-6">
            360° Immersive Visual Displays for Iconic Brand Experiences
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Beneicon LED Cube Video Display is an innovative multi-face LED display 
            solution designed to deliver stunning 360-degree visual experiences for 
            both indoor and outdoor environments. Manufactured by Beneicon Pixel LLP, 
            this advanced display transforms spaces into dynamic visual landmarks, 
            capturing attention from every direction.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Available in indoor and outdoor configurations, the LED Cube features 
            seamless LED panels on all visible sides, enabling synchronized or 
            independent content playback across faces.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Built with high-brightness LEDs, precision engineering, and robust 
            construction, the outdoor variant ensures excellent visibility even 
            in daylight and reliable performance in challenging weather conditions, 
            while the indoor version delivers ultra-sharp visuals and refined 
            aesthetics for close-range viewing.
          </p>
        </div>

        {/* KEY FEATURES */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Key Features
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>• 360° Multi-Side Display – Engages audiences from all angles</li>
            <li>• Indoor & Outdoor Variants</li>
            <li>• High-Resolution LED Panels</li>
            <li>• Seamless Panel Integration</li>
            <li>• Flexible Content Control</li>
            <li>• Creative Installation Options</li>
            <li>• Energy Efficient & Reliable</li>
          </ul>
        </div>

        {/* TECHNICAL HIGHLIGHTS */}
        <div className="mt-20 bg-gray-50 p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8">
            Technical Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">

            <div>
              <p><span className="font-semibold">Brand:</span> Beneicon</p>
              <p><span className="font-semibold">Manufacturer:</span> Beneicon Pixel LLP</p>
              <p><span className="font-semibold">Display Type:</span> LED Cube Video Display</p>
              <p><span className="font-semibold">Pixel Pitch:</span> P2 / P2.5 / P3 / P4</p>
            </div>

            <div>
              <p><span className="font-semibold">Brightness:</span> Indoor & High Brightness Outdoor</p>
              <p><span className="font-semibold">Viewing Angle:</span> Wide-Angle</p>
              <p><span className="font-semibold">IP Rating:</span> Weatherproof (Outdoor)</p>
              <p><span className="font-semibold">Installation:</span> Hanging / Fixed / Outdoor Mounting</p>
              <p><span className="font-semibold">Control System:</span> Centralized LED CMS</p>
            </div>

          </div>
        </div>

        {/* APPLICATIONS */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-8">
            Ideal Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-xl font-semibold mb-4">Indoor Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Retail Showrooms & Experience Centers</li>
                <li>• Corporate Lobbies & Brand Zones</li>
                <li>• Shopping Malls & Atriums</li>
                <li>• Exhibitions & Trade Shows</li>
                <li>• Museums & Interactive Displays</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Outdoor Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Public Squares & City Installations</li>
                <li>• Outdoor Events & Festivals</li>
                <li>• Smart City & Landmark Displays</li>
                <li>• Commercial Advertising Zones</li>
                <li>• Theme Parks & Entertainment Areas</li>
              </ul>
            </div>

          </div>
        </div>

        {/* FOOTER TAGLINE */}
        <div className="mt-20 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Beneicon — engineered for impact, built for trust.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CubeIndoor;