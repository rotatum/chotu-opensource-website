import { useParams } from "react-router-dom";
import products from "@/assets/products.json";
import type { Product as ProductType } from "@/components/store/types";
import { Helmet } from "react-helmet-async";

export default function Product() {
  const { slug } = useParams();
  const product = (products as ProductType[]).find((p) => p.slug === slug);
  if (!product) return <div className="container mx-auto py-12">Product not found.</div>;

  const price = `₹${product.priceINR.toLocaleString('en-IN')}`;

  return (
    <>
      <Helmet>
        <title>{product.name} – Chotu Store</title>
        <meta name="description" content={product.shortDescription} />
      </Helmet>
      <section className="container mx-auto py-12 grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {product.images?.map((src: string) => (
            <img key={src} src={src} className="rounded-xl border shadow-sm" />
          ))}
        </div>
        <div>
          <h1 className="font-display text-3xl md:text-4xl">{product.name}</h1>
          <div className="text-2xl mt-3">{price}</div>
          <p className="text-muted-foreground mt-4">{product.shortDescription}</p>
          <div className="mt-6 space-y-2">
            {product.description?.map((d: string, i: number) => <p key={i}>{d}</p>)}
          </div>
          <div className="mt-8">
            <a className="btn btn-primary" href="/community#contact">Contact to Order</a>
          </div>
          <div className="mt-10">
            <h3 className="font-semibold mb-2">Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(product.specs || {}).map(([k, v]) => (
                <div key={k} className="p-3 rounded-lg border bg-card">
                  <div className="text-sm text-muted-foreground">{k}</div>
                  <div className="font-medium">{String(v)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
