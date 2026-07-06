import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import portfolio from "../../data/portfolio";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Contact Me
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-slate-800 rounded-2xl border border-slate-700 p-10 hover:border-cyan-400 transition-all duration-300"
        >

          <div className="grid md:grid-cols-2 gap-12">

            {/* Left */}

            <div>

              <h3 className="text-3xl font-bold mb-6 text-cyan-400">
                Let's Connect
              </h3>

              <p className="text-gray-300 leading-8 mb-8">
                I am actively looking for Full-Time opportunities in
                Artificial Intelligence, Machine Learning, Deep Learning
                and Large Language Models.
                Feel free to reach out for collaboration,
                research or job opportunities.
              </p>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-cyan-400 text-xl" />
                  <span>{portfolio.email}</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-cyan-400 text-xl" />
                  <span>{portfolio.phone}</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                  <span>{portfolio.location}</span>
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="flex flex-col justify-center">

              <div className="flex gap-5">

                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-slate-700 hover:bg-cyan-500 hover:text-black transition px-6 py-4 rounded-xl text-lg"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-slate-700 hover:bg-cyan-500 hover:text-black transition px-6 py-4 rounded-xl text-lg"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

              </div>

              <a
                href={`mailto:${portfolio.email}`}
                className="mt-8 w-full text-center bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-4 rounded-xl transition"
              >
                Send Email
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;