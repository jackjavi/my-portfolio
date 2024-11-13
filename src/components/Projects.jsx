import React from "react";
import pcc from "../assets/pcc.png";
import mm from "../assets/mediamarket.png";

const Projects = () => {
  const portfolios = [
    {
      id: 0,
      src: "http://res.cloudinary.com/popit/image/upload/v1728489107/xvpmnx0wyec5htydjaer.png",
      demo: "https://memories-crud.vercel.app",
      code: "https://github.com/jackjavi/memories-CRUD",
      projectTitle: "Memories Platform",
      projectDesc:
        "Memories is a platform where users can create, view, update, and delete their cherished memories. Built using Vite for a fast and efficient front-end, with Node.js and MongoDB powering the back-end, and styled with Tailwind CSS, this project allows users to seamlessly manage their personal memories.",
    },

    {
      id: 1,
      src: "http://res.cloudinary.com/popit/image/upload/v1728488754/zajohdohjpepxbfuoqpd.png",
      demo: "https://www.odd2tips.com/",
      code: "https://github.com/jackjavi/odd2tips",
      projectTitle: "Odd2Tips - (Reload after 50 seconds if demo doesn't load)",
      projectDesc:
        "Odd2Tips is a sports platform built with NextJS. It features automated social media integration, data scraping, and Generative AI (Gemini API) for creating unique, personalized content for users.",
    },
    {
      id: 2,
      src: "http://res.cloudinary.com/popit/image/upload/v1731482449/symdhkqx52povfxzitda.png",
      demo: "https://dudley-school.vercel.app/",
      code: "https://github.com/jackjavi/School-Management-System",
      projectTitle: "School Management System",
      projectDesc:
        "Streamline school management, class organization, and add students and faculty. Seamlessly track attendance, assess performance, and provide feedback. Access records, view marks, and communicate effortlessly. ",
    },
    {
      id: 3,
      src: mm,
      demo: "https://mediamarket.netlify.app/",
      code: "https://github.com/jackjavi/MediaMarket.git",
      projectTitle: "Media Market",
      projectDesc:
        "Your One-Stop shop for digital downloads. Media Market is a digital marketplace built with React, Node.js, and MongoDB.",
    },
    {
      id: 4,
      src: "http://res.cloudinary.com/popit/image/upload/v1728488887/j75td3ju1ok7isqlfo5p.png",
      demo: "https://prep-clone.vercel.app",
      code: "https://github.com/jackjavi/prep-clone",
      projectTitle: "Prep Clone",
      projectDesc:
        "Prep Clone is an interview preparation platform built with React, Node.js, and MongoDB. It offers users a variety of resources to prepare for interviews and enables Google Meet sessions for mock interviews between users, providing a hands-on experience for interview practice.",
    },
    {
      id: 5,
      src: pcc,
      demo: "https://precisionconsultingcompany.com/",
      code: "https://precisionconsultingcompany.com/",
      projectTitle: "Precision Consulting Company",
      projectDesc:
        "Precision Consulting Company is a research and statistical consulting firm built on WordPress, where I made significant contributions to the site's development. The platform showcases our expertise in providing data-driven insights and solutions for clients across various industries.",
    },
  ];

  return (
    <div
      name="projects"
      className="border-b-[1px] border-gray-300  py-12 bg-gray-200 w-full text-gray-700 flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="py-6 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-3xl sm:text-5xl font-bold font-valera inline mb-2 py-2">
              Projects
            </p>
            <p className="text-xs sm:text-sm md:text-lg font-light font-lora text-gray-700 py-2 text-center">
              Incase of an error while loading any of the projects'{" "}
              <span className="text-[tomato]">Demo</span>, refresh the page
              after 50 seconds (free server instance spins down)
            </p>
          </div>
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

                <div className="px-4 pt-[5%] h-[40%]">
                  <h5 className="text-md mx-auto font-bold mb-2 font-lora text-gray-700">
                    {projectTitle}
                  </h5>
                  <p
                    className="text-sm font-josefin text-gray-700
                  "
                  >
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
