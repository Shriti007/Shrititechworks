import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-sm"
          >
            Designed and Developed with ❤️ by <span className="text-primary font-bold">Shriti</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
