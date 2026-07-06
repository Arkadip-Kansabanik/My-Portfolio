import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaCode,
} from "react-icons/fa";

import {
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiMysql,
  SiAnaconda,
  SiVisualstudiocode,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },

  {
    title: "Data Science & Analytics",
    skills: [
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Data Analysis", icon: <FaCode /> },
      { name: "Data Visualization", icon: <FaCode /> },
    ],
  },

  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Machine Learning", icon: <SiScikitlearn /> },
      { name: "Deep Learning", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Large Language Models", icon: <FaCode /> },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQL Queries", icon: <FaDatabase /> },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Jupyter Notebook", icon: <SiJupyter /> },
      { name: "Anaconda", icon: <SiAnaconda /> },
      { name: "VS Code", icon: <SiVisualstudiocode /> },
      { name: "Linux", icon: <FaLinux /> },
    ],
  },

  {
    title: "Core Computer Science",
    skills: [
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "Object Oriented Programming" },
      { name: "Problem Solving" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
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
            My Expertise
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technical Skills
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition-all duration-300"
                  >
                    <span className="text-xl">
                      {skill.icon}
                    </span>

                    <span className="font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;