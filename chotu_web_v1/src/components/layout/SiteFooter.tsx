export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <section>
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm text-muted-foreground">
            CHOTU is an open-source 6‑DOF robotic arm powered by Feetech STS3215 servos and the FE URT-1 controller.
          </p>
        </section>
        <section>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a className="hover:underline" href="/open-source">Open Source</a></li>
            <li><a className="hover:underline" href="/store">Store</a></li>
            <li><a className="hover:underline" href="/community">Community</a></li>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: <a className="underline" href="mailto:contact@choturobot.com">contact@choturobot.com</a></p>
        </section>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-6 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} CHOTU Robot</p>
          <div className="flex gap-4">
            <a href="https://github.com/yourusername/chotu-robot" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            <a href="https://discord.gg/your-invite" target="_blank" rel="noreferrer" className="hover:underline">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
