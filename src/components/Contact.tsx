import { Mail, Phone, Github, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <p className="text-primary font-medium mb-2 tracking-wide">Let's Connect</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something <span className="text-gradient">Amazing?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects. 
            Let's create something impactful together!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:mimi.somto1@gmail.com">
                <Mail size={20} />
                Send Me an Email
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="https://wa.me/2348068824305" target="_blank" rel="noopener noreferrer">
                <Phone size={20} />
                WhatsApp Me
              </a>
            </Button>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <a
              href="mailto:mimi.somto1@gmail.com"
              className="bg-card p-6 rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">mimi.somto1@gmail.com</p>
            </a>

            <a
              href="tel:+2348068824305"
              className="bg-card p-6 rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+234 806 882 4305</p>
            </a>

            <a
              href="https://github.com/Onodingene"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Github className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground">@Onodingene</p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 Onodingene Somtochukwu. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
