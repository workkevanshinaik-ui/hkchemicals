import { createFileRoute } from "@tanstack/react-router";
import { Building2, Compass, Factory, Train, Trophy, Ship, ShieldCheck, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-facility.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HK Chemicals - 25+ Years of NaOCl Manufacturing in Dahej" },
      { name: "description", content: "H. K. Chemicals Industries was founded in 2012 with 25+ years of sodium hypochlorite manufacturing experience. Learn about our Dahej GIDC facility." },
      { property: "og:url", content: "https://hkchemicals.in/about" },
    ],
    links: [{ rel: "canonical", href: "https://hkchemicals.in/about" }],
  }),
  component: AboutPage,
});

const advantages = [
  { icon: Factory, title: "Dahej GIDC Industrial Estate", desc: "Located in one of Gujarat's premier chemical manufacturing zones with world-class infrastructure." },
  { icon: Ship, title: "Near Dahej Deep-Water Port", desc: "Efficient export logistics to Middle East, Africa & Southeast Asia markets." },
  { icon: Compass, title: "National Highway Access", desc: "Direct NH-8 and DMIC corridor connectivity for seamless pan-India distribution." },
  { icon: Train, title: "Railway for Bulk Transport", desc: "Nearby railway connectivity supports bulk chemical transport to distant industrial zones." },
  { icon: Building2, title: "Gujarat Chemical Corridor", desc: "Part of a thriving ecosystem — direct access to raw materials and skilled workforce." },
  { icon: Sparkles, title: "35%+ of India's Chemical Output", desc: "Gujarat produces over a third of India's chemicals — scale infrastructure supports our growth." },
];

const values = [
  { title: "Quality First", desc: "Consistent quality in every batch — tested before dispatch." },
  { title: "Reliable Supply", desc: "25+ years of uninterrupted supply to our clients." },
  { title: "Honest Pricing", desc: "Direct manufacturer pricing without hidden costs." },
  { title: "Customer Focus", desc: "Building long-term partnerships through dedicated service." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden gradient-hero py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1200} />
        </div>
        <div className="container-page relative">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">About Us</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            25+ years of trusted sodium hypochlorite manufacturing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Delivering quality NaOCl from Dahej, Gujarat to industries across India and worldwide.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Story</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">From vision to India's trusted NaOCl supplier</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p><strong className="text-navy">HK Chemicals Industries</strong> was established in 2012 with a passion for becoming the largest sodium hypochlorite manufacturer in India.</p>
            <p>Located strategically in Dahej Industrial Estate near the port town of Bharuch, our facility benefits from excellent connectivity to major highways, railways, and the Dahej port.</p>
            <p>With 3,000+ metric tonnes monthly production capacity, we are among the largest sodium hypochlorite manufacturers in Gujarat.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-ice py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Founder</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">Ashishkumar Naik</h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">Founder & Director</p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Ashishkumar Naik founded this company with just an idea and a plot of land. Through his 25 years of experience, vision and dedication, he has built a substantial industry.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ice py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Strategic Advantage</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">Why India, why Dahej</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent">
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

      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Values</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl">The principles we work by</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-navy p-6 text-white">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-white/75">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}