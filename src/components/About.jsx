import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, I am an IT professional who has a significant commitment to
          delivery of high quality web applications with beautiful UI.
        </p>

        <br />

        <p className="text-xl">
          I have amassed great skills in the field of IT and web development
          since pursuing a degree in Information Technology way back in 2015
          before later specializing in full-stack web development [MERN Stack].
          I provide complete solutions to my clients and turn their ideas into
          complete web apps and provide them regular support.
        </p>
      </div>
    </div>
  );
};

export default About;
