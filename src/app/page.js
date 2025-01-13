"use client";

import React, { useRef } from "react";
import Image from "next/image";

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
      <div className="bg-[#191f36] fixed top-0 w-full z-10">
        <div className="max-w-[1400px] m-auto">
          <Navbar
            scrollToRef={scrollToRef}
            refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }}
          />
        </div>
      </div>
      <div ref={homeRef} className="bg-[#191f36] pt-[4rem]">
        <div className="max-w-[1400px] m-auto">
          <div className="pb-32">
            <HomePage />
          </div>
        </div>
      </div>
      <div ref={aboutRef} className="bg-[#262B40]">
        <div className="max-w-[1400px] m-auto py-36">
          <About scrollToRef={scrollToRef} refs={{ homeRef }} />
        </div>
      </div>
      <div ref={skillsRef} className="bg-[#191f36]">
        <div className="max-w-[1400px] m-auto py-32">
          <MySkills />
        </div>
      </div>
      <div ref={projectsRef} className="bg-[#262B40]">
        <div className="max-w-[1400px] m-auto py-28">
          <Projects />
        </div>
      </div>
      <div ref={contactRef} className="bg-[#191f36]">
        <div className="max-w-[1400px] m-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
