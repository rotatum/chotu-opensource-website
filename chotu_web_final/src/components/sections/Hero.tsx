import heroImg from "@/assets/hero-chotu.jpg";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Hero() {
  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mx", `${mx}%`);
    e.currentTarget.style.setProperty("--my", `${my}%`);
  }

  return (
    <section className="relative spotlight" onMouseMove={handleMouse}>
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="CHOTU 6‑DOF robotic arm with camera and suction end effector" className="w-full h-[60vh] md:h-[70vh] object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/10" />
      </div>

      <div className="container mx-auto py-24 md:py-32">
        <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight animate-enter">
          CHOTU Robot
          <span className="block text-lg md:text-2xl font-sans text-muted-foreground mt-2">Open-source 6‑DOF robotic arm powered by Chotu</span>
        </h1>
        <p className="max-w-2xl mt-6 text-muted-foreground">
          6 Chotu servo motors driven by the Chotu UART controller, with an on-board camera and suction pump end effector.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <NavLink to="/open-source"><Button variant="hero" className="hover-scale">Get Started</Button></NavLink>
          <NavLink to="/store"><Button variant="glow" className="hover-scale">Shop CHOTU</Button></NavLink>
          <a href="https://github.com/yourusername/chotu-robot" target="_blank" rel="noreferrer"><Button variant="outline" className="hover-scale">View on GitHub</Button></a>
        </div>
      </div>
    </section>
  );
}
