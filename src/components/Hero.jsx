import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

function Hero() {
  const containerRef = useRef(null);

  // Three.js Initialization
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set up standard scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

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

    const cubes = [];
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

    let animationFrameId;

    // Animation loop
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

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
    const handleResize = () => {
      if (container.clientWidth && container.clientHeight) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
             <h1 className="hero__name">Bibhu Krupa Pradhan</h1>
             <p className="hero__title">Full Stack Web Developer</p>
             <p className="hero__tagline">Crafting Digital Experiences with Precision</p>
             <a href="#contact" className="btn btn--primary hero__cta">Let's Work Together</a>
          </div>
        </div>
        <div className="hero__3d" id="hero3d" ref={containerRef}></div>
      </div>
      <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
