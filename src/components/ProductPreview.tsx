import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function DashboardHologram() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        <mesh
          ref={meshRef}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          scale={hovered ? 1.1 : 1}
        >
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial
            color="#0a0a0a"
            emissive="#00ffff"
            emissiveIntensity={0.2}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>

        <mesh position={[-0.8, 0.5, 0.1]}>
          <boxGeometry args={[0.8, 0.6, 0.05]} />
          <meshStandardMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>

        <mesh position={[0.5, 0.5, 0.1]}>
          <boxGeometry args={[1.2, 0.6, 0.05]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>

        <mesh position={[-0.5, -0.4, 0.1]}>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>

        <mesh position={[0.8, -0.4, 0.1]}>
          <boxGeometry args={[0.6, 0.6, 0.05]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>

        <pointLight position={[0, 0, 2]} intensity={1} color="#00ffff" />
      </group>
    </Float>
  );
}

function DataParticles() {
  const count = 100;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function ProductPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="preview" className="relative py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
            Real-Time Visualization
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your entire gym — visualized in real-time with cutting-edge 3D interfaces
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[600px] rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.3)]"
        >
          <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
            <DashboardHologram />
            <DataParticles />
          </Canvas>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Active Members', value: '10K+', color: 'text-cyan-400' },
            { label: 'Gyms Managed', value: '500+', color: 'text-purple-400' },
            { label: 'Uptime', value: '99.9%', color: 'text-emerald-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
