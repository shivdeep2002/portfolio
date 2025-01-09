"use client";

import Image from "next/image";
import React, { useState } from "react";
import TypeWriterEffect from "./TypeWriterEffect";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState("");

  const handleMouseEnter = (icon) => {
    setIsHovered(icon);
  };

  const handleMouseLeave = (icon) => {
    setIsHovered("");
  };

  return (
    <div className="h-[80vh] flex bg-[#191f36] text-white">
      <div className="h-full w-full flex  justify-center flex-col gap-3 font-bold">
        <h3 className="text-4xl">Hi, Myself</h3>
        <h1 className="text-6xl">Shivdeep Mishra</h1>
        <h4 className="text-3xl flex">
          And I'm a <TypeWriterEffect />
        </h4>
        <p>
          Hello, I am Shivdeep mishra singh. I am in my 3rd year at Makhanlal
          University. I am currently studying BCA. I am a passionate and driven
          individual with good leadership qualities and a deep enthusiasm for
          learning. I am a perpetual student, constantly seeking opportunities
          to expand my horizons and refine my skill set.¸
        </p>
        <div className="flex gap-3 w-full">
          <Link
            href="/your-link-url"
            className={`border border-blue-600 p-2 rounded-full transition duration-300 ease-in-out ${
              isHovered === "github" ? "bg-blue-600 shadow-xl" : ""
            }`}
            onMouseEnter={() => handleMouseEnter("github")}
            onMouseLeave={() => handleMouseLeave("github")}
          >
            <FaGithub
              size={25}
              className={`text-blue-600 ${
                isHovered === "github" ? "text-white" : ""
              } `}
            />
          </Link>
          <Link
            href="/your-link-url"
            className={`border border-blue-600 p-2 rounded-full transition duration-300 ease-in-out ${
              isHovered === "instagram" ? "bg-blue-600 shadow-xl" : ""
            }`}
            onMouseEnter={() => handleMouseEnter("instagram")}
            onMouseLeave={() => handleMouseLeave("instagram")}
          >
            <LuInstagram
              size={25}
              className={`text-blue-600 ${
                isHovered === "instagram" ? "text-white" : ""
              } `}
            />
          </Link>
          <Link
            href="/your-link-url"
            className={`border border-blue-600 p-2 rounded-full transition duration-300 ease-in-out ${
              isHovered === "linkedin" ? "bg-blue-600 shadow-xl" : ""
            }`}
            onMouseEnter={() => handleMouseEnter("linkedin")}
            onMouseLeave={() => handleMouseLeave("linkedin")}
          >
            <FaLinkedin
              size={25}
              className={`text-blue-600 ${
                isHovered === "linkedin" ? "text-white" : ""
              } `}
            />
          </Link>
        </div>

        <div className="mt-5">
          {" "}
          <button className=" shadow-blue-600 rounded-lg px-8 bg-blue-600 py-3 ">
            Download CV
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-[30vw]">
        <div>
          <Image
            src="/shivdeep.png"
            alt="hero"
            width={1000}
            height={1000}
            className="rounded-full h-full  w-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
