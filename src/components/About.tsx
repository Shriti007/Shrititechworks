import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Experience', value: 'Early Career' },
    { label: 'Projects', value: '5+' },
    { label: 'Technologies', value: '10+' },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6" ref={ref}>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glowing background behind effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-50" />

          {/* Main Glass Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-md p-8 md:p-12 shadow-2xl">

            {/* Subtle Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">

              {/* Left Column: Header */}
              <div className="md:w-1/3 space-y-6">
                {/* Profile Image */}
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src="/Shriti.jpeg"
                      alt="Shriti Srivastava"
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wide uppercase">
                  <Sparkles className="w-3 h-3" />
                  About Me
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                  Shriti <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                    Srivastava
                  </span>
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground/80 pt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span className="text-sm">Lucknow, Uttar Pradesh</span>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="md:w-2/3 space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a <span className="text-foreground font-medium">Computer Science student</span> driven by the art of creating digital experiences.
                  My focus is on bridging the gap between <span className="text-primary">clean code</span> and <span className="text-purple-400">engaging design</span>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently seeking a <strong>Summer Internship</strong> to contribute my full-stack skills to real-world projects. I believe in software that is not just functional, but memorable.
                </p>

                {/* Minimal Stats Separator Line Style */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                  {stats.map((stat, index) => (
                    <div key={stat.label}>
                      <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
