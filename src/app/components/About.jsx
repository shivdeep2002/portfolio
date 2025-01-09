import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-between font-bold">
        <div className="w-1/3">
          <Image
            src="/shivdeep.png"
            alt="hero"
            width={1000}
            height={1000}
            className="h-[500px]  border-8 border-blue-600 bg-black"
          />
        </div>
        <div className="w-1/2">
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold">About <span className="text-blue-600">Me</span></h1>
              <h2 className="text-2xl font-bold">Full Stack Developer Developer</h2>
              <p>
                Hello, I am Naveen singh. I am in my 3rd year at Makhanlal
                University. I am currently studying BCA. I am a passionate and
                driven individual with good leadership qualities and a deep
                enthusiasm for learning. I am a perpetual student, constantly
                seeking opportunities to expand my horizons and refine my skill
                set.
              </p>
              <div className="mt-5">
              <button className=" shadow-blue-600 rounded-lg px-8 bg-blue-600 py-3 ">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
