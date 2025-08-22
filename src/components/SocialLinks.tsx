import React from 'react';
import { motion } from 'framer-motion';

// Import custom icons from your icons folder
import DribbbleIcon from '../icons/dribble.png';
import BehanceIcon from '../icons/behance.png';
import InstagramIcon from '../icons/instagram.png';
import GmailIcon from '../icons/gmail.png';

const SocialLinks = () => {
  const socialLinks = [
    { icon: DribbbleIcon, href: 'https://dribbble.com', label: 'Dribbble' },
    { icon: BehanceIcon, href: 'https://behance.net', label: 'Behance' },
    { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
    { icon: GmailIcon, href: 'mailto:yourmail@gmail.com', label: 'Gmail' },
  ];

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
