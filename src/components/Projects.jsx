import React from "react";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://farm66.staticflickr.com/65535/52591715587_ca51b3c4d9_m.jpg",
      demo: "https://trending-trends.netlify.app",
      code: "https://github.com/jackjavi/blog-frontend",
      projectTitle: "A blog",
      projectDesc:
        "A blog project using React for the front-end, Node.js and MongoDB for the back-end, and Tailwind for styling.",
    },
    {
      id: 2,
      src: "https://farm66.staticflickr.com/65535/52648676210_456c8e5314_m.jpg",
      demo: "https://mipangilio.netlify.app",
      code: "https://github.com/jackjavi/blog-frontend",
      projectTitle: "A task manager",
      projectDesc:
        "A CRUD (Create, Read, Update, & Delete) task manager project using React for the front-end, Node.js and MongoDB for the back-end, and Tailwind for styling.",
    },
    {
      id: 3,
      src: "https://farm66.staticflickr.com/65535/52591692657_b4a89a7048_m.jpg",
      demo: "http://weatherdetector.pythonanywhere.com/",
      code: "https://github.com/jackjavi/Weather-app.git",
      projectTitle: "A Weather app",
      projectDesc:
        "This Django app allows users to search for and view the current weather for a particular city using data from the OpenWeatherMap API.",
    },
    {
      id: 4,
      src: "https://farm66.staticflickr.com/65535/52592715123_185c752875_m.jpg",
      demo: "http://chatplatform.pythonanywhere.com/",
      code: "https://github.com/jackjavi/chat-app.git",
      projectTitle: "A Chat app",
      projectDesc:
        "This is a simple web-based chat application built using the Django web framework and allows for real-time message updates.",
    },
    {
      id: 5,
      src: "https://farm66.staticflickr.com/65535/52592197886_261ec638c7_m.jpg",
      demo: "https://github.com/jackjavi/simple_shell.git",
      code: "https://github.com/jackjavi/simple_shell.git",
      projectTitle: "A Simple shell",
      projectDesc:
        "Simple shell also known as the shell is a simple command line prompt that takes the most basics of commands that are present in the bash shell and runs them. This shell was built as a project for Alx School.",
    },
    {
      id: 6,
      src: "https://farm66.staticflickr.com/65535/52592622860_b11d83744b_m.jpg",
      demo: "https://github.com/jackjavi/printf.git",
      code: "https://github.com/jackjavi/printf.git",
      projectTitle: "A printf project",
      projectDesc:
        "I wrote my own implementation of the printf function in c language. This printf was implemented as a project for Alx School.",
    },
  ];

  return (
    <div
      name="projects"
      className="border-b-[1px] border-gray-300  py-12 bg-gray-200 w-full text-gray-700 flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="py-6">
          <p className=" text-3xl sm:text-5xl font-bold font-valera inline ">
            Projects
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
                  <h5 className="text-md mx-auto font-bold mb-2 font-lora text-gray-700">
                    {projectTitle}
                  </h5>
                  <p className="text-sm font-josefin text-gray-700">
                    {projectDesc}
                  </p>
                </div>
                <div className="flex items-center justify-center font-lora">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
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
