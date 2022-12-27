import React from "react";
import HeroImage from "../assets/aboutImg.avif";

const About = () => {
  return (
    <div
      name="about"
      className="border-b-[1px] border-gray-300 w-full h-screen bg-gray-200 text-white flex flex-col items-center justify-center mx-auto"
    >
      <div className="max-w-screen-lg p-4 flex flex-col justify-center gap-[10%] w-full h-full">
        <div className="mx-auto pb-8">
          <p className="text-3xl sm:text-5xl font-valera text-gray-700 font-bold inline ">
            About
          </p>
        </div>
        <div className="rounded-full h-[30%]">
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-md object-cover mx-auto h-full w-full"
          />
        </div>

        <div className="mx-auto">
          <p className="text-1xl mx-auto mt-2 font-lora text-gray-700">
            Hello! My name is Jackton Mtembete and I am a full stack developer
            with a passion for building beautiful and functional web
            applications. I have a strong foundation in frontend development,
            utilizing React and Tailwind CSS to create engaging user interfaces.
            On the backend, I have expertise in Node.js, Django and use MongoDB
            as my database of choice.
          </p>

          <br />

          <p className="text-1xl mx-auto font-lora text-gray-700">
            With a strong attention to detail and a desire to constantly learn
            and improve, I am confident in my ability to deliver high-quality
            software solutions for any project. In my free time, you can find me
            tinkering with new technologies and exploring the latest web
            development trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
