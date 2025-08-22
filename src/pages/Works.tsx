import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// === Icons ===
import AllIcon from '../icons/svg/all.png';
import DigitalArtIcon from '../icons/svg/art.png';
import BrandingIcon from '../icons/svg/brand.png';
import UiUxIcon from '../icons/svg/ui.png';
import AbstractIcon from '../icons/svg/abstract.png';

// === Project Images ===
import work1 from '../images/works/Project1.png';
import work2 from '../images/works/Project2.png';
import work3 from '../images/works/Project3.png';
import work4 from '../images/works/Project4.png';
import work5 from '../images/works/Project5.png';
import work6 from '../images/works/Project6.png';
import work7 from '../images/works/Project7.png';
import work8 from '../images/works/Project8.png';
import work9 from '../images/works/Project9.png';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'all', icon: AllIcon },
    { id: 'digital_art', label: 'digital_art', icon: DigitalArtIcon },
    { id: 'branding', label: 'branding', icon: BrandingIcon },
    { id: 'ui/ux', label: 'ui/ux', icon: UiUxIcon },
    { id: 'abstract', label: 'abstract', icon: AbstractIcon },
  ];

  const projects = [
    { id: 1, title: 'Whispering Woods', category: 'digital_art', image: work1 },
    { id: 2, title: 'Aura Music App', category: 'ui/ux', image: work2 },
    { id: 3, title: 'Neon Dystopia', category: 'digital_art', image: work3 },
    { id: 4, title: 'Terra Coffee', category: 'branding', image: work4 },
    { id: 5, title: 'Geometric Harmony', category: 'abstract', image: work5 },
    { id: 6, title: 'Android Soul', category: 'digital_art', image: work6 },
    { id: 7, title: 'Zen Garden', category: 'digital_art', image: work7 },
    { id: 8, title: 'Pixel Perk Cafe', category: 'branding', image: work8 },
    { id: 9, title: 'Etherea Skincare', category: 'branding', image: work9 },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-text-muted text-sm uppercase tracking-wider mb-4">
            Portfolio
          </p>
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-8">
            Creative Works
          </h1>

    {/* Code block */}
<div className="bg-black rounded-xl p-8 mb-12 font-mono text-center max-w-3xl mx-auto text-lg leading-relaxed">
  <span className="text-purple-400">const</span>{' '}
  <span className="text-pink-400">portfolio</span>{' '}
  = {'{'}{' '}
  <span className="text-blue-400">passion</span> :{' '}
  <span className="text-green-400">"design"</span>{' '},{' '}
  <span className="text-blue-400">medium</span> :{' '}
  <span className="text-green-400">"digital art"</span>{' '},{' '}
  <br />
  <span className="text-blue-400">status</span> :{' '}
  <span className="text-green-400">"always creating"</span>{' '}
  {'};'}
</div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all ${
                  activeFilter === filter.id
                    ? 'bg-accent border-accent text-white'
                    : 'border-gray-600 text-text-secondary hover:border-accent hover:text-accent'
                }`}
              >
                <img src={filter.icon} alt={filter.label} className="w-4 h-4" />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Terminal line */}
          <div className="font-mono text-text-muted text-sm">
            $ ls -la /creative/works/
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden bg-secondary border border-gray-700/50"
            >
              <Link to="/crystalvision">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-text-muted text-sm">View Project</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 mt-16 text-text-muted text-sm border-t border-gray-800">
        © Elara Vance 2025. All rights reserved.
      </footer>
    </div>
  );
};

export default Works;
