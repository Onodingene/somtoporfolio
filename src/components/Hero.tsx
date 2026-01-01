import { ArrowDown, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-hero flex items-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-rose/20 rounded-full blur-2xl animate-pulse-soft" />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <p className="text-primary font-medium mb-4 tracking-wide">Hello, I'm</p>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="text-foreground">Somtochukwu</span>
              <br />
              <span className="text-gradient">Onodingene</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              <span className="font-semibold text-foreground">Passion Beyond Code</span>
              <br />
              Full-stack developer & product builder crafting innovative fintech solutions.
              From Lagos to the world, I build apps that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:mimi.somto1@gmail.com">
                  <Mail size={18} />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/Onodingene" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  View GitHub
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-muted-foreground">
              <a
                href="tel:+2348068824305"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">+234 8068824305</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              
              {/* Image Container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={profilePhoto}
                  alt="Onodingene Somtochukwu - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-dark/40 to-transparent" />
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
