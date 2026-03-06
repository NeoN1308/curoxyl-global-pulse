import Layout from "@/components/Layout";
import { Eye, Target, Lightbulb, Award, ShieldCheck, Globe, HeartPulse, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-healthcare.jpg";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Pioneering medical technologies that shape the future of healthcare." },
  { icon: Award, title: "Quality", desc: "Uncompromising standards across all our products and services." },
  { icon: ShieldCheck, title: "Reliability", desc: "Consistent, dependable healthcare solutions our partners trust." },
  { icon: Globe, title: "Global Impact", desc: "Extending healthcare accessibility to every corner of the world." },
  { icon: HeartPulse, title: "Patient-Centered Care", desc: "Every decision driven by the goal of improving patient outcomes." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutImg} alt="Medical research laboratory" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-primary opacity-85" />
      </div>
      <div className="container mx-auto section-padding relative z-10">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Curoxyl</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl">
          A healthcare solutions company focused on advancing global healthcare through innovation, distribution, and medical technology.
        </p>
      </div>
    </section>

    {/* Overview */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground mb-6">Company Overview</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Curoxyl Global Health Corp empowers hospitals, clinics, primary health centers, and medical distributors with innovative technologies, reliable pharmaceutical distribution, and high-quality medical supplies. We serve as a bridge between cutting-edge medical innovation and the healthcare providers who need it most.
        </p>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-card rounded-xl p-8 card-elevated">
          <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-5">
            <Eye className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To advance healthcare accessibility and innovation worldwide, ensuring every patient receives the quality care they deserve.
          </p>
        </div>
        <div className="bg-card rounded-xl p-8 card-elevated">
          <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-5">
            <Target className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To deliver reliable healthcare technologies, pharmaceutical distribution services, and medical supply solutions that improve patient care across the globe.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Future Goals */}
    <section className="section-padding gradient-primary">
      <div className="container mx-auto text-center max-w-3xl">
        <ArrowRight className="h-10 w-10 text-primary-foreground/80 mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Future Goals</h2>
        <p className="text-primary-foreground/80 text-lg leading-relaxed">
          We are committed to expanding healthcare technologies and improving medical accessibility worldwide through strategic partnerships, ongoing research, and an ever-growing distribution network.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
