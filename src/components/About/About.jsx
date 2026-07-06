import { motion } from "framer-motion";
import {
  FaBrain,
  FaPython,
  FaDatabase,
  FaChartLine,
  FaRobot,
  FaGraduationCap,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            Get To Know Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            About Me
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

              

            <p className="text-gray-300 leading-8 mb-5">
              I am currently pursuing my M.Sc. in Data Science &
              Artificial Intelligence at Ramakrishna Mission
              Vivekananda Educational and Research Institute,
              Belur.
            </p>

            <p className="text-gray-300 leading-8 mb-5">
              I completed my B.Sc. in Computer Science from
              Narendrapur Ramakrishna Mission Residential College.
             
            </p>

            <p className="text-gray-300 leading-8 mb-5">
              My primary interests include Artificial Intelligence,
              Machine Learning, Deep Learning, Large Language Models,
              Data Analytics and Full Stack AI Applications.
            </p>

            <p className="text-gray-300 leading-8">
              I enjoy solving real-world problems through
              programming, building AI applications and continuously
              learning modern technologies.
            </p>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition">

                <FaBrain className="text-4xl text-cyan-400 mb-4" />

                <h4 className="font-semibold">
                  Machine Learning
                </h4>

              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition">

                <FaRobot className="text-4xl text-cyan-400 mb-4" />

                <h4 className="font-semibold">
                  Artificial Intelligence
                </h4>

              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition">

                <FaPython className="text-4xl text-cyan-400 mb-4" />

                <h4 className="font-semibold">
                  Python Development
                </h4>

              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition">

                <FaDatabase className="text-4xl text-cyan-400 mb-4" />

                <h4 className="font-semibold">
                  SQL & Data Analytics
                </h4>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Academic Journey */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <h3 className="text-4xl font-bold text-center mb-14">
            Academic Journey
          </h3>

          <div className="space-y-8">

            <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-cyan-400">

              <div className="flex items-center gap-3 mb-2">

                <FaGraduationCap className="text-cyan-400 text-xl" />

                <h4 className="text-2xl font-semibold">
                  M.Sc. Data Science & Artificial Intelligence
                </h4>

              </div>

              <p className="text-gray-300">
                Ramakrishna Mission Vivekananda Educational &
                Research Institute, Belur
              </p>

              <p className="text-gray-400 mt-2">
                2025 – 2027
              </p>

              {/* <p className="text-cyan-400 mt-2">
                Current CGPA : 5.83
              </p> */}

            </div>

            <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-cyan-400">

              <div className="flex items-center gap-3 mb-2">

                <FaGraduationCap className="text-cyan-400 text-xl" />

                <h4 className="text-2xl font-semibold">
                  B.Sc. Computer Science
                </h4>

              </div>

              <p className="text-gray-300">
                Narendrapur Ramakrishna Mission Residential College,
                Kolkata
              </p>

              <p className="text-gray-400 mt-2">
                2022 – 2025
              </p>

              <p className="text-cyan-400 mt-2">
                CGPA : 8.59
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-cyan-400">

              <div className="flex items-center gap-3 mb-2">

                <FaGraduationCap className="text-cyan-400 text-xl" />

                <h4 className="text-2xl font-semibold">
                  Higher Secondary Education
                </h4>

              </div>

              <p className="text-gray-300">
                Mahesh Sri Ramakrishna Ashram Vidyalaya
              </p>

              <p className="text-gray-400 mt-2">
                2020 – 2022
              </p>

              <p className="text-cyan-400 mt-2">
                Percentage : 93.8%
              </p>

            </div>

            <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-cyan-400">

              <div className="flex items-center gap-3 mb-2">

                <FaGraduationCap className="text-cyan-400 text-xl" />

                <h4 className="text-2xl font-semibold">
                  Secondary Education
                </h4>

              </div>

              <p className="text-gray-300">
                Uttarpara Children's Own Home
              </p>

              <p className="text-gray-400 mt-2">
                2008 – 2020
              </p>

              <p className="text-cyan-400 mt-2">
                Percentage : 95.14%
              </p>

            </div>

          </div>

        </motion.div>

        {/* Quick Highlights */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <h3 className="text-4xl font-bold text-center mb-12">
            Quick Highlights
          </h3>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-slate-800 p-6 rounded-xl text-center hover:-translate-y-2 transition">
              <h2 className="text-4xl font-bold text-cyan-400">
                5+
              </h2>
              <p className="mt-2 text-gray-300">
                Projects
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center hover:-translate-y-2 transition">
              <h2 className="text-4xl font-bold text-cyan-400">
                50+
              </h2>
              <p className="mt-2 text-gray-300">
                LeetCode Problems
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center hover:-translate-y-2 transition">
              <h2 className="text-4xl font-bold text-cyan-400">
                AI
              </h2>
              <p className="mt-2 text-gray-300">
                ML • DL • LLM
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center hover:-translate-y-2 transition">
              <FaChartLine className="mx-auto text-4xl text-cyan-400 mb-3" />
              <p className="text-gray-300">
                Continuous Learning
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;