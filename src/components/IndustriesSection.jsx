import { motion } from "framer-motion";
import Education from "../Assets/Education.jpg";
import Event from "../Assets/Event.jpeg";
import government from "../Assets/Government.jpeg";
import RealEstate from "../Assets/RealEstate.png";
import hospitality from "../Assets/Hospitality.jpeg";
import retail from "../Assets/Retail.jpeg";
const industries = [
  {
    title: "Education",
    image: Education,
  },
  {
    title: "Real Estate",
    image: RealEstate,
  },
  {
    title: "Events & Advertising",
    image: Event,
  },
  {
    title: "Government & Public Sector",
    image: government,
  },
  {
    title: "Hospitality",
    image: hospitality,
  },
  {
    title: "Retail",
    image: retail,
  },
];

const IndustriesSection = () => {
  return (
    <section className="bg-[#F4F2F3] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl  text-blue-700 font-bold">
            Innovative solutions <span className="text-black">for businesses of every sector.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {industries.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden group"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;