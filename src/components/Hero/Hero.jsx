import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-8">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <p className="text-cyan-400 text-xl mb-4">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              Arkadip
              <br />
              Kansabanik
            </h1>

            <h2 className="text-2xl text-gray-300 mt-6">
              AI Engineer | Machine Learning Engineer | Python Developer
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              Passionate about Artificial Intelligence,
              Machine Learning, Deep Learning,
              Large Language Models,
              and Full Stack AI Applications.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold text-black">
                Download Resume
              </button>

              <button className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-lg">
                Contact Me
              </button>

            </div>

            <div className="flex gap-6 mt-10 text-3xl">

              <FaGithub className="hover:text-cyan-400 cursor-pointer" />

              <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />

              <SiLeetcode className="hover:text-cyan-400 cursor-pointer" />

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-96 h-96 rounded-full bg-slate-800 border-4 border-cyan-500 flex items-center justify-center">

              <span className="text-2xl text-gray-400">
                Your Photo
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;