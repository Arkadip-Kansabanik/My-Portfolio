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
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-8">
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

        </div>
      </div>
    </section>
  );
}

export default Hero;