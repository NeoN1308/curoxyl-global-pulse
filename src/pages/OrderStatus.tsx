import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Package, Truck, CheckCircle2, Clock, AlertTriangle, Mail, Phone } from "lucide-react";
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

// --- ADD YOUR REAL ORDERS HERE ---
const VALID_ORDERS: Record<string, OrderData> = {
  "DQDL": {
    orderId: "DQDL",
    email: "customer@example.com",
    status: "Shipped",
    estimatedDelivery: "22 Mar 2026",
    shippingCarrier: "DHL Express",
    timeline: [
      { label: "Processing", date: "15 Mar 2026", completed: true },
      { label: "Shipped", date: "17 Mar 2026", completed: true },
      { label: "In Transit", date: "—", completed: false },
      { label: "Delivered", date: "—", completed: false },
    ]
  },
  "CXL-2026-TEST": {
    orderId: "CXL-2026-TEST",
    email: "hitendra@curoxyl.com",
    status: "Processing",
    estimatedDelivery: "25 Mar 2026",
    shippingCarrier: "Blue Dart",
    timeline: [
      { label: "Processing", date: "18 Mar 2026", completed: true },
      { label: "Shipped", date: "—", completed: false },
      { label: "In Transit", date: "—", completed: false },
      { label: "Delivered", date: "—", completed: false },
    ]
  }
};

const statusSteps: { status: Status; icon: typeof Clock; label: string }[] = [
  { status: "Processing", icon: Clock, label: "Processing" },
  { status: "Shipped", icon: Package, label: "Shipped" },
  { status: "In Transit", icon: Truck, label: "In Transit" },
  { status: "Delivered", icon: CheckCircle2, label: "Delivered" },
];

const statusColor: Record<Status, string> = {
  Processing: "bg-amber-500/15 text-amber-700 border-amber-300",
  Shipped: "bg-blue-500/15 text-blue-700 border-blue-300",
  "In Transit": "bg-teal-500/15 text-teal-700 border-teal-300",
  Delivered: "bg-emerald-500/15 text-emerald-700 border-emerald-300",
};

const OrderStatus = () => {
  const [searchParams] = useSearchParams();
  const orderId = (searchParams.get("orderid") || "").toUpperCase().trim();
  const userEmail = (searchParams.get("email") || "").toLowerCase().trim();

  // Look up the order in our hardcoded list
  const order = VALID_ORDERS[orderId];

  // Verify that the order exists AND the email matches
  const isValid = order && order.email.toLowerCase() === userEmail;

  const statusIndex = isValid ? statusSteps.findIndex((s) => s.status === order.status) : -1;
  const progressPercent = isValid ? ((statusIndex + 1) / statusSteps.length) * 100 : 0;

  return (
    <Layout>
      <section className="section-padding gradient-primary">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Order Status</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            {isValid ? `Tracking details for order ${order.orderId}` : "Order tracking results"}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-2xl">
          {!isValid ? (
            /* Order Not Found View */
            <Card className="text-center py-12 animate-fade-in-up">
              <CardContent className="flex flex-col items-center gap-4 pt-6">
                <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Access Denied</h2>
                <p className="text-muted-foreground max-w-md">
                  We couldn't find an order with that ID and Email combination. Please check your details.
                </p>
                <Button asChild className="mt-4 gradient-primary text-primary-foreground border-0">
                  <Link to="/track-order">Try Again</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            /* Order Details View */
            <div className="space-y-6 animate-fade-in-up">
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
                    <span className="text-muted-foreground">Email Address</span>
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

              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl">Delivery Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Progress value={progressPercent} className="h-2 bg-muted rounded-full overflow-hidden [&>div]:bg-green-500" />
                  <div className="flex items-center justify-between">
                    {statusSteps.map((step, i) => {
                      const isActive = i <= statusIndex;
                      return (
                        <div key={step.status} className="flex flex-col items-center gap-2 flex-1">
                          <div className={`h-11 w-11 rounded-full flex items-center justify-center transition-colors ${isActive ? "bg-green-500" : "bg-muted"}`}>
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

              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-xl">Tracking Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="relative border-l-2 border-border ml-3 space-y-6">
                    {order.timeline.map((event, i) => (
                      <li key={i} className="ml-6">
                        <span className={`absolute -left-[9px] h-4 w-4 rounded-full border-2 ${event.completed ? "bg-green-500 border-green-500" : "bg-muted border-border"}`} />
                        <p className={`text-sm font-semibold ${event.completed ? "text-foreground" : "text-muted-foreground"}`}>{event.label}</p>
                        <p className="text-xs text-muted-foreground">{event.date}</p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
                  <p className="text-sm text-muted-foreground">Problem with your delivery?</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:curoxylglobalhealthcorp@gmail.com">
                        <Mail className="h-4 w-4 mr-1" /> Support
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