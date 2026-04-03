import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-14 sm:mt-20 section-padding xl:px-0 bg-cosmic-bg"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Work Experience"
          sub="💼 My Professional Journey"
        />
        <div className="mt-12 flex flex-col gap-8 relative z-50">
          {expCards.map((card) => (
            <div 
              key={card.title} 
              className="exp-card-wrapper flex flex-col xl:flex-row gap-6 items-center bg-white/40 p-5 md:p-6 rounded-2xl border border-black-50 backdrop-blur-xl hover:border-neon-blue/50 transition-all shadow-xl shadow-blue-500/5 group"
            >
              <div className="xl:w-1/4 w-full flex-center">
                <div className="relative group w-full h-24 sm:h-32 md:h-40 flex-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(0,198,255,0.1)] hover:shadow-[0_0_60px_rgba(0,198,255,0.2)] transition-all duration-500">
                  <img 
                    src={card.imgPath} 
                    alt="exp-logo" 
                    className="max-w-[70%] max-h-[70%] object-contain group-hover:scale-110 transition-transform duration-700 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] p-2" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="xl:w-3/4 w-full">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white-50 tracking-tight">{card.title}</h3>
                    <p className="text-neon-blue font-bold tracking-widest uppercase text-xs md:text-sm">{card.date}</p>
                  </div>
                  
                  <div className="bg-white/30 rounded-xl p-4 md:p-5 border border-black-50 shadow-inner">
                    <p className="text-blue-50 italic mb-3 leading-relaxed text-sm md:text-base">"{card.review}"</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {card.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex gap-2 items-start text-blue-50">
                          <span className="text-neon-blue mt-1 flex-shrink-0 text-[10px]">▹</span>
                          <span className="text-sm md:text-base leading-snug">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
