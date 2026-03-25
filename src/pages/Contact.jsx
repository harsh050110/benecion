import React from "react";

const Contact = () => {
  return (
    <section className="bg-[#F4F2F3]  text-blue-700">
      {/* HERO SECTION */}
      <div className="max-w-[1470px] mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            Get in Touch
          </span>

          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-blue-600">
            Let's Start a{" "}
            <span className="text-blue-600">Conversation</span>
          </h1>

          <p className="text-gray-700 max-w-xl leading-relaxed">
            Have a project in mind, exploring LED solutions, or just want to connect? We’re here to help. At Beneicon, every powerful visual transformation begins with a simple conversation.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="bg-[#F4F2F3]  rounded-3xl p-6">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Contact Binge Learning"
              className="rounded-2xl w-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 bg-[#3383e4] text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-2xl font-bold">24/7</p>
            <p className="text-sm opacity-90">Always Open</p>
          </div>
        </div>
      </div>

      {/* MAP + CONTACT INFO */}
      <div className="max-w-[1470px] mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Beneicon Location"
           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d509.0810818723977!2d77.04347625114289!3d28.587667970866395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bf5386914ef%3A0xb0808cf42cb1986e!2sBeneicon%20Pixel%20LLP!5e1!3m2!1sen!2sus!4v1772030031472!5m2!1sen!2sus" 
            className="w-full h-[380px] border-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-serif  text-blue-700 font-bold mb-8">
            Get In Touch
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                📧
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">
                  beneicon@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                📞
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+91-7065993135</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                📍
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600 max-w-sm">
                  482, Sunview Apt., Dwarka Sector 11, Dwarka, Delhi-110075
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                ⏰
              </div>
              <div>
                <p className="font-semibold">Business Hours</p>
                <p className="text-gray-600">
                  Mon – Fri: 9:00 AM – 6:00 PM
                </p>
                <p className="text-gray-600">
                  Sat: 10:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="max-w-[900px] mx-auto px-6 pb-32">
        <h2 className="text-center  text-blue-700 text-4xl font-serif font-bold mb-16">
          Contact Us
        </h2>

        <form className="bg-white rounded-2xl shadow-xl p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
