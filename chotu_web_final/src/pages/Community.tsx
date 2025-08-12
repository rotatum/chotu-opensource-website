import { Helmet } from "react-helmet-async";
import { useCanonicalUrl } from "@/hooks/use-canonical";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function Community() {
  const canonical = useCanonicalUrl();

  return (
    <>
      <Helmet>
        <title>Community – CHOTU Robot Discord</title>
        <meta name="description" content="Join the CHOTU community on Discord to share builds, ask questions, and collaborate on robotics." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="container mx-auto py-12">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Community</h1>
        <p className="text-muted-foreground max-w-2xl">
          We’re building a global community of robot enthusiasts. Share your CHOTU builds, get help, and contribute improvements.
        </p>
        <div className="mt-8">
          <a href="https://discord.gg/your-invite" target="_blank" rel="noreferrer">
            <Button variant="hero"><MessageSquare className="mr-2" /> Join our Discord</Button>
          </a>
        </div>
      </section>
    </>
  );
}
