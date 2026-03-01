import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Scale,
  Lightbulb,
  Award,
  Users,
  Target
} from "lucide-react";
import about from "../Assets/image/about1.jpg";
import ourvision from "../Assets/image/Our Vision.jpeg";
import about2 from "../Assets/image/about2.jpg";
import about3 from"../Assets/image/about3.jpg";
import p1 from "../Assets/image/portfolio1.jpg";
import p2 from "../Assets/image/portfolio2.jpg";
import p3 from "../Assets/image/portfolio3.jpg";
import p4 from "../Assets/image/portfolio4.jpg";
import p5 from "../Assets/image/portfolio5.jpg";

const portfolioImages = [p1, p2, p3, p4, p5];
const About = () => {
  return (
    <div className="w-full bg-white ">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-blue-700">
          About Us | Beneicon
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold">Beneicon</span>, a premium LED display and visual solutions brand,
          manufactured and powered by <span className="font-semibold">Beneicon Pixel LLP</span>.
          We redefine how brands communicate through light, motion, and intelligent design,
          delivering immersive visual experiences that command attention and inspire engagement.
        </p>

        <p className="text-lg leading-relaxed">
          Built on innovation and engineering precision, Beneicon represents the perfect fusion of
          creative vision and advanced manufacturing excellence.
          Every Beneicon solution reflects <span className="font-semibold">passion, performance, and purpose.</span>
        </p>
      </div>

      {/* ================= SECTION 1 ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            Transforming Spaces Through Visual Innovation
          </h2>
          <p className="mb-4 leading-relaxed">
            At Beneicon, we don’t just create display products — we create experiences.
            From concept to commissioning, every pixel, panel, and connection is engineered
            to deliver visual impact with long-term reliability.
          </p>
          <p className="leading-relaxed">
            Whether it’s transforming retail environments, enhancing corporate spaces,
            or elevating large-scale events, Beneicon brings together cutting-edge technology,
            refined design, and uncompromising quality.
          </p>
        </div>

        <div>
          <img
            src={about2}
            alt="LED Display"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* ================= VISION ================= */}
         <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={ourvision}
            alt="Our Vision"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-700">Our Vision</h2>
          <p className="leading-relaxed mb-4">
            Our vision is to make Beneicon one of the most trusted and admired LED & AV brands,
            recognized for innovation, reliability, and design excellence.
          </p>
          <p className="leading-relaxed">
            We envision a future where every screen becomes a canvas,
            every pixel tells a story, and every experience leaves a lasting impression.
          </p>
        </div>
      </div>

{/* ================= MISSION ================= */}
<div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
  
  <div>
    <h2 className="text-3xl font-bold mb-6 text-blue-700">
      Our Mission
    </h2>

    <ul className="space-y-4 text-lg">
      <li>• Deliver cutting-edge LED and AV solutions under the Beneicon brand.</li>
      <li>• Offer custom-engineered solutions tailored to each client.</li>
      <li>• Maintain a client-first approach across design and execution.</li>
      <li>• Uphold the highest standards of quality, reliability, and on-time delivery.</li>
    </ul>
  </div>
    <div>
    <img
      src={about3}
      alt="Our Mission"
      className="w-full rounded-lg shadow-xl"
    />
  </div>

</div>
      {/* ================= CORE VALUES ================= */}
<div className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">
    
    <h2 className=" text-blue-600 text-3xl md:text-4xl font-bold text-center mb-14">
      Our Core Values
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
      {[
        { title: "Trust", icon: <Handshake size={36} /> },
        { title: "Ethics", icon: <Scale size={36} /> },
        { title: "Innovation", icon: <Lightbulb size={36} /> },
        { title: "Excellence", icon: <Award size={36} /> },
        { title: "Teamwork", icon: <Users size={36} /> },
        { title: "Customer Centric", icon: <Target size={36} /> },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="bg-blue-700 text-white w-20 h-20 rounded-xl flex items-center justify-center mb-4 shadow-lg hover:scale-105 transition">
            {item.icon}
          </div>
          <p className="font-semibold text-gray-700">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</div>

      {/* ================= WHAT WE DO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={about}
            alt="Solutions"
            className="w-full rounded-lg shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-700">What We Do</h2>

          <p className="mb-4">
            We specialize in turnkey LED and AV solutions designed to enhance communication and brand visibility.
          </p>

          <ul className="space-y-3">
            <li><span className="font-semibold">LED Video Walls</span></li>
            <li><span className="font-semibold">Digital Displays & Standees</span></li>
            <li><span className="font-semibold">Event & Large-Scale Installations</span></li>
          </ul>
        </div>
      </div>

{/* ================= MOVING PORTFOLIO ================= */}
<div className="py-20 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    
    <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
      Our Portfolio of Innovation, Precision, and Performance
    </h2>

    <div className="relative w-full overflow-hidden">
      <div className="flex gap-8 animate-scroll">
  {[1,2,3,4,5].map((item, index) => (
    <div key={index} className="min-w-[350px]">
      <img
        src={portfolioImages[index]}
        alt={`Portfolio ${item}`}
        className="rounded-xl shadow-lg object-cover w-full h-64"
      />
    </div>
  ))}

  {[1,2,3,4,5].map((item, index) => (
    <div key={`dup-${index}`} className="min-w-[350px]">
      <img
        src={portfolioImages[index]}
        alt={`Portfolio ${item}`}
        className="rounded-xl shadow-lg object-cover w-full h-64"
      />
    </div>
  ))}
</div>
    </div>

  </div>
</div>

  </div>


  );
};

export default About;