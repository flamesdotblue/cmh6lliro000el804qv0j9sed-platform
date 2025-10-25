import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black pointer-events-none" />
      <div className="absolute -inset-32 bg-[radial-gradient(circle_at_50%_20%,rgba(0,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(192,132,252,0.10),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(255,102,196,0.10),transparent_35%)] pointer-events-none" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mx-auto max-w-5xl text-center"
        >
          <h1 className="font-[600] tracking-tight text-4xl sm:text-6xl md:text-7xl leading-[1.05]">
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
