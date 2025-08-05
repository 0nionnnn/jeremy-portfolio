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
      { label: "Years Experience", value: "3+" },
      { label: "Projects Completed", value: "5" },
      { label: "Technologies Mastered", value: "9" },
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
      title: "Hardstacks",
      description: "Transform your study routine with Hardstucks, the ultimate customizable quiz app designed to help you conquer your toughest subjects. Whether you're preparing for finals, professional certifications, or any challenging exam, Hardstucks puts the power of personalized learning in your hands.",
      technologies: ["Android Studio", "Firebase", "Kotlin"],
      features: [
        "Create Your Own Questions",
        "Flexible Answer Formats",
        "Smart Review System",
        "Quick Edit Mode"
      ],
      screenshots: [
        "/jeremy-portfolio/images/hardstacks.png",
        "https://images.unsplash.com/photo-1644794472051-36d154dfe487?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzU0MzQyNDUyfDA&ixlib=rb-4.1.0&q=85"
      ],
      demoVideo: "https://images.unsplash.com/photo-1594948506928-2d4cad88d0af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzU0MzQyNDUyfDA&ixlib=rb-4.1.0&q=85",
      githubUrl: "#",
      liveUrl: "#",
      category: "Mobile App"
    },
    {
      id: 2,
      title: "Mabuhay Airlines",
      description: "Experience the convenience of modern air travel with Mabuhay Airlines' intuitive online booking platform. Skip the long lines and phone calls - book your perfect flight in just a few clicks, anytime and anywhere.",
      technologies: ["VS code", "Python", "Html", "SQL", "Javascript", "CSS"],
      features: [
        "Easy Flight Search",
        "Real-Time Availability",
        "Flexible Booking Options",
        "Manage Your Booking"
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
      title: "Professional Video Editing Services",
      description: "Currently collaborating with streamer MomoMonii, delivering custom-edited content that captures their personality and engages their audience. From highlight reels to full stream compilations, I adapt my editing style to match their brand and vision.",
      technologies: ["Premiere Pro", "After Effects", "Twitch", "Youtube"],
      features: [
        "Flexible Editing Styles",
        "Multiple Content Types",
        "Custom Graphics & Effects",
        "Revision-Friendly Process"
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
      title: "PPMS (Mobile App)",
      description: "Streamline community healthcare delivery with our comprehensive mobile application designed specifically for barangay health workers and parents of preschoolers across Imus City. This integrated platform bridges the gap between healthcare providers and families, ensuring better health outcomes for our youngest community members.",
      technologies: ["Android Studio", "Kotlin", "API"],
      features: [
        "Centralized Database",
        "Multiple User Interface",
        "Multi-Platform Integration",
        "Child Health Tracking"
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
      title: "PPMS (Website)",
      description: "A centralized web-based health management system designed specifically for barangay health workers, parents of preschoolers, and healthcare administrators across Imus City. This comprehensive platform streamlines community healthcare delivery through integrated data management and coordinated care across multiple barangays.",
      technologies: ["VS Code", "Python", "Django", "HTML", "Javascript", "CSS", "SQL", "C++"],
      features: [
        "Centralized Database System",
        "Multi-User Dashboard",
        "BMI Hardware Integration",
        "Comprehensive Child Health Profiles",
        "Advanced Analytics & Reporting"
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
