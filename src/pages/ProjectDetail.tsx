import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Check, Lightbulb, Code, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import circlepayImg from "@/assets/project-circlepay.jpg";
import careconnectImg from "@/assets/project-careconnect.jpg";
import dentupImg from "@/assets/project-dentup.jpg";

interface ProjectData {
  title: string;
  subtitle: string;
  image: string;
  liveLink?: string;
  description: string;
  problem: string;
  features: string[];
  tech: string[];
  screenshots: string[];
  learnings: string[];
  impact: string;
}

interface ProjectsData {
  [key: string]: ProjectData;
}

const projectsData: ProjectsData = {
  circlepay: {
    title: "CirclePay",
    subtitle: "Digitizing Nigerian Group Savings",
    image: circlepayImg,
    description: `CirclePay is a revolutionary mobile and web application that digitizes the traditional Nigerian "Ajo" savings system. 
    This peer-to-peer savings platform empowers students and young entrepreneurs to build financial discipline and access capital for their ventures.`,
    problem: `Many Nigerian students and young entrepreneurs struggle to access traditional banking services or build savings discipline. 
    The traditional "Ajo" system - a rotating savings scheme - has been effective but relies on physical meetings and cash handling, 
    making it prone to fraud and inconvenience.`,
    features: [
      "Secure group savings with automated contributions",
      "Credit scoring system to build financial history",
      "Tiered payout structure for fair distribution",
      "Paystack integration for secure payments",
      "Real-time tracking of savings progress",
      "Push notifications for contribution reminders",
    ],
    tech: ["React Native", "NestJS", "PostgreSQL", "Paystack API", "PgAdmin", "JWT Authentication"],
    screenshots: [circlepayImg],
    learnings: [
      "Building secure financial applications with proper authentication",
      "Integrating African payment gateways like Paystack",
      "Designing intuitive mobile UX for diverse users",
      "Implementing credit scoring algorithms",
      "Managing complex state in React Native",
    ],
    impact: "Enabled over 10 students to save capital for entrepreneurship ventures",
  },
  careconnect: {
    title: "Supamart",
    subtitle: "We put the 'super' in supermarkets",
    image: careconnectImg,
    description: `Every morning, millions of small shop owners like Mama Tobi lose money — not because customers don't buy, but because they don't know what's selling.`,
    problem: `SupaMart is a mobile-first AI assistant that brings supermarket-level automation to small retailers.`,
    features: [
      "AI-powered sales forecasting",
      "Automated inventory management",
      "Personalized product recommendations",   
    ],
    tech: ["React Native", "Node.js", "Express", "SQLite", "JWT"],
    screenshots: [careconnectImg, careconnectImg],
    learnings: [
      "Building trust through UI/UX design",
      "Implementing secure artificial intelligence algorithms",
      "Working with NoSQL databases at scale",
      "Creating data visualization dashboards",
      "Understanding nonprofit sector needs",
    ],
    impact: "Building the future of B2B supermarket supply chain in Africa",
  },
  dentup: {
    title: "PatrickandJummys",
    subtitle: "Bakery e-commerce website",
    image: dentupImg,
    liveLink: "https://www.patrickandjummys.net/",
    description: `PatrickandJummys is an e-commerce website for a bakery business that offers a wide range of delicious baked goods.`,
    problem: `The bakery needed an online platform to showcase their products, manage orders, and provide a seamless shopping experience for customers.`,
    features: [
      "User-friendly product catalog with categories",
      "Secure user authentication and profiles",
      "Shopping cart and checkout process",
      "Order management system for admins",
      "Payment gateway integration",
      "Responsive design for mobile and desktop",
    ],
    tech: ["React", "Node.js", "Express", "Database", "REST API", "Authentication"],
    screenshots: [dentupImg],
    learnings: [
      "Building a full-stack e-commerce application",
      "Implementing secure user authentication",
      "Designing responsive UI for various devices",
      "Integrating payment gateways",
      "Managing product inventory and orders",
    ],
    impact: "Increased bakery sales by 30% within the first three months of launch",
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12 bg-hero">
        <div className="container mx-auto px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-primary font-medium mb-2 tracking-wide">Case Study</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{project.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>

              <div className="flex flex-wrap gap-4">
                {project.liveLink && (
                  <Button variant="hero" size="lg" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </Button>
                )}
                
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/Onodingene" target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-2" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full h-auto rounded-2xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Lightbulb className="text-primary" size={24} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">The Problem</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.problem}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Check className="text-primary" size={24} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">Key Features</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border"
                >
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-primary-foreground" size={14} />
                  </span>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Code className="text-primary" size={24} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">Technologies Used</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-3 bg-secondary text-secondary-foreground rounded-xl text-base font-medium shadow-soft"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold">What I Learned</h2>
            </div>
            <ul className="space-y-4">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary font-semibold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-card rounded-2xl border border-border shadow-soft">
              <p className="text-sm text-primary font-medium mb-2">Impact</p>
              <p className="text-lg font-semibold text-foreground">{project.impact}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Interested in working together?
          </h3>
          <p className="text-muted-foreground mb-8">
            Let's discuss how I can help bring your ideas to life.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:mimi.somto1@gmail.com">Get in Touch</a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;