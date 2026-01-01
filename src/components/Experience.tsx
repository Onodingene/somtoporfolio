import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer & Co-Founder",
      company: "CirclePay",
      period: "January 2025 – Present",
      description: [
        "Designed and developed CirclePay mobile/web applications using React Native, NestJS, and PostgreSQL",
        "Integrated Paystack for secure payments",
        "Implemented credit scoring and tiered payouts, enabling 10+ students to save capital for entrepreneurship",
      ],
    },
    {
      title: "Product Developer Intern",
      company: "Medplus Nigeria",
      period: "July 2025 – Present",
      description: [
        "Led product development for Shop Centre and Control Centre applications using React, Node.js, and MongoDB",
        "Optimized healthcare service delivery with 99% uptime",
        "Provided IT support and improved backend performance",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Venueri Africa",
      period: "June 2025 – Present",
      description: [
        "Built responsive web applications using Next.js and Tailwind CSS",
        "Integrated Firebase Authentication and Firestore for real-time data management",
        "Reduced load times by 20% through optimization",
      ],
    },
    {
      title: "Information Technology Intern",
      company: "Arthur Andersen Tax",
      period: "July 2024 – September 2024",
      description: [
        "Spearheaded development of a hotline web application using React.js, Express, and Node.js",
        "Created RESTful APIs to enhance employee user experience",
        "Deployed applications using Git and Heroku",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium mb-2 tracking-wide">Career Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey building impactful products across fintech, healthcare, and tech.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-pink-rose" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-20 pb-12 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 top-1 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-soft" />

                {/* Card */}
                <div className="bg-card-gradient p-6 rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
