export const mockData = {
  about: {
    title: "About Me",
    description: `I'm a passionate Computer Engineer with 5+ years of experience in full-stack development, 
    specializing in front-end technologies. My journey began with a fascination for creating seamless 
    user experiences and has evolved into expertise across the entire development stack.
    
    When I'm not coding, I channel my creativity through video editing, bringing stories to life 
    through visual narratives. This unique combination of technical precision and creative vision 
    allows me to approach problems from multiple angles and deliver comprehensive solutions.`,
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Completed", value: "50+" },
      { label: "Technologies Mastered", value: "20+" },
      { label: "Client Satisfaction", value: "100%" }
    ]
  },

  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        skills: [
          { name: "React.js", level: 95 },
          { name: "Next.js", level: 90 },
          { name: "TypeScript", level: 88 },
          { name: "Tailwind CSS", level: 92 },
          { name: "JavaScript (ES6+)", level: 95 }
        ]
      },
      {
        name: "Backend Development",
        skills: [
          { name: "Node.js", level: 85 },
          { name: "Python", level: 80 },
          { name: "Express.js", level: 85 },
          { name: "FastAPI", level: 78 },
          { name: "MongoDB", level: 82 }
        ]
      },
      {
        name: "Mobile Development",
        skills: [
          { name: "React Native", level: 88 },
          { name: "Flutter", level: 75 },
          { name: "iOS Development", level: 70 },
          { name: "Android Development", level: 72 }
        ]
      },
      {
        name: "Creative Tools",
        skills: [
          { name: "Adobe Premiere Pro", level: 92 },
          { name: "After Effects", level: 85 },
          { name: "Figma", level: 88 },
          { name: "DaVinci Resolve", level: 80 }
        ]
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "EcoTracker Mobile App",
      description: "A comprehensive mobile application for tracking personal carbon footprint with AI-powered suggestions for reducing environmental impact.",
      technologies: ["React Native", "Node.js", "MongoDB", "AI/ML"],
      features: [
        "Real-time carbon footprint calculation",
        "AI-powered eco-friendly suggestions",
        "Social sharing and challenges",
        "Data visualization dashboard"
      ],
      screenshots: [
        "https://via.placeholder.com/800x600/1a1a1a/dc2626?text=EcoTracker+Dashboard",
        "https://via.placeholder.com/400x700/1a1a1a/dc2626?text=Mobile+Interface"
      ],
      demoVideo: "https://via.placeholder.com/800x450/1a1a1a/dc2626?text=Demo+Video",
      githubUrl: "#",
      liveUrl: "#",
      category: "Mobile App"
    },
    {
      id: 2,
      title: "TaskFlow Web Application",
      description: "A modern project management web application with real-time collaboration features and advanced analytics.",
      technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      features: [
        "Real-time collaborative editing",
        "Advanced project analytics",
        "Team management system",
        "Integration with popular tools"
      ],
      screenshots: [
        "https://via.placeholder.com/1200x800/1a1a1a/dc2626?text=TaskFlow+Dashboard",
        "https://via.placeholder.com/1200x800/1a1a1a/dc2626?text=Project+Overview"
      ],
      demoVideo: "https://via.placeholder.com/800x450/1a1a1a/dc2626?text=TaskFlow+Demo",
      githubUrl: "#",
      liveUrl: "#",
      category: "Web App"
    },
    {
      id: 3,
      title: "Brand Showcase Video",
      description: "A dynamic promotional video showcasing a tech startup's innovative products with motion graphics and compelling narrative.",
      technologies: ["Premiere Pro", "After Effects", "Cinema 4D"],
      features: [
        "3D motion graphics",
        "Color grading and correction",
        "Sound design and mixing",
        "Brand-consistent animation"
      ],
      screenshots: [
        "https://via.placeholder.com/1920x1080/1a1a1a/dc2626?text=Video+Thumbnail",
        "https://via.placeholder.com/1920x1080/1a1a1a/dc2626?text=Motion+Graphics"
      ],
      demoVideo: "https://via.placeholder.com/800x450/1a1a1a/dc2626?text=Brand+Video",
      category: "Video Editing"
    },
    {
      id: 4,
      title: "CryptoWallet Mobile App",
      description: "Secure cryptocurrency wallet app with multi-currency support and advanced security features.",
      technologies: ["Flutter", "Blockchain API", "Biometric Auth"],
      features: [
        "Multi-currency support",
        "Biometric authentication",
        "Real-time price tracking",
        "Secure transaction history"
      ],
      screenshots: [
        "https://via.placeholder.com/400x700/1a1a1a/dc2626?text=Wallet+Interface",
        "https://via.placeholder.com/400x700/1a1a1a/dc2626?text=Transaction+History"
      ],
      demoVideo: "https://via.placeholder.com/800x450/1a1a1a/dc2626?text=Crypto+Demo",
      githubUrl: "#",
      category: "Mobile App"
    }
  ],

  contact: {
    title: "Get In Touch",
    subtitle: "Ready to bring your next project to life?",
    description: "I'm always excited to discuss new opportunities and collaborate on innovative projects. Whether you need a full-stack developer or creative video content, let's connect!",
    email: "alex.chen@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    socialLinks: [
      { name: "GitHub", url: "#", icon: "Github" },
      { name: "LinkedIn", url: "#", icon: "Linkedin" },
      { name: "Email", url: "#", icon: "Mail" }
    ],
    availability: "Available for freelance and full-time opportunities"
  }
};