import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize navigate
  const { toast } = useToast();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (orderId.trim() && email.trim()) {
      // Navigate to the status page and pass BOTH parameters
      // We use .trim() to prevent spaces from breaking the search
      navigate(`/order-status?orderid=${encodeURIComponent(orderId.trim())}&email=${encodeURIComponent(email.trim())}`);
    } else {
      toast({
        title: "Missing Information",
        description: "Please enter both your Order ID and Email.",
        variant: "destructive",
      });
    }
  };

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
              <Input 
                id="orderId" 
                placeholder="e.g. DQDL" 
                value={orderId} 
                onChange={(e) => setOrderId(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <Button type="submit" className="w-full gradient-primary text-primary-foreground border-0">
              Track Order
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Can't find your Order ID? Check your confirmation email or contact support.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TrackOrder;