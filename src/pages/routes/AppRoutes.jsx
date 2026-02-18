import { Routes, Route } from "react-router-dom";

import DigitalStandee from "../categories/DigitalStandee";
import CubeIndoor from "../categories/cubein";
import CubeOutdoor from "../categories/cubeout";
import IndoorDisplay from"../categories/leddisplayin";
import OutdoorDisplay from "../categories/leddisplayout";
import StandeeIndoor from "../categories/standeein";
import StandeeOutdoor from "../categories/standeeout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/led-video-display-outdoor" element={<OutdoorDisplay />} />
<Route path="/led-video-display-indoor" element={<IndoorDisplay />} />
<Route path="/led-video-cube-outdoor" element={<CubeOutdoor />} />
<Route path="/led-video-cube-indoor" element={<CubeIndoor />} />
<Route path="/led-video-standee-indoor" element={<StandeeIndoor />} />
<Route path="/led-video-standee-outdoor" element={<StandeeOutdoor />} />
<Route path="/digital-standee" element={<DigitalStandee />} />

    </Routes>
  );
};

export default AppRoutes;
