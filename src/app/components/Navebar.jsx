
"use client"
import Link from "next/link";
import React from "react";

const Navbar = ({ scrollToRef, refs }) => {
  return (
    <div>
      <nav className="flex justify-between items-center h-16 text-xl font-semibold text-white relative shadow-sm font-geist-sans">
        <div className="pl-8 cursor-pointer" onClick={() => scrollToRef(refs.homeRef)}>
          Portfolio
        </div>
        <div className="px-4 cursor-pointer md:hidden">
          {/* Mobile Menu Icon */}
        </div>
        <div className="pr-8 flex ">
          <div className="p-4 cursor-pointer" onClick={() => scrollToRef(refs.homeRef)}>
            Home
          </div>
          <div className="p-4 cursor-pointer" onClick={() => scrollToRef(refs.aboutRef)}>
            About
          </div>
          <div className="p-4 cursor-pointer" onClick={() => scrollToRef(refs.skillsRef)}>
            Skills
          </div>
          <div className="p-4 cursor-pointer" onClick={() => scrollToRef(refs.projectsRef)}>
            Projects
          </div>
          <div className="p-4 cursor-pointer" onClick={() => scrollToRef(refs.contactRef)}>
            Contact
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
