"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";

// --- Types ---
interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  angle: number; 
}

interface BackgroundParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
}

interface MouseState {
  x: number;
  y: number;
  isActive: boolean;
}

// --- Configuration Constants ---
const PARTICLE_DENSITY = 0.00015; 
const BG_PARTICLE_DENSITY = 0.00005; 
const MOUSE_RADIUS = 180; 
const RETURN_SPEED = 0.08; 
const DAMPING = 0.90; 
const REPULSION_STRENGTH = 1.2; 

const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

export default function AntiGravityCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme !== "light";

  // Mutable state refs
  const particlesRef = useRef<Particle[]>([]);
  const backgroundParticlesRef = useRef<BackgroundParticle[]>([]);
  const mouseRef = useRef<MouseState>({ x: -1000, y: -1000, isActive: false });
  const frameIdRef = useRef<number>(0);

  // Initialize Particles
  const initParticles = useCallback((width: number, height: number, isDarkMode: boolean) => {
    // Colors based on theme (Slate/Cyan palette)
    const highlightColor = isDarkMode ? "#06b6d4" : "#0ea5e9"; // Cyan/Blue
    const baseColor1 = isDarkMode ? "#ffffff" : "#0f172a"; // White / Slate 900
    const baseColor2 = isDarkMode ? "#94a3b8" : "#64748b"; // Slate 400 / Slate 500

    const particleCount = Math.floor(width * height * PARTICLE_DENSITY);
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      
      let pColor = baseColor1;
      const rand = Math.random();
      if (rand > 0.9) pColor = highlightColor;
      else if (rand > 0.5) pColor = baseColor2;

      newParticles.push({
        x, y, originX: x, originY: y,
        vx: 0, vy: 0,
        size: randomRange(1, 2.5), 
        color: pColor, 
        angle: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = newParticles;

    const bgCount = Math.floor(width * height * BG_PARTICLE_DENSITY);
    const newBgParticles: BackgroundParticle[] = [];
    
    for (let i = 0; i < bgCount; i++) {
      newBgParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2, 
        vy: (Math.random() - 0.5) * 0.2,
        size: randomRange(0.5, 1.5),
        alpha: randomRange(0.1, 0.4),
        phase: Math.random() * Math.PI * 2 
      });
    }
    backgroundParticlesRef.current = newBgParticles;
  }, []);

  // Animation Loop
  const animate = useCallback((time: number, isDarkMode: boolean) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dynamic Central Glow (Cyan tinted)
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const pulseSpeed = 0.0008;
    const pulseOpacity = Math.sin(time * pulseSpeed) * 0.02 + (isDarkMode ? 0.05 : 0.02); 
    
    const gradient = ctx.createRadialGradient(
        centerX, centerY, 0, 
        centerX, centerY, Math.max(canvas.width, canvas.height) * 0.7
    );
    gradient.addColorStop(0, isDarkMode ? `rgba(6, 182, 212, ${pulseOpacity})` : `rgba(14, 165, 233, ${pulseOpacity})`); 
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Drifting background dust
    const bgParticles = backgroundParticlesRef.current;
    ctx.fillStyle = isDarkMode ? "#ffffff" : "#0f172a";
    
    for (let i = 0; i < bgParticles.length; i++) {
      const p = bgParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      const twinkle = Math.sin(time * 0.002 + p.phase) * 0.5 + 0.5; 
      ctx.globalAlpha = p.alpha * (0.5 + 0.7 * twinkle) * (isDarkMode ? 1 : 0.5);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1.0; 

    // Main Particle Physics
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (mouse.isActive && distance < MOUSE_RADIUS) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS; 
        
        const repulsion = force * REPULSION_STRENGTH;
        p.vx -= forceDirectionX * repulsion * 5; 
        p.vy -= forceDirectionY * repulsion * 5;
      }

      const springDx = p.originX - p.x;
      const springDy = p.originY - p.y;
      
      p.vx += springDx * RETURN_SPEED;
      p.vy += springDy * RETURN_SPEED;
    }

    // Resolving Basic Elastic Collisions
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const distSq = dx * dx + dy * dy;
        const minDist = p1.size + p2.size;

        if (distSq < minDist * minDist) {
          const dist = Math.sqrt(distSq);
          
          if (dist > 0.01) { 
            const nx = dx / dist; 
            const ny = dy / dist; 
            
            const overlap = minDist - dist;
            const pushX = nx * overlap * 0.5;
            const pushY = ny * overlap * 0.5;
            p1.x -= pushX; p1.y -= pushY;
            p2.x += pushX; p2.y += pushY;

            const dvx = p1.vx - p2.vx;
            const dvy = p1.vy - p2.vy;
            const velocityAlongNormal = dvx * nx + dvy * ny;

            if (velocityAlongNormal > 0) {
              const m1 = p1.size; 
              const m2 = p2.size;
              const restitution = 0.85; 
              const impulseMagnitude = (-(1 + restitution) * velocityAlongNormal) / (1/m1 + 1/m2);
              const impulseX = impulseMagnitude * nx;
              const impulseY = impulseMagnitude * ny;

              p1.vx += impulseX / m1;
              p1.vy += impulseY / m1;
              p2.vx -= impulseX / m2;
              p2.vy -= impulseY / m2;
            }
          }
        }
      }
    }

    // Drawing
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.vx *= DAMPING;
      p.vy *= DAMPING;
      p.x += p.vx;
      p.y += p.vy;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      
      const velocity = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      const opacity = Math.min(0.5 + velocity * 0.12, 1) * (isDarkMode ? 1 : 0.8); 
      
      // Convert hex to rgba for blending
      if (p.color === '#ffffff') {
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      } else if (p.color === '#0f172a') {
        ctx.fillStyle = `rgba(15, 23, 42, ${opacity})`;
      } else {
         // other colored highlights like cyan
         ctx.fillStyle = p.color;
         ctx.globalAlpha = opacity;
      }
      
      ctx.fill();
      ctx.globalAlpha = 1.0;
    }

    frameIdRef.current = requestAnimationFrame((t) => animate(t, isDarkMode));
  }, []);

  // Initialization & Resizing
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && canvasRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        canvasRef.current.width = width * dpr;
        canvasRef.current.height = height * dpr;
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;

        const ctx = canvasRef.current.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);

        initParticles(width, height, isDark);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, [initParticles, isDark]);

  // Boot Simulation
  useEffect(() => {
    frameIdRef.current = requestAnimationFrame((t) => animate(t, isDark));
    return () => cancelAnimationFrame(frameIdRef.current);
  }, [animate, isDark]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isActive: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.isActive = false;
  };

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden cursor-crosshair pointer-events-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} className="block w-full h-full mix-blend-normal opacity-80" />
    </div>
  );
}
