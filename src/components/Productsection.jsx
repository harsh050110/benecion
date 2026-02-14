import { motion } from "framer-motion";

const products = [
  "Led Video Display Outdoor",
  "Led Video Display Indoor",
  "Led Video Cube Outdoor",
  "Led Video Cube Indoor",
  "Led Video Display Standee Indoor",
  "Led Video Display Standee Outdoor",
  "Digital Standee",
];

const ProductsSection = () => {
  return (
    <section className="bg-[#06283D] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl  text-white lg:text-5xl font-bold mb-6">
            Our Products
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
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
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581090700227-4c4f50c87f98"
                  alt={product}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Title */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-4 group-hover:text-blue-600 transition">
                  {product}
                </h3>

                <div className="h-[2px] w-0 bg-blue-600 mx-auto group-hover:w-16 transition-all duration-500"></div>

                <button className="mt-6 px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                  Explore →
                </button>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
