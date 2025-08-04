import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-mono">
              <span className="text-white">Hello, I'm </span>
              <span className="text-red-500">Alex Chen</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Full-Stack Developer & Video Editor
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Computer Engineer specializing in front-end development with expertise in 
            creating stunning web and mobile applications. Bringing creative vision to 
            life through code and video editing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-mono"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection("contact")}
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 text-lg font-mono"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;