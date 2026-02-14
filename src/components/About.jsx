const AboutSection = () => {
  return (
    <section className="bg-[#06283D] text-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Welcome to Beneicon
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            At Beneicon, we create powerful visual experiences that inspire,
            engage, and transform spaces through advanced LED and digital
            display technology.
          </p>
        </div>

        {/* Vision + Mission */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">

          {/* Vision */}
          <div className="bg-[#0D3B66] p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">
              Our Vision
            </h3>
            <p className="text-white leading-relaxed">
              To become India’s most trusted LED display and digital solution
              partner, redefining visual communication through innovation,
              engineering excellence, and design precision.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#0D3B66] p-10 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Mission
            </h3>
            <p className="text-white leading-relaxed">
              To deliver fully customized, end-to-end LED video wall and AV
              solutions that empower businesses, institutions, and brands to
              communicate visually with clarity, scale, and impact.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            Why Choose Beneicon?
          </h3>

          <div className=" grid md:grid-cols-3 gap-10">

            <div className="p-8 rounded-xl border hover:border-blue-600 transition">
              <h4 className=" text-green-600 text-xl font-semibold mb-4">
                Precision Engineering
              </h4>
              <p className="text-white">
                Designed and manufactured with advanced technology to ensure
                durability, brightness consistency, and long-term performance.
              </p>
            </div>

            <div className="p-8 rounded-xl border hover:border-blue-600 transition">
              <h4 className="text-xl  text-blue-600 font-semibold mb-4">
                Pan-India Presence
              </h4>
              <p className="text-white">
                Trusted across corporate spaces, retail environments,
                government projects, and large-scale public installations.
              </p>
            </div>

            <div className="p-8 rounded-xl border hover:border-blue-600 transition">
              <h4 className="text-xl  text-green-600 font-semibold mb-4">
                End-to-End Support
              </h4>
              <p className="text-white">
                From design and manufacturing to installation and after-sales
                service, we provide complete customized solutions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
