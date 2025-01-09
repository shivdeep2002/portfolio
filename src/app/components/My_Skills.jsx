import Image from "next/image";

const MySkills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5.png",
    },
    { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
      name: "React JS",
      icon: "https://img.icons8.com/plasticine/100/000000/react.png",
    },
    {
      name: "Next JS",
      icon: "https://www.svgrepo.com/show/368858/nextjs.svg",
    },
    {
      name: "React Native ",
      icon: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/material-outlined/24/000000/github.png",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python.png",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
    },
  ];

  return (
    <div className="font-bold">
      <span className="flex justify-center ">
        <span className="relative group text-2xl  ">
          My Skills
          <span className="absolute w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full -bottom-1 left-0"></span>{" "}
        </span>{" "}
      </span>

      <div className="text-white p-5 grid grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 rounded-full group" // Added 'group' to scope hover state to children
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="mt-2 text-sm relative ">
              {skill.name}
              <span className="absolute w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full -bottom-1 left-0"></span>{" "}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
