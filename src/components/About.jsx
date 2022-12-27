import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pt-6 w-full h-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-5xl font-valera text-white font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-1xl mt-2 font-lora">
          Hello, I am an IT professional who has a significant commitment to
          delivery of high quality web applications with beautiful UI.
        </p>

        <br />

        <p className="text-1xl font-lora">
          I have amassed great skills in the field of IT and web development
          since pursuing a degree in Information Technology way back in 2015
          before later graduating (December 2021) and specializing in full-stack
          web development [MERN Stack]. I provide complete solutions to my
          clients and turn their ideas into complete web apps and provide them
          regular support.
        </p>
      </div>
    </div>
  );
};

export default About;
