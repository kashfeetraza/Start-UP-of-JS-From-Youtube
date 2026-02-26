
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <span className="text-xl font-bold tracking-tight text-white group-hover:opacity-80 transition-opacity">
            techbrew<span className="text-white">+</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          <Link to="/" className="text-sm font-medium hover:text-white/70 transition-colors uppercase tracking-widest">Home</Link>
          <Link to="/services" className="text-sm font-medium hover:text-white/70 transition-colors uppercase tracking-widest">Services</Link>
          <Link to="/about" className="text-sm font-medium hover:text-white/70 transition-colors uppercase tracking-widest">About</Link>
          <Link to="/contact" className="text-sm font-bold border-b border-white pb-0.5 uppercase tracking-widest">Contact</Link>
        </div>

        <button className="md:hidden p-2 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
