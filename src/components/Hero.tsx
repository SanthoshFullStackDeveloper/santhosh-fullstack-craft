
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div
        className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-blue-100/30 dark:bg-blue-900/10 rounded-tl-[100%] z-0"
        aria-hidden="true"
      ></div>
      <div
        className="absolute left-0 top-0 w-1/3 h-1/3 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-br-[100%] z-0"
        aria-hidden="true"
      ></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-primary block">SANTHOSH G</span>
                <span className="block mt-2">Software Developer</span>
                <span className="text-muted-foreground block text-2xl md:text-3xl lg:text-4xl mt-2">
                  Full Stack Development
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl">
                Highly motivated developer with hands-on experience in building and 
                deploying web applications using a diverse tech stack.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <a
                href="https://www.linkedin.com/in/santhosh-software-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/santhoshfullstackdeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github />
              </a>
              <a
                href="mailto:santhoshgowndamani@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-border relative z-10 card-hover">
              <div className="flex items-center mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-1 font-mono text-sm">
                <p>
                  <span className="text-blue-600 dark:text-blue-400">const</span>{" "}
                  <span className="text-green-600 dark:text-green-400">developer</span> ={" "}
                  {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">name</span>:{" "}
                  <span className="text-amber-600 dark:text-amber-400">'Santhosh G'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">role</span>:{" "}
                  <span className="text-amber-600 dark:text-amber-400">'Software Developer'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">skills</span>:{" "}
                  [<span className="text-amber-600 dark:text-amber-400">'Python'</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-400">'Django'</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-400">'Flask'</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-400">'React'</span>,{" "}
                  <span className="text-amber-600 dark:text-amber-400">'PHP'</span>],
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">location</span>:{" "}
                  <span className="text-amber-600 dark:text-amber-400">'Bengaluru, Karnataka'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">experience</span>:{" "}
                  <span className="text-amber-600 dark:text-amber-400">'6 months'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">projects</span>:{" "}
                  <span className="text-amber-600 dark:text-amber-400">'4+'</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">status</span>:{" "}
                  <span className="text-amber-600 dark:text-amber-400">'Seeking new opportunities'</span>
                </p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
