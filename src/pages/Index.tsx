import { useEffect, useRef, useState } from "react";
import {
  Wrench, Gauge, Zap, Disc3, Battery, Droplets, Wind, Cog, Car,
  Phone, MessageCircle, MapPin, Clock, Mail, ArrowRight, Sparkles,
  ShieldCheck, Cpu, Activity, Star, Send, Menu, X,
} from "lucide-react";
import heroImg from "@/assets/hero-garage.jpg";
import diagnosticsImg from "@/assets/diagnostics.jpg";
import workshopImg from "@/assets/workshop.jpg";

const SERVICES = [
  { icon: Disc3, name: "ABS & Brakes", desc: "Anti-lock brake systems and full brake service." },
  { icon: Cpu, name: "Computer Diagnostics", desc: "AI-assisted multi-system electronic diagnostics." },
  { icon: Zap, name: "Electrical Systems", desc: "Charging, wiring & electronic control units." },
  { icon: Droplets, name: "Fluid Flushes", desc: "Coolant, transmission, brake & power steering." },
  { icon: Cog, name: "Fuel Injection", desc: "Injector cleaning, calibration & fuel system care." },
  { icon: Wind, name: "Cooling & Exhaust", desc: "Radiators, hoses, mufflers & emission tuning." },
  { icon: Gauge, name: "Suspension & Struts", desc: "Shocks, struts and ride-height precision." },
  { icon: Car, name: "Tires & Balancing", desc: "Replacement, rotation & dynamic balancing." },
  { icon: Wrench, name: "Tune-Ups & Oil", desc: "Scheduled maintenance & filter changes." },
];

const PACKAGE_FEATURES = [
  "Check fluid levels",
  "Tire rotation",
  "Tire pressure & tread depth",
  "Brake system inspection",
  "Battery health check",
  "Belts and hoses inspection",
  "Lights & signal operation",
  "Air & cabin filter check",
  "Complimentary car wash & vacuum",
];

const BRANDS = ["Audi", "BMW", "Fiat", "Mercedes Benz", "Mercedes Sprinter", "Mini", "Smart", "Volkswagen"];

const STATS = [
  { value: "12K+", label: "Vehicles Serviced" },
  { value: "8", label: "Luxury Brands" },
  { value: "98%", label: "Customer Trust" },
  { value: "24/7", label: "Roadside Support" },
];

const TESTIMONIALS = [
  { name: "Arjun M.", car: "BMW 530i", text: "The diagnostics were spot on. Felt like driving a brand-new car after the service." },
  { name: "Sneha R.", car: "Mercedes GLA", text: "Premium experience from booking to delivery. The Road Trip package is a steal." },
  { name: "Vikram K.", car: "Audi Q5", text: "Finally a workshop that handles luxury vehicles with the precision they deserve." },
];

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let x = 0, y = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      el.style.transform = `translate3d(${x - 150}px, ${y - 150}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[300px] w-[300px] rounded-full opacity-60 mix-blend-screen hidden md:block"
      style={{ background: "radial-gradient(circle, oklch(0.72 0.19 50 / 0.35), transparent 65%)" }}
      aria-hidden
    />
  );
}

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50 supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 rounded-md bg-gradient-fire grid place-items-center shadow-fire">
            <Wrench className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl tracking-wider hidden sm:inline-block">SPANNERS</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Services", "Package", "Diagnostics", "Brands", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <a
            href="tel:+917025339080"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-fire px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-fire hover:scale-105 transition-transform"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Book Service
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-4">
            {["Services", "Package", "Diagnostics", "Brands", "Contact"].map((l) => (
              <a 
                key={l} 
                href={`#${l.toLowerCase()}`} 
                className="text-lg font-medium text-muted-foreground hover:text-primary py-2 border-b border-border/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Futuristic car service garage" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl animate-float-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-widest text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" /> AI-Powered Automotive Intelligence
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.9] mb-6">
            Precision repairs.<br />
            <span className="text-gradient-fire">Powerful performance.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-10">
            A next-generation automotive ecosystem. Cinematic diagnostics, luxury-brand servicing,
            and immersive vehicle care — engineered in Sultan Bathery.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#package" className="inline-flex items-center gap-2 rounded-full bg-gradient-fire px-7 py-4 font-semibold text-primary-foreground shadow-fire pulse-glow">
              Book a Service <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#diagnostics" className="inline-flex items-center gap-2 rounded-full border border-highlight/40 bg-highlight/5 px-7 py-4 font-semibold text-highlight hover:bg-highlight/10 transition">
              <Cpu className="h-4 w-4" /> AI Diagnostics
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-primary/60 pl-4">
                <div className="font-display text-3xl text-foreground">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] glow-orb opacity-50" aria-hidden />
    </section>
  );
}

function About() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative scanline rounded-2xl overflow-hidden border border-border">
          <img src={workshopImg} alt="Premium workshop" className="w-full h-[500px] object-cover" loading="lazy" width={1280} height={960} />
          <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-background/60 rounded-xl p-5 border border-primary/30">
            <div className="text-xs uppercase tracking-widest text-primary mb-1">Established in Kerala</div>
            <div className="font-display text-2xl">Engineering trust, one vehicle at a time.</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-3">About Spanners</div>
          <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
            A garage built for the <span className="text-gradient-fire">future of driving.</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            SPANNERS ALL CAR SERVICE blends precision engineering with cinematic garage aesthetics.
            From luxury European marques to family SUVs, every vehicle receives a holographic-grade
            inspection, certified mechanical expertise and a transparent service report.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, label: "Certified Technicians" },
              { icon: Activity, label: "Real-Time Reports" },
              { icon: Cpu, label: "AI Diagnostics" },
              { icon: Sparkles, label: "Luxury Detailing" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4">
                <f.icon className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 border-y border-border bg-gradient-night">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-3">Complete Automotive Care</div>
          <h2 className="font-display text-5xl md:text-6xl mb-4">Every system. <span className="text-gradient-fire">Engineered.</span></h2>
          <p className="text-muted-foreground">Mechanical, electrical, computerized — one workshop covers your entire vehicle ecosystem.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              className="border-glow group relative rounded-2xl bg-card/50 backdrop-blur-sm p-7 cursor-pointer animate-float-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute top-0 right-0 h-20 w-20 glow-orb opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-fire mb-5 shadow-fire">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-2 tracking-wide">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Package() {
  return (
    <section id="package" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest text-highlight mb-3">Featured Package</div>
          <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
            Road Trip <span className="text-gradient-fire">Ready.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            A complete pre-journey inspection covering nine critical checkpoints —
            so the only thing you think about is the road ahead.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {PACKAGE_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/20 grid place-items-center shrink-0">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+917025339080" className="inline-flex items-center gap-2 rounded-full bg-gradient-fire px-6 py-3 font-semibold text-primary-foreground shadow-fire">
              <Phone className="h-4 w-4" /> Call Store
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 font-semibold hover:border-primary transition">
              <MapPin className="h-4 w-4" /> View Store
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-fire opacity-20 blur-3xl rounded-full" aria-hidden />
          <div className="relative rounded-3xl border border-primary/40 bg-card/80 backdrop-blur-xl p-10 shadow-elevated">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Starting at</div>
                <div className="font-display text-6xl text-gradient-fire">$74.95+</div>
              </div>
              <div className="h-16 w-16 rounded-full bg-gradient-fire grid place-items-center shadow-fire animate-spin-slow">
                <Wrench className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Inspection Points</span>
                <span className="font-display text-2xl">9</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Estimated Time</span>
                <span className="font-display text-2xl">90 min</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Includes Wash</span>
                <span className="font-display text-2xl text-highlight">Yes</span>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-primary/10 border border-primary/30 p-4 text-sm">
              <Sparkles className="h-4 w-4 text-primary inline mr-2" />
              Complimentary interior vacuum & exterior wash with every booking.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Diagnostics() {
  return (
    <section id="diagnostics" className="relative py-24 border-y border-border bg-gradient-night">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden border border-highlight/30 scanline">
          <img src={diagnosticsImg} alt="AI diagnostics" className="w-full h-[500px] object-cover" loading="lazy" width={1280} height={960} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
          <div className="absolute top-6 left-6 right-6 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-highlight animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-highlight font-mono">SYSTEM ONLINE • SCANNING</span>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-highlight mb-3">AI Vehicle Diagnostics</div>
          <h2 className="font-display text-5xl md:text-6xl mb-6">
            Decode every <span className="text-gradient-fire">signal.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Our computerized inspection platform reads ECU data across 40+ subsystems and translates
            it into a plain-English vehicle health report — delivered to your phone in minutes.
          </p>
          <div className="space-y-4">
            {[
              { label: "Engine Health", value: 98 },
              { label: "Brake System", value: 92 },
              { label: "Battery & Charging", value: 87 },
              { label: "Suspension Wear", value: 76 },
            ].map((m, i) => (
              <div key={m.label} className="animate-float-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{m.label}</span>
                  <span className="font-display text-highlight">{m.value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-gradient-fire rounded-full" style={{ width: `${m.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="brands" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-16 text-center">
        <div className="text-xs uppercase tracking-widest text-primary mb-3">Brands We Service</div>
        <h2 className="font-display text-5xl md:text-6xl">Built for the <span className="text-gradient-fire">marques you love.</span></h2>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee gap-8 w-max">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <div key={i} className="shrink-0 w-64 h-32 rounded-2xl border border-border bg-card/40 backdrop-blur grid place-items-center hover:border-primary hover:shadow-fire transition-all">
              <span className="font-display text-3xl tracking-wider text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-24 border-y border-border bg-gradient-night">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-primary mb-3">Customer Trust Stories</div>
          <h2 className="font-display text-5xl md:text-6xl">Driven by <span className="text-gradient-fire">satisfaction.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card/50 p-7 backdrop-blur animate-float-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.car}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-primary mb-3">Booking & Contact</div>
          <h2 className="font-display text-5xl md:text-6xl mb-6">Let's get your <span className="text-gradient-fire">car on the lift.</span></h2>
          <p className="text-muted-foreground mb-8">Reach us by phone, WhatsApp or visit our garage in Sultan Bathery.</p>
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Phone", value: "+91 70253 39080", href: "tel:+917025339080" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: "https://wa.me/917025339080" },
              { icon: Mail, label: "Email", value: "info@spannersallcarservice.com", href: "mailto:info@spannersallcarservice.com" },
              { icon: MapPin, label: "Location", value: "Nenmeni, Sultan Bathery, Kerala, India" },
              { icon: Clock, label: "Hours", value: "Mon–Fri 8AM–7PM • Sat–Sun 9AM–5PM" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-start gap-4 rounded-xl border border-border bg-card/40 p-5 hover:border-primary transition">
                <div className="h-11 w-11 rounded-lg bg-gradient-fire grid place-items-center shrink-0 shadow-fire">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form
          className="rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-xl p-8 shadow-elevated"
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch shortly."); }}
        >
          <h3 className="font-display text-3xl mb-6">Book a Service</h3>
          <div className="space-y-4">
            <input required placeholder="Your name" className="w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition" />
            <input required type="tel" placeholder="Phone number" className="w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition" />
            <input placeholder="Vehicle (e.g. BMW 530i, 2021)" className="w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition" />
            <select className="w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition">
              <option>Service required</option>
              {SERVICES.map((s) => <option key={s.name}>{s.name}</option>)}
              <option>Road Trip Ready Package</option>
            </select>
            <textarea rows={4} placeholder="Tell us about your vehicle..." className="w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition resize-none" />
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-fire px-6 py-4 font-semibold text-primary-foreground shadow-fire hover:scale-[1.02] transition">
              Request Booking <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 sm:py-12 bg-gradient-night">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="h-12 w-12 sm:h-10 sm:w-10 rounded-md bg-gradient-fire grid place-items-center shadow-fire shrink-0">
            <Wrench className="h-6 w-6 sm:h-5 sm:w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div>
            <div className="font-display text-2xl sm:text-xl tracking-wider mb-1 sm:mb-0">SPANNERS ALL CAR SERVICE</div>
            <div className="text-sm sm:text-xs text-muted-foreground">Precision Repairs. Powerful Performance.</div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground mt-4 md:mt-0">© {new Date().getFullYear()} Spanners. All rights reserved.</div>
      </div>
    </footer>
  );
}

function ChatOrb() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-fire grid place-items-center shadow-fire pulse-glow hover:scale-110 transition-transform"
        aria-label="Open AI assistant"
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
      </button>
      {open && (
        <div className="fixed bottom-28 right-6 z-50 w-80 rounded-2xl border border-primary/40 bg-card/95 backdrop-blur-xl p-5 shadow-elevated animate-float-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-gradient-fire grid place-items-center shadow-fire">
              <Cpu className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display text-lg tracking-wide">SPANNERS AI</div>
              <div className="text-xs text-highlight flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-highlight animate-pulse" /> Motor Assistant Online
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-secondary/60 p-4 text-sm mb-3">
            Hi! I can help with maintenance tips, service bookings & vehicle health. How can I assist?
          </div>
          <a href="tel:+917025339080" className="block w-full text-center rounded-xl bg-gradient-fire px-4 py-3 text-sm font-semibold text-primary-foreground">
            Talk to a Technician
          </a>
        </div>
      )}
    </>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Package />
        <Diagnostics />
        <Brands />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatOrb />
    </div>
  );
}

export default Index;
