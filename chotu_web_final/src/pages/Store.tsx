import { Helmet } from "react-helmet-async";
import { useCanonicalUrl } from "@/hooks/use-canonical";
import productsData from "@/assets/products.json";
import { ProductCard } from "@/features/store/components/ProductCard";

export default function Store() {
  const canonical = useCanonicalUrl();
  const products = productsData;

  const productLdJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((p, i) => ({
      '@type': 'Product',
      position: i + 1,
      name: p.name,
      image: p.images?.[0],
      description: p.shortDescription,
      brand: { '@type': 'Brand', name: 'Chotu' },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: String(p.priceINR),
        availability: 'https://schema.org/InStock',
        url: `${canonical}/${p.slug}`
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Store – Chotu Robot Parts & Kits (INR)</title>
        <meta name="description" content="Chotu AIKIT, FE UART controller, motors, end effectors, bearings, and the full 6‑DOF Chotu Robot kit." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(productLdJson)}</script>
      </Helmet>

      <section className="container mx-auto py-12">
        <h1 className="font-display text-4xl md:text-5xl mb-6">Store</h1>
        <p className="text-muted-foreground max-w-2xl mb-8">High‑quality components and the complete Chotu robot kit. Prices in INR.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={`₹${p.priceINR.toLocaleString('en-IN')}`}
              img={p.images?.[0]}
              description={<span>{p.shortDescription}</span>}
              cta="Contact to Order"
              href={`/store/${p.slug}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
