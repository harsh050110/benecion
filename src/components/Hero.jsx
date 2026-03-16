import { motion } from "framer-motion";
import img1 from "../Assets/asset01.jpg";
import img2 from "../Assets/asset02.jpg";
import img3 from "../Assets/indoor2.jpeg";
import img4 from "../Assets/indoor4.jpeg";
import img5 from "../Assets/asset05.jpg";
import img6 from "../Assets/asset06.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];

const Hero = () => {
  return (
    <section className="bg-[#F4F2F3] min-h-screen flex items-center px-6 lg:px-16 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-blue-600">
            Beneicon <br />
            <span className="text-black"> is a trusted brand in led video display & digital standee, <br />
            manufactured by   <br /></span>
            <span className="text-blue-600">Beneicon Pixel LLP</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-xl mb-10">
            Beneicon delivers advanced LED display solutions engineered for
            performance, clarity, and innovation across industries.
          </p>
          <a
  href="https://wa.me/+917065993135"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg inline-block"
>
  Book Your Demo
</a>
        </div>

        {/* RIGHT SIDE MOVING IMAGE STRIP */}
        <div className="overflow-hidden relative h-[400px] flex items-center">

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {/* Duplicate images for seamless loop */}
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="LED Display"
                className="w-64 h-80 object-cover rounded-xl shadow-xl"
              />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
