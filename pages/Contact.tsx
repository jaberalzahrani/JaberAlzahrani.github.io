import React, { useState } from 'react';
import { Copy, Check, Mail, Github, Linkedin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Placeholder email used for display purposes
  const emailPlaceholder = "jaber.sultan.alzahrani@email.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">Get in Touch</h1>
      <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
        Interested in discussing aerospace engineering opportunities or collaboration? 
        Feel free to reach out.
      </p>

      <div className="grid md:grid-cols-5 gap-8 bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Contact Info Side */}
        <div className="md:col-span-2 bg-blueprint-900 p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-sky-400 mt-1 mr-3" />
                <div>
                  <p className="text-slate-400 text-sm mb-1">Email</p>
                  <button 
                    onClick={handleCopyEmail}
                    className="text-white hover:text-sky-400 font-medium flex items-center transition-colors text-left break-all"
                  >
                    {emailPlaceholder}
                    {copied ? <Check className="w-3 h-3 ml-2 text-green-500 shrink-0" /> : <Copy className="w-3 h-3 ml-2 opacity-50 shrink-0" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                 <Linkedin className="w-5 h-5 text-sky-400 mr-3" />
                 <a href="#" className="text-white hover:text-sky-400 transition-colors">LinkedIn Profile</a>
              </div>
              <div className="flex items-center">
                 <Github className="w-5 h-5 text-sky-400 mr-3" />
                 <a href="#" className="text-white hover:text-sky-400 transition-colors">GitHub Profile</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="w-16 h-1 bg-sky-500 rounded mb-4"></div>
            <p className="text-slate-500 text-sm">
              "Engineering is the art of directing the great sources of power in nature for the use and convenience of man."
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:col-span-3 p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400 mb-6">Thank you for reaching out. I'll get back to you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-sky-400 hover:text-sky-300 font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
                  placeholder="recruiter@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
                  placeholder="Inquiry about opportunities..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2 px-4 rounded-md transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send className="w-4 h-4 ml-2" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};