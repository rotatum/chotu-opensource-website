import Tilt3D from "@/components/ui/Tilt3D";

export default function Hero() {
  return (
    <section className="relative overflow-hidden spotlight">
      {/* Futuristic gradient and glow */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_20%,hsl(var(--brand)/0.25),transparent),radial-gradient(70%_50%_at_80%_30%,hsl(var(--brand-2)/0.2),transparent)]" />
      <div className="container mx-auto py-20 grid lg:grid-cols-2 gap-12 relative">
        <div className="max-w-xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs tracking-wide bg-secondary/60 text-muted-foreground border border-border">Open Source • 6‑DOF</span>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight mt-4">
            Chotu Robot
            <span className="block text-2xl md:text-3xl text-muted-foreground mt-3">Open‑Source 6‑DOF Collaborative Arm</span>
          </h1>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            ≈350 mm reach, 1 kg payload, up to ±0.3 mm repeatability. FE UART controller — no Raspberry Pi or M5 required.
            Designed for learning, research, and rapid prototyping with ROS 2 and MoveIt.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/open-source" className="btn btn-hero hover-scale">Open‑Source Docs</a>
            <a href="/store" className="btn btn-glow hover-scale">Browse Store</a>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { k: 'Working Radius', v: '≈350 mm' },
              { k: 'Payload', v: '1 kg' },
              { k: 'Repeatability', v: '±0.3 mm' },
            ].map(({k,v}) => (
              <div key={k} className="p-4 rounded-xl border bg-card/60 hover:bg-card transition-colors">
                <div className="text-xs text-muted-foreground">{k}</div>
                <div className="text-lg font-medium">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative group max-w-sm mx-auto lg:max-w-md">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
          <Tilt3D 
            className="relative rounded-[1.5rem] border bg-card/70 backdrop-blur-lg shadow-[var(--shadow-elevated)]"
            maxTiltDeg={8}
            scale={1.02}
          >
            <img 
              src="/images/hero/chotu-hero.png" 
              alt="Chotu Robot" 
              className="rounded-[1.5rem] block w-full h-auto max-w-[320px] lg:max-w-[380px]" 
            />
          </Tilt3D>
        </div>
      </div>
    </section>
  );
}
