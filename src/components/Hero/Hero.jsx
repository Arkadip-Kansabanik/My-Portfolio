import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 text-xl mb-4">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              Arkadip
              <br />
              Kansabanik
            </h1>

            <h2 className="text-2xl text-gray-300 mt-6 leading-relaxed">
              Data Science Student | Aspiring AI Engineer |
              Machine Learning Enthusiast | Python Developer
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              Passionate about Artificial Intelligence,
              Machine Learning, Deep Learning,
              Large Language Models,
              and Full Stack AI Applications.
            </p>

            {/* Buttons */}

            <motion.div
              className="flex gap-5 mt-10 flex-wrap"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
            >
              <button className="bg-cyan-500 hover:bg-cyan-600 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg font-semibold text-black shadow-lg">
                Download Resume
              </button>

              <button className="border border-cyan-500 hover:bg-cyan-500 hover:text-black hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg">
                Contact Me
              </button>
            </motion.div>

            {/* Social Icons */}

            <motion.div
              className="flex gap-6 mt-10 text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.9,
              }}
            >
              <FaGithub className="cursor-pointer hover:text-cyan-400 hover:scale-125 transition-all duration-300" />

              <FaLinkedin className="cursor-pointer hover:text-cyan-400 hover:scale-125 transition-all duration-300" />

              <SiLeetcode className="cursor-pointer hover:text-cyan-400 hover:scale-125 transition-all duration-300" />
            </motion.div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            <div className="w-96 h-96 rounded-full bg-slate-800 border-4 border-cyan-500 flex items-center justify-center shadow-2xl">
              <span className="text-2xl text-gray-400">
                Your Photo
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;