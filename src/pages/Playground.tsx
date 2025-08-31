import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { playgroundProjects } from '../data/projects';
import { PLAYGROUND_CATEGORIES, SITE_CONFIG } from '../utils/constants';

const Playground = () => {
  const [activeCategory, setActiveCategory] = useState(PLAYGROUND_CATEGORIES.EXPERIMENTAL);

  const categories = [
    { id: PLAYGROUND_CATEGORIES.EXPERIMENTAL, label: "Experimental", color: "bg-pink-600" },
    { id: PLAYGROUND_CATEGORIES.UNCONVENTIONAL, label: "Unconventional", color: "bg-purple-600" },
    { id: PLAYGROUND_CATEGORIES.WEIRD, label: "Weird", color: "bg-green-600" },
  ];

  const filters = [
    { id: "everything", label: "Everything" },
    { id: "glitch", label: "Glitch Art" },
    { id: "3d", label: "3D Weird" },
    { id: "type", label: "Type Experiments" },
    { id: "chaos", label: "Abstract Chaos" },
  ];

  const filteredProjects = playgroundProjects.filter(project => 
    activeCategory === PLAYGROUND_CATEGORIES.EXPERIMENTAL ? project.category === activeCategory : 
    activeCategory === PLAYGROUND_CATEGORIES.UNCONVENTIONAL ? project.category === activeCategory :
    activeCategory === PLAYGROUND_CATEGORIES.WEIRD ? project.category === activeCategory :
    true
  );

  return (
    <div className="min-h-screen py-16 px-8 bg-background text-white">
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
                <div className="w-4 h-4 bg-current rounded-full opacity-60"></div>
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
                <div className="w-4 h-4 bg-current rounded-full opacity-40"></div>
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