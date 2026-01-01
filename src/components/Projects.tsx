import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import circlepayImg from "@/assets/project-circlepay.jpg";
import careconnectImg from "@/assets/project-careconnect.jpg";
import dentupImg from "@/assets/project-dentup.jpg";

const Projects = () => {
  const projects = [
    {
      id: "circlepay",
      title: "CirclePay",
      description: "A mobile app digitizing the Nigerian 'Ajo' system, supporting group savings and credit scoring for student entrepreneurs.",
      image: circlepayImg,
      tech: ["React Native", "NestJS", "PostgreSQL", "Paystack"],
      featured: true,
    },
    {
      id: "careconnect",
      title: "Supamart",
      description: "A mobile application for medium to small scale supermarkets that help them keep track of inventory and sales and provides AI insights.",
      image: careconnectImg,
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      featured: false,
    },
    {
      id: "dentup",
      title: "Patrick and Jummys",
      description: "An e-commerce website for a bakery business that allows users to browse products, place orders, and make payments online.",
      image: dentupImg,
      tech: ["React", "Node.js", "Express", "Database"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium mb-2 tracking-wide">My Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of applications I've built, from fintech solutions to healthcare platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 animate-scale-in ${
                project.featured ? "lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link
                    to={`/project/${project.id}`}
                    className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <Github size={18} className="text-muted-foreground hover:text-foreground" />
                    </button>
                    <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <ExternalLink size={18} className="text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
