import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Typewriter hook
const useTypewriter = (texts: string[], speed = 100, pause = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, speed, pause]);

  return displayText;
};

const Hero = () => {
  const roles = ['Web Developer', 'Creative Coder', 'UI Designer'];
  const typedText = useTypewriter(roles, 100, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-primary">Shriti</span>{' '}
            <span className="text-foreground">Srivastava</span>
          </motion.h1>

          {/* Role with typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-8"
          >
            <span className="gradient-text font-semibold">{typedText}</span>
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </motion.div>


          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-muted-foreground/80 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Building clean, modern web experiences with a focus on
            performance and user experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:opacity-90"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-border text-foreground font-medium transition-all duration-300 hover:bg-secondary"
            >
              Contact
            </a>
            <a
              href="/resume.jpg"
              download
              className="px-6 py-3 rounded-full border border-border text-foreground font-medium transition-all duration-300 hover:bg-secondary flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
