import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: '🌐', color: 'text-orange-500' },
      { name: 'CSS3', icon: '🎨', color: 'text-blue-500' },
      { name: 'JavaScript', icon: '⚡', color: 'text-yellow-400' },
      { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
      { name: 'Tailwind', icon: '🌊', color: 'text-cyan-300' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', icon: '☕', color: 'text-red-500' },
      { name: 'Python', icon: '🐍', color: 'text-yellow-500' },
      { name: 'Node.js', icon: '🟢', color: 'text-green-500' },
      { name: 'C/C++', icon: '⚙️', color: 'text-blue-600' },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: '🍃', color: 'text-green-500' },
      { name: 'MySQL', icon: '🐬', color: 'text-blue-400' },
      { name: 'PostgreSQL', icon: '🐘', color: 'text-indigo-400' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: '📦', color: 'text-orange-600' },
      { name: 'VS Code', icon: '📝', color: 'text-blue-500' },
      { name: 'Postman', icon: '🚀', color: 'text-orange-500' },
    ]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
            Technical Proficiency
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive suite of tools and technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              onMouseEnter={() => setHoveredCategory(category.title)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative"
            >
              {/* Glass Card Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-primary/20 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]" />

              <div className="relative p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className={`w-8 h-1 rounded-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 ${hoveredCategory === category.title ? 'w-12' : 'w-8'}`} />
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-default"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
