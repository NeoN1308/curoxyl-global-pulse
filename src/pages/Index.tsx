import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Lightbulb, Truck, Package, Globe, ShieldCheck, Handshake, Award, HeartPulse } from "lucide-react";
import heroImg from "@/assets/hero-healthcare.jpg";

const services = [
  { icon: Lightbulb, title: "Medical Innovation", desc: "AI-driven diagnostics, wearable health monitoring, and clinical decision support systems." },
  { icon: Truck, title: "Pharmaceutical Distribution", desc: "Reliable global pharmaceutical sourcing, supply chain management, and cold chain logistics." },
  { icon: Package, title: "Medical Supplies & Devices", desc: "Surgical supplies, diagnostic tools, patient monitoring systems, and PPE products." },
];

const trustItems = [
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous quality control at every stage of our supply chain." },
  { icon: Award, title: "Innovation", desc: "Continuous investment in cutting-edge medical technologies." },
  { icon: Handshake, title: "Trusted Partnerships", desc: "Collaborating with hospitals, clinics, and governments worldwide." },
  { icon: HeartPulse, title: "Reliability", desc: "Dependable healthcare solutions you can count on every day." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Modern hospital building representing healthcare innovation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-primary opacity-80" />
      </div>
      <div className="container mx-auto relative z-10 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-secondary-foreground/80 font-medium text-sm uppercase tracking-widest mb-4">Curoxyl Global Health Corp</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Advancing Healthcare Through Innovation, Distribution &amp; Technology
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
            Delivering reliable healthcare technologies, pharmaceutical distribution, and medical supply solutions that improve patient care worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services">
              <Button size="lg" variant="secondary" className="font-semibold">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="section-padding bg-background">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Who We Are
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Curoxyl Global Health Corp is a healthcare solutions company focused on innovation, medical technology, and global distribution. We empower hospitals, clinics, and healthcare providers with the tools and products they need to deliver exceptional patient care.
        </p>
        <Link to="/about">
          <Button variant="outline" className="border-primary text-primary hover:bg-accent">
            Learn More About Us
          </Button>
        </Link>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Our Core Services</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          From innovation to delivery — we cover the full spectrum of healthcare needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-8 card-elevated">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-5">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Global Reach */}
    <section className="section-padding gradient-primary">
      <div className="container mx-auto text-center max-w-3xl">
        <Globe className="h-12 w-12 text-primary-foreground/80 mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Global Reach</h2>
        <p className="text-primary-foreground/80 text-lg leading-relaxed">
          Our mission is to support hospitals and healthcare providers worldwide with reliable healthcare solutions. Through strategic partnerships and an extensive distribution network, we deliver quality medical products across continents.
        </p>
      </div>
    </section>

    {/* Trust */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Why Trust Curoxyl</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((t) => (
            <div key={t.title} className="text-center">
              <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <t.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
