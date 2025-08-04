import React from "react";
import { mockData } from "../data/mock";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const { about } = mockData;

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            {about.title}
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg max-w-none">
              {about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {about.stats.map((stat, index) => (
              <Card key={index} className="bg-black border-red-500/20 hover:border-red-500/50 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold font-mono text-red-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-mono">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;