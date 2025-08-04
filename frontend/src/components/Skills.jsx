import React from "react";
import { Card, CardContent } from "./ui/card";

// Fallback skills data with modern tech stack
const fallbackSkills = [
  { name: "JavaScript", level: 90, icon: "🟨" },
  { name: "TypeScript", level: 85, icon: "🔷" },
  { name: "React", level: 92, icon: "⚛️" },
  { name: "Node.js", level: 88, icon: "🟢" },
  { name: "Python", level: 85, icon: "🐍" },
  { name: "Java", level: 80, icon: "☕" },
  { name: "HTML", level: 95, icon: "🌐" },
  { name: "CSS", level: 90, icon: "🎨" },
  { name: "MongoDB", level: 82, icon: "🍃" },
  { name: "MySQL", level: 78, icon: "🐬" },
  { name: "Git", level: 88, icon: "📚" },
  { name: "Docker", level: 75, icon: "🐳" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-white mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {fallbackSkills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-white font-mono font-semibold text-lg mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-red-400 font-mono text-sm">
                  {skill.level}%
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-20 w-1 h-1 bg-red-300 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
      </div>
    </section>
  );
};

export default Skills;