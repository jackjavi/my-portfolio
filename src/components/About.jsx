import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="border-b-[1px] border-gray-300 w-full h-screen bg-gray-200 text-white flex flex-col items-center justify-center mx-auto"
    >
      <div className="max-w-screen-lg p-4 flex flex-col justify-center gap-[10%] w-full h-full">
        <div className="mx-auto pb-8">
          <p className="text-3xl sm:text-5xl font-valera text-gray-700 font-bold inline border-b-4 border-gray-700">
            About
          </p>
        </div>

        <div className="mx-auto">
          <p className="text-1xl mx-auto mt-2 font-lora text-gray-700">
            Hello, I am an IT professional who has a significant commitment to
            delivery of high quality web applications with beautiful UI.
          </p>

          <br />

          <p className="text-1xl mx-auto font-lora text-gray-700">
            I have amassed great skills in the field of IT and web development
            since pursuing a degree in Information Technology way back in 2015
            before later graduating (December 2021) and specializing in
            full-stack web development [MERN Stack]. I provide complete
            solutions to my clients and turn their ideas into complete web apps
            and provide them regular support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
