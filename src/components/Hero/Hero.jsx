import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

import portfolio from "../../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center"

    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Availability Badge */}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500 text-green-400 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

              <span className="text-sm font-medium">
                {portfolio.availability}
              </span>
            </motion.div>

            <p className="text-cyan-400 text-xl mb-4">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              {portfolio.name}
            </h1>

            <h2 className="text-2xl text-gray-300 mt-6 h-12">
              <Typewriter
                words={portfolio.roles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              {portfolio.description}
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
              <a
                href={portfolio.resume}
                download
                className="bg-cyan-500 hover:bg-cyan-600 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg font-semibold text-black shadow-lg"
              >
                Download Resume
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="border border-cyan-500 hover:bg-cyan-500 hover:text-black hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Social Icons */}

            <motion.div
              className="flex gap-6 mt-10 text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer hover:text-cyan-400 hover:scale-125 transition-all duration-300" />
              </a>

              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer hover:text-cyan-400 hover:scale-125 transition-all duration-300" />
              </a>

              <a
                href={portfolio.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="cursor-pointer hover:text-cyan-400 hover:scale-125 transition-all duration-300" />
              </a>
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
            <div className="w-96 h-96 rounded-full bg-slate-800 border-4 border-cyan-500 flex items-center justify-center shadow-2xl overflow-hidden">

              <img
                src={portfolio.profileImage}
                alt={portfolio.name}
                className="w-full h-full object-cover"
              />

            </div>
          </motion.div>

          {/* Quick Stats */}

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
      >

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2">

          <h3 className="text-3xl font-bold text-cyan-400">
            5+
          </h3>

          <p className="text-gray-400 mt-2">
            Projects
          </p>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2">

          <h3 className="text-3xl font-bold text-cyan-400">
            50+
          </h3>

          <p className="text-gray-400 mt-2">
            LeetCode Problems
          </p>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2">

          <h3 className="text-3xl font-bold text-cyan-400">
            8.59
          </h3>

          <p className="text-gray-400 mt-2">
            B.Sc CGPA
          </p>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2">

          <h3 className="text-3xl font-bold text-cyan-400">
            M.Sc
          </h3>

          <p className="text-gray-400 mt-2">
            Data Science & AI
          </p>

        </div>

      </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;