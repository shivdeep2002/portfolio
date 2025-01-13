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
    <div className="min-h-[80vh] flex flex-col-reverse md:flex-row justify-center items-center gap-10 p-5 bg-[#191f36] text-white">
      <div className="h-full w-full flex  justify-center flex-col gap-3 font-bold">
        <h3 className="text-4xl">Hi, Myself</h3>
        <h1 className=" text-4xl md:text-6xl">Shivdeep Mishra</h1>
        <h4 className=" text-2xl md:text-3xl flex">
          And I'm a <TypeWriterEffect />
        </h4>
        <p className="">
          Hello, I am Shivdeep Mishra I have been working in the blockchain
          industry for the past two years. I am currently pursuing a Diploma in
          Computer Applications at Makhanlal University in Bhopal. With a solid
          foundation in computer applications and a keen interest in blockchain
          technologies, I am dedicated to continually enhancing my skills and
          knowledge in this fast-evolving field.
        </p>
        <div className="flex gap-3 w-full">
          <Link
            href="/https://github.com/shivdeep2002"
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
            href="https://www.instagram.com/iam__sachin__mishra/"
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
            href="https://www.linkedin.com/in/shivdeep-mishra/"
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
      <div className="flex justify-center items-center min-w-[30vw]">
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
