import React from "react";
import { Card, CardContent } from "./ui/card";
import { useProfile, useStats } from "../hooks/usePortfolio";

const About = () => {
  const { profile, loading: profileLoading } = useProfile();
  const { stats, loading: statsLoading } = useStats();

  const loading = profileLoading || statsLoading;

  if (loading) {
    return (
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-700 rounded mb-4 w-64 mx-auto"></div>
              <div className="w-20 h-1 bg-gray-700 mx-auto"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-pulse">
              <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded w-4/5"></div>
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[...Array(4)].map((_, index) => (
                <Card key={index} className="bg-black border-red-500/20 animate-pulse">
                  <CardContent className="p-6 text-center">
                    <div className="h-8 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

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
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                {profile?.description || 
                `I'm a passionate Computer Engineer with 5+ years of experience in full-stack development, 
                specializing in front-end technologies. My journey began with a fascination for creating seamless 
                user experiences and has evolved into expertise across the entire development stack.`}
              </p>
              
              {profile?.availability_status && (
                <div className="text-red-500 font-mono text-sm mt-6">
                  {profile.availability_status}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-black border-red-500/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/10">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold font-mono text-red-500 mb-2 animate-pulse">
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