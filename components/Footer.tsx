import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-blueprint-900 pt-10 pb-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Jaber Sultan Alzahrani.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Aerospace Systems Engineer (BEng) | Coventry University
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:jaber.sultan@email.com" className="text-slate-400 hover:text-sky-400 transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};