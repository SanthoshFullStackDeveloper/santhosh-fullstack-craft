
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  Highly motivated Software Developer with 6 months of internship 
                  experience specializing in full-stack development and deployment. Proficient 
                  in a wide range of technologies, including Python, Django, Flask, PHP, Java, 
                  JavaScript, HTML, CSS, Bootstrap, React, and DBMS.
                </p>
                
                <ul className="list-disc list-inside space-y-3 mt-4 text-muted-foreground">
                  <li className="pl-2">
                    Successfully developed and hosted 4+ projects across various platforms, 
                    including PHP applications on GoDaddy, WordPress websites on Hostinger, 
                    and a Python-based Flask project with server setup and IP mapping via NAT.
                  </li>
                  <li className="pl-2">
                    Passionate about delivering efficient, scalable, and innovative software 
                    solutions. Currently seeking an entry-level software development position 
                    to contribute and grow within a dynamic team environment.
                  </li>
                  <li className="pl-2">
                    Received a Certificate of Appreciation during the 4th month of internship 
                    at Cyberjeet Pvt. Ltd. for outstanding performance and contributions to 
                    product development.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-sm py-1">Python</Badge>
              <Badge variant="outline" className="text-sm py-1">Django</Badge>
              <Badge variant="outline" className="text-sm py-1">Flask</Badge>
              <Badge variant="outline" className="text-sm py-1">PHP</Badge>
              <Badge variant="outline" className="text-sm py-1">Java</Badge>
              <Badge variant="outline" className="text-sm py-1">JavaScript</Badge>
              <Badge variant="outline" className="text-sm py-1">HTML</Badge>
              <Badge variant="outline" className="text-sm py-1">CSS</Badge>
              <Badge variant="outline" className="text-sm py-1">React</Badge>
              <Badge variant="outline" className="text-sm py-1">MySQL</Badge>
              <Badge variant="outline" className="text-sm py-1">SQLite</Badge>
              <Badge variant="outline" className="text-sm py-1">WordPress</Badge>
              <Badge variant="outline" className="text-sm py-1">Git/GitHub</Badge>
            </div>
          </div>
          
          <div className="md:col-span-4 space-y-4">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">Languages</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>English</span>
                      <span className="text-muted-foreground text-sm">Intermediate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Tamil</span>
                      <span className="text-muted-foreground text-sm">Native</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Marathi</span>
                      <span className="text-muted-foreground text-sm">Native</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">Contact Information</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>📞 +919080099127</p>
                  <p>📧 santhoshgowndamani@gmail.com</p>
                  <p>📍 Bengaluru, Karnataka 560068</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
