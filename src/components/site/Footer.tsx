import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-primary-foreground">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="" width={44} height={44} className="h-11 w-11 rounded-md bg-white/95 p-1" loading="lazy" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold">HK Chemicals</span>
                <span className="text-[11px] uppercase tracking-widest text-white/60">Industries</span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              India's trusted sodium hypochlorite manufacturer and exporter since 2012.
              Serving water treatment, textile, pharma, food processing and agrochemical industries from Dahej GIDC, Gujarat.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/products" className="hover:text-accent">Products</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>D-2/CH-214, Dahej GIDC, Ta. Vagra, Dist. Bharuch, Gujarat 392130</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+919825644881" className="hover:text-accent">+91 98256 44881</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:hk.chemicalsindustries@yahoo.in" className="break-all hover:text-accent">hk.chemicalsindustries@yahoo.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} H. K. Chemicals Industries. All rights reserved.</p>
          <p>GST-registered manufacturer · Dahej GIDC, Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}