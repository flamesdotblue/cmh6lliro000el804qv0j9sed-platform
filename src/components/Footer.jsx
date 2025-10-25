export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/60">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_200px_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-white/70">Newthing — parent company for next-gen creation</p>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Newthing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
