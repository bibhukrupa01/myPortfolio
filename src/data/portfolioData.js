export const portfolioData = {
  personalInfo: {
    name: "Bibhu Krupa Pradhan",
    title: "Full Stack Web Developer",
    tagline: "Crafting Digital Experiences with Precision",
    description: "Passionate about creating innovative web solutions with modern technologies. I specialize in both frontend and backend development, bringing ideas to life through clean, efficient code and intuitive user experiences.",
    email: "bibhukrupa5@gmail.com",
    phone: "+91 1234567890",
    location: "Noida, Uttarpradesh",
    social: {
      github: "https://github.com/bibhukrupa01",
      linkedin: "https://www.linkedin.com/in/bibhu-krupa-pradhan-45b021329/",
      twitter: "https://twitter.com/bibhukrupa5",
    }
  },
  skills: [
    { "name": "HTML", "level": 90, "category": "Frontend" },
    { "name": "CSS", "level": 88, "category": "Frontend" },
    { "name": "JavaScript", "level": 80, "category": "Frontend" },
    { "name": "React.js", "level": 70, "category": "Frontend" },
    { "name": "Three.js", "level": 40, "category": "3D Graphics" },
  ],
  projects: [
    {
      id: 1,
      title: "Amazon Clone",
      description: "A replica of Amazon built while learning basics of HTML, CSS and JS.",
      image: "amazon.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Page",
      link: "https://www.amazon.in/",
      featured: false
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "Replica of Netlfix using only HTML, CSS and JS.",
      image: "netflix.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Page",
      link: "https://www.netflix.com/in/",
      featured: false
    },
    {
      id: 3,
      title: "To-Do List",
      description: "To-Do list webpage where one can set his/her goals.",
      image: "toDoList.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Application",
      link: "https://to-do-list04.netlify.app/",
      featured: false
    },
    {
      id: 4,
      title: "University Portal",
      description: "University portal website for students where he/she can get everything including notes and attendace percentage.",
      image: "uniconnect.png",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      category: "Blockchain",
      link: "https://uniconnect.tech",
      featured: false
    }
  ],
  services: [
    {
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks and cutting-edge technologies",
      icon: "💻",
      price: "Starting at ₹5,000",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Ready",
        "Modern Frameworks"
      ]
    },
    {
      title: "Mobile Applications",
      description: "Interactive 3D experiences, product configurators, and immersive mobile applications",
      icon: "📱",
      price: "Starting at ₹8,000",
      features: [
        "Flutter & React Native",
        "Interactive Models",
        "Real-time Rendering",
        "Cross-platform"
      ]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design with focus on usability, accessibility, and visual excellence",
      icon: "✨",
      price: "Starting at ₹3,000",
      features: [
        "User Research",
        "Prototyping",
        "Design Systems",
        "Accessibility Focus"
      ]
    }
  ],
  experience: [
    {
      title: "Web Developer",
      company: "Dev-opify",
      period: "2025 - Present",
      description: "Lead developer for next-generation web applications using React, Three.js, and advanced animation libraries.",
      achievements: [
        "Led team of 6 developers on major product redesign",
        "Implemented performance optimizations reducing load time by 40%"
      ]
    },
    {
      title: "Web Developer",
      company: "GDG IILM",
      period: "2025 - Present",
      description: "Specialized in creating immersive web experiences for GDG",
      achievements: [
        "Developed GDG Website",
      ]
    },
    {
      title: "App Developer",
      company: "Dev-opify",
      period: "2025 - Present",
      description: "Built scalable applications from concept to deployment using modern tech stack.",
      achievements: []
    }
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO, InnovateLab",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      quote: "Bibhu's work exceeded all expectations. The 3D visualization he created transformed our product presentation and significantly improved our conversion rates.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      company: "Design Studio",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      quote: "Working with Bibhu was a game-changer. His technical expertise combined with creative vision delivered results beyond our wildest dreams.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "TechFlow",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      quote: "The attention to detail and user experience focus Bibhu brings to projects is remarkable. Our users absolutely love the new interface.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "NextGen Apps",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      quote: "Bibhu's ability to translate complex ideas into beautiful, functional interfaces is unparalleled. Highly recommend for any premium project.",
      rating: 5
    }
  ]
};
