import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Modelling & Embedding Design Intent in CAD',
    category: 'Design Engineering',
    description: 'Final Year Project focusing on parametric modelling and structural logic. Developed a fully parametric aircraft wing box in SolidWorks, embedding robust design intent to allow for rapid geometric modifications without failure.',
    tags: ['SolidWorks', 'Parametric Modelling', 'Design Intent', 'CAD'],
    caseStudy: {
      challenge: 'Complex CAD models often fail during updates due to poor reference management and lack of design intent.',
      solution: 'Created a master modeling strategy for a wing box, utilizing equation-driven geometry and logical feature trees.',
      result: 'Delivered a robust parametric model capable of automatic resizing while maintaining structural integrity logic.'
    }
  },
  {
    id: '2',
    title: 'BMFA Weight Challenge Simulation',
    category: 'Flight Dynamics',
    description: 'Flight simulation and testing for the BMFA Weight Challenge 2024–2025 using X-Plane. Conducted rigorous performance analysis including stability checks, takeoff runs, and payload handling.',
    tags: ['X-Plane', 'Plane Maker', 'Airfoil Maker', 'Testing'],
    caseStudy: {
      challenge: 'Predicting aircraft performance under varying payloads (0 kg, 2 kg, 4 kg) prior to physical flight tests.',
      solution: 'Modeled the aircraft in Plane Maker and Airfoil Maker, simulating flight characteristics and gathering telemetry data.',
      result: 'Validated takeoff distances and stability margins, ensuring the design met competition requirements for all weight classes.'
    }
  },
  {
    id: '3',
    title: 'Avionics Systems Project – AATIS',
    category: 'Avionics',
    description: 'Developed an Attitude Altitude Temperature Information System (AATIS). Integrated Arduino hardware with a custom MATLAB GUI to display real-time flight data.',
    tags: ['Arduino', 'MATLAB', 'GUI Design', 'Sensors'],
    caseStudy: {
      challenge: 'Visualizing sensor data in real-time for pilot situational awareness.',
      solution: 'Programmed an Arduino to read sensor inputs and transmit serial data to a MATLAB-based dashboard.',
      result: 'Achieved low-latency display of pitch, roll, altitude, and temperature data with a user-friendly interface.'
    }
  },
  {
    id: '4',
    title: 'Aircraft Conceptual Analysis Tool',
    category: 'Software Development',
    description: 'A web-based suite for early-stage aircraft sizing and performance estimation. Provides quick estimations for weight, range, and stability derivatives.',
    tags: ['Web Development', 'Python', 'Aircraft Design', 'Sizing'],
  }
];

export const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-slate-400 text-lg max-w-3xl">
          Academic and technical projects showcasing skills in CAD, simulation, avionics, and software tools.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`bg-slate-900/50 border ${expandedId === project.id ? 'border-sky-500/50 bg-slate-800/30' : 'border-slate-800'} rounded-lg transition-all duration-300 overflow-hidden`}
          >
            <div className="p-6 cursor-pointer" onClick={() => toggleExpand(project.id)}>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-white group-hover:text-sky-400">{project.title}</h2>
                    <span className="text-xs font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-900/30 border border-sky-500/20">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-400 max-w-4xl">{project.description}</p>
                </div>
                <button 
                  className="text-slate-500 hover:text-sky-400 transition-colors"
                  aria-label={expandedId === project.id ? "Collapse" : "Expand"}
                >
                  {expandedId === project.id ? <ChevronUp /> : <ChevronDown />}
                </button>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs text-slate-500 px-2 py-1 rounded bg-slate-950 border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Expandable Case Study Section */}
            {expandedId === project.id && project.caseStudy && (
              <div className="border-t border-slate-800 bg-black/20 p-6 animate-in fade-in slide-in-from-top-4 duration-300">
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Project Detail</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-sky-400 font-medium">Objective</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{project.caseStudy.challenge}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sky-400 font-medium">Approach</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{project.caseStudy.solution}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sky-400 font-medium">Outcome</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{project.caseStudy.result}</p>
                  </div>
                </div>
                {project.id === '4' && (
                  <div className="mt-6 pt-4 border-t border-slate-800/50">
                    <a href="https://aero-concept-tool.base44.app/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-white hover:text-sky-400 transition-colors inline-flex">
                      <ExternalLink className="w-4 h-4 mr-2" /> Launch Live Tool
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};