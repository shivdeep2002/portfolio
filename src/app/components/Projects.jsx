import React from "react";
const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    image: "/image/img1.jpg",
  },
  {
    title: "Project 2",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: "/image/img2.jpg",
  },
  {
    title: "Project 3",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    image: "/image/img3.jpg",
  },
  {
    title: "Project 4",
    description: "Pellentesque in ipsum id orci porta dapibus.",
    image: "/image/img4.jpg",
  },
  {
    title: "Project 5",
    description:
      "Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    image: "/image/img5.jpg",
  },
  {
    title: "Project 6",
    description: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    image: "/image/img6.jpg",
  },
];

const Projects = () => {
  return (
    <div>
      <div className="flex justify-center mb-7">
        <h1 className="text-4xl font-bold">
          Latest <span className="text-blue-600">Projects</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-cover bg-center h-64 rounded-md shadow-md overflow-hidden"
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300 ease-in-out"></div>
            <div className="from-blue-600 bg-gradient-to-t w-full h-full opacity-0 group-hover:opacity-100">
              <div className="absolute bottom-0  left-0 p-4 w-full h-full flex flex-col justify-end  group-hover:translate-y-[-20px] transition duration-300 ease-in-out">
                <h2 className="text-xl font-bold text-white">
                  {project.title}
                </h2>
                <p className="text-gray-200">{project.description}</p>
                <button className="mt-4 bg-white text-black rounded-full px-4 py-2 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
