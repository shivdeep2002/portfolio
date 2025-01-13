"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ scrollToRef, refs }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center h-16 text-xl font-semibold text-white relative shadow-sm font-geist-sans">
        <div
          className="pl-8 cursor-pointer"
          onClick={() => scrollToRef(refs.homeRef)}
        >
          Portfolio
        </div>
        <div
          className="px-4 cursor-pointer md:hidden"
          onClick={toggleMobileMenu}
        >
          {/* Mobile Menu Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full bg-gray-900 md:hidden flex-col items-start`}
        >
          <a
            className="p-4 w-full text-white"
            onClick={() => scrollToRef(refs.homeRef)}
          >
            Home
          </a>
          <a
            className="p-4 w-full text-white"
            onClick={() => scrollToRef(refs.aboutRef)}
          >
            About
          </a>
          <a
            className="p-4 w-full text-white"
            onClick={() => scrollToRef(refs.skillsRef)}
          >
            Skills
          </a>
          <a
            className="p-4 w-full text-white"
            onClick={() => scrollToRef(refs.projectsRef)}
          >
            Projects
          </a>
          <a
            className="p-4 w-full text-white"
            onClick={() => scrollToRef(refs.contactRef)}
          >
            Contact
          </a>
        </div>
        <div className="hidden pr-8 md:flex ">
          <div className="p-4" onClick={() => scrollToRef(refs.homeRef)}>
            Home
          </div>
          <div className="p-4" onClick={() => scrollToRef(refs.aboutRef)}>
            About
          </div>
          <div className="p-4" onClick={() => scrollToRef(refs.skillsRef)}>
            Skills
          </div>
          <div className="p-4" onClick={() => scrollToRef(refs.projectsRef)}>
            Projects
          </div>
          <div className="p-4" onClick={() => scrollToRef(refs.contactRef)}>
            Contact
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
