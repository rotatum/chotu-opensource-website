export default function Testimonials() {
  const items = [
    {
      quote: "CHOTU lowered our prototyping time by 60%.",
      name: "Aarav K.",
      role: "Robotics Engineer"
    },
    {
      quote: "A brilliant open-source arm—great docs and hardware stack.",
      name: "Neha S.",
      role: "Maker & Educator"
    },
    {
      quote: "Smooth motion with the STS3215s and FE URT-1—impressive.",
      name: "Vikram R.",
      role: "Automation Lead"
    }
  ];
  return (
    <section className="container mx-auto py-16">
      <h2 className="font-display text-3xl md:text-4xl mb-8">What builders say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, idx) => (
          <article key={idx} className="p-6 rounded-lg border bg-card hover-scale">
            <p className="text-lg">“{t.quote}”</p>
            <p className="mt-3 text-sm text-muted-foreground">{t.name} · {t.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
