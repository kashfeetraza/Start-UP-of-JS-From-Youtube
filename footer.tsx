
import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              techbrew<span className="text-white">+</span>
            </h2>
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Social</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 border border-white/10 rounded-sm hover:border-white/40 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="p-2 border border-white/10 rounded-sm hover:border-white/40 transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="p-2 border border-white/10 rounded-sm hover:border-white/40 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm hover:text-white/60 transition-colors">About us</a></li>
                <li><a href="#" className="text-sm hover:text-white/60 transition-colors">Services</a></li>
                <li><a href="#" className="text-sm hover:text-white/60 transition-colors">Projects</a></li>
                <li><a href="#" className="text-sm hover:text-white/60 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Contact</h3>
              <ul className="space-y-4">
                <li><a href="mailto:info@techbrewplus.com" className="text-sm hover:text-white/60 transition-colors">info@techbrewplus.com</a></li>
                <li><span className="text-sm text-white/60">Lahore, Pakistan</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            © 2025 techbrew+ · All Rights Reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
