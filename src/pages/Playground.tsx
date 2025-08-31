import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { playgroundProjects } from '../data/projects';
import { PLAYGROUND_CATEGORIES, SITE_CONFIG } from '../utils/constants';

// === Icons ===
import ExperimentalIcon from "../icons/playgrounds/experiment.png";
import UnconventionalIcon from "../icons/playgrounds/rocket.png";
import WeirdIcon from "../icons/playgrounds/weird.png";
import EverythingIcon from "../icons/playgrounds/everthing.png";
import GlitchIcon from "../icons/playgrounds/glitch.png";
import Weird3DIcon from "../icons/playgrounds/3d.png";
import TypeIcon from "../icons/playgrounds/type.png";
import ChaosIcon from "../icons/playgrounds/chaos.png";

const Playground = () => {
  const [activeFilter, setActiveFilter] = useState(PLAYGROUND_CATEGORIES.EXPERIMENTAL);

  const categories = [
    { id: PLAYGROUND_CATEGORIES.EXPERIMENTAL, label: "Experimental", icon: ExperimentalIcon, color: "bg-pink-600" },
    { id: PLAYGROUND_CATEGORIES.UNCONVENTIONAL, label: "Unconventional", icon: UnconventionalIcon, color: "bg-purple-600" },
    { id: PLAYGROUND_CATEGORIES.WEIRD, label: "Weird", icon: WeirdIcon, color: "bg-green-600" },
  ];

  const filters = [
    { id: "everything", label: "Everything", icon: EverythingIcon },
    { id: "glitch", label: "Glitch Art", icon: GlitchIcon },
    { id: "3d", label: "3D Weird", icon: Weird3DIcon },
    { id: "type", label: "Type Experiments", icon: TypeIcon },
    { id: "chaos", label: "Abstract Chaos", icon: ChaosIcon },
  ];

  const filteredProjects = playgroundProjects.filter(project => 
    activeFilter === PLAYGROUND_CATEGORIES.EXPERIMENTAL ? project.category === activeFilter : 
    activeFilter === PLAYGROUND_CATEGORIES.UNCONVENTIONAL ? project.category === activeFilter :
    activeFilter === PLAYGROUND_CATEGORIES.WEIRD ? project.category === activeFilter :
    true
  );

  return (
    <div className="min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-text-muted text-sm uppercase tracking-wider mb-4">Playground</p>
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6">
            Welcome to the <br />
            <span className="text-accent-green">Playground</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
            This is where I let my creativity run wild. Experimental art, weird concepts,{" "}
            <span className="font-mono text-accent-green">digital chaos</span>, and everything that doesn't fit in a neat category.
          </p>

          {/* Category Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-medium transition ${
                  activeCategory === cat.id ? `${cat.color} shadow-md` : "bg-secondary text-text-secondary hover:text-white"
                }`}
              >
                <img src={cat.icon} alt={cat.label} className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.id}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-gray-700 text-sm text-text-secondary hover:border-accent hover:text-accent transition-all"
              >
                <img src={f.icon} alt={f.label} className="w-4 h-4" />
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden bg-secondary/40 border border-gray-700/50"
            >
              <Link to="/crystalvision">
                {/* Fixed Aspect Ratio for Uniform Cards */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                {/* Text Content */}
                <div className="p-5">
                  <h3 className="font-mono text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-text-secondary text-sm">{project.subtitle || 'View Project'}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 mt-16 text-text-muted text-sm border-t border-gray-800">
        © {SITE_CONFIG.name} 2025. All rights reserved.
      </footer>
    </div>
  );
};

export default Playground;
