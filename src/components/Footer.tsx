import { Link } from "react-router-dom";
import { HeartPulse, Mail, Phone, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <HeartPulse className="h-6 w-6 text-secondary" />
            <span className="font-display font-bold text-lg">Curoxyl</span>
          </Link>
          <p className="text-sm opacity-70 leading-relaxed">
            Advancing healthcare through innovation, distribution, and technology worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "Services", "About Us", "Track Order", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Services</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <span>Medical Innovation</span>
            <span>Pharmaceutical Distribution</span>
            <span>Medical Supplies</span>
            <span>Medical Devices</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <a href="mailto:curoxylglobalhealthcorp@gmail.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Mail className="h-4 w-4" /> curoxylglobalhealthcorp@gmail.com
            </a>
            <a href="tel:+918618381858" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Phone className="h-4 w-4" /> +918618381858
            </a>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" aria-label="LinkedIn" className="hover:opacity-100 transition-opacity"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:opacity-100 transition-opacity"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-100 transition-opacity"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:opacity-100 transition-opacity"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Curoxyl Global Health Corp. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
