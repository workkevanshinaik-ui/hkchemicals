import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Beaker, CheckCircle2, Factory, Globe2, Phone, Ship, ShieldCheck, Truck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-facility.jpg";
import productImg from "@/assets/product-detail.jpg";
import waterImg from "@/assets/app-water.jpg";
import textileImg from "@/assets/app-textile.jpg";
import foodImg from "@/assets/app-food.jpg";
import poolImg from "@/assets/app-pool.jpg";
import pharmaImg from "@/assets/app-pharma.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HK Chemicals - Sodium Hypochlorite Manufacturer in Dahej, Gujarat" },
      { name: "description", content: "India's trusted sodium hypochlorite (NaOCl) manufacturer & exporter since 2012. 3,000+ MT monthly capacity from Dahej GIDC." },
    ],
    links: [{ rel: "canonical", href: "https://hkchemicals.in/" }],
  }),
  component: HomePage,
});

const stats = [
  { value: "2012", label: "Founded" },
  { value: "25+", label: "Years Experience" },
  { value: "3,000+", label: "MT Monthly" },
  { value: "Global", label: "Exports" },
];

const applications = [
  { title: "Water Treatment", desc: "Municipal & industrial purification", img: waterImg },
  { title: "Textile & Bleaching", desc: "Fabric bleaching & whitening", img: textileImg },
  { title: "Food Processing", desc: "CIP systems & sanitation", img: foodImg },
  { title: "Swimming Pools", desc: "Chlorination & maintenance", img: poolImg },
  { title: "Pharmaceutical", desc: "Cleanroom & GMP sanitation", img: pharmaImg },
  { title: "Paper & Pulp", desc: "Wood pulp bleaching", img: waterImg },
];

const advantages = [
  { icon: Award, title: "25+ Years Experience", desc: "Two decades of proven NaOCl manufacturing expertise." },
  { icon: Factory, title: "3,000+ MT Monthly", desc: "Massive production capacity for uninterrupted supply." },
  { icon: ShieldCheck, title: "GST Registered", desc: "Fully compliant with transparent pricing." },
  { icon: Ship, title: "Export Ready", desc: "Adjacent to Dahej deep-water port for efficient exports." },
  { icon: Beaker, title: "10-12%+ Concentration", desc: "Higher than industry standard for stronger dosing." },
  { icon: Truck, title: "50L to 20,000L", desc: "Flexible packaging from carboys to bulk tanker delivery." },
];

function HomePage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero text-white">
        <div className="absolute inset-0 opacity-25">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1200} />
        </div>
        <div className="container-page relative py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl md:text-6xl">
              India's most trusted <span className="text-accent">sodium hypochlorite</span> solution manufacturer.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              Supplying 3,000+ MT monthly from our Dahej GIDC facility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
                View Products
              </Link>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-white md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice py-20 md:py-28">
        <div className="container-page">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl text-center">Industries we serve</h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((a) => (
              <article key={a.title} className="group relative overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.img} alt={a.title} width={1200} height={900} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-navy">{a.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl text-center">Why HK Chemicals</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-soft text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 text-white md:py-24">
        <div className="container-page relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to place a bulk order?</h2>
            <p className="mt-3 max-w-xl text-white/75">Talk to our team for competitive pricing from our Dahej, Gujarat facility.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground">
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+919825644881" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white">
              <Phone className="h-4 w-4" /> +91 98256 44881
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}