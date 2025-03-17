import React, { useRef, useState } from 'react';
import './Hero.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Canvas, useFrame } from '@react-three/fiber';

function Bubble({ position, scale }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Rotate each sphere continuously; spin faster if hovered
  useFrame(() => {
    if (meshRef.current) {
      const speed = hovered ? 0.03 : 0.01;
      meshRef.current.rotation.y += speed;
      meshRef.current.rotation.x += speed / 2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      // Event handlers to detect hover
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      {/* Change color on hover */}
      <meshStandardMaterial color={hovered ? '#fda085' : '#fdfdfd'} />
    </mesh>
  );
}

function Bubbles() {
  const bubbleCount = 10;
  const bubblesArray = Array.from({ length: bubbleCount }, () => {
    const x = (Math.random() - 0.5) * 10;  // random x in [-5, 5]
    const y = (Math.random() - 0.5) * 6;   // random y in [-3, 3]
    const z = (Math.random() - 0.5) * 5;   // random z in [-2.5, 2.5]
    const s = 0.5 + Math.random() * 1.5;   // random scale in [0.5, 2]
    return { position: [x, y, z], scale: [s, s, s] };
  });

  return (
    <>
      {bubblesArray.map((bubble, i) => (
        <Bubble
          key={i}
          position={bubble.position}
          scale={bubble.scale}
        />
      ))}
    </>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <Canvas className="hero-canvas">
        {/* Basic lighting for the spheres */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={0.8} />
        <Bubbles />
      </Canvas>

      <div className="hero-overlay">
        <div className="hero-content">
          <h2>Welcome, I'm Shashank Pandey</h2>
          <p>Digital Strategy Intern at KPMG India &amp; Passionate Technologist</p>
          <div className="hero-icons">
            <a
              href="https://www.linkedin.com/in/shashank2310/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/shashank23-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:shashankpandey2001@gmail.com">
              <FaEnvelope />
            </a>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
