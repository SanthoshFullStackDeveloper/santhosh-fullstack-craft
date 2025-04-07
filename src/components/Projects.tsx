
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/animations";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Cyberjeet Company Portal",
      description: "Developed and deployed a comprehensive company portal showcasing services, team, and contact information.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "GoDaddy"],
      type: "Web Application",
      highlights: [
        "Responsive design for all device sizes",
        "Contact form with validation and email integration",
        "Content management features for easy updates",
      ]
    },
    {
      id: 2,
      title: "Shri Ekadanta E-commerce Platform",
      description: "Created and hosted an e-commerce website for product catalog, online ordering, and customer management.",
      technologies: ["WordPress", "WooCommerce", "CSS", "PHP", "Hostinger"],
      type: "E-commerce Website",
      highlights: [
        "Product catalog with filtering and search",
        "Secure payment gateway integration",
        "Order tracking and inventory management",
      ]
    },
    {
      id: 3,
      title: "GRC Application",
      description: "Built and deployed a Governance, Risk, and Compliance application with user roles, reporting, and dashboards.",
      technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
      type: "Web Application",
      highlights: [
        "User authentication and role-based access",
        "Dashboard with data visualization",
        "Server deployment with IP mapping via NAT",
      ]
    },
    {
      id: 4,
      title: "APLearnings Company Portal",
      description: "Designed and hosted a company portal for APLearnings with content management and service listings.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "GoDaddy"],
      type: "Web Application",
      highlights: [
        "Mobile-first responsive design",
        "Service showcase with detailed information",
        "Client testimonial management",
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Successfully developed and deployed 4+ projects across various platforms
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Card className="card-hover overflow-hidden h-full flex flex-col">
                <div className="h-2 bg-primary"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge>{project.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <h4 className="font-medium mb-2">Highlights:</h4>
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <motion.span 
                          className="text-primary mr-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          •
                        </motion.span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
