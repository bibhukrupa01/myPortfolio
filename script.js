// Portfolio data
const portfolioData = {
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
      twitter: "https://twitter.com/bibhukrupa",
    }
  },
  skills: [
    {"name": "HTML", "level": 90, "category": "Frontend"},
    {"name": "CSS", "level": 88, "category": "Frontend"},
    {"name": "JavaScript", "level": 80, "category": "Frontend"},
    {"name": "React.js", "level": 70, "category": "Frontend"},
    {"name": "Three.js", "level": 40, "category": "3D Graphics"},
    // {"name": "GSAP", "level": 92, "category": "Animation"},
    // {"name": "TypeScript", "level": 85, "category": "Language"},
    // {"name": "Blender", "level": 80, "category": "3D Modeling"},
    // {"name": "WebGL", "level": 87, "category": "Graphics"},
    // {"name": "Next.js", "level": 90, "category": "Framework"}
  ],
  projects: [
    // {
    //   id: 1,
    //   title: "Immersive E-commerce Platform",
    //   description: "A revolutionary 3D shopping experience with virtual try-on capabilities and interactive product visualization.",
    //   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    //   technologies: ["React", "Three.js", "WebXR", "Node.js"],
    //   category: "Web Development",
    //   link: "#",
    //   featured: true
    // },
    // {
    //   id: 2,
    //   title: "AI-Powered Design Tool",
    //   description: "Machine learning-based design assistant that generates layouts and suggests improvements in real-time.",
    //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    //   technologies: ["Python", "TensorFlow", "React", "WebGL"],
    //   category: "AI/ML",
    //   link: "#",
    //   featured: true
    // },
    {
      id: 1,
      title: "Amazon Clone",
      description: "A replica of Amazon built while learning basics of HTML, CSS and JS.",
      image: "/amazon.png",
      technologies: ["HTML", "CSS" , "JavaScript"],
      category: "Web Page",
      link: "https://www.amazon.in/",
      featured: false
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "Replica of Netlfix using only HTML, CSS and JS.",
      image: "/netflix.png",
      technologies: ["HTML", "CSS" , "JavaScript"],
      category: "Web Page",
      link: "https://www.netflix.com/in/",
      featured: false
    },
    {
      id: 3,
      title: "To-Do List",
      description: "To-Do list webpage where one can set his/her goals.",
      image: "/toDoList.png",
      technologies: ["HTML", "CSS" , "JavaScript"],
      category: "Web Application",
      link: "https://to-do-list04.netlify.app/",
      featured: false
    },
    {
      id: 4,
      title: "University Portal",
      description: "University portal website for students where he/she can get everything including notes and attendace percentage.",
      image: "/uniconnect.png",
      technologies: ["HTML", "CSS" , "JavaScript" , "Firebase"],
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
    },
    // {
    //   title: "Consulting",
    //   description: "Technical consultation, architecture planning, and development strategy",
    //   icon: "🚀",
    //   price: "$150/hour",
    //   features: [
    //     "Technical Planning",
    //     "Code Review",
    //     "Performance Audit",
    //     "Team Training"
    //   ]
    // }
  ],
  experience: [
    {
      title: "Web Developer",
      company: "Dev-opify",
      period: "2025 - Present",
      description: "Lead developer for next-generation web applications using React, Three.js, and advanced animation libraries.",
      achievements: [
        // "Increased user engagement by 150% through interactive 3D features",
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
        // "Created reusable component library for 3D interfaces",
        // "Mentored junior developers in Three.js and WebGL"
      ]
    },
    {
      title: "App Developer",
      company: "Dev-opify",
      period: "2025 - Present",
      description: "Built scalable  applications from concept to deployment using modern tech stack.",
    //   achievements: [
    //     "Architected microservices handling 1M+ daily requests",
    //     "Implemented real-time features using WebSocket technology",
    //     "Reduced server costs by 35% through optimization"
    //   ]
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

// Global variables
let scene, camera, renderer, cubes = [], particles = [];
let currentTestimonial = 0;
let isGSAPLoaded = false;

// Wait for GSAP to load
function waitForGSAP() {
  return new Promise((resolve) => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      isGSAPLoaded = true;
      resolve();
    } else {
      setTimeout(() => waitForGSAP().then(resolve), 100);
    }
  });
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', async function() {
  // Wait for GSAP to load
  await waitForGSAP();
  
  // Initialize loading screen
  initLoader();
  
  // Initialize navigation
  initNavigation();
  
  // Initialize 3D scene after a short delay to ensure container is ready
  setTimeout(() => {
    init3DScene();
  }, 100);
  
  // Initialize content
  initSkills();
  initPortfolio();
  initServices();
  initExperience();
  initTestimonials();
  initContact();
  initBackToTop();
  
  // Hide loader after everything is initialized
  setTimeout(() => {
    hideLoader();
  }, 2000);
});

// Loading Screen
function initLoader() {
  const loader = document.getElementById('loader');
  
  // Add some loading animation if GSAP is available
  if (isGSAPLoaded) {
    gsap.to('.loader__spinner', {
      rotation: 360,
      duration: 1,
      ease: 'none',
      repeat: -1
    });
  }
}

function hideLoader() {
  const loader = document.getElementById('loader');
  
  if (isGSAPLoaded) {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        loader.style.display = 'none';
        // Start main animations after loader is hidden
        initMainAnimations();
        initScrollAnimations();
      }
    });
  } else {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
}

// Navigation
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav__link');
  
  // Mobile menu toggle
  navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  
  // Close menu when clicking on links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Use native smooth scrolling as fallback
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // GSAP smooth scroll if available
        if (isGSAPLoaded && typeof ScrollToPlugin !== 'undefined') {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: targetSection,
              offsetY: 80
            },
            ease: "power2.inOut"
          });
        }
      }
    });
  });
  
  // Navigation background on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(15, 15, 15, 0.95)';
    } else {
      nav.style.background = 'rgba(15, 15, 15, 0.9)';
    }
  });
}

// 3D Scene
function init3DScene() {
  const container = document.getElementById('hero3d');
  if (!container || !window.THREE) return;
  
  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);
  
  // Create floating cubes
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const materials = [
    new THREE.MeshBasicMaterial({ color: 0xffd700, wireframe: true }),
    new THREE.MeshBasicMaterial({ color: 0xc0c0c0, wireframe: true }),
    new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
  ];
  
  for (let i = 0; i < 15; i++) {
    const cube = new THREE.Mesh(geometry, materials[i % materials.length]);
    cube.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 10
    );
    cube.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    cube.scale.setScalar(0.3 + Math.random() * 0.7);
    cubes.push(cube);
    scene.add(cube);
  }
  
  // Create particle system
  const particleGeometry = new THREE.BufferGeometry();
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50;
  }
  
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xffd700,
    size: 0.1,
    transparent: true,
    opacity: 0.6
  });
  
  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particleSystem);
  
  camera.position.z = 15;
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotate cubes
    cubes.forEach((cube, index) => {
      cube.rotation.x += 0.01 + index * 0.001;
      cube.rotation.y += 0.01 + index * 0.001;
      cube.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
    });
    
    // Rotate particle system
    particleSystem.rotation.x += 0.001;
    particleSystem.rotation.y += 0.002;
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Handle resize
  window.addEventListener('resize', () => {
    if (container.clientWidth && container.clientHeight) {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  });
}

// Skills
function initSkills() {
  const skillsContainer = document.getElementById('skillsContainer');
  if (!skillsContainer) return;
  
  portfolioData.skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill';
    skillElement.innerHTML = `
      <div class="skill__info">
        <span class="skill__name">${skill.name}</span>
        <span class="skill__level">${skill.level}%</span>
      </div>
      <div class="skill__bar">
        <div class="skill__progress" data-width="${skill.level}"></div>
      </div>
    `;
    skillsContainer.appendChild(skillElement);
  });
}

// Portfolio
function initPortfolio() {
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.portfolio__filter-btn');
  
  if (!portfolioGrid) return;
  
  // Render portfolio items
  function renderPortfolio(projects = portfolioData.projects) {
    portfolioGrid.innerHTML = '';
    
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = `portfolio__item ${project.featured ? 'featured' : ''}`;
      projectElement.setAttribute('data-category', project.category.toLowerCase().replace(/[^a-z0-9]/g, ''));
      
      projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="portfolio__image" loading="lazy">
        <div class="portfolio__content">
          <h3 class="portfolio__title">${project.title}</h3>
          <p class="portfolio__description">${project.description}</p>
          <div class="portfolio__technologies">
            ${project.technologies.map(tech => `<span class="portfolio__tech">${tech}</span>`).join('')}
          </div>
          <a href="${project.link}" class="portfolio__link">View Project →</a>
        </div>
      `;
      
      portfolioGrid.appendChild(projectElement);
    });
    
    // Add hover effects
    const portfolioItems = document.querySelectorAll('.portfolio__item');
    portfolioItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        if (isGSAPLoaded) {
          gsap.to(item, { 
            y: -10, 
            rotationX: 5, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        }
      });
      
      item.addEventListener('mouseleave', () => {
        if (isGSAPLoaded) {
          gsap.to(item, { 
            y: 0, 
            rotationX: 0, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        }
      });
    });
  }
  
  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      let filteredProjects;
      
      if (filter === 'all') {
        filteredProjects = portfolioData.projects;
      } else if (filter === 'featured') {
        filteredProjects = portfolioData.projects.filter(p => p.featured);
      } else if (filter === 'web') {
        filteredProjects = portfolioData.projects.filter(p => 
          p.category.toLowerCase().includes('web') || 
          p.category.toLowerCase().includes('ai')
        );
      } else if (filter === '3d') {
        filteredProjects = portfolioData.projects.filter(p => 
          p.category.toLowerCase().includes('3d') || 
          p.category.toLowerCase().includes('ar')
        );
      }
      
      renderPortfolio(filteredProjects);
    });
  });
  
  // Initial render
  renderPortfolio();
}

// Services
function initServices() {
  const servicesGrid = document.getElementById('servicesGrid');
  if (!servicesGrid) return;
  
  portfolioData.services.forEach(service => {
    const serviceElement = document.createElement('div');
    serviceElement.className = 'service';
    serviceElement.innerHTML = `
      <span class="service__icon">${service.icon}</span>
      <h3 class="service__title">${service.title}</h3>
      <p class="service__description">${service.description}</p>
      <div class="service__price">${service.price}</div>
      <ul class="service__features">
        ${service.features.map(feature => `<li class="service__feature">${feature}</li>`).join('')}
      </ul>
    `;
    servicesGrid.appendChild(serviceElement);
  });
}

// Experience Timeline
function initExperience() {
  const timelineContainer = document.getElementById('timelineContainer');
  if (!timelineContainer) return;
  
  portfolioData.experience.forEach((exp, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline__item';
    timelineItem.innerHTML = `
      <div class="timeline__marker"></div>
      <div class="timeline__content">
        <div class="timeline__period">${exp.period}</div>
        <h3 class="timeline__title">${exp.title}</h3>
        <div class="timeline__company">${exp.company}</div>
        <p class="timeline__description">${exp.description}</p>
      </div>
    `;
    timelineContainer.appendChild(timelineItem);
  });
}

// Testimonials
function initTestimonials() {
  const testimonialsSlider = document.getElementById('testimonialsSlider');
  const prevBtn = document.getElementById('testPrev');
  const nextBtn = document.getElementById('testNext');
  
  if (!testimonialsSlider) return;
  
  // Render testimonials
  function renderTestimonials() {
    testimonialsSlider.innerHTML = '';
    
    portfolioData.testimonials.forEach((testimonial, index) => {
      const testimonialElement = document.createElement('div');
      testimonialElement.className = `testimonial ${index === 0 ? 'active' : ''}`;
      testimonialElement.style.display = index === 0 ? 'block' : 'none';
      testimonialElement.innerHTML = `
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial__avatar" loading="lazy">
        <blockquote class="testimonial__quote">"${testimonial.quote}"</blockquote>
        <div class="testimonial__author">${testimonial.name}</div>
        <div class="testimonial__role">${testimonial.role}</div>
        <div class="testimonial__rating">${'★'.repeat(testimonial.rating)}</div>
      `;
      testimonialsSlider.appendChild(testimonialElement);
    });
  }
  
  // Show testimonial
  function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    
    testimonials.forEach((testimonial, i) => {
      if (i === index) {
        testimonial.style.display = 'block';
        if (isGSAPLoaded) {
          gsap.fromTo(testimonial,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
          );
        } else {
          testimonial.style.opacity = '1';
        }
      } else {
        testimonial.style.display = 'none';
      }
    });
  }
  
  // Navigation
  nextBtn?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % portfolioData.testimonials.length;
    showTestimonial(currentTestimonial);
  });
  
  prevBtn?.addEventListener('click', () => {
    currentTestimonial = currentTestimonial === 0 ? portfolioData.testimonials.length - 1 : currentTestimonial - 1;
    showTestimonial(currentTestimonial);
  });
  
  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % portfolioData.testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);
  
  renderTestimonials();
  showTestimonial(0);
}

// Contact Form
function initContact() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Main Animations
function initMainAnimations() {
  if (!isGSAPLoaded) return;
  
  // Hero animations
  const heroTimeline = gsap.timeline();
  heroTimeline
    .fromTo('.hero__name', 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo('.hero__title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5"
    )
    .fromTo('.hero__tagline', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3"
    )
    .fromTo('.hero__cta', 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2"
    );
}

// Scroll Animations
function initScrollAnimations() {
  if (!isGSAPLoaded) return;
  
  // Section titles
  gsap.utils.toArray('.section__title').forEach(title => {
    gsap.fromTo(title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          end: "bottom 15%"
        }
      }
    );
  });
  
  // Skills animation
  gsap.utils.toArray('.skill').forEach((skill, index) => {
    gsap.fromTo(skill,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skill,
          start: "top 85%"
        }
      }
    );
    
    // Animate progress bars
    const progressBar = skill.querySelector('.skill__progress');
    const width = progressBar.getAttribute('data-width');
    
    gsap.fromTo(progressBar,
      { width: '0%' },
      {
        width: width + '%',
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skill,
          start: "top 75%"
        }
      }
    );
  });
  
  // Portfolio items
  gsap.utils.toArray('.portfolio__item').forEach((item, index) => {
    gsap.fromTo(item,
      { opacity: 0, y: 50, rotationX: -15 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        delay: (index % 3) * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%"
        }
      }
    );
  });
  
  // Services
  gsap.utils.toArray('.service').forEach((service, index) => {
    gsap.fromTo(service,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: service,
          start: "top 85%"
        }
      }
    );
  });
  
  // Timeline items
  gsap.utils.toArray('.timeline__item').forEach((item, index) => {
    const isEven = index % 2 === 0;
    gsap.fromTo(item,
      { 
        opacity: 0, 
        x: isEven ? 100 : -100,
        y: 50 
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%"
        }
      }
    );
  });
  
  // Contact sections
  gsap.fromTo('.contact__form',
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.contact__form',
        start: "top 85%"
      }
    }
  );
  
  gsap.fromTo('.contact__info',
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.contact__info',
        start: "top 85%"
      }
    }
  );
}

// Back to Top
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Add some interactive cursor effects
document.addEventListener('mousemove', (e) => {
  let cursor = document.querySelector('.cursor');
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: rgba(255, 215, 0, 0.3);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
      transform: translate(-50%, -50%);
    `;
    document.body.appendChild(cursor);
  }
  
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Add hover effects to interactive elements
document.addEventListener('DOMContentLoaded', () => {
  const interactiveElements = 'a, button, .portfolio__item, .service';
  
  document.addEventListener('mouseenter', (e) => {
    if (e.target.matches(interactiveElements)) {
      const cursor = document.querySelector('.cursor');
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      }
    }
  }, true);
  
  document.addEventListener('mouseleave', (e) => {
    if (e.target.matches(interactiveElements)) {
      const cursor = document.querySelector('.cursor');
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    }
  }, true);
});