import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pastWorksProjects } from '../data/projects';

const PortfolioGrid = () => {
  return (
    <div className="text-center">
      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {pastWorksProjects.map((project, index) => (
          <Link to={project.link || '/crystalvision'} key={project.id}>
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
                <p className="text-gray-400 text-sm">{project.description || 'See Details'}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
