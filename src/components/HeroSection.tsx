import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const roles = ["Full-Stack Developer", "Mobile Engineer", "Digital Creator"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          if (displayText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 35 : 70
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Particle field canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; hue: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() > 0.7 ? 270 : 175,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / canvas.width, y: e.clientY / canvas.height };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x * canvas.width;
      const my = mouseRef.current.y * canvas.height;

      particles.forEach((p, i) => {
        // Mouse attraction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += dx * 0.00008;
          p.vy += dy * 0.00008;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(175, 100%, 50%, ${0.06 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Radial vignette */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0,0%,4%)_75%)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left: Main content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="text-xs text-muted-foreground font-body tracking-widest uppercase">
                Available for work
              </span>
              <span className="text-muted-foreground/30 mx-1">—</span>
              <MapPin size={12} className="text-muted-foreground/50" />
              <span className="text-xs text-muted-foreground/50">Sri Lanka</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold leading-[0.85] tracking-[-0.04em] mb-6"
            >
              <span className="block text-[clamp(3rem,8vw,8rem)] text-foreground">
                Prabash
              </span>
              <span className="block text-[clamp(3rem,8vw,8rem)] text-gradient">
                M Perera
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-base md:text-lg text-muted-foreground font-body max-w-lg leading-relaxed mb-8"
            >
              Crafting high-performance digital experiences at the intersection 
              of <span className="text-foreground font-medium">code</span>, <span className="text-foreground font-medium">design</span>, and <span className="text-foreground font-medium">creative media</span>.
            </motion.p>

            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-sm text-foreground font-body font-medium">
                {displayText}
                <span className="text-primary animate-pulse ml-px">|</span>
              </span>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-display font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_hsl(175,100%,50%,0.35)]"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowDown size={15} className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-border text-foreground font-display font-medium text-sm hover:border-primary/40 hover:bg-card/50 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Stats column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:col-span-4 flex lg:flex-col gap-6 lg:gap-0 lg:border-l lg:border-border lg:pl-8"
          >
            {[
              { value: "3+", label: "Years of\nExperience" },
              { value: "20+", label: "Projects\nDelivered" },
              { value: "10+", label: "Technologies\nMastered" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + i * 0.12 }}
                className="lg:py-6 lg:border-b lg:border-border lg:last:border-b-0"
              >
                <span className="block text-3xl md:text-4xl font-display font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground font-body whitespace-pre-line leading-tight mt-1 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
