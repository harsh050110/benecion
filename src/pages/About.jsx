import { motion } from "framer-motion";
import {
  Handshake,
  Scale,
  Lightbulb,
  Award,
  Users,
  Target,
  Wrench,
  Headset,
  Globe,
  ShieldCheck
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#F4F2F3] min-h-screen">

      {/* ================= VISION & MISSION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-700 mb-6">
            Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            To be a market leader helping the world to communicate, interact,
            collaborate and share ideas effectively through innovative and
            visually impactful LED display technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold text-blue-700 mb-6">
            Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            To deliver advanced, world-class LED display solutions that solve
            real-world communication challenges while providing exceptional
            service through skilled professionals and innovative engineering.
          </p>
        </motion.div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="py-20 bg-[#F4F2F3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-blue-700 mb-16">
            Our Values
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
                className="flex flex-col items-center"
              >
                <div className="bg-blue-700 text-white w-20 h-20 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>
                <p className="font-semibold text-gray-700">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-blue-700 mb-16">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            {
              title: "In-House Installation & Repairing Capabilities",
              icon: <Wrench size={32} />,
            },
            {
              title: "Trained Technical Resources",
              icon: <Headset size={32} />,
            },
            {
              title: "Partner Network Coverage",
              icon: <Globe size={32} />,
            },
            {
              title: "Make In India Products",
              icon: <ShieldCheck size={32} />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-8 flex items-center gap-6 hover:shadow-xl transition"
            >
              <div className="text-black">
                {item.icon}
              </div>
              <p className="text-lg font-semibold text-gray-700">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default About;
