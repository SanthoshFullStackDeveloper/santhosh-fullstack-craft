
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="grid md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-5 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <a href="tel:+919080099127" className="hover:text-primary">+91 9080099127</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a href="mailto:santhoshgowndamani@gmail.com" className="hover:text-primary">
                        santhoshgowndamani@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div>Bengaluru, Karnataka 560068</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/santhoshfullstackdeveloper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary hover:bg-primary hover:text-white transition-colors p-3 rounded-full"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/santhosh-software-developer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary hover:bg-primary hover:text-white transition-colors p-3 rounded-full"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="mailto:santhoshgowndamani@gmail.com"
                      className="bg-secondary hover:bg-primary hover:text-white transition-colors p-3 rounded-full"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-7">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Job Opportunity"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
