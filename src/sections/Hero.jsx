import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import bgImg from "../assets/images/bg.png";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src={bgImg} alt="" className="w-screen h-screen object-cover" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-full max-w-full md:px-20 px-5">
          <div className="flex flex-col gap-7 relative z-20">
            <div className="hero-text text-white-50">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <br />
                <span className="neon-text-blue">Pavan Kumar</span>
              </h1>
              <div className="mt-4 text-stone-600 font-medium">
                <p className="text-sm sm:text-base md:text-lg text-blue-50/90 leading-snug">
                  Software Engineer @ Mindmesh Solutions | Bengaluru
                </p>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap mt-4">
              {words.slice(0, 3).map((word, index) => (
                <div key={index} className="flex items-center gap-1.5 sm:gap-2 bg-amber-100/80 py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-full backdrop-blur-sm border border-amber-200 relative z-30">
                  <img src={word.imgPath} alt={word.text} className="w-4 h-4 sm:w-5 sm:h-5 opacity-70" />
                  <span className="text-xs sm:text-sm text-stone-700 font-medium">{word.text}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
