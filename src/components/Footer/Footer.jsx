import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import portfolio from "../../data/portfolio";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-400">

      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-2xl font-bold text-cyan-400">
              Arkadip Kansabanik
            </h2>

            <p className="mt-2">
              AI | Machine Learning | Deep Learning | LLM Engineer
            </p>

          </div>

          <div className="flex gap-6 text-3xl">

            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${portfolio.email}`}
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center">

          <p>
            © {new Date().getFullYear()} Arkadip Kansabanik. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;