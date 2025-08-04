import React, { useState } from "react";
import { mockData } from "../data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const { projects } = mockData;
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            Sample Works
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={`font-mono ${
                  filter === category
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-black border-red-500/20 hover:border-red-500/50 transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={project.screenshots[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" className="bg-red-500 hover:bg-red-600">
                    <Play size={16} className="mr-2" />
                    View Demo
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-mono text-white">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="border-red-500/50 text-red-500">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-red-500 font-mono text-sm mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300 font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-red-500 font-mono text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" className="border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;