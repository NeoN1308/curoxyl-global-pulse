import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Truck, MapPin, CheckCircle2, Clock } from "lucide-react";

type Status = "Processing" | "Shipped" | "In Transit" | "Delivered";

const statusSteps: { status: Status; icon: typeof Clock; label: string }[] = [
  { status: "Processing", icon: Clock, label: "Processing" },
  { status: "Shipped", icon: Package, label: "Shipped" },
  { status: "In Transit", icon: Truck, label: "In Transit" },
  { status: "Delivered", icon: CheckCircle2, label: "Delivered" },
];

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [tracked, setTracked] = useState(false);
  const [currentStatus] = useState<Status>("In Transit");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim() && email.trim()) {
      setTracked(true);
    }
  };

  const statusIndex = statusSteps.findIndex((s) => s.status === currentStatus);

  return (
    <Layout>
      <section className="section-padding gradient-primary">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Track Your Order</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Enter your order details below to check the current status of your shipment.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-lg">
          <form onSubmit={handleTrack} className="bg-card rounded-xl p-8 card-elevated space-y-5">
            <div>
              <label htmlFor="orderId" className="block text-sm font-medium text-foreground mb-1.5">Order ID</label>
              <Input id="orderId" placeholder="e.g. CXL-2026-001234" value={orderId} onChange={(e) => setOrderId(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0">
              Track Order
            </Button>
          </form>

          {tracked && (
            <div className="mt-10 bg-card rounded-xl p-8 card-elevated animate-fade-in-up">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">Order Status</h3>
              <div className="flex items-center justify-between relative">
                {/* Progress line */}
                <div className="absolute top-6 left-6 right-6 h-0.5 bg-border" />
                <div
                  className="absolute top-6 left-6 h-0.5 gradient-primary transition-all duration-500"
                  style={{ width: `${(statusIndex / (statusSteps.length - 1)) * 100}%`, maxWidth: "calc(100% - 48px)" }}
                />

                {statusSteps.map((step, i) => {
                  const isActive = i <= statusIndex;
                  return (
                    <div key={step.status} className="relative z-10 flex flex-col items-center gap-2">
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center transition-colors ${isActive ? "gradient-primary" : "bg-muted"}`}>
                        <step.icon className={`h-5 w-5 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                      </div>
                      <span className={`text-xs font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-muted-foreground text-sm mt-8">
                Order <strong className="text-foreground">{orderId}</strong> is currently <strong className="text-primary">{currentStatus}</strong>.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TrackOrder;
