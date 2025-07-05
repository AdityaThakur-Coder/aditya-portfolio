import React from "react";

const Portfolios = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://dummyimage.com/400x200/000/fff&text=Resume+Builder",
      name: "Resume Builder (React, Redux, Firebase)",
      description:
        "Built a dynamic resume generator with live preview, template switching, PDF download, and secure login.",
      demoLink:
        "https://masai-resume-builder-user-data.s3.ap-south-1.amazonaws.com/test/achievement/6613b378213132c820b8b2e5/iUMK.pdf",
      codeLink: "https://github.com/AdityaThakur-Coder",
    },
    {
      id: 2,
      src: "https://dummyimage.com/400x200/000/fff&text=TaskPro",
      name: "TaskPro (HTML, CSS, Firebase)",
      description:
        "A real-time task management system with task assignment, monitoring, and productivity enhancements.",
      demoLink: "https://carbon-neutral-coders-022.netlify.app/",
      codeLink: "https://github.com/Akashgupta857/carbon-neutral-coders_022",
    },
    {
      id: 3,
      src: "https://dummyimage.com/400x200/000/fff&text=Array+Archers",
      name: "Array Archers (React, Vercel)",
      description:
        "A collaborative problem-solving platform with real-time updates and elegant UI.",
      demoLink: "https://array-archers-023.vercel.app/",
      codeLink: "https://github.com/sayanroy-bash/Array-Archers_023",
    },
  ];

  return (
    <div name="portfolio" className="w-full text-white py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl text-black font-bold inline border-b-4 border-black">
            My Projects
          </h1>
          <p className="text-black py-6 text-lg">
            Explore my real-world software projects. Each solution reflects teamwork, tech stack mastery, and problem-solving.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
          {portfolios.map(({ id, src, name, description, demoLink, codeLink }) => (
            <div
              key={id}
              className="bg-gray-900 shadow-lg shadow-gray-700 rounded-lg overflow-hidden transform hover:scale-105 duration-300"
            >
              <img
                src={src}
                alt={name}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h2 className="text-xl font-semi text-center mb-2">{name}</h2>
                <p className="text-gray-400 text-sm text-center mb-4">{description}</p>
                <div className="flex justify-between space-x-2">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-500 hover:bg-blue-700 text-white text-center py-2 rounded-lg"
                  >
                    Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-700 text-white text-center py-2 rounded-lg"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolios;