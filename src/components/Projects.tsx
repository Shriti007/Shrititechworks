import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Stethoscope, MessageSquare, Film, ArrowUpRight, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 px-8 py-10 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
                }}
            />

            {/* Icon & Links Header */}
            <div className="flex items-start justify-between mb-8 relative z-10">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10`}>
                    <project.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex gap-4">
                    <a href={project.link || "#"} className="p-2 rounded-full border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link || "#"} className="p-2 rounded-full border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 font-display">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-primary/80 border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const projects = [
        {
            title: 'Health Medicity',
            description: 'Advanced healthcare platform featuring facial recognition for patient ID and real-time emergency response generation systems.',
            tags: ['Python', 'React', 'MongoDB', 'SQLite'],
            gradient: 'from-blue-500/20 to-cyan-500/20',
            icon: Stethoscope,
            link: '#'
        },
        {
            title: 'Real-Time Chat Bot',
            description: 'High-performance messaging application with WebSocket integration for instant communication and secure user authentication.',
            tags: ['Socket.io', 'Firebase', 'MongoDB', 'React'],
            gradient: 'from-purple-500/20 to-pink-500/20',
            icon: MessageSquare,
            link: '#'
        },
        {
            title: 'Reels Platform',
            description: 'Short-form video content platform allowing creators to upload, view, and interact with engaging media content.',
            tags: ['React', 'CSS3', 'JavaScript'],
            gradient: 'from-orange-500/20 to-red-500/20',
            icon: Film,
            link: 'https://github.com/Shriti007/reels-project.git'
        },
    ];

    return (
        <section id="projects" className="py-32 relative z-10">
            <div className="container mx-auto px-6" ref={ref}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
                        Selected Works
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of my technical capabilities and creative problem-solving skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
