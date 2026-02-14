import {Routes,Route} from "react-router-dom";
import DigitalStandee from "../categories/DigitalStandee";
import IndoorLED from "../categories/IndoorLED";
import LEDVideo from "../categories/LEDVideo";
import Outdoor from "../categories/OutdoorLED";
import WallMount from "../categories/WallMount";
const AppRoutes =() =>{
    return(
        <Routes>
            <Route path="/categories/DigitalStandee" element={<DigitalStandee/>}></Route>
            <Route path="/categories/IndoorLED" element={<IndoorLED/>}></Route>
            <Route path="/categories/LEDVideo" element={<LEDVideo/>}></Route>
            <Route path="/categories/OutdoorLED" element={<Outdoor/>}></Route>
            <Route path="/categories/WallMounts" element={<WallMount/>}></Route>
        </Routes>
    );
};
export default AppRoutes;
