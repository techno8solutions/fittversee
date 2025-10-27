import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import { useState, useEffect } from 'react';

function RotatingDumbbell() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[1.5, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[-1.5, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
          <RotatingDumbbell />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
          className="text-center transition-transform duration-300 ease-out"
        >
          <motion.h1
            className="mb-6 text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            FitVerse
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl font-light text-cyan-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            The Future of Gym Management Starts Here
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Tenant-based SaaS for fitness businesses — automate, manage, and grow.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <a
              href="#waitlist"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
            >
              <span className="relative z-10">Join Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>

            <a
              href="#preview"
              className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400/10 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              Watch Preview
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
