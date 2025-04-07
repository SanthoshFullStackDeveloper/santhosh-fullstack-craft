
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground/5 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-medium text-lg">Santhosh G</p>
            <p className="text-muted-foreground text-sm">
              Software Developer (Full Stack Development)
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-6 pt-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-primary transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
