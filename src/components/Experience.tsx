
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Full Stack Developer</CardTitle>
                  <Badge>Intern</Badge>
                </div>
                <div className="text-muted-foreground text-sm">June 2024 – January 2025</div>
              </div>
              <div className="font-medium mt-2">Cyberjeet Pvt Ltd</div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Completed a 6-month internship, gaining hands-on experience in web development, 
                deployment, and team collaboration. Contributed to various client-facing and 
                internal projects, applying a strong understanding of frontend and backend 
                technologies.
              </p>
              
              <h3 className="font-semibold text-lg mb-2">Key Achievements:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Developed and deployed a company portal using PHP, HTML, CSS, and 
                    JavaScript on GoDaddy for Cyberjeet.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Created and hosted an e-commerce website using WordPress on Hostinger 
                    for Shri Ekadanta, boosting online engagement.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Built and deployed a GRC (Governance, Risk, and Compliance) application 
                    using Python (Flask), including server deployment and IP mapping via NAT.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Designed and hosted another company portal using PHP, HTML, CSS, and 
                    JavaScript for APLearnings on GoDaddy.
                  </span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <div className="font-semibold">🏆 Recognition</div>
                <p className="text-muted-foreground">
                  Received a Certificate of Appreciation during the 4th month of internship for 
                  outstanding performance and contributions to product development. Recognized for 
                  showcasing creativity and expertise that significantly contributed to project success.
                </p>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">HTML/CSS</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Flask</Badge>
                <Badge variant="outline">WordPress</Badge>
                <Badge variant="outline">Web Deployment</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
