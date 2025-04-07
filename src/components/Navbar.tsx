
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClick = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary">
          SANTHOSH G
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#contact">
            <Button>Contact Me</Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-6 md:hidden flex flex-col space-y-4">
            <a
              href="#about"
              className="nav-link"
              onClick={() => handleMobileMenuClick("about")}
            >
              About
            </a>
            <a
              href="#experience"
              className="nav-link"
              onClick={() => handleMobileMenuClick("experience")}
            >
              Experience
            </a>
            <a
              href="#skills"
              className="nav-link"
              onClick={() => handleMobileMenuClick("skills")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="nav-link"
              onClick={() => handleMobileMenuClick("projects")}
            >
              Projects
            </a>
            <a
              href="#education"
              className="nav-link"
              onClick={() => handleMobileMenuClick("education")}
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={() => handleMobileMenuClick("contact")}
            >
              <Button className="w-full">Contact Me</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
