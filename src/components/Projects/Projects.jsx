// import { motion } from "framer-motion";

// import {
//   FaGithub,
//   FaExternalLinkAlt,
//   FaCalendarAlt,
//   FaUniversity,
// } from "react-icons/fa";

// import projects from "../../data/projects";

// function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-24 bg-slate-900 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-8">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="uppercase tracking-widest text-cyan-400">
//             Portfolio
//           </p>

//           <h2 className="text-5xl font-bold mt-4">
//             Featured Projects
//           </h2>

//           <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
//         </motion.div>

//         {/* Project Cards */}

//         <div className="grid lg:grid-cols-2 gap-10">

//           {projects.map((project, index) => (

//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.1,
//               }}
//               viewport={{ once: true }}
//               className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-xl"
//             >

//               {/* Image */}

//               {/* Project Image */}

//               <div className="w-full h-72 bg-slate-800 rounded-t-2xl overflow-hidden flex items-center justify-center">

//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-contain p-2 transition-transform duration-500 hover:scale-105"
//                 />

//               </div>

//               <div className="p-7">

//                 <h3 className="text-2xl font-bold mb-4">
//                   {project.title}
//                 </h3>

//                 <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-5">

//                   <div className="flex items-center gap-2">
//                     <FaCalendarAlt />
//                     {project.duration}
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <FaUniversity />
//                     {project.organization}
//                   </div>

//                 </div>

//                 <p className="text-gray-300 leading-7 mb-6">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}

//                 <div className="flex flex-wrap gap-3 mb-8">

//                   {project.technologies.map((tech) => (

//                     <span
//                       key={tech}
//                       className="bg-cyan-500/10 border border-cyan-500 text-cyan-300 px-3 py-1 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>

//                   ))}

//                 </div>

//                 {/* Buttons */}

//                 <div className="flex gap-4">

//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold text-black transition"
//                   >
//                     <FaGithub />
//                     GitHub
//                   </a>

//                   {project.demo ? (
//                     <a
//                       href={project.demo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 hover:text-black px-5 py-3 rounded-lg transition"
//                     >
//                       <FaExternalLinkAlt />
//                       Live Demo
//                     </a>
//                   ) : (
//                     <button
//                       disabled
//                       className="flex items-center gap-2 border border-gray-600 text-gray-500 px-5 py-3 rounded-lg cursor-not-allowed"
//                     >
//                       <FaExternalLinkAlt />
//                       Coming Soon
//                     </button>
//                   )}

//                 </div>

//               </div>

//             </motion.div>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Projects;




import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaUniversity,
} from "react-icons/fa";

import projects from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
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
          <p className="uppercase tracking-widest text-cyan-400">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Project Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-500 shadow-xl hover:shadow-cyan-500/20"
            >

              {/* Project Image */}

              <div className="w-full h-72 bg-slate-800 flex items-center justify-center overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Info */}

                <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-5">

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-cyan-400" />
                    {project.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUniversity className="text-cyan-400" />
                    {project.organization}
                  </div>

                </div>

                {/* Description */}

                <p className="text-gray-300 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="bg-cyan-500/10 border border-cyan-500 text-cyan-300 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:scale-105"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 hover:scale-105 hover:shadow-lg px-5 py-3 rounded-lg font-semibold text-black transition-all duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.demo ? (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 hover:text-black hover:scale-105 px-5 py-3 rounded-lg transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                  ) : (

                    <button
                      disabled
                      className="flex items-center gap-2 border border-gray-600 text-gray-500 px-5 py-3 rounded-lg cursor-not-allowed"
                    >
                      <FaExternalLinkAlt />
                      Coming Soon
                    </button>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;