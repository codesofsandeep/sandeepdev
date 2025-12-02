import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  X,
  ArrowUpRight,
  Play,
  Code2,
  Eye,
  ArrowLeftIcon,
  Layers,
} from "lucide-react";
import Footer from "../components/footer/Footer";

// --------------------------
// SAFE PROJECTS DATA
// --------------------------
const projectsData = {
  Projects: [
    {
      id: 1,
      name: "Puris",
      status: "In Progress",
      description:
        "A real-world MERN-based bottle tracking & inventory automation system built for a bottled water factory.",
      cover: "/placeholder.png",
      tech: [],
      url: "",
      github: "",
    },
    {
      id: 2,
      name: "Ace.AI",
      status: "In Progress",
      description:
        "A PERN-stack AI assistant for writing, brainstorming, and creative media generation.",
      cover: "/placeholder.png",
      tech: [],
      url: "",
      github: "",
    },
    {
      id: 3,
      name: "Make My Notes",
      cover: "/img1.png",
      image: "/img1.png",
      image1: "/img1.png",
      image2: "/img2.png",
      image3: "/img3.png",
      tech: ["Reactjs", "JavaScript", "LocalStorage", "CSS3"],
      description:
        "A modern and simple Note-Taking Application Built with React and Tailwind CSS.",
      url: "https://makemynotess.netlify.app/",
      github: "https://github.com/codesofsandeep/makemynotes",
    },
  ],
};

function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const selectedProject = projectsData.Projects.find(
    (p) => p.id === selectedId
  );

  // Remove undefined images → VERY IMPORTANT FIX
  const projectImages = selectedProject
    ? [
        selectedProject.image,
        selectedProject.image1,
        selectedProject.image2,
        selectedProject.image3,
        selectedProject.cover,
      ].filter(Boolean)
    : [];

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <section
      id="projects"
      className="py-10 sm:py-10 px-1 sm:px-6 lg:px-8 bg-background relative"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-repeat [background-image:radial-gradient(ellipse_at_center,_var(--tw-color-midcolor)_1px,_transparent_0)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <button
            onClick={handleBackClick}
            className="group flex items-center gap-2 text-midcolor hover:text-solid transition-all duration-300 py-2 rounded-xl"
          >
            <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start mb-12"
        >
          <h1 className="text-solid text-4xl md:text-7xl font-black uppercase">
            Projects
          </h1>
        </motion.div>

        {/* Project Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.Projects.map((project) => (
            <motion.div
  key={project.id}
  className="group relative rounded-2xl border border-midcolor bg-background cursor-pointer overflow-hidden shadow-lg hover:shadow-midcolor/30 transition-all"
  whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} // smoother hover
  initial={{ opacity: 0, y: 60, scale: 0.98 }} // start slightly lower and smaller
  animate={{ opacity: 1, y: 0, scale: 1 }}     // animate to natural position & size
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 20,
    mass: 0.5,
    delay: 0.15 * project.id, // stagger effect
  }}
  onClick={() => setSelectedId(project.id)}
>

              <div className="aspect-video bg-gray-900">
                <img
                  src={project.cover || "/fallback.png"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-extrabold">{project.name}</h3>

                  {project.status && (
                    <span className="px-3 py-1 text-sm bg-yellow-400/20 text-yellow-600 border border-yellow-500/30 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-midcolor/80 mt-3 line-clamp-2">
                  {project.description}
                </p>

                {/* SAFE TECH MAP */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {(project.tech || []).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-midcolor/10 border border-midcolor/50 rounded-full text-xs text-midcolor"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-5 border-t pt-4 border-midcolor/20">
                  <a
                    href={project.github || "#"}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 border border-midcolor rounded-xl text-midcolor"
                  >
                    <Code2 className="w-4 h-4" />
                    Code
                  </a>

                  <a
                    href={project.url || "#"}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 border border-midcolor rounded-xl text-solid"
                  >
                    <Play className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------------------- MODAL ---------------------- */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/80 z-[50]"
                onClick={() => setSelectedId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                className="fixed inset-0 max-w-5xl mx-auto bg-background border border-midcolor/50 rounded-xl z-[60] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <div className="flex justify-between p-6 border-b border-midcolor/20">
                  <h2 className="text-3xl font-bold">{selectedProject.name}</h2>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-2 hover:bg-midcolor/10 rounded-full"
                  >
                    <X />
                  </button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[80vh]">
                  {/* MAIN IMAGE */}
                  {projectImages.length > 0 && (
                    <div className="bg-midcolor/10 p-2 rounded-xl border border-midcolor/20">
                      <img
                        src={projectImages[activeImage]}
                        className="w-full h-96 object-cover rounded-lg"
                        alt=""
                      />
                    </div>
                  )}

                  {/* THUMBNAILS */}
                  <div className="flex gap-3 mt-4 overflow-x-auto">
                    {projectImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`w-24 h-16 border rounded-lg overflow-hidden ${
                          activeImage === index
                            ? "ring-2 ring-midcolor"
                            : "opacity-70"
                        }`}
                      >
                        <img
                          src={img}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </button>
                    ))}
                  </div>

                  {/* DESCRIPTION */}
                  <h3 className="text-2xl font-bold mt-10 mb-4">
                    Project Overview
                  </h3>
                  <p className="text-midcolor/90">{selectedProject.description}</p>

                  {/* TECH STACK SAFE MAP */}
                  {(selectedProject.tech || []).length > 0 && (
                    <>
                      <h3 className="text-2xl font-bold mt-10 mb-4">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {(selectedProject.tech || []).map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-midcolor/10 border border-midcolor/50 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  {/* BUTTONS WITH SAFE LINKS */}
                  <div className="flex gap-4 mt-10">
                    <a
                      href={selectedProject.url || "#"}
                      className="w-full px-6 py-4 text-center border rounded-xl"
                      target="_blank"
                    >
                      <Eye className="inline-block mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.github || "#"}
                      className="w-full px-6 py-4 text-center border rounded-xl"
                      target="_blank"
                    >
                      <Github className="inline-block mr-2" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </section>
  );
}

export default Projects;
