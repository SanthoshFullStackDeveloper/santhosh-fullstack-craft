
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from "lucide-react";

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
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu) => (
            <Card key={edu.id} className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <School className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{edu.duration}</span>
                    <span className="font-medium text-foreground">Grade: {edu.grade}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
