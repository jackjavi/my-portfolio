import React from "react";

import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import sql from "../assets/sql.png";
import nextjs from "../assets/nextjs.png";
import redux from "../assets/redux.webp";
import typescript from "../assets/typescript.webp";
import express from "../assets/express.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import git from "../assets/git.png";

const Experience = () => {
  const techs = [
    {
      id: 0,
      src: html,
      title: "HTML",
      style: "shadow-white",
    },
    {
      id: 1,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-white",
    },
    {
      id: 2,
      src: git,
      title: "Git",
      style: "shadow-white",
    },

    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-300",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-yellow-300",
    },
    {
      id: 5,
      src: express,
      title: "Express JS",
      style: "shadow-yellow-300",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 11,
      src: redux,
      title: "Redux",
      style: "shadow-white",
    },
    {
      id: 12,
      src: typescript,
      title: "TypeScript",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: mongo,
      title: "",
      style: "shadow-pink-400",
    },
    {
      id: 9,
      src: sql,
      title: "SQL",
      style: "shadow-pink-400",
    },
  ];

  return (
    <div
      name="Technologies"
      className="bg-gray-200 text-gray-700 w-full h-full border-b-[1px] border-gray-300 py-24"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div>
          <p className="text-3xl sm:text-5xl font-valera font-bold  p-2 inline">
            Technologies
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-gray-700">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
