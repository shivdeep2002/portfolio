import Image from "next/image";
import React from "react";

const About = ({ refs, scrollToRef }) => {
  return (
    <div>
      <div className="flex gap-10 p-5 flex-col lg:flex-row items-center justify-between font-bold">
        <div className="">
          <Image
            src="/shivdeep.png"
            alt="hero"
            width={1000}
            height={1000}
            className=" h-[500px] sm:h-[600px] w-[450px] border-8 border-blue-900  bg-gray-500"
          />
        </div>
        <div className="lg:w-1/2">
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold">
                About <span className="text-blue-600">Me</span>
              </h1>
              <h2 className="text-2xl font-bold">
                Web and App Developer Developer
              </h2>
              <p>
                Hello, I am Shivdeep Mishra I have been working in the
                blockchain industry for the past two years. I am currently
                pursuing a Diploma in Computer Applications at Makhanlal
                University in Bhopal. With a solid foundation in computer
                applications and a keen interest in blockchain technologies, I
                am dedicated to continually enhancing my skills and knowledge in
                this fast-evolving field.
              </p>
              <div className="mt-5">
                <button
                  onClick={() => scrollToRef(refs.homeRef)}
                  className=" shadow-blue-600 rounded-lg px-8 bg-blue-600 py-3 "
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
