import { Award, BookOpen, Users, Code } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Google Centenary Winner",
      description: "Developed Afara, an AI app converting Western music to Afrobeat",
    },
    {
      icon: Users,
      title: "LIHS Empowerment",
      description: "Organized hands-on learning for underprivileged girls",
    },
    {
      icon: BookOpen,
      title: "First Class Honors",
      description: "4.53/5.00 GPA at Pan Atlantic University",
    },
    {
      icon: Code,
      title: "Tech Mentor",
      description: "Hosting workshops on web & game dev for teens",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Text */}
          <div className="animate-fade-in">
            <p className="text-primary font-medium mb-2 tracking-wide">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Building <span className="text-gradient">Dreams</span> into Reality
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Onodingene Somtochukwu</span>, 
                a passionate full-stack developer and product builder currently pursuing my Bachelor's 
                in Computer Science at Pan Atlantic University (expected July 2026).
              </p>
              <p>
                My journey in tech is fueled by a deep passion for creating impactful solutions. 
                From fintech applications like <span className="text-primary">CirclePay</span> to 
                healthcare platforms like <span className="text-primary">CareConnect</span>, I focus on 
                building products that solve real problems.
              </p>
              <p>
                Beyond coding, I'm dedicated to empowering the next generation through tech mentorship, 
                having organized workshops for teens on web and game development. I believe in using 
                technology as a tool for positive change.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Next.js", "React Native", "Firebase"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Achievement Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-card-gradient p-6 rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <achievement.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
