import React from "react";

const techStack = [
  { id: 1, logo: "https://via.placeholder.com/100?text=HTML", name: "HTML" },
  { id: 2, logo: "https://via.placeholder.com/100?text=CSS", name: "CSS" },
  { id: 3, logo: "https://via.placeholder.com/100?text=JavaScript", name: "JavaScript" },
  { id: 4, logo: "https://via.placeholder.com/100?text=React", name: "ReactJS" },
  { id: 5, logo: "https://via.placeholder.com/100?text=Node", name: "NodeJS" },
  { id: 6, logo: "https://via.placeholder.com/100?text=Express", name: "ExpressJS" },
  { id: 7, logo: "https://via.placeholder.com/100?text=MongoDB", name: "MongoDB" },
  { id: 8, logo: "https://via.placeholder.com/100?text=MySQL", name: "MySQL" },
  { id: 9, logo: "https://via.placeholder.com/100?text=Python", name: "Python" },
  { id: 10, logo: "https://via.placeholder.com/100?text=Docker", name: "Docker" },
  { id: 11, logo: "https://via.placeholder.com/100?text=PostgreSQL", name: "PostgreSQL" },
  { id: 12, logo: "https://via.placeholder.com/100?text=Redux", name: "Redux" },
  { id: 13, logo: "https://via.placeholder.com/100?text=ChakraUI", name: "Chakra UI" },
];

function Experience() {
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold inline border-b-4 border-black">
          Technologies
        </h1>
        <p className="text-black py-3">
          These are technologies I work with frequently.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-3">
          {techStack.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-2 rounded-lg w-full h-[140px] shadow-md p-2 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                className="w-[60px] h-[60px] object-contain"
                alt={name}
              />
              <div className="text-black text-center mt-2 text-sm font-medium">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;