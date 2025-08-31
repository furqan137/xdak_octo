import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/20 transition-all border border-gray-700 hover:border-accent"
        >
          <img
            src={link.icon}
            alt={link.label}
            className="w-5 h-5 object-contain"
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
