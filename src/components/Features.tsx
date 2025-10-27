import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar, CreditCard, BarChart3, Smartphone, Lock } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Member Management',
    description: 'Comprehensive member profiles, attendance tracking, and engagement analytics',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Calendar,
    title: 'Trainer Scheduling',
    description: 'Smart scheduling system with automated notifications and conflict resolution',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: CreditCard,
    title: 'Automated Billing',
    description: 'Seamless payment processing, invoicing, and subscription management',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time insights, revenue tracking, and predictive analytics',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Dashboard',
    description: 'Manage your gym on-the-go with our responsive mobile interface',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    icon: Lock,
    title: 'Tenant Isolation Security',
    description: 'Enterprise-grade security with complete data isolation per tenant',
    gradient: 'from-pink-500 to-rose-600',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
           style={{
             background: `linear-gradient(135deg, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`
           }} />

      <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
          <feature.icon className="w-full h-full" />
        </div>

        <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <feature.icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 relative">{feature.title}</h3>
        <p className="text-gray-400 leading-relaxed relative">{feature.description}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
             style={{
               background: `linear-gradient(90deg, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`
             }} />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
            Feature Highlights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to run a modern gym, powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center backdrop-blur-md bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Gym?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the future of fitness management and experience the power of FitVerse
          </p>
          <a
            href="#waitlist"
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
          >
            Get Early Access
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
    </section>
  );
}
