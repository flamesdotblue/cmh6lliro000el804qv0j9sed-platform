import { motion } from 'framer-motion';
import { Rocket, Cpu, Globe, Sparkles } from 'lucide-react';

const SectionShell = ({ id, eyebrow, title, children, icon: Icon, accent }) => (
  <section id={id} className="relative isolate w-full">
    <div className="absolute inset-0 pointer-events-none">
      <div className={`absolute inset-0 opacity-30 blur-3xl ${accent}`} />
    </div>

    <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-8 flex items-center gap-3 text-white/60">
        {Icon && <Icon className="h-4 w-4 text-white/60" />}
        <span className="text-xs uppercase tracking-[0.2em]">{eyebrow}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-6 text-white/80 leading-relaxed">
        {children}
      </div>
    </div>
  </section>
);

export default function AboutMissionVision() {
  return (
    <div id="mission" className="relative w-full bg-black">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(0,255,255,0.10),transparent),radial-gradient(800px_400px_at_80%_60%,rgba(192,132,252,0.08),transparent),radial-gradient(700px_380px_at_10%_70%,rgba(255,102,196,0.08),transparent)]" />

      <SectionShell
        id="about"
        eyebrow="Who We Are"
        title="Newthing is a frontier company shaping the invisible into impact."
        icon={Sparkles}
        accent="bg-[radial-gradient(circle_at_30%_20%,rgba(192,132,252,0.08),transparent_50%)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-base md:text-lg"
          >
            We craft next-generation ideas into tangible experiences — systems, products, and stories — built with a blend of design, technology, and radical curiosity. Our work is cinematic, minimal, and rigorously engineered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] w-full rounded-2xl bg-white/[0.03] backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,255,0.25),transparent_40%),radial-gradient(circle_at_30%_70%,rgba(255,102,196,0.25),transparent_45%)] opacity-60" />
            <div className="absolute inset-0 mix-blend-screen">
              <AnimatedGrid />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </SectionShell>

      <SectionShell
        id="mission-section"
        eyebrow="Our Mission"
        title="To create, nurture, and launch the future — one new thing at a time."
        icon={Rocket}
        accent="bg-[radial-gradient(circle_at_80%_30%,rgba(0,255,255,0.08),transparent_50%)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              heading: 'Create',
              copy:
                'We prototype bold ideas with cinematic clarity and functional rigor — a union of imagination and precision.',
            },
            {
              heading: 'Nurture',
              copy:
                'We refine through iteration, crafting experiences with soft shadows, holographic depth, and human intention.',
            },
            {
              heading: 'Launch',
              copy:
                'We ship premium products and narratives that feel inevitable — mysterious, elegant, and deeply intuitive.',
            },
          ].map((card, idx) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />
              <h3 className="text-lg font-medium text-white">{card.heading}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{card.copy}</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="vision"
        eyebrow="Our Vision"
        title="To be the source where tomorrow’s ideas are born, connected, and evolve into timeless creations."
        icon={Globe}
        accent="bg-[radial-gradient(circle_at_50%_50%,rgba(255,102,196,0.07),transparent_60%)]"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative mt-4 rounded-2xl overflow-hidden"
        >
          <OrbitalScene />
        </motion.div>
        <p className="mt-6 text-white/70">
          Imagine a quiet observatory suspended in a black void — fragments orbit and converge, forming new worlds. That is Newthing.
        </p>
      </SectionShell>

      <SectionShell
        id="ethos"
        eyebrow="The Newthing Ethos"
        title={<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">We don’t predict the future. We invent it.</span>}
        icon={Cpu}
        accent="bg-[radial-gradient(circle_at_20%_50%,rgba(168,109,255,0.07),transparent_50%)]"
      >
        <p className="text-white/75">
          Our work is an interplay of glassy UI, volumetric light, and careful silence. Minimal surface, maximal depth.
        </p>
      </SectionShell>
    </div>
  );
}

function AnimatedGrid() {
  return (
    <svg className="h-full w-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C084FC" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {Array.from({ length: 12 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${50 + i * 45} C 200 ${40 + i * 45}, 600 ${60 + i * 45}, 800 ${50 + i * 45}`}
          stroke="url(#g)"
          strokeOpacity={0.25}
          strokeWidth={1}
          fill="none"
        >
          <animate
            attributeName="d"
            dur={`${6 + i * 0.2}s`}
            repeatCount="indefinite"
            values={`M0 ${50 + i * 45} C 200 ${30 + i * 45}, 600 ${70 + i * 45}, 800 ${50 + i * 45};
                    M0 ${50 + i * 45} C 200 ${60 + i * 45}, 600 ${40 + i * 45}, 800 ${50 + i * 45};
                    M0 ${50 + i * 45} C 200 ${30 + i * 45}, 600 ${70 + i * 45}, 800 ${50 + i * 45}`}
          />
        </path>
      ))}
    </svg>
  );
}

function OrbitalScene() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_30%,rgba(0,255,255,0.15),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,102,196,0.15),transparent_45%)]" />
      <svg className="absolute inset-0" viewBox="0 0 800 360">
        <defs>
          <radialGradient id="orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#A86DFF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i} opacity={0.55 - i * 0.08}>
            <circle cx={400} cy={180} r={60 + i * 36} fill="none" stroke="#9b8aff" strokeOpacity="0.2" />
            <circle cx={400} cy={180} r={60 + i * 36} fill="none" stroke="#00FFFF" strokeOpacity="0.08" />
          </g>
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <circle key={i} cx={400 + Math.cos(i) * (120 + (i % 3) * 24)} cy={180 + Math.sin(i) * (120 + (i % 3) * 24)} r={4} fill="#C084FC">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from={`0 400 180`} to={`360 400 180`} dur={`${18 + i}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <circle cx={400} cy={180} r={70} fill="url(#orb)" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  );
}
