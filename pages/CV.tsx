import React from 'react';
import { Download, GraduationCap, Award, BookOpen, Globe } from 'lucide-react';
import { Education } from '../types';

const education: Education[] = [
  {
    id: '1',
    degree: 'BEng Aerospace Systems Engineering',
    institution: 'Coventry University',
    year: '2019 - 2025',
    details: 'Modules: Aerospace Systems, Propulsion, Aerodynamics, Flight Dynamics, Avionics, Manufacturing.'
  },
  {
    id: '2',
    degree: 'OTHM Level 5 Diploma in Information Technology',
    institution: 'OTHM Qualifications',
    year: 'Completed',
  },
  {
    id: '3',
    degree: 'International Foundation Programme',
    institution: 'Engineering & Physical Sciences',
    year: 'Completed',
  },
  {
    id: '4',
    degree: 'OTHM Level 3 Diploma in Business Studies',
    institution: 'OTHM Qualifications',
    year: 'Completed',
  }
];

const certificates = [
  'Deep Learning Onramp in MATLAB',
  'Data Analysis in MATLAB',
  'BCS Level 2 Certificate in IT User Skills (ECDL Extra)',
  'IELTS English Proficiency',
  'CMI Level 5 Award in Management & Leadership'
];

export const CV: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 border-b border-white/10 pb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Curriculum Vitae</h1>
          <p className="text-slate-400">Jaber Sultan Alzahrani • Aerospace Systems Engineer</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded transition-colors cursor-not-allowed opacity-80" title="Available upon request">
            <Download className="w-4 h-4 mr-2" /> Download PDF
          </button>
        </div>
      </div>

      <div className="space-y-12">
        {/* Education Section */}
        <section>
          <h2 className="text-xl font-bold text-sky-400 mb-6 flex items-center">
            <GraduationCap className="w-5 h-5 mr-3" /> Education
          </h2>
          <div className="grid gap-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-slate-900/50 border border-slate-800 p-5 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-bold">{edu.degree}</h3>
                  <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">{edu.year}</span>
                </div>
                <p className="text-sky-400 text-sm mb-2">{edu.institution}</p>
                {edu.details && <p className="text-slate-500 text-sm">{edu.details}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
           <h2 className="text-xl font-bold text-sky-400 mb-6 flex items-center">
            <Award className="w-5 h-5 mr-3" /> Technical Skills
          </h2>
          <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-medium mb-3">Engineering Software</h3>
                <div className="flex flex-wrap gap-2">
                  {['MATLAB', 'SolidWorks (Parametric)', 'X-Plane', 'Plane Maker', 'Airfoil Maker', 'XFLR5', 'XFOIL'].map(s => (
                    <span key={s} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Aerospace Systems', 'Propulsion', 'Aerodynamics', 'Flight Mechanics', 'Avionics', 'Test Planning', 'Technical Reporting'].map(s => (
                    <span key={s} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section>
          <h2 className="text-xl font-bold text-sky-400 mb-6 flex items-center">
            <BookOpen className="w-5 h-5 mr-3" /> Certifications
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert, idx) => (
              <li key={idx} className="flex items-center text-slate-300 text-sm bg-slate-900/50 p-3 rounded border border-slate-800">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-xl font-bold text-sky-400 mb-6 flex items-center">
            <Globe className="w-5 h-5 mr-3" /> Languages
          </h2>
          <div className="flex gap-6 text-slate-300">
            <div>
              <span className="font-bold text-white">Arabic:</span> Native
            </div>
            <div>
              <span className="font-bold text-white">English:</span> Professional
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};