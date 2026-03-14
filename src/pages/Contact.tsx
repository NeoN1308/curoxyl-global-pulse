import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Twitter, Instagram, Facebook, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you for reaching out. We'll get back to you soon!" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding gradient-primary">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Have a question or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-8">
                <a href="mailto:curoxylglobalhealthcorp@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                   curoxylglobalhealthcorp@gmail.com
                </a>
                <a href="tel:+918618381858" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  +91 86183 81858
                </a>
              </div>

              <h3 className="font-display font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Facebook, label: "Facebook" },
                ].map((s) => (
                  <a key={s.label} href="#" aria-label={s.label} className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 card-elevated space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <Input id="name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} />
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <Input id="contactEmail" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <Textarea id="message" placeholder="How can we help you?" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1000} />
              </div>
              <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0 gap-2">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
