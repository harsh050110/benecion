import { motion } from "framer-motion";
import { FaCogs, FaStar, FaGlobe, FaProjectDiagram } from "react-icons/fa";

const timelineData = [
  {
    title: "In-house Expertise",
    icon: <FaCogs size={28} />,
  },
  {
    title: "Years of Experience",
    icon: <FaStar size={28} />,
  },
  {
    title: "Pan India Network",
    icon: <FaGlobe size={28} />,
  },
  {
    title: "End to End Solutions",
    icon: <FaProjectDiagram size={28} />,
  },
];

const WhyChooseSection = () => {
  return (
    <section className="bg-[#F4F2F3] py-28 px-6 relative">
      <div className="max-w-6xl mx-auto relative">

        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-600 transform -translate-x-1/2"></div>

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`mb-20 flex flex-col md:flex-row items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >

              {/* Card */}
              <div
                className={`bg-white shadow-lg rounded-3xl px-10 py-8 w-full md:w-[40%] flex items-center gap-4 hover:shadow-2xl transition duration-500 ${
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
              </div>

             
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-6 bg-white border-4 border-blue-600 rounded-full"></div>
              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default WhyChooseSection;
