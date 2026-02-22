import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import DigitalStandee from "../categories/DigitalStandee";
import CubeIndoor from "../categories/cubein";
import CubeOutdoor from "../categories/cubeout";
import IndoorDisplay from"../categories/leddisplayin";
import OutdoorDisplay from "../categories/leddisplayout";
import StandeeIndoor from "../categories/standeein";
import StandeeOutdoor from "../categories/standeeout";
import Contact from "../Contact";
import About from "../About";
import OutdoorP3 from "../outdoor/outdoorP3";
import OutdoorP4 from "../outdoor/outdoorP4";
import OutdoorP6 from "../outdoor/outdoorP6";
import OutdoorP8 from "../outdoor/outdoorP8";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/led-video-display-outdoor" element={<OutdoorDisplay />} />
<Route path="/led-video-display-indoor" element={<IndoorDisplay />} />
<Route path="/led-video-cube-outdoor" element={<CubeOutdoor />} />
<Route path="/led-video-cube-indoor" element={<CubeIndoor />} />
<Route path="/led-video-standee-indoor" element={<StandeeIndoor />} />
<Route path="/led-video-standee-outdoor" element={<StandeeOutdoor />} />
<Route path="/digital-standee" element={<DigitalStandee />} />
<Route path="/contactus" element={<Contact />}/>
<Route path="/aboutus" element={<About />}/>
<Route path="/outdoorP3" element={<OutdoorP3/>}/>
<Route path="/outdoorP4" element={<OutdoorP4/>}/>
<Route path="/outdoorP6" element={<OutdoorP6/>}/>
<Route path="/outdoorP8" element={<OutdoorP8/>}/>

    </Routes>
  );
};

export default AppRoutes;
