import { Helmet } from "react-helmet-async";
import { useCanonicalUrl } from "@/hooks/use-canonical";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function OpenSource() {
  const canonical = useCanonicalUrl();

  return (
    <>
      <Helmet>
        <title>Open Source – CHOTU Robot</title>
        <meta name="description" content="Documentation and resources for the open-source CHOTU 6‑DOF robotic arm: BOM, wiring, firmware, and CAD." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <section className="container mx-auto py-12">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Open Source</h1>
        <p className="text-muted-foreground max-w-3xl">
          CHOTU is a 6‑DOF robotic arm similar in form to the myCobot 320. It runs on a single Feetech FE URT‑1 controller
          driving six Feetech STS3215 servo motors. The end effector integrates a camera and a suction pump.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <article className="p-6 rounded-lg border bg-card">
            <h2 className="font-semibold text-xl">Bill of Materials</h2>
            <ul className="mt-3 list-disc pl-5 text-sm leading-7 text-muted-foreground">
              <li>6 × Feetech STS3215 Servo Motors</li>
              <li>1 × Feetech FE URT‑1 Controller</li>
              <li>Aluminum links + base assembly</li>
              <li>Camera module and suction pump end‑effector</li>
              <li>Wiring, bearings, fasteners</li>
            </ul>
          </article>

          <article className="p-6 rounded-lg border bg-card">
            <h2 className="font-semibold text-xl">Resources</h2>
            <ul className="mt-3 list-disc pl-5 text-sm leading-7 text-muted-foreground">
              <li>CAD files (STEP/SLDPRT)</li>
              <li>Wiring diagrams</li>
              <li>Controller protocol examples</li>
              <li>Demo apps and calibration tools</li>
            </ul>
          </article>
        </div>

        <div className="mt-8">
          <a href="https://github.com/yourusername/chotu-robot" target="_blank" rel="noreferrer">
            <Button variant="hero"><Github className="mr-2" /> View GitHub Repository</Button>
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
  Specs adapted from Elephant Robotics myCobot 320 and tailored for Chotu (FE UART controller, design differences).
  See reference: <a className="underline" href="https://shop.elephantrobotics.com/collections/mycobot-pro-320/products/commercial-and-economic-six-axis-collaborative-robot">myCobot 320</a>.
</p>
      </section>
    </>
  );
}
