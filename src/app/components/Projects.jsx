import Link from "next/link";
import React from "react";
const projects = [
  {
    title: "Catax",
    description:
      "Catax makes crypto tax calculations and audits easier. It does this by saving time and reducing errors while still producing correct, legal reports.",
    image: "/image/img1.jpg",
    path: "https://2024.catax.app/",
  },
  {
    title: "Retpro",
    description:
      "RetPro is a leading global platform for social networking, content sharing, and community engagement.",
    image: "/image/img2.jpg",
    path: "https://retired-but-ready.vercel.app/",
  },
  {
    title: "Concur",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    image: "/image/img3.jpg",
    path: "/projects/concur",
  },
  {
    title: "Coflex",
    description: "Coflex streamlines task management and collaboration, enhancing transparency and accountability for joint initiatives and mutual success.",
    image: "/image/img4.jpg",
    path: "/projects/coflex",
  },
  {
    title: "Operose",
    description:
      "Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    image: "/image/img5.jpg",
    path: "/projects/operose",
  },
  {
    title: "Castody",
    description: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    image: "/image/img6.jpg",
    path: "/projects/castody",
  },
];

const Projects = () => {
  return (
    <div className="px-5">
      <div className="flex justify-center mb-7">
        <h1 className="text-4xl font-bold">
          Latest <span className="text-blue-600">Projects</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-cover bg-center h-60 sm:h-64 rounded-md shadow-md overflow-hidden"
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300 ease-in-out"></div>
            <div className="from-blue-800 bg-gradient-to-t w-full h-full opacity-0 group-hover:opacity-100">
              <div className="absolute bottom-0  left-0 p-4 w-full h-full flex flex-col justify-end  group-hover:translate-y-[-20px] transition duration-300 ease-in-out">
                <h2 className="text-xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-gray-200">{project.description}</p>
                <Link
                  target="_blank"
                  href={project.path}
                  className="mt-4 text-center bg-white text-black rounded-full px-4 py-2 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
