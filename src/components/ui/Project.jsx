import { motion } from "framer-motion";
import musciweb from "../../assets/imagesTwo/Musicweb.png";
import currconv from "../../assets/imagesTwo/currconv.png";
import cloneProject from "../../assets/imagesTwo/Project_Clone.png";
import codedocs from "../../assets/imagesTwo/codedocs.png";

const projects = [
  {
    title: "Bittsmax Music Website",
    description:
      "🎵 Full-stack Music Player Web Application with upcoming features including playlist management, advanced controls, and theme switching.",
    image: musciweb,
    liveUrl: "https://bitts-music-player.vercel.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Currency Converter",
    description:
      "A real-time currency conversion application with support for multiple global currencies, powered by reliable exchange rate APIs.",
    image: currconv,
    liveUrl: "https://currency-converter-omega-seven.vercel.app/",
    technologies: ["React", "API Integration", "Tailwind CSS"],
  },
  {
    title: "AI VoiceMaker Clone",
    description:
      "A Next.js implementation showcasing modern UI/UX practices using the Shadcn UI library. Built to demonstrate advanced front-end development skills.",
    image: cloneProject,
    liveUrl: "https://assignment-clone-sigma.vercel.app/",
    technologies: ["Next.js", "Shadcn UI", "Tailwind CSS"],
  },
  {
    title: "CodeDocs",
    description:
      "A comprehensive educational platform offering web development tutorials and programming language references, including HTML, CSS, JavaScript, and more.",
    image: codedocs,
    liveUrl: "https://codedocs-theta.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Markdown"],
  },
];

const Project = () => {
  return (
    <section className="w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col bg-black shadow-md border border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-slate-700 hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                src={project.image}
                alt={`${project.title} Preview`}
                draggable={false}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
            </div>

            {/* Content Container */}
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-slate-200 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="p-6 pt-0 flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-slate-800 text-sm text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;