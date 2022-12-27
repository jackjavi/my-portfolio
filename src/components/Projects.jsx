import React from "react";
import blog from "../assets/portfolio/blog-blog.PNG";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      demo: "https://trending-trends.netlify.app",
      code: "https://github.com/jackjavi/blog-frontend",
    },
  ];

  return (
    <div
      name="projects"
      className="h-full md:h-screen bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-5xl font-bold font-valera inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-1xl font-lora">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="bg-white">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
