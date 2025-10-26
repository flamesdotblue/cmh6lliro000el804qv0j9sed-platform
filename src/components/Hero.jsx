import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <BackgroundField />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      <div className="absolute -inset-40 bg-[radial-gradient(circle_at_50%_20%,rgba(0,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(192,132,252,0.10),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(255,102,196,0.10),transparent_35%)]" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="mx-auto max-w-5xl text-center"
        >
          <HoloOrb />
          <h1 className="mt-8 font-[600] tracking-tight text-4xl sm:text-6xl md:text-7xl leading-[1.05]">
            <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Something New is Coming.
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80">
            Newthing — where ideas from the unknown take form.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#mission"
              className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm md:text-base text-white/90 backdrop-blur-md transition focus:outline-none focus:ring-2 focus:ring-cyan-300/40 hover:border-white hover:text-white hover:shadow-[0_0_30px_rgba(0,255,255,0.25)]"
            >
              Enter the Unknown
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

function BackgroundField() {
  return (
    <div className="absolute inset-0">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <radialGradient id="vignette" cx="50%" cy="40%" r="80%">
            <stop offset="0%" stopColor="#000000" stopOpacity="1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#A86DFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="900" fill="#000" />
        {Array.from({ length: 140 }).map((_, i) => (
          <circle
            key={i}
            cx={(i * 103) % 1440}
            cy={(i * 197) % 900}
            r={(i % 7) === 0 ? 1.9 : 1}
            fill={i % 9 === 0 ? '#C084FC' : i % 5 === 0 ? '#00FFFF' : '#FFFFFF'}
            opacity={(i % 7) === 0 ? 0.9 : 0.5}
          >
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${3 + (i % 10) * 0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <rect width="1440" height="900" fill="url(#vignette)" opacity="0.6" />
      </svg>
    </div>
  );
}

function HoloOrb() {
  return (
    <div className="mx-auto h-[280px] w-[280px] md:h-[360px] md:w-[360px] relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-2xl" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,255,0.25),transparent_60%)] blur-3xl" />
      <svg className="relative h-full w-full" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="orbCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#A86DFF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring" x1="0" x2="1">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FF66C4" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} opacity={0.55 - i * 0.08}>
            <circle cx={200} cy={200} r={70 + i * 34} fill="none" stroke="#9b8aff" strokeOpacity="0.2" />
            <circle cx={200} cy={200} r={70 + i * 34} fill="none" stroke="#00FFFF" strokeOpacity="0.1" />
          </g>
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={i} cx={200 + Math.cos(i) * (120 + (i % 3) * 18)} cy={200 + Math.sin(i) * (120 + (i % 3) * 18)} r={3.2} fill="#C084FC">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from={`0 200 200`} to={`360 200 200`} dur={`${16 + i}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <circle cx={200} cy={200} r={88} fill="url(#orbCore)" />
        <path d="M 40 260 C 150 180, 250 340, 360 160" fill="none" stroke="url(#ring)" strokeWidth="1.5" opacity="0.4">
          <animate attributeName="d" dur="7s" repeatCount="indefinite" values="M 40 260 C 150 180, 250 340, 360 160; M 40 240 C 160 200, 240 320, 360 180; M 40 260 C 150 180, 250 340, 360 160" />
        </path>
      </svg>
      <div className="absolute inset-x-0 bottom-[-30px] h-24 blur-xl opacity-70">
        <div className="mx-auto h-full w-[60%] rounded-full bg-gradient-to-r from-cyan-300/25 via-white/15 to-pink-400/25" />
      </div>
    </div>
  );
}
