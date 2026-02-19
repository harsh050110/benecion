import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import outdoorImg from "../Assets/outdoor-led.jpg";
import indoorImg from "../Assets/indoor-led.jpg";
// import cubeOutImg from "../Assets/cube-outdoor.jpg";
// import cubeInImg from "../Assets/cube-indoor.jpg";
import standeeInImg from "../Assets/standee-indoor.jpg";
import standeeOutImg from "../Assets/standee-outdoor.jpg";
import digitalStandeeImg from "../Assets/digital-standee.jpg";

const products = [
  { 
    name: "Led Video Display Outdoor", 
    image: outdoorImg,
    path: "/led-video-display-outdoor"
  },
  { 
    name: "Led Video Display Indoor", 
    image: indoorImg,
    path: "/led-video-display-indoor"
  },
  { 
    name: "Led Video Display Standee Indoor", 
    image: standeeInImg,
    path: "/led-video-standee-indoor"
  },
  { 
    name: "Led Video Display Standee Outdoor", 
    image: standeeOutImg,
    path: "/led-video-standee-outdoor"
  },
  { 
    name: "Digital Standee", 
    image: digitalStandeeImg,
    path: "/digital-standee"
  },
];


const ProductsSection = () => {
  return (
    <section className="bg-[#F4F2F3]  py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl  text-blue-700 lg:text-5xl font-bold mb-6">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced LED display solutions engineered for performance,
            durability, and visual impact.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >

              {/* Image */}
              <div className="overflow-hidden ">
               <img
  src={product.image}
  alt={product.name}
  className="w-full h-60 object-contain group-hover:scale-110 transition duration-700"
/>

              </div>

              {/* Title */}
              <div className="p-6 text-center">
  <h3 className="text-lg font-semibold mb-4 group-hover:text-blue-600 transition">
    {product.name}
  </h3>

  <div className="h-[2px] w-0 bg-blue-600 mx-auto group-hover:w-16 transition-all duration-500"></div>
  <Link
  to={product.path}
  className="inline-block mt-6 px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition"
>
  Explore →
</Link>

</div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
