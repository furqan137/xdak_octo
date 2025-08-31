import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from '../utils/constants';
import SocialLinks from "../components/SocialLinks";

// Custom Icons from icons/contact folder
import Message from "../icons/contact/message.png";
import SendIcon from "../icons/contact/send.png";
import LocationIcon from "../icons/contact/location.png";
import ClockIcon from "../icons/contact/time.png";
import ConnectIcon from "../icons/contact/connect.png";
import ProcessIcon from "../icons/contact/process.png";
import TimelineIcon from "../icons/contact/time.png";
import RatesIcon from "../icons/contact/rate.png";
import RevisionsIcon from "../icons/contact/changes.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqs = [
    {
      question: "What's your design process?",
      answer:
        "I start with understanding your vision, then move through research, sketching, digital creation, and refinement until we achieve the perfect result.",
      icon: ProcessIcon,
    },
    {
      question: "How long does a project take?",
      answer:
        "Timeline varies by project complexity. Simple designs take 1-2 weeks, while comprehensive branding projects can take 4-6 weeks.",
      icon: TimelineIcon,
    },
    {
      question: "What are your rates?",
      answer:
        "Rates depend on project scope and timeline. I offer both hourly and project-based pricing. Let's discuss your needs for a custom quote.",
      icon: RatesIcon,
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes! I include 3 rounds of revisions in all projects to ensure the final result exceeds your expectations.",
      icon: RevisionsIcon,
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-text-muted text-sm uppercase tracking-wider mb-4">
            Contact Us
          </p>
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let’s Create Something <br />
            Amazing
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say
            hello? I’d love to hear from you. Drop me a message and let’s start
            a conversation.
          </p>
        </motion.div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2 bg-secondary/30 p-8 rounded-2xl border border-gray-700/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={Message} alt="Send Message" className="w-6 h-6" />
              <h2 className="text-2xl font-mono font-bold">Send Message</h2>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-primary/50 border border-gray-600 rounded-lg px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full bg-primary/50 border border-gray-600 rounded-lg px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Collaboration"
                  className="w-full bg-primary/50 border border-gray-600 rounded-lg px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full bg-primary/50 border border-gray-600 rounded-lg px-4 py-3 focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent hover:bg-accent-light px-8 py-4 rounded-xl font-medium transition-colors flex items-center gap-2 text-white"
              >
                <img src={SendIcon} alt="Send" className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-secondary/30 p-6 rounded-xl border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={LocationIcon} alt="Location" className="w-5 h-5" />
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-text-secondary">Paris, France</p>
              <p className="text-text-muted text-sm">
                Available for remote work worldwide
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-secondary/30 p-6 rounded-xl border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={ClockIcon} alt="Response Time" className="w-5 h-5" />
                <h3 className="font-semibold">Response Time</h3>
              </div>
              <p className="text-text-secondary">Usually within 24 hours</p>
              <p className="text-text-muted text-sm">
                Monday - Friday, 9 AM - 6 PM CET
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-secondary/30 p-6 rounded-xl border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={ConnectIcon} alt="Connect" className="w-5 h-5" />
                <h3 className="font-semibold">Let's Connect</h3>
              </div>
              <SocialLinks />
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-mono text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/30 p-6 rounded-xl border border-gray-700/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src={faq.icon} alt={faq.question} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-text-secondary text-sm">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 mt-16 text-text-muted text-sm border-t border-gray-800">
        © {SITE_CONFIG.name} 2025. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
