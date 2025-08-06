import React from "react";
import { Card, CardContent } from "./ui/card";

// Fallback data
const fallbackAbout = {
  description: `I'm a passionate Computer Engineer with 5+ years of experience in full-stack development, 
  specializing in front-end technologies. My journey began with a fascination for creating seamless 
  user experiences and has evolved into expertise across the entire development stack.
  
  When I'm not coding, I channel my creativity through video editing, bringing stories to life 
  through visual narratives. This unique combination of technical precision and creative vision 
  allows me to approach problems from multiple angles and deliver comprehensive solutions.`
};

const fallbackStats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "5+" },
  { label: "Technologies Mastered", value: "9" },
  { label: "Client Satisfaction", value: "99%" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-gray-300 leading-relaxed text-lg">
              {fallbackAbout.description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {fallbackStats.map((stat, index) => (
              <Card key={index} className="bg-black border-red-500/20 hover:border-red-500/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-mono text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-50"></div>
      </div>
    </section>
  );
};

export default About;
