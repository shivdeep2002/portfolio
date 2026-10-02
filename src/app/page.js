"use client";

import { useRef } from "react";

import About from "./components/About";
import MySkills from "./components/My_Skills";
import Navbar from "./components/Navebar";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });

  return (
    <div className="text-white">
      <div className="glass-surface fixed top-0 z-10 w-full border-x-0 border-t-0">
        <div className="max-w-[1400px] m-auto">
          <Navbar
            scrollToRef={scrollToRef}
            refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }}
          />
        </div>
      </div>
      <div ref={homeRef} className="glass-context bg-[#191f36] pt-[4rem]">
        <div className="max-w-[1400px] m-auto">
          <div className="pb-32">
            <HomePage />
          </div>
        </div>
      </div>
      <div ref={aboutRef} className="glass-context bg-[#262B40]">
        <div className="max-w-[1400px] m-auto py-36">
          <About scrollToRef={scrollToRef} refs={{ homeRef }} />
        </div>
      </div>
      <div ref={skillsRef} className="glass-context bg-[#191f36]">
        <div className="max-w-[1400px] m-auto py-32">
          <MySkills />
        </div>
      </div>
      <div ref={projectsRef} className="glass-context bg-[#262B40]">
        <div className="max-w-[1400px] m-auto py-28">
          <Projects />
        </div>
      </div>
      <div ref={contactRef} className="glass-context bg-[#191f36]">
        <div className="max-w-[1400px] m-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
