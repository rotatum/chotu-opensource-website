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
      </Helmet>
      <Hero />
      <section className="container mx-auto py-12">
        <h2 className="font-display text-3xl md:text-4xl mb-6">Built for Builders</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <article className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold">6‑DOF Mechanics</h3>
            <p className="text-sm text-muted-foreground mt-2">Six Feetech STS3215 servos actuate six joints for smooth, precise motion.</p>
          </article>
          <article className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold">FE URT‑1 Controller</h3>
            <p className="text-sm text-muted-foreground mt-2">Single controller drives all 6 servos with a simple serial protocol.</p>
          </article>
          <article className="p-6 rounded-lg border bg-card">
            <h3 className="font-semibold">Camera + Suction</h3>
            <p className="text-sm text-muted-foreground mt-2">Integrated vision and a suction pump end effector for pick-and-place.</p>
          </article>
        </div>
      </section>
      <Testimonials />
      <Contact />
    </>
  );
};

export default Index;
