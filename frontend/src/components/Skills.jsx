import React from "react";
import { Card, CardContent } from "./ui/card";
import { 
  Code2, 
  Coffee, 
  Globe, 
  Zap, 
  Palette, 
  Database, 
  Terminal,
  Cpu
} from "lucide-react";

// Skills matching the uploaded image with modern circular icon design
const skillsData = [
  { name: "JavaScript", level: 90, icon: Code2 },
  { name: "Java", level: 85, icon: Coffee },
  { name: "HTML", level: 95, icon: Globe },
  { name: "Kotlin", level: 80, icon: Zap },
  { name: "CSS", level: 90, icon: Palette },
  { name: "MySQL", level: 78, icon: Database },
  { name: "Python", level: 85, icon: Terminal },
  { name: "C++", level: 82, icon: Cpu }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-white mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
              >
                <CardContent className="p-6 text-center">
                  {/* Circular icon container matching contact section style */}
                  <div className="mb-4 flex justify-center">
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-red-500/20 flex items-center justify-center group-hover:border-red-500/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25">
                      <IconComponent 
                        size={32} 
                        className="text-red-500 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 group-hover:scale-110"
                        style={{
                          filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))',
                        }}
                      />
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 rounded-full bg-red-500/5 group-hover:bg-red-500/10 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-mono font-semibold text-lg mb-3">
                    {skill.name}
                  </h3>
                  
                  <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full transition-all duration-700 ease-out shadow-sm shadow-red-500/30"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `expand-${index} 1.5s ease-out ${index * 0.1}s both`
                      }}
                    ></div>
                  </div>
                  
                  <span className="text-red-400 font-mono text-sm font-medium">
                    {skill.level}%
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-20 w-1 h-1 bg-red-300 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Dynamic keyframes for progress bars */}
      <style jsx>{`
        ${skillsData.map((_, index) => `
          @keyframes expand-${index} {
            from { width: 0%; }
            to { width: ${skillsData[index].level}%; }
          }
        `).join('\n')}
      `}</style>
    </section>
  );
};

export default Skills;