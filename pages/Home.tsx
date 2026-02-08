import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Cpu, Wind, Code2, PenTool } from 'lucide-react';

const skills = [
  { name: 'Parametric CAD', icon: <PenTool className="w-4 h-4" /> },
  { name: 'Flight Simulation', icon: <Wind className="w-4 h-4" /> },
  { name: 'MATLAB / Python', icon: <Code2 className="w-4 h-4" /> },
  { name: 'Avionics', icon: <Cpu className="w-4 h-4" /> },
];

const featuredProjects = [
  {
    id: '1',
    title: 'Aircraft Conceptual Analysis Tool',
    desc: 'A web-based early-stage aircraft sizing and performance estimation tool designed for rapid iteration.',
    tags: ['Web App', 'Sizing', 'Performance'],
  },
  {
    id: '2',
    title: 'Parametric Wing Box Design',
    desc: 'Modelling and embedding design intent in CAD models, featuring a parametric aircraft wing box in SolidWorks.',
    tags: ['SolidWorks', 'Design Intent', 'Structures'],
  },
  {
    id: '3',
    title: 'BMFA Weight Challenge',
    desc: 'Flight simulation and performance testing in X-Plane for varied payload configurations (0kg, 2kg, 4kg).',
    tags: ['X-Plane', 'Plane Maker', 'Testing'],
  },
];

export const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-mono text-sky-400 bg-sky-900/30 rounded border border-sky-500/30">
            SYSTEM STATUS: OPERATIONAL
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Jaber Sultan Alzahrani
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 font-light mb-8 max-w-2xl">
            Aerospace Systems Engineer (BEng) specializing in parametric modelling, avionics, and flight mechanics.
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-lg shadow-sky-900/50"
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-slate-600 text-base font-medium rounded text-slate-300 hover:bg-slate-800 transition-all hover:text-white"
            >
              Download CV <Download className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-white/5 rounded backdrop-blur-sm">
                <span className="text-sky-400">{skill.icon}</span>
                <span className="text-sm font-medium text-slate-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative background grid effect specifically for hero */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      </section>

      {/* Featured Projects */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-white flex items-center">
            <span className="w-2 h-8 bg-sky-500 mr-3 rounded-sm"></span>
            Featured Projects
          </h3>
          <Link to="/projects" className="text-sky-400 hover:text-sky-300 text-sm font-medium flex items-center">
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group relative bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-sky-500/50 transition-all duration-300 hover:bg-slate-800/50">
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-sky-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/projects" className="absolute inset-0" aria-label={`View project ${project.title}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-sky-900/20 to-transparent border border-sky-500/20 rounded-xl p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Check out the Analysis Tool</h3>
              <p className="text-slate-400 max-w-xl">
                Explore the custom Aircraft Conceptual Analysis Tool capable of estimating performance, 
                sizing, and stability.
              </p>
            </div>
            <Link
              to="/tool"
              className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded transition-colors"
            >
              Launch Demo <Cpu className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};