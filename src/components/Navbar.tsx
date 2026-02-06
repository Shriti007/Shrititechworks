import { motion } from 'framer-motion';
import { Home, User, Code2, Cpu, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Projects', href: '#projects', icon: Cpu },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
        className="pointer-events-auto"
      >
        <div className="flex items-center gap-1 p-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl shadow-primary/5">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 group"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-white transition-colors duration-300">
                <item.icon className="w-4 h-4" />
                <span className="hidden md:block">{item.name}</span>
              </div>

              {/* Active/Hover Glow - Bottom Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-[0_0_10px_var(--primary)]" />
            </a>
          ))}

          <div className="w-px h-6 bg-white/10 mx-2" />

          <motion.a
            href="https://wa.me/917678918562?text=Hi%20Shriti%2C%20I%20visited%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 md:px-5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-xs md:text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow flex items-center gap-2"
          >
            <span className="hidden md:inline">Hire Me</span>
            <span className="md:hidden">Hire</span>
          </motion.a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
