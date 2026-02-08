import React from 'react';
import { Activity, Wind, Anchor, Gauge, Calculator } from 'lucide-react';
import { ToolModule } from '../types';

const modules: ToolModule[] = [
  {
    id: 'sizing',
    title: 'Sizing Estimation',
    description: 'Early-stage weight estimation and component sizing for conceptual aircraft design.',
    icon: <Gauge className="w-6 h-6" />
  },
  {
    id: 'perf',
    title: 'Performance Analysis',
    description: 'Calculates key performance metrics including range, endurance, and takeoff distances.',
    icon: <Activity className="w-6 h-6" />
  },
  {
    id: 'aero',
    title: 'Aerodynamics',
    description: 'Estimates lift and drag characteristics to support initial configuration choices.',
    icon: <Wind className="w-6 h-6" />
  },
  {
    id: 'stab',
    title: 'Stability',
    description: 'Basic stability derivative estimation for longitudinal and lateral dynamics.',
    icon: <Anchor className="w-6 h-6" />
  }
];

export const Tool: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Aircraft Conceptual Analysis Tool</h1>
          <p className="text-slate-400 text-lg">
            A web-based suite for early-stage aircraft sizing and performance estimation.
          </p>
        </div>
        <div>
          <a 
            href="https://aero-concept-tool.base44.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded shadow-lg shadow-sky-900/20 transition-all"
          >
            Launch Live Demo
          </a>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Col: Modules */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-sky-400" />
              Core Functionalities
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {modules.map((mod) => (
                <div key={mod.id} className="p-4 rounded bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/30 transition-colors">
                  <div className="text-sky-400 mb-3">{mod.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{mod.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{mod.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshot Placeholders */}
          <section className="space-y-6">
             <div className="aspect-video bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="text-center">
                  <div className="text-5xl mb-2 opacity-20">📊</div>
                  <span className="text-slate-500 font-mono text-sm">UI Screenshot: Sizing Dashboard</span>
                </div>
             </div>
          </section>
        </div>

        {/* Right Col: Equations & Specs */}
        <div className="space-y-8">
          <section className="bg-blueprint-900 border border-sky-500/20 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <h3 className="text-sm font-bold text-sky-400 uppercase tracking-wider mb-4">Methodology</h3>
            
            <div className="space-y-6 font-mono text-sm text-slate-300">
              <div className="bg-black/20 p-3 rounded border-l-2 border-sky-500/50">
                <p className="text-xs text-slate-500 mb-1">Concept</p>
                <p>Rapid iteration of initial design parameters to converge on a viable aircraft configuration.</p>
              </div>

              <div className="bg-black/20 p-3 rounded border-l-2 border-sky-500/50">
                <p className="text-xs text-slate-500 mb-1">Scope</p>
                <p>Weight estimation, drag polar approximation, and mission profile analysis.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Web App</span>
              <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Interactive UI</span>
              <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-300">Engineering Tools</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};