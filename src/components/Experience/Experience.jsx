import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserGraduate,
  FaEye,
  FaDownload,
} from "react-icons/fa";

import experience from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-950 text-white"
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
            Career Journey
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Experience
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="space-y-10">

          {experience.map((exp, index) => (

            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 shadow-xl"
            >

              {/* Logo + Details */}

              <div className="flex flex-col md:flex-row gap-8">

                {/* Logo */}

                <div className="flex justify-center md:justify-start flex-shrink-0">

                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-28 h-28 object-contain bg-white rounded-xl p-3 shadow-lg"
                  />

                </div>

                {/* Details */}

                <div className="flex-1">

                  <h3 className="text-3xl font-bold text-cyan-400">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 text-lg">
                    <FaBriefcase />
                    <span>{exp.company}</span>
                  </div>

                  <div className="flex flex-wrap gap-6 mt-4 text-gray-400">

                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      <span>{exp.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>

                  </div>

                  <div className="flex items-center gap-2 mt-4 text-gray-300">
                    <FaUserGraduate />
                    <span>Mentor: {exp.mentor}</span>
                  </div>

                </div>

              </div>

              {/* Description */}

              <p className="text-gray-300 mt-8 leading-8">
                {exp.description}
              </p>

              {/* Offer Letter Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href={exp.offerLetter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <FaEye />
                  View Offer Letter
                </a>

                <a
                  href={exp.offerLetter}
                  download
                  className="flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <FaDownload />
                  Download Offer Letter
                </a>

              </div>

              {/* Technologies */}

              <div className="flex flex-wrap gap-3 mt-8">

                {exp.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="bg-cyan-500/10 border border-cyan-500 text-cyan-300 px-4 py-2 rounded-full text-sm hover:bg-cyan-500 hover:text-black transition-all duration-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;