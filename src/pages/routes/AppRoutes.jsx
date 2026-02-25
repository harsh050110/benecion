import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Gallery from"../gallery";

import DigitalStandee from "../categories/DigitalStandee";
import CubeIndoor from "../categories/cubein";
import IndoorDisplay from "../categories/leddisplayin";
import OutdoorDisplay from "../categories/leddisplayout";
import StandeeIndoor from "../categories/standeein";
import StandeeOutdoor from "../categories/standeeout";

import OutdoorP3 from "../outdoor/outdoorP3";
import OutdoorP4 from "../outdoor/outdoorP4";
import OutdoorP6 from "../outdoor/outdoorP6";
import OutdoorP8 from "../outdoor/outdoorP8";

import IndoorP15 from "../indoor/IndoorP15";
import IndoorP18 from "../indoor/IndoorP18";
import IndoorP2 from "../indoor/IndoorP2";
import IndoorP25 from "../indoor/IndoorP25";
import IndoorP4 from "../indoor/IndoorP4";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />}/>

      {/* Categories */}
      <Route path="/led-video-display-outdoor" element={<OutdoorDisplay />} />
      <Route path="/led-video-display-indoor" element={<IndoorDisplay />} />
      <Route path="/led-video-cube-indoor" element={<CubeIndoor />} />
      <Route path="/led-video-standee-indoor" element={<StandeeIndoor />} />
      <Route path="/led-video-standee-outdoor" element={<StandeeOutdoor />} />
      <Route path="/digital-standee" element={<DigitalStandee />} />

      {/* Outdoor Products */}
      <Route path="/outdoor-p3" element={<OutdoorP3 />} />
      <Route path="/outdoor-p4" element={<OutdoorP4 />} />
      <Route path="/outdoor-p6" element={<OutdoorP6 />} />
      <Route path="/outdoor-p8" element={<OutdoorP8 />} />

      {/* Indoor Products */}
      <Route path="/indoor-p15" element={<IndoorP15 />} />
      <Route path="/indoor-p18" element={<IndoorP18 />} />
      <Route path="/indoor-p2" element={<IndoorP2 />} />
      <Route path="/indoor-p25" element={<IndoorP25 />} />
      <Route path="/indoor-p4" element={<IndoorP4 />} />

    </Routes>
  );
};

export default AppRoutes;