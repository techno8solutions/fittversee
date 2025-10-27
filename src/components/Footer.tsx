import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-2">
              FitVerse
            </h3>
            <p className="text-gray-400 text-center">
              Manage Every Gym. One Platform. Infinite Power.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300">
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-500 mb-6"
          >
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Contact Us
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Documentation
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-600 text-sm text-center"
          >
            © 2025 FitVerse. All Rights Reserved.
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-purple-500/5 rounded-full blur-3xl" />
    </footer>
  );
}
