
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-title">Technical Skills</h2>
        
        <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="frontend">Client-Side</TabsTrigger>
            <TabsTrigger value="backend">Server-Side</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="tools">Tools & Deployment</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Client-Side Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["HTML", "CSS", "JavaScript", "Bootstrap", "React", "WordPress"].map((skill) => (
                    <div key={skill} className="skill-item">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="font-medium">{skill}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Expertise:</h4>
                  <p className="text-muted-foreground">
                    Responsive design, cross-browser compatibility, and creating visually appealing user interfaces.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="backend">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Server-Side Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Python", "Django", "Flask", "DjangoRest Framework", "PHP", "Java", "XML", "RESTful APIs"].map((skill) => (
                    <div key={skill} className="skill-item">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="font-medium">{skill}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Expertise:</h4>
                  <p className="text-muted-foreground">
                    Backend development, API creation and integration, and handling server-side logic efficiently.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="database">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Database Management</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["SQLite", "MySQL"].map((skill) => (
                    <div key={skill} className="skill-item">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="font-medium">{skill}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Expertise:</h4>
                  <p className="text-muted-foreground">
                    RDBMS, database design, query writing, and optimization.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tools">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Deployment & Tools</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Git/GitHub", 
                    "Unix/Linux", 
                    "XAMPP", 
                    "WAMP", 
                    "VS Code", 
                    "Postman", 
                    "Canva", 
                    "GoDaddy", 
                    "Hostinger"
                  ].map((skill) => (
                    <div key={skill} className="skill-item">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="font-medium">{skill}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Expertise:</h4>
                  <p className="text-muted-foreground">
                    Deployment and hosting (GoDaddy, Hostinger), server setup, IP mapping (NAT), 
                    and software lifecycle management.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Soft Skills</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible and adaptable in learning new technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Strong problem-solving and analytical skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Passionate about continuous improvement and innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Demonstrated ability to quickly learn and contribute to ongoing projects</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
