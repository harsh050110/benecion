import caseImage from "../Assets/asset01.png";
import caseImage2 from"../Assets/asset2.png";
const Hero = () => {
  return (
    <section className="bg-[#06283D] text-white min-h-screen px-8 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Welcome to  <br />
            Beneicon
          </h1>

          <p className="text-lg text-gray-300 max-w-lg mb-8">
            Beneicon is a premium LED display brand, manufactured by Beneicon Pixel LLP, delivering high-quality LED video walls, digital displays, and complete AV solutions across India.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore →
          </button>

          {/* Bottom Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mt-16">

            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
              <img
                src={caseImage}
                alt="Outdoor LED video wall installation"

                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-sm uppercase text-gray-300">Commentary</p>
                <h3 className="text-lg font-semibold">
                  The discipline behind great innovation
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0D3B66] p-6 rounded-xl">
              <p className="text-sm uppercase text-gray-400">LED</p>
              <h3 className="text-xl font-semibold mt-2 ">
                Driven by innovation, precision engineering, and reliability.
              </h3>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE BIG IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={caseImage2}
              alt="Premium indoor LED display panel"

              className="w-full h-[600px] object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 bg-white text-black px-6 py-3 rounded-md font-semibold shadow-lg">
            Explore Our Solution→
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
