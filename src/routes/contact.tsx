import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, User } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HK Chemicals - Bulk Sodium Hypochlorite Enquiries" },
      { name: "description", content: "Contact H. K. Chemicals Industries for bulk sodium hypochlorite orders and export inquiries." },
    ],
    links: [{ rel: "canonical", href: "https://hkchemicals.in/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="gradient-hero py-20 text-white md:py-24">
        <div className="container-page">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Let's talk about your bulk NaOCl requirement.
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-soft text-accent"><MapPin className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-semibold text-navy">Office & Factory</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">D-2/CH-214, Dahej Industrial Estate, GIDC, Bharuch, Gujarat 392130, India</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-soft text-accent"><User className="h-5 w-5" /></span>
                <div className="w-full">
                  <h3 className="font-semibold text-navy">Speak to our team</h3>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Ashishkumar Naik</span>
                      <a href="tel:+919825644881" className="font-semibold text-navy hover:text-accent">+91 98256 44881</a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Kevanshi Naik</span>
                      <a href="tel:+917069003096" className="font-semibold text-navy hover:text-accent">+91 70690 03096</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://wa.me/919825644881" target="_blank" rel="noopener" className="flex items-center justify-between gap-4 rounded-2xl bg-navy p-6 text-white">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground"><MessageCircle className="h-5 w-5" /></span>
                <div>
                  <div className="font-semibold">Quick enquiry on WhatsApp</div>
                  <div className="text-sm text-white/70">Get an instant response</div>
                </div>
              </div>
              <span className="text-sm font-semibold text-accent">Chat</span>
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">Request a quote</h2>
            {submitted ? (
              <div className="mt-8 rounded-xl border border-accent/40 bg-teal-soft p-6 text-center">
                <div className="text-lg font-semibold text-navy">Thank you - we've received your enquiry.</div>
                <p className="mt-2 text-sm text-muted-foreground">Our team will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Company Name" name="company" required />
                <Field label="Email Address" name="email" type="email" required />
                <Field label="Phone Number" name="phone" type="tel" required />
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-navy" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} className="mt-1.5 w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm" />
                </div>
                <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field(props: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={props.name} className="text-sm font-medium text-navy">{props.label}</label>
      <input id={props.name} name={props.name} type={props.type ?? "text"} required={props.required} className="mt-1.5 w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm" />
    </div>
  );
}