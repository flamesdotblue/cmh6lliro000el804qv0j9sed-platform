import { motion } from 'framer-motion';
import { Cpu, Rocket, Globe, Mail } from 'lucide-react';

const items = [
  {
    title: 'Innovation Lab',
    desc: 'Rapid prototyping, AI-assisted design, and speculative systems.',
    icon: Cpu,
    hue: 'from-cyan-300/20 via-cyan-300/0 to-transparent',
  },
  {
    title: 'Launch Studio',
    desc: 'Go-to-market, cinematic narratives, and premium product craft.',
    icon: Rocket,
    hue: 'from-fuchsia-400/20 via-fuchsia-400/0 to-transparent',
  },
  {
    title: 'Worlds & Platforms',
    desc: 'Ecosystems that connect creators, products, and ideas.',
    icon: Globe,
    hue: 'from-violet-400/20 via-violet-400/0 to-transparent',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_50%_0%,rgba(255,255,255,0.05),transparent),radial-gradient(500px_300px_at_80%_70%,rgba(0,255,255,0.08),transparent),radial-gradient(600px_360px_at_20%_80%,rgba(192,132,252,0.10),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Every creation, a new dimension.</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            A minimal, cinematic ecosystem where ideas flow between divisions — connected by light, refined by intent.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
            >
              <div className={`pointer-events-none absolute -inset-40 bg-gradient-to-br ${it.hue}`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <it.icon className="h-5 w-5 text-white/70" />
                  <h3 className="text-lg font-medium">{it.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{it.desc}</p>
              </div>
              <Connector index={i} />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm md:text-base text-white/90 backdrop-blur-md transition focus:outline-none focus:ring-2 focus:ring-violet-400/40 hover:border-white hover:text-white hover:shadow-[0_0_30px_rgba(192,132,252,0.25)]"
          >
            Connect with Newthing
            <Mail className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Connector({ index }) {
  return (
    <svg className="pointer-events-none absolute inset-0" viewBox="0 0 400 220" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF66C4" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M-20 200 C 80 140, 120 140, 200 180 S 360 140, 420 40"
        fill="none"
        stroke={`url(#grad-${index})`}
        strokeWidth="1.2"
        opacity="0.35"
      >
        <animate attributeName="d" dur={`${8 + index}s`} repeatCount="indefinite" values="M-20 200 C 80 140, 120 140, 200 180 S 360 140, 420 40; M-20 200 C 60 160, 140 120, 200 180 S 340 120, 420 40; M-20 200 C 80 140, 120 140, 200 180 S 360 140, 420 40" />
      </path>
    </svg>
  );
}
