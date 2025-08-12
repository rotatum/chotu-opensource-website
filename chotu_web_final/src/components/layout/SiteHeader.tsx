import { NavLink } from "react-router-dom";
import { Github, Store, Users, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export default function SiteHeader() {
  const navCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md transition-colors story-link ${
      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-40 glass">
      <div className="container mx-auto flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="font-display text-xl tracking-wider">CHOTU ROBOT</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" end className={navCls}>
            Home
          </NavLink>
          <NavLink to="/open-source" className={navCls}>
            Open Source
          </NavLink>
          <NavLink to="/store" className={navCls}>
            Store
          </NavLink>
          <NavLink to="/community" className={navCls}>
            Community
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <a href="https://github.com/yourusername/chotu-robot" target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm" className="hover-scale"><Github className="mr-2" /> GitHub</Button>
            </a>
            <NavLink to="/store">
              <Button variant="hero" size="sm" className="hover-scale"><Store className="mr-2" /> Shop</Button>
            </NavLink>
            <NavLink to="/community">
              <Button variant="glow" size="sm" className="hover-scale"><Users className="mr-2" /> Discord</Button>
            </NavLink>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu" className="hover-scale">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="mt-8 grid gap-2">
                  <NavLink to="/" end className={navCls}>Home</NavLink>
                  <NavLink to="/open-source" className={navCls}>Open Source</NavLink>
                  <NavLink to="/store" className={navCls}>Store</NavLink>
                  <NavLink to="/community" className={navCls}>Community</NavLink>

                  <div className="mt-4 grid gap-2">
                    <a href="https://github.com/yourusername/chotu-robot" target="_blank" rel="noreferrer">
                      <Button variant="outline" className="w-full"><Github className="mr-2" /> GitHub</Button>
                    </a>
                    <NavLink to="/store">
                      <Button variant="hero" className="w-full"><Store className="mr-2" /> Shop</Button>
                    </NavLink>
                    <NavLink to="/community">
                      <Button variant="glow" className="w-full"><Users className="mr-2" /> Discord</Button>
                    </NavLink>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
