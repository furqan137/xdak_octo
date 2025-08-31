import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { SITE_CONFIG } from '../utils/constants';

// Import images
import cube1 from "../images/cube1.png";
import cube2 from "../images/cube2.png";
import cube3 from "../images/cube3.png";
import cube4 from "../images/cube4.png";

const CrystalVision: React.FC = () => {
  const tabs = ["Logo Concepts", "Merch Designs", "Process"];
  const [activeTab, setActiveTab] = useState("Logo Concepts");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const logoImages = [
    { src: cube1, title: "Primary Concept", desc: "Main crystalline direction with light refraction exploring depth and luminosity" },
    { src: cube2, title: "Concept A", desc: "Crystalline transparency with geometric precision" },
    { src: cube3, title: "Sphere Concept", desc: "Reflective surface exploration" },
    { src: cube4, title: "Minimal Line Concept", desc: "Simplistic and clean geometric design" },
  ];

  return (
    <div className="bg-[#0b0c10] text-white min-h-screen px-6 md:px-12 py-16">
      {/* ---------- HERO SECTION ---------- */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Crystal<span className="text-purple-400">Vision</span>
          </h1>
          <p className="text-gray-400 leading-relaxed text-lg">
            A comprehensive branding project exploring crystalline structures and modern digital aesthetics, 
            from initial concept to polished execution across multiple touchpoints.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4 mt-10 md:mt-0 md:ml-12">
          {[
            { label: "SERVICES", value: "3D Modeling\nBrand Identity" },
            { label: "CLIENT", value: "FlaTheme" },
            { label: "DURATION", value: "8 Weeks" },
            { label: "YEAR", value: "2024" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1c23] px-5 py-4 rounded-xl text-sm hover:scale-105 transition-transform duration-300"
            >
              <p className="text-gray-400 mb-1">{item.label}</p>
              <p className="font-semibold text-white whitespace-pre-line">{item.value}</p>
            </div>
          ))}
        </div>
      </header>

{/* ---------- TAB NAVIGATION WITH SLIDING ANIMATION ---------- */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="flex justify-center mb-12 overflow-hidden"
>
  <motion.div
    layout
    className="bg-secondary/30 p-2 rounded-full border border-gray-700/50 flex gap-2 relative"
  >
    {tabs.map((tab) => (
      <motion.button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all relative z-10 ${
          activeTab === tab
            ? "text-white"
            : "text-text-secondary hover:text-text-primary"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {tab}
        {activeTab === tab && (
          <motion.div
            layoutId="highlight"
            className="absolute inset-0 bg-accent rounded-full -z-10"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.button>
    ))}
  </motion.div>
</motion.div>


  {/* ---------- LOGO GRID ---------- */}
{activeTab === "Logo Concepts" && (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 auto-rows-[280px] md:auto-rows-[320px]">
    {logoImages.map((logo, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.1 }}
        className={`relative group cursor-pointer rounded-xl overflow-hidden shadow-lg 
          ${idx === 0 ? "col-span-2 row-span-2" : ""}   /* Big wide image */
          ${idx === 1 ? "col-span-1 row-span-2" : ""}   /* Tall crystal */
          ${idx === 2 ? "col-span-1 row-span-1" : ""}   /* Bottom left sphere */
          ${idx === 3 ? "col-span-1 row-span-1" : ""}`} /* Bottom right rings */
        onMouseEnter={() => setHoveredImage(idx)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <motion.img
          src={logo.src}
          alt={logo.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {hoveredImage === idx && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">{logo.title}</h3>
            <p className="text-gray-200 text-sm mb-4">{logo.desc}</p>
            <button className="bg-accent hover:bg-accent-light px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 w-fit text-sm">
              <Download className="w-4 h-4" />
              Download
            </button>
          </motion.div>
        )}
      </motion.div>
    ))}
  </div>
)}


      {/* ---------- TOOLS & CREDITS ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-secondary/30 rounded-2xl p-8 border border-gray-700/50 mb-16"
      >
        <p className="text-text-muted text-sm uppercase tracking-wider mb-6">
          TOOLS & CREDITS
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">3D & Rendering</h3>
            <p className="text-text-secondary text-sm">
              Cinema 4D, Octane Render, KeyShot
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Design & UI</h3>
            <p className="text-text-secondary text-sm">
              Figma, Adobe Illustrator, Photoshop
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Collaboration</h3>
            <p className="text-text-secondary text-sm">
              Art Direction: Sarah Chen
              <br />
              Photography: Marcus Liu
            </p>
          </div>
        </div>
      </motion.div>

      {/* ---------- FOOTER NAVIGATION ---------- */}
      <div className="flex justify-between items-center">
        <Link
          to="/works"
          className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Previous
        </Link>

        <div className="text-center">
          <p className="text-text-muted text-sm">Project 2 of 12</p>
          <Link
            to="/works"
            className="text-text-secondary hover:text-accent transition-colors text-sm"
          >
            ← Back to Works
          </Link>
        </div>

        <Link
          to="/works"
          className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
        >
          Next
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* ---------- COPYRIGHT ---------- */}
      <div className="text-center text-xs text-gray-500 mt-12">
        © {SITE_CONFIG.name} 2025. All rights reserved.
      </div>
    </div>
  );
};

export default CrystalVision;
