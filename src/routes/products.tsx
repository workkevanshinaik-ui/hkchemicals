import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Beaker, Droplets, Package, Truck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import productImg from "@/assets/product-detail.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Sodium Hypochlorite (NaOCl) - Specifications & Bulk Supply | HK Chemicals" },
      { name: "description", content: "Sodium hypochlorite 2%-14% w/w. Packaging from 50L HDPE carboys to 20,000L tanker delivery. Manufactured in Dahej, Gujarat." },
    ],
    links: [{ rel: "canonical", href: "https://hkchemicals.in/products" }],
  }),
  component: ProductsPage,
});

const specs: [string, string][] = [
  ["Appearance", "Pale Yellow Liquid"],
  ["Available Chlorine", "30 - 180 gpl"],
  ["Excess Alkalinity", "5.0 - 25 gpl"],
  ["Specific Gravity", "1.00 - 1.250"],
  ["Chlorine Content (% w/w)", "2% to 14%"],
  ["Na2CO3", "0 to 8 gpl"],
  ["Storage", "Cool, ventilated area"],
];

const packaging = [
  { size: "50 L", title: "HDPE Carboys", desc: "Ideal for smaller industrial and commercial requirements." },
  { size: "200 L", title: "HDPE Barrels", desc: "Standard packaging for mid-volume industrial users." },
  { size: "1,000 L", title: "IBC Tanks", desc: "Efficient bulk packaging for large industrial operations." },
  { size: "5-20 KL", title: "Bulk Tanker", desc: "Direct tanker supply for high-volume continuous requirements." },
];

const applications = [
  "Water Treatment Plants", "Swimming Pools", "Textile & Bleaching Industry",
  "Paper & Pulp Industry", "Food Processing & Sanitation", "Hospital & Healthcare Disinfection",
  "Municipal Water Supplies", "Agrochemical Equipment Sterilization",
];

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero py-20 text-white md:py-28">
        <div className="container-page relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Sodium Hypochlorite Solution
              <span className="mt-2 block text-xl font-medium text-white/70">Soda Bleach Lye · 2%-14% w/w</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">Premium quality NaOCl manufactured in Dahej, Gujarat.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src={productImg} alt="Sodium hypochlorite solution" width={1200} height={900} className="relative aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">High-purity NaOCl for every industrial need</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>H. K. Chemicals Industries manufactures high-quality <strong className="text-navy">Sodium Hypochlorite (Soda Bleach Lye)</strong> at our facility in Dahej, Gujarat.</p>
              <p>We supply NaOCl solutions across 2% to 14% (w/w) concentration range for domestic and export markets.</p>
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-ice p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Key Applications</h3>
            <ul className="mt-4 space-y-2.5">
              {applications.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm">
                  <Droplets className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {a}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-navy py-20 text-white md:py-28">
        <div className="container-page">
          <div className="mb-12 flex items-center gap-3">
            <Beaker className="h-6 w-6 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Technical Specifications</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {specs.map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-widest text-white/60">{k}</div>
                <div className="mt-2 text-xl font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl text-center">Packaging options</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packaging.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-6 hover:border-accent">
                <div className="text-4xl font-bold text-accent">{p.size}</div>
                <h3 className="mt-3 text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}