import { FaAward, FaSmile, FaPiggyBank, FaSyncAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaAward size={40} />,
    title: "Top Quality Solutions",
    desc: "Engineered with precision and advanced LED technology for maximum performance."
  },
  {
    icon: <FaSmile size={40} />,
    title: "Complete Client Satisfaction",
    desc: "Trusted by businesses across India for reliable and impactful display systems."
  },
  {
    icon: <FaPiggyBank size={40} />,
    title: "Affordable Pricing",
    desc: "High-quality LED solutions at competitive and scalable pricing models."
  },
  {
    icon: <FaSyncAlt size={40} />,
    title: "Long Lasting",
    desc: "Durable components ensuring long operational life and reduced maintenance."
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#F4F2F3] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl  text-blue-700 lg:text-5xl font-bold">
            Features
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[40px] p-10 text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500"
            >
              <div className="flex justify-center mb-6 text-blue-700">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
