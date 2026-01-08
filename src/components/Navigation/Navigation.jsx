import { motion } from 'framer-motion';
import { Scissors, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['Home', 'Services', 'Portfolio', 'About', 'Contact'];
  
  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Scissors className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-display font-bold gradient-text">
                LuxeCuts
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-primary-400 transition-colors hover:scale-105"
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all">
                <Phone className="w-4 h-4 inline mr-2" />
                Book Now
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-4 right-4 glass-card rounded-xl p-6 z-40 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;