import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import django from "../assets/django.png";
import TextAnimator from "./TextAnimator";

function Portfolio() {
  return (
    <div
      name="home"
      className="border-b-[1px] border-gray-300 flex flex-col items-center justify-center md:pt-0 pt-24 h-screen bg-gray-200"
    >
      <div className="text-2xl sm:text-4xl md:text-5xl font-lora font-bold text-gray-700 mb-6">
        <TextAnimator text="Hi, I'm Jackton Mtembete" />
      </div>
      <div className="text-lg sm:text-1xl md:text-2xl font-lora font-semibold text-gray-700 mb-4">
        <TextAnimator text="Full Stack Developer" />
      </div>
      <div className="px-8 text-sm sm:text-lg md:text-xl font-lora font-light text-gray-700 mb-8">
        I specialize in building web and mobile applications using React,
        Tailwind CSS, Node.js, and Django.
      </div>
      <div className="flex flex-wrap justify-around mb-8">
        <div className="w-1/4 p-2 text-center">
          <img src={reactImage} alt="React logo" className="w-12 h-12 mb-2" />
          <div className="text-xs font-semibold text-gray-700">React</div>
        </div>
        <div className="w-1/4 p-2 text-center">
          <img
            src={tailwind}
            alt="Tailwind CSS logo"
            className="w-12 h-12 mb-2"
          />
          <div className="text-xs font-semibold text-gray-700">
            Tailwind CSS
          </div>
        </div>
        <div className="w-1/4 p-2 text-center">
          <img src={node} alt="Node.js logo" className="w-12 h-12 mb-2" />
          <div className="text-xs font-semibold text-gray-700">Node.js</div>
        </div>
        <div className="w-1/4 p-2 text-center">
          <img src={django} alt="Django logo" className="w-12 h-12 mb-2" />
          <div className="text-xs font-semibold text-gray-700">Django</div>
        </div>
      </div>

      <div className="mx-auto">
        <Link
          to="projects"
          smooth
          duration={500}
          className="group text-white font-valera text-1xl w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
          View my projects
          <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>
      <div className="text-xs sm:text-sm md:text-md font-lora font-light text-gray-700 cursor-pointer">
        <Link to="contact" smooth duration={500}>
          Contact me at +254 794 326 235
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
