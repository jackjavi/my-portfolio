import React from "react";
import blog from "../assets/blog2.jpg";
import weather from "../assets/weather.jpg";
import chat from "../assets/chat.jpg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: blog,
      demo: "https://trending-trends.netlify.app",
      code: "https://github.com/jackjavi/blog-frontend",
      projectTitle: "A blog",
      projectDesc:
        "A blog project using React for the front-end, Node.js and MongoDB for the back-end, and Tailwind for styling.",
    },
    {
      id: 2,
      src: weather,
      demo: "https://trending-trends.netlify.app",
      code: "https://github.com/jackjavi/blog-frontend",
      projectTitle: "A Weather app",
      projectDesc:
        "This Django app allows users to search for and view the current weather for a particular city using data from the OpenWeatherMap API.",
    },
    {
      id: 3,
      src: chat,
      demo: "https://trending-trends.netlify.app",
      code: "https://github.com/jackjavi/blog-frontend",
      projectTitle: "A Chat app",
      projectDesc:
        "This is a simple web-based chat application built using the Django web framework and allows for real-time message updates.",
    },
  ];

  return (
    <div
      name="projects"
      className="border-b-[1px] border-gray-300  py-12 bg-gray-200 w-full text-gray-700 flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-3xl sm:text-5xl font-bold font-valera inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-1xl font-lora">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-0 sm:px-0">
          {portfolios.map(
            ({ id, src, demo, code, projectTitle, projectDesc }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
                <div className="bg-white  rounded-md h-[45%] ">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md object-cover mx-auto h-full w-full duration-200 hover:scale-105 "
                  />
                </div>

                <div className="px-4 pt-[5%] h-[30%]">
                  <h5 className="text-md mx-auto font-bold font-lora text-gray-700">
                    {projectTitle}
                  </h5>
                  <p className="text-sm font-lora text-gray-700">
                    {projectDesc}
                  </p>
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
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
