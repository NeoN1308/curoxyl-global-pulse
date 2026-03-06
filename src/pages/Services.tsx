import Layout from "@/components/Layout";
import { Brain, Monitor, Stethoscope, Cpu, Truck, Thermometer, FileCheck, Globe, Package, Scissors, ShieldCheck, HeartPulse, Activity, Tablet, Building } from "lucide-react";

const sections = [
  {
    title: "Medical Innovation",
    desc: "Development and integration of advanced medical technologies including AI-driven healthcare solutions, diagnostic devices, and wearable health monitoring systems.",
    color: "gradient-primary",
    items: [
      { icon: Brain, label: "AI-powered diagnostics" },
      { icon: Monitor, label: "Healthcare monitoring devices" },
      { icon: Stethoscope, label: "Clinical decision support systems" },
      { icon: Cpu, label: "Digital health technologies" },
    ],
  },
  {
    title: "Pharmaceutical Distribution",
    desc: "Reliable distribution of pharmaceutical products to hospitals, clinics, and healthcare providers around the world.",
    color: "bg-secondary",
    items: [
      { icon: Globe, label: "Global pharmaceutical sourcing" },
      { icon: Truck, label: "Supply chain management" },
      { icon: Thermometer, label: "Cold chain logistics" },
      { icon: FileCheck, label: "Regulatory compliance" },
    ],
  },
  {
    title: "Medical Supplies",
    desc: "Providing hospitals and clinics with essential medical consumables and healthcare supplies to ensure uninterrupted patient care.",
    color: "gradient-primary",
    items: [
      { icon: Scissors, label: "Surgical supplies" },
      { icon: Package, label: "Hospital consumables" },
      { icon: Stethoscope, label: "Diagnostic tools" },
      { icon: ShieldCheck, label: "PPE and sterile products" },
    ],
  },
  {
    title: "Medical Devices",
    desc: "Distribution and development of advanced medical devices used for diagnostics, patient monitoring, and hospital-grade technology.",
    color: "bg-secondary",
    items: [
      { icon: HeartPulse, label: "Diagnostic equipment" },
      { icon: Activity, label: "Patient monitoring systems" },
      { icon: Tablet, label: "Portable healthcare devices" },
      { icon: Building, label: "Hospital-grade technology" },
    ],
  },
];

const Services = () => (
  <Layout>
    <section className="section-padding gradient-primary">
      <div className="container mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Comprehensive healthcare solutions spanning innovation, distribution, supplies, and advanced medical devices.
        </p>
      </div>
    </section>

    {sections.map((section, idx) => (
      <section key={section.title} className={`section-padding ${idx % 2 === 0 ? "bg-background" : "bg-muted"}`}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{section.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{section.desc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {section.items.map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-6 card-elevated text-center">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <p className="font-medium text-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default Services;
