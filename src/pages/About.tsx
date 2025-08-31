import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from '../utils/constants';

// Local icons
import InspirationIcon from "../icons/about//inspire.png";
import GrowthIcon from "../icons/about/growth.png";
import CommunityIcon from "../icons/about/community.png";
import ExperienceIcon from "../icons/about/experience.png";
import SatisfactionIcon from "../icons/about/satisfaction.png";
import CoffeeIcon from "../icons/about/coffee.png";
import LearningIcon from "../icons/about/learning.png";

// Local images
import CreativeImage from "../images/creative.png";
import ProfileImage from "../images/profile.png"; // add your profile image

const About = () => {
  const values = [
    {
      icon: InspirationIcon,
      title: "Inspiration Sources",
      description:
        "I find inspiration everywhere—from the interplay of light and shadow in Parisian cafés to the geometric patterns in Islamic architecture.",
    },
    {
      icon: GrowthIcon,
      title: "Personal Growth",
      description:
        "Each project teaches me something new. I believe in continuous learning and pushing the boundaries of my creative comfort zone.",
    },
    {
      icon: CommunityIcon,
      title: "Community",
      description:
        "I'm passionate about mentoring emerging artists and contributing to the vibrant creative community that shaped me.",
    },
  ];

  const stats = [
    { value: "8+", label: "Years of Experience", icon: ExperienceIcon },
    { value: "99%", label: "Client Satisfaction", icon: SatisfactionIcon },
    { value: "200+", label: "Cups of Coffee", icon: CoffeeIcon },
    { value: "24/7", label: "Learning Mode", icon: LearningIcon },
  ];

  return (
    <div className="min-h-screen py-16 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-text-muted text-sm uppercase tracking-wider mb-4">
            About Us
          </p>
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6">
            Design that Inspires
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
            A digital artist crafting unique visual identities and immersive
            experiences that connect and resonate.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-secondary border border-gray-600 px-6 py-3 rounded-lg hover:bg-accent transition-colors">
              View My Work
            </button>
            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:border-accent transition-colors">
              Get In Touch
            </button>
          </div>
        </motion.div>

        {/* Blend of Art & Logic */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-mono text-3xl font-bold mb-6">
                A blend of art & logic.
              </h2>
              <p className="text-text-secondary mb-6">
                I believe great design is not just about aesthetics, but about
                creating a feeling, telling a story, and solving a problem. My
                work lives at the intersection of creative exploration and
                strategic thinking.
              </p>
              <p className="text-text-secondary">
                From vibrant illustrations to clean, intuitive user interfaces,
                my goal is to build things that are not only beautiful but also
                meaningful and user-centric.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary/30 p-8 rounded-xl border border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={ProfileImage}
                  alt={SITE_CONFIG.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{SITE_CONFIG.name}</h3>
                  <p className="text-text-muted text-sm">
                    Visual Artist & Designer
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-sm">
                Specializing in digital illustration, branding, and UI/UX.
                Passionate about bringing ideas to life with clarity and
                creativity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* My Creative Journey */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-mono text-3xl font-bold mb-4">
              My Creative Journey
            </h2>
            <p className="text-text-secondary">
              From traditional sketches to digital masterpieces
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-text-secondary">
                Growing up in the artistic heart of Paris, I was immersed in a
                world where creativity wasn’t just encouraged—it was essential.
                The cobblestone streets, historic galleries, and vibrant street
                art became my first classroom.
              </p>
              <p className="text-text-secondary">
                What began as childhood fascination with colors and forms has
                evolved into a sophisticated understanding of visual
                communication. I believe every design tells a story, and every
                story deserves to be told beautifully.
              </p>
              <p className="text-text-secondary">
                Today, I blend traditional artistic principles with cutting-edge
                digital techniques, creating work that resonates on both
                emotional and intellectual levels.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={CreativeImage}
                alt="Creative workspace"
                className="w-full h-80 object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </section>

{/* Beyond the Canvas */}
<section className="mb-20">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="font-mono text-3xl font-bold">Beyond the Canvas</h2>
  </motion.div>

  <div className="grid md:grid-cols-2 gap-12 items-start">
    {/* Left Values */}
    <div className="space-y-8">
      {values.map((value, index) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4 items-start"
        >
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
            <img src={value.icon} alt={value.title} className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">{value.title}</h3>
            <p className="text-text-secondary text-sm">{value.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Right Stats */}
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-secondary/30 border border-gray-700/50 rounded-xl p-6 text-center"
        >
          <div className="font-mono text-3xl font-bold text-accent mb-2">
            {stat.value}
          </div>
          <p className="text-text-secondary text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 bg-secondary/20 rounded-2xl border border-gray-700/50"
        >
          <h2 className="font-mono text-3xl font-bold mb-4">
            It's your time to shine.
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? I’d love to hear
            from you. Let’s create something amazing together.
          </p>
          <button className="bg-gradient-to-r from-accent to-accent-light px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-accent/25 transition-all">
            Start a Conversation
          </button>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 mt-16 text-text-muted text-sm border-t border-gray-800">
        © {SITE_CONFIG.name} 2025. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
