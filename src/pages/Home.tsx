import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import PortfolioGrid from '../components/PortfolioGrid';
import { skills } from '../data/skills';
import { SITE_CONFIG } from '../utils/constants';

// Profile & Info Icons
import profileImg from '../images/profile.png';
import mapIcon from '../icons/map.png';
import graduateIcon from '../icons/graduate.png';

// Section Icons
import aboutIcon from '../icons/aboutme.png';
import skillsIcon from '../icons/skills.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="text-center py-20 px-6 md:px-8">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-accent/20 shadow-lg"
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Intro Text */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="max-w-4xl mx-auto"
    >
  <h1 className="font-mono text-3xl md:text-5xl font-bold mb-4 leading-snug">
    Hi, I'm {SITE_CONFIG.name}.
    <br />
    Designer, Artist, Creator.
  </h1>
      <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        {SITE_CONFIG.description}
      </p>

          {/* Location and Education */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <img src={graduateIcon} alt="Graduate" className="w-4 h-4" />
              <span>Fine Arts Student</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={mapIcon} alt="Location" className="w-4 h-4" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          {/* Social Media Links */}
          <SocialLinks />
        </motion.div>
      </section>

      {/* ---------------- ABOUT & SKILLS ---------------- */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* About Me Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/30 p-8 rounded-2xl border border-gray-700 shadow-md"
          >
            <div className="flex items-center gap-3 mb-5">
              <img src={aboutIcon} alt="About Me" className="w-6 h-6" />
              <h3 className="text-xl font-mono font-semibold">About Me</h3>
            </div>
            <p className="text-text-secondary leading-relaxed text-base">
              From a young age, I’ve been fascinated by visual storytelling. My journey into 
              design has taught me the importance of balance, clarity, and emotion. Whether 
              working on branding, UI, or 3D design, I approach each project with passion 
              and precision.
            </p>
          </motion.div>

          {/* Tools & Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/30 p-8 rounded-2xl border border-gray-700 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={skillsIcon} alt="Tools & Skills" className="w-6 h-6" />
              <h3 className="text-xl font-mono font-semibold">Tools & Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- PAST WORK ---------------- */}
      <section className="px-6 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-mono text-3xl font-bold mb-2">Past Work</h2>
          </motion.div>

          <PortfolioGrid />
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="text-center py-6 text-text-muted text-sm border-t border-gray-800">
        © {SITE_CONFIG.name} 2025. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
