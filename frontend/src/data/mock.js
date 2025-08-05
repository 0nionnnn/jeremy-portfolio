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
        "https://images.unsplash.com/photo-1627542557169-5ed71c66ed85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzU0MzQyNDUyfDA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1644794472051-36d154dfe487?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzU0MzQyNDUyfDA&ixlib=rb-4.1.0&q=85"
      ],
      demoVideo: "https://images.unsplash.com/photo-1594948506928-2d4cad88d0af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzU0MzQyNDUyfDA&ixlib=rb-4.1.0&q=85",
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
        "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzU0MzQyNDU3fDA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1554098415-788601c80aef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzU0MzQyNDU3fDA&ixlib=rb-4.1.0&q=85"
      ],
      demoVideo: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg",
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
        "https://images.unsplash.com/photo-1603400938371-d030ad03505b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzU0MzQyNDkwfDA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHw0fHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzU0MzQyNDkwfDA&ixlib=rb-4.1.0&q=85"
      ],
      demoVideo: "https://images.pexels.com/photos/1188751/pexels-photo-1188751.jpeg",
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
        "https://images.pexels.com/photos/6279105/pexels-photo-6279105.jpeg",
        "https://images.unsplash.com/photo-1633988354540-d3f4e97c67b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBzZXR1cHxlbnwwfHx8fDE3NTQzNDI0OTV8MA&ixlib=rb-4.1.0&q=85"
      ],
      demoVideo: "https://images.unsplash.com/photo-1712628956639-638ad87c988e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxkZXZlbG9wZXIlMjBzZXR1cHxlbnwwfHx8fDE3NTQzNDI0OTV8MA&ixlib=rb-4.1.0&q=85",
      githubUrl: "#",
      category: "Mobile App"
    },
    {
      id: 5,
      title: "Developer Workspace Setup",
      description: "Custom development environment with dual-monitor setup, optimized for full-stack development workflow and productivity.",
      technologies: ["VS Code", "Docker", "Git", "Linux"],
      features: [
        "Dual-monitor configuration",
        "Custom VS Code setup",
        "Containerized development",
        "Automated deployment pipeline"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1693773852578-65cf594b62dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBzZXR1cHxlbnwwfHx8fDE3NTQzNDI0OTV8MA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1633988354540-d3f4e97c67b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjBzZXR1cHxlbnwwfHx8fDE3NTQzNDI0OTV8MA&ixlib=rb-4.1.0&q=85"
      ],
      category: "Web App"
    }
  ],

  contact: {
    title: "Get In Touch",
    subtitle: "Ready to bring your next project to life?",
    description: "I'm always excited to discuss new opportunities and collaborate on innovative projects. Whether you need a full-stack developer or creative video content, let's connect!",
    email: "jeremyaliermo11@gmail.com",
    phone: "+63-962-1834-168",
    location: "Philippines, Luzon",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/0nionnnn", icon: "Github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/jeremy-aliermo-7bb27836a", icon: "Linkedin" },
      { name: "Email", url: "mailto:jeremyaliermo11@gmail.com", icon: "Mail" }
    ],
    availability: "Available for freelance and full-time opportunities"
  }
};