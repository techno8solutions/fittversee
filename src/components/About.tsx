import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Tenant Architecture',
    description: 'Separate database for every gym — complete isolation and security',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Billing, attendance, and analytics — fully automated',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Control',
    description: 'Manage trainers, members, and plans with ease',
    color: 'from-emerald-500 to-teal-500',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
           style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />

      <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-all duration-300">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <feature.icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
        <p className="text-gray-400 leading-relaxed">{feature.description}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
             style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
            Platform Power
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the next generation of gym management with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-light text-cyan-300">
            Manage Every Gym. One Platform. Infinite Power.
          </p>
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
}
