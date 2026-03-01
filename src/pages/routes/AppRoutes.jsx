import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Gallery from"../gallery";

import DigitalStandee from "../categories/DigitalStandee";
import CMSsoftware from "../categories/CMSsoftware";
import CubeIndoor from "../categories/CubeIndoor";
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
// Standee Indoor
import IndoorStandeeP2 from "../../pages/Standee-In/StandeeP2";
import IndoorStandeeP25  from "../Standee-In/StandeeP25";
import IndoorStandeeP18 from "../Standee-In/StandeeP18";
// Standee Outdoor
import OutdoorStandeeP25 from "../Standee-Out/StandeeP25";
import OutdoorStandeeP3 from "../Standee-Out/StandeeP3";
import OutdoorStandeeP4 from "../Standee-Out/StandeeP4";
// Digital Standee
import DigitalStandeeA32 from "../Digital-Standee/StandeeA32";
import DigitalStandeeA43 from "../Digital-Standee/StandeeA43";
import DigitalStandeeI43 from "../Digital-Standee/StandeeI-43";
import DigitalStandeeI50 from "../Digital-Standee/StandeeI50";


const AppRoutes = () => {
  return (
    <Routes>

      {/* Main Pages */}
      
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />}/>
      

      {/* Categories */}
      <Route path="/cmssoftware" element={<CMSsoftware/>}/>
      <Route path="/led-video-display-outdoor" element={<OutdoorDisplay />} />
      <Route path="/led-video-display-indoor" element={<IndoorDisplay />} />
      <Route path="/led-video-cube-indoor" element={<CubeIndoor />} />
      <Route path="/led-video-standee-indoor" element={<StandeeIndoor />} />
      <Route path="/led-video-standee-outdoor" element={<StandeeOutdoor />} />
      <Route path="/digital-standee" element={<DigitalStandee />} />

      {/* Outdoor Products */}
      <Route path="/outdoorP3" element={<OutdoorP3 />} />
      <Route path="/outdoorP4" element={<OutdoorP4 />} />
      <Route path="/outdoorP6" element={<OutdoorP6 />} />
      <Route path="/outdoorP8" element={<OutdoorP8 />} />

      {/* Indoor Products */}
      <Route path="/indoor-p15" element={<IndoorP15 />} />
      <Route path="/indoor-p18" element={<IndoorP18 />} />
      <Route path="/indoor-p2" element={<IndoorP2 />} />
      <Route path="/indoor-p25" element={<IndoorP25 />} />
      <Route path="/indoor-p4" element={<IndoorP4 />} />
      {/* Standee Indoor Products */}
      <Route path="/StandeeP2" element={<IndoorStandeeP2 />} />
      <Route path="/StandeeP25" element={<IndoorStandeeP25 />} />
      <Route path="/StandeeP18" element={<IndoorStandeeP18 />} />
      {/* Standee Outdoor Products */}
      <Route path="/OutdoorStandeeP25" element={<OutdoorStandeeP25 />} />
      <Route path="/OutdoorStandeeP3" element={<OutdoorStandeeP3 />} />
      <Route path="/OutdoorStandeeP4" element={<OutdoorStandeeP4 />} />
      {/* Digital Standee Products */}
      <Route path="/DigitalStandeeA32" element={<DigitalStandeeA32 />} />
      <Route path="/DigitalStandeeA43" element={<DigitalStandeeA43 />} />
      <Route path="/DigitalStandeeI43" element={<DigitalStandeeI43 />} />
      <Route path="/DigitalStandeeI50" element={<DigitalStandeeI50 />} />
    </Routes>
  );
};

export default AppRoutes;