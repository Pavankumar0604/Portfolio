import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animations for each project card
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // Start earlier for better visibility
            toggleActions: "play none none none", // Once visible, keep it visible
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div id="projects" ref={sectionRef} className="app-showcase py-20 bg-cosmic-bg">
      <div className="w-full max-w-7xl mx-auto px-5" ref={containerRef}>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent mb-12 text-center w-full">
          Projects
        </h2>
        <div className="showcaselayout grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 bg-white/20 p-4 sm:p-5 md:p-7 rounded-2xl sm:rounded-[2rem] border border-white/10 backdrop-blur-2xl hover:border-neon-blue/40 transition-all duration-500 group shadow-2xl shadow-blue-500/10 items-center md:items-stretch ${index < 2 ? 'lg:col-span-2' : 'col-span-1 flex-col md:!flex-col'}`}
            >
              {/* Left Side: Image Showcase */}
              <div className={`w-full flex-center ${index < 2 ? 'md:w-5/12' : 'md:w-full mb-4'}`}>
                <div className="image-wrapper relative w-full aspect-video md:aspect-auto md:h-full min-h-[180px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 flex-center group cursor-pointer shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/15 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                  <img 
                    src={project.imgPath} 
                    alt={project.title} 
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-1000 filter drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)]" 
                  />
                </div>
              </div>
 
              {/* Right Side: Project Details */}
              <div className={`w-full flex flex-col justify-between py-1 ${index < 2 ? 'md:w-7/12' : 'md:w-full'}`}>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-neon-green bg-neon-green/10 px-3 py-1 rounded-full border border-neon-green/20">
                      {project.type}
                    </span>
                    <h3 className={`font-black text-white-50 leading-tight ${index < 2 ? 'text-lg sm:text-xl md:text-3xl' : 'text-lg sm:text-xl'}`}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-blue-100/80 text-sm mb-4 leading-snug font-medium line-clamp-2">
                    {project.shortTagline}
                  </p>
 
                  <ul className="flex flex-col gap-2 mb-6">
                    {project.description.slice(0, 2).map((point, i) => (
                      <li key={i} className="flex gap-2 items-start text-blue-50/70">
                        <span className="text-neon-blue mt-1.5 text-[10px]">▹</span>
                        <span className="text-sm md:text-base leading-tight font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
 
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-white/5 text-blue-50/90 px-3 py-1 rounded-lg text-xs font-bold border border-white/5 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
 
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  {project.liveLink !== "#" && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-neon-blue font-bold hover:text-white-50 transition-all duration-300">
                      <span className="text-xs md:text-sm uppercase tracking-tighter">Live Demo</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                  <a href={project.repoLink} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-blue-50/40 font-bold hover:text-neon-blue transition-all duration-300 border-l border-white/5 pl-4">
                    <span className="text-xs md:text-sm uppercase tracking-tighter">View Source</span>
                    <span className="opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
