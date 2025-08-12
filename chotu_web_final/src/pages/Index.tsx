import { Helmet } from "react-helmet-async";
import { useCanonicalUrl } from "@/hooks/use-canonical";
import Hero from "@/features/home/components/Hero";
import Testimonials from "@/features/home/components/Testimonials";
import Contact from "@/features/home/components/Contact";

const Index = () => {
  const canonical = useCanonicalUrl();

  return (
    <>
      <Helmet>
        <title>CHOTU Robot – Open Source 6‑DOF Arm</title>
        <meta name="description" content="CHOTU is an open-source 6‑DOF robotic arm using Feetech STS3215 servos and FE URT-1 controller with camera and suction end effector." />
        <link rel="canonical" href={canonical} />
        {/* Preload critical hero image - WebP for faster loading */}
        <link rel="preload" as="image" href="/images/hero/chotu-hero.webp" type="image/webp" fetchPriority="high" />
        {/* Fallback preload for browsers without WebP support */}
        <link rel="preload" as="image" href="/images/hero/chotu-hero.jpeg" fetchPriority="high" />
      </Helmet>
      
      <div className="orb-collision-page intro-completed">
        {/* Gradient Wave Background */}
        <div className="gradient-wave"></div>
        
        {/* Third Collision Orb */}
        <div className="collision-orb-3"></div>
        
        {/* Content with overlay */}
        <div className="content-overlay">
          <Hero />
          
          <section className="container mx-auto py-16">
            <h2 className="font-display text-3xl md:text-4xl mb-8 collision-text-glow">Why Chotu</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: '6‑DOF Mechanics',
                  desc: 'Smooth, precise motion across six axes for real applications.',
                },
                {
                  title: 'FE UART Controller',
                  desc: 'Compact controller drives six Feetech servos via serial — simple and robust.',
                },
                {
                  title: 'Vision‑Ready',
                  desc: 'Camera and suction end‑effector kits for pick‑and‑place demos.',
                },
              ].map((f) => (
                <article key={f.title} className="p-6 rounded-xl border bg-card/60 hover:bg-card transition-colors hover-scale collision-enhanced-card">
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="container mx-auto pb-16">
            <h2 className="font-display text-3xl md:text-4xl mb-8 collision-text-glow">Key Specifications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ['Working Radius', '≈350 mm'],
                ['Payload', '1 kg'],
                ['Repeatability', 'up to ±0.3 mm'],
                ['Controller', 'FE UART (no Raspberry Pi / M5)'],
                ['Interfaces', '24 V compatible'],
                ['Software', 'ROS 2 + MoveIt'],
              ].map(([k, v]) => (
                <div key={k} className="p-4 rounded-xl border bg-card/60 collision-enhanced-card">
                  <div className="text-xs text-muted-foreground">{k}</div>
                  <div className="text-lg font-medium">{v}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Specs adapted from Elephant Robotics myCobot 320 and tailored for Chotu (FE UART controller, design differences). See reference: <a className="underline" href="https://shop.elephantrobotics.com/collections/mycobot-pro-320/products/commercial-and-economic-six-axis-collaborative-robot">myCobot 320</a>.
            </p>
          </section>
          
          <Testimonials />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Index;