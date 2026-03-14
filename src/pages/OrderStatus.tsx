import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Package, Truck, MapPin, CheckCircle2, Clock, AlertTriangle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

type Status = "Processing" | "Shipped" | "In Transit" | "Delivered";

interface OrderData {
  orderId: string;
  email: string;
  status: Status;
  estimatedDelivery: string;
  shippingCarrier: string;
  timeline: { label: string; date: string; completed: boolean }[];
}

const statusSteps: { status: Status; icon: typeof Clock; label: string }[] = [
  { status: "Processing", icon: Clock, label: "Processing" },
  { status: "Shipped", icon: Package, label: "Shipped" },
  { status: "In Transit", icon: Truck, label: "In Transit" },
  { status: "Delivered", icon: CheckCircle2, label: "Delivered" },
];

// Simulated order lookup
function getOrderData(orderId: string): OrderData | null {
  const id = orderId.trim().toUpperCase();
  if (!id || id.length < 3) return null;

  // Deterministic demo data based on order ID hash
  const hash = id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const statuses: Status[] = ["Processing", "Shipped", "In Transit", "Delivered"];
  const carriers = ["FedEx", "DHL Express", "Blue Dart", "DTDC"];
  const statusIdx = hash % 4;

  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + (7 - statusIdx * 2));

  const timeline = statusSteps.map((step, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (3 - i));
    return {
      label: step.label,
      date: i <= statusIdx ? d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "—",
      completed: i <= statusIdx,
    };
  });

  return {
    orderId: id,
    email: "customer@example.com",
    status: statuses[statusIdx],
    estimatedDelivery: deliveryDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    shippingCarrier: carriers[hash % carriers.length],
    timeline,
  };
}

const statusColor: Record<Status, string> = {
  Processing: "bg-amber-500/15 text-amber-700 border-amber-300",
  Shipped: "bg-blue-500/15 text-blue-700 border-blue-300",
  "In Transit": "bg-teal-500/15 text-teal-700 border-teal-300",
  Delivered: "bg-emerald-500/15 text-emerald-700 border-emerald-300",
};

const OrderStatus = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderid") || "";
  const order = getOrderData(orderId);

  const statusIndex = order ? statusSteps.findIndex((s) => s.status === order.status) : -1;
  const progressPercent = order ? ((statusIndex + 1) / statusSteps.length) * 100 : 0;

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding gradient-primary">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Order Status</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            {order ? `Tracking details for order ${order.orderId}` : "Order tracking results"}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-2xl">
          {!order ? (
            /* Not found */
            <Card className="text-center py-12 animate-fade-in-up">
              <CardContent className="flex flex-col items-center gap-4 pt-6">
                <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Order Not Found</h2>
                <p className="text-muted-foreground max-w-md">
                  Order not found. Please check your Order ID and Email.
                </p>
                <Button asChild className="mt-4 gradient-primary text-primary-foreground border-0">
                  <Link to="/track-order">Try Again</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6 animate-fade-in-up">
              {/* Order Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl flex items-center justify-between flex-wrap gap-3">
                    <span>Order Information</span>
                    <Badge className={statusColor[order.status]}>{order.status}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Order ID</span>
                    <p className="font-semibold text-foreground">{order.orderId}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Email</span>
                    <p className="font-semibold text-foreground">{order.email}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Estimated Delivery</span>
                    <p className="font-semibold text-foreground">{order.estimatedDelivery}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Shipping Carrier</span>
                    <p className="font-semibold text-foreground">{order.shippingCarrier}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Tracker */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl">Delivery Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Progress value={progressPercent} className="h-2 [&>div]:bg-green-500" />

                  <div className="flex items-center justify-between">
                    {statusSteps.map((step, i) => {
                      const isActive = i <= statusIndex;
                      return (
                        <div key={step.status} className="flex flex-col items-center gap-2 flex-1">
                          <div
                            className={`h-11 w-11 rounded-full flex items-center justify-center transition-colors ${
                              isActive ? "bg-green-500" : "bg-muted"
                            }`}
                          >
                            <step.icon className={`h-5 w-5 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                          </div>
                          <span className={`text-xs font-medium text-center ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                            {step.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl">Tracking Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="relative border-l-2 border-border ml-3 space-y-6">
                    {order.timeline.map((event, i) => (
                      <li key={i} className="ml-6">
                        <span
                          className={`absolute -left-[9px] h-4 w-4 rounded-full border-2 ${
                            event.completed
                           ? "bg-green-500 border-green-500"
                           : "bg-muted border-border"
                          }`}
                        />
                        <p className={`text-sm font-semibold ${event.completed ? "text-foreground" : "text-muted-foreground"}`}>
                          {event.label}
                        </p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Support */}
              <Card>
                <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
                  <p className="text-sm text-muted-foreground">Need help with your order?</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:info@curoxyl.com">
                        <Mail className="h-4 w-4 mr-1" /> Email Support
                      </a>
                    </Button>
                    <Button size="sm" className="gradient-primary text-primary-foreground border-0" asChild>
                      <Link to="/contact">
                        <Phone className="h-4 w-4 mr-1" /> Contact Us
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default OrderStatus;
