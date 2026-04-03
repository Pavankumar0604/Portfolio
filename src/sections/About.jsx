import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Animation for the title
    gsap.from(".about-title", {
      opacity: 0,
      y: -30,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 90%",
      },
    });

    // Animation for the image profile
    gsap.from(".about-image", {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 85%",
      },
    });

    // Static About image as per user request

    // Animation for the text content
    gsap.from(".about-text-content", {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-text-content",
        start: "top 85%",
      },
    });
  }, { scope: scrollRef });

  return (
    <section id="about" ref={scrollRef} className="py-20 bg-cosmic-bg overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5">
        {/* Centered Header (Matching Projects) */}
        <h2 className="about-title text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent mb-10 sm:mb-16 text-center w-full">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
          {/* Left: Profile Image */}
          <div className="md:w-5/12 w-full flex justify-center">
            <div className="about-image relative group" ref={imageRef}>
              {/* Cleaner Glow (No Blur Bleed) */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-green rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity duration-1000 shadow-[0_0_40px_rgba(217,119,6,0.1)] group-hover:shadow-[0_0_60px_rgba(217,119,6,0.2)]"></div>

              <div className="relative w-48 sm:w-64 md:w-80 rounded-2xl overflow-hidden shadow-xl border border-amber-200/10">
                <img
                  src="/images/projects/about.jpg"
                  alt="Penumuru Pavan Kumar"
                  className="w-full h-auto block"
                />
              </div>

              {/* Decorative Location Badge */}
              <div className="absolute -bottom-3 -right-3 bg-white/20 backdrop-blur-xl border border-white/30 px-3 py-1.5 rounded-xl shadow-lg shadow-black/10 hidden md:flex items-center gap-2 z-10">
                <span className="text-xs uppercase font-bold text-white-50/60 tracking-widest">Resident</span>
                <span className="text-sm text-neon-blue font-black">Bengaluru, IN</span>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="md:w-7/12 w-full about-text-content space-y-6">
            <div className="space-y-4">
              <div className="space-y-4 text-blue-50/70 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                <p>
                  I am <strong className="text-white-50 font-black">Penumuru Pavan Kumar</strong>, a Software Engineer at <strong>Mindmesh Solutions</strong>. I specialize in building high-performance digital products, ranging from scalable React web platforms to unified Android and iOS mobile experiences.
                </p>
                <p>
                  As the lead engineer for <strong>RoadRobos</strong>, I architected a complete mobility ecosystem with a focus on security, seamless UX, and efficient performance. I am passionate about writing clean code that translates complex requirements into intuitive technology.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-xs text-neon-blue font-bold uppercase tracking-[0.2em]">Background</span>
                  <span className="text-sm text-white-50/90 font-black">B.E. Computer Science, Anna University (8.65 CGPA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
