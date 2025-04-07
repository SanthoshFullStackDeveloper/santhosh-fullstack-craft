
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/animations";

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Sacred Heart College, Tirupattur, Tamil Nadu",
      duration: "August 2021 - April 2024",
      grade: "76% under Thiruvalluvar University",
    },
    {
      id: 2,
      degree: "Higher Secondary - State Board of School Exams",
      institution: "Dominic Savio Hr. Secondary School, Tirupattur - 635602",
      duration: "2020 - 2021",
      grade: "79%",
    },
    {
      id: 3,
      degree: "Matriculation (10th STD) - State Board of School Exams",
      institution: "Dominic Savio Hr. Secondary School, Tirupattur - 635602",
      duration: "2018 - 2019",
      grade: "66%",
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="bg-primary/10 p-2 rounded-full"
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(59, 130, 246, 0.25)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <School className="h-5 w-5 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{edu.institution}</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{edu.duration}</span>
                      <motion.span 
                        className="font-medium text-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        Grade: {edu.grade}
                      </motion.span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
