import { Routes, Route } from "react-router-dom";

import DigitalStandee from "../categories/DigitalStandee";
import IndoorLED from "../categories/IndoorLED";
import LEDVideo from "../categories/LEDVideo";
import OutdoorLED from "../categories/OutdoorLED";
import WallMount from "../categories/WallMount";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/digital-standee" element={<DigitalStandee />} />
      <Route path="/indoor-led" element={<IndoorLED />} />
      <Route path="/led-video" element={<LEDVideo />} />
      <Route path="/outdoor-led" element={<OutdoorLED />} />
      <Route path="/wall-mount" element={<WallMount />} />
    </Routes>
  );
};

export default AppRoutes;
