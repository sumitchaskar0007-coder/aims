import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Future-Ready MBA & MCA Programs',
    subtitle: 'Industry-focused curriculum with live projects and placements.',
    cta: { label: 'Explore Courses →', href: '/courses' },
    image: '/assets/bg1.png',
    color: 'from-blue-600 to-purple-600',
  },
  {
    title: 'NAAC Accredited B Grade',
    subtitle: 'Committed to quality education and continuous improvement.',
    cta: { label: 'View NAAC Docs →', href: '/naac' },
    image: '/assets/nac.png',
    color: 'from-green-600 to-teal-600',
  },
  {
    title: 'Vibrant Campus Life',
    subtitle: 'Cultural fests, sports, clubs, and leadership programs.',
    cta: { label: 'See Events →', href: '/events' },
    image: '/assets/bg2.png',
    color: 'from-pink-600 to-rose-600',
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const speedMultiplier = 1;

  // Auto-advance the hero slider at a steady pace.
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(100% at 50% 50%)" }}
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative h-[600px]"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={slides[index].image}
              className="h-full w-full object-cover"
              alt=""
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[index].color} mix-blend-multiply opacity-60`} />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="max-w-3xl"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotateZ: [0, 5, -5, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">
                    🎓 ADITYA INSTITUTE
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                  {slides[index].title}
                </h1>
                
                <p className="text-xl text-white/90 mb-8 max-w-xl">
                  {slides[index].subtitle}
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={slides[index].cta.href}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:shadow-xl transition-all"
                  >
                    {slides[index].cta.label}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Speed Indicator */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full">
            <div className="flex items-center gap-2 text-white text-sm">
              <span>⚡</span>
              <motion.div
                animate={{ width: `${(speedMultiplier / 3) * 100}%` }}
                className="h-1 bg-orange-500 rounded-full"
                style={{ width: '20px' }}
              />
              <span>{Math.round(speedMultiplier)}x</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group"
            aria-label={`Go to slide ${i + 1}`}
          >
            <motion.div
              animate={{
                width: i === index ? 30 : 8,
                backgroundColor: i === index ? '#fff' : 'rgba(255,255,255,0.5)',
              }}
              className="h-2 rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
