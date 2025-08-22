import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import pastwork1 from '../images/pastworks/pastwork1.png';
import pastwork2 from '../images/pastworks/pastwork2.png';
import pastwork3 from '../images/pastworks/pastwork3.png';
import pastwork4 from '../images/pastworks/pastwork4.png';
import pastwork5 from '../images/pastworks/pastwork5.png';
import pastwork6 from '../images/pastworks/pastwork6.png';

const PortfolioGrid = () => {
  const projects = [
    { id: 1, title: 'Whispering Woods', description: 'See Details', image: pastwork1, link: '/crystalvision' },
    { id: 2, title: 'Neon Dystopia', description: 'See Details', image: pastwork2, link: '/crystalvision' },
    { id: 3, title: 'Geometric Harmony', description: 'See Details', image: pastwork3, link: '/crystalvision' },
    { id: 4, title: 'Android Soul', description: 'See Details', image: pastwork4, link: '/crystalvision' },
    { id: 5, title: 'Zen Garden', description: 'See Details', image: pastwork5, link: '/crystalvision' },
    { id: 6, title: 'Pixel Perk Cafe', description: 'See Details', image: pastwork6, link: '/crystalvision' },
  ];

  return (
    <div className="text-center">
      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link to={project.link} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-xl overflow-hidden bg-secondary/50 border border-gray-700/50 hover:shadow-lg hover:shadow-accent/30 transition"
            >
              {/* Image with hover zoom */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </div>

              {/* Title + Description */}
              <div className="p-4 text-left">
                <h3 className="font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
