import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ProductCard({ name, price, img, description, cta }: { name: string; price: string; img: string; description: ReactNode; cta?: string }) {
  return (
    <article className="rounded-xl border bg-card p-4 flex flex-col hover-scale">
      <img src={img} alt={`${name} product image`} className="w-full h-44 object-cover rounded-md" loading="lazy" />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-medium">{price}</span>
        <Button variant="glow" onClick={() => toast("Added to cart (demo)")}>{cta ?? "Add to cart"}</Button>
      </div>
    </article>
  );
}
