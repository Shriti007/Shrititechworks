import { useEffect, useRef } from 'react';

const MagicDustCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setSize();
    window.addEventListener('resize', setSize);

    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3; // Varied small sizes
        this.speedX = Math.random() * 1 - 0.5; // Gentle float
        this.speedY = Math.random() * 1 - 0.5;
        this.life = 1.0;
        // Mix of primary/accent colors for "magic" feel
        const colors = [
          '255, 255, 255', // White
          '3, 179, 195',   // Primary Cyan
          '168, 85, 247'   // Purple Accent
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.02; // Fade out speed
        if (this.size > 0.1) this.size -= 0.05; // Shrink
      }

      draw(context: CanvasRenderingContext2D) {
        context.globalAlpha = this.life;
        context.fillStyle = `rgba(${this.color}, ${this.life})`;
        context.shadowBlur = 10;
        context.shadowColor = `rgba(${this.color}, 0.5)`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0; // Reset
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Disable on touch devices or small screens
      if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) return;

      // Spawn multiple dust particles per move event for density
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      // Transparent clear to create trails effectively
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);

        if (particles[i].life <= 0 || particles[i].size <= 0.1) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }} // Make colors pop against dark bg
    />
  );
};

export default MagicDustCursor;
