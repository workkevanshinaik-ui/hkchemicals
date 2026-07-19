import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label="HK Chemicals Home">
          <img src={logo} alt="" width={40} height={40} className="h-9 w-9 md:h-10 md:w-10" />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight text-navy md:text-base">HK Chemicals</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Industries</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground [&.active]:text-accent"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+919825644881" className="hidden items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent lg:inline-flex">
            <Phone className="h-3.5 w-3.5" /> +91 98256 44881
          </a>
          <Link to="/contact" className="hidden items-center rounded-md bg-navy px-4 py-2 text-sm font-semibold text-primary-foreground md:inline-flex">
            Get a Quote
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-muted [&.active]:text-accent"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-navy px-3 py-3 text-center text-sm font-semibold text-primary-foreground">
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}