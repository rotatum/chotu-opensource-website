export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20" />
      <div className="container mx-auto py-16 grid lg:grid-cols-2 gap-10 relative">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl md:text-5xl tracking-tight">
            Chotu Robot — Open‑Source 6‑DOF Arm
          </h1>
          <p className="text-muted-foreground mt-4">
            ≈350 mm reach, 1 kg payload, up to ±0.3 mm repeatability. Powered by an FE UART controller —
            no Raspberry Pi or M5 required. Built for learning, research, and rapid prototyping.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/open-source" className="btn btn-primary">Open‑Source Docs</a>
            <a href="/store" className="btn btn-secondary">Browse Store</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl -z-10" />
          <img src="/images/hero/chotu-hero.png" className="rounded-2xl border shadow-xl" />
        </div>
      </div>
    </section>
  );
}
