import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-mono text-red-500">
              {"<DevPortfolio />"}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer & Video Editor passionate about creating 
              innovative digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-mono text-white">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-gray-400 hover:text-red-500 transition-colors duration-200 font-mono"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-mono text-white">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300 group"
              >
                <Github className="text-red-500 group-hover:text-white" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300 group"
              >
                <Linkedin className="text-red-500 group-hover:text-white" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300 group"
              >
                <Mail className="text-red-500 group-hover:text-white" size={18} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Available for freelance opportunities
            </p>
          </div>
        </div>

        <div className="border-t border-red-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-mono">
              © {currentYear} Jeremy Aliermo. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="text-red-500 mx-1" size={14} /> and lots of code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
