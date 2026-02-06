import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SparklingCursor from '@/components/SparklingCursor';
import Hyperspeed from '@/components/backgrounds/Hyperspeed';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <Hyperspeed
        effectOptions={{
          distortion: 'turbulentDistortion',
          length: isMobile ? 200 : 400, // Reduced length for mobile
          roadWidth: isMobile ? 5 : 10,
          islandWidth: 2,
          lanesPerRoad: isMobile ? 1 : 3, // Reduced lanes for mobile
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: isMobile ? 5 : 20, // Reduced side lights
          lightPairsPerRoadWay: isMobile ? 10 : 40, // Reduced light pairs
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [12, 80],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0x131318,
            brokenLines: 0x131318,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3
          }
        }}
      />
      <main className="min-h-screen overflow-x-hidden cursor-none relative z-10 pointer-events-auto">
        {/* Fixed Logo */}
        <div className="fixed top-6 left-6 z-50 w-10 h-10 md:w-12 md:h-12">
          <img src="/icons8-github-copilot-188.png" alt="Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
        </div>

        <SparklingCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;

