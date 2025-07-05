import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-5"
    >
      <div>
        <h1 className="text-3xl font-bold inline border-b-4 border-black">About</h1>
        <p className="py-3">
          Hello, I'm <strong>Aditya Thakur</strong>, an accomplished Full Stack Web Developer proficient in the MERN stack, passionate about building scalable web applications with modern tools like React.js, Node.js, MongoDB, and more. I am also well-versed in Generative AI and thrive in learning emerging technologies.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Education & Training</h1>
        <span>
          Full Stack Web Development Course, <strong>Masai School</strong>, April 2024 - Dec 2024<br />
          B.E. in Electronics Engineering, Kavikulguru Institute of Technology and Science, July 2017 - May 2022
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Skills & Expertise</h1>
        <span>
          JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, Python, Redux, Chakra UI, Docker, PostgreSQL, Git, TypeScript, Next.js. Strong in scalable architecture, debugging, performance optimization, and remote team collaboration.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Mission Statement</h1>
        <p>
          I have logged over 1200 hours of coding and 450+ hours in Data Structures and Algorithms, with 100 hours of soft skills development. I strive to build meaningful software that not only performs but also connects with users.
        </p>
      </div>
    </div>
  );
}

export default About;
