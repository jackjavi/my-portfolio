import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" md:pt-0 h-full md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-around items-center  h-full px-4 md:flex-row">
        <div className="flex flex-col gap-5 h-full pt-24">
          <h2 className="text-3xl sm:text-5xl md:text-7xl mx-auto font-lora font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <div className="md:hidden">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl   object-cover mx-auto w-full"
            />
          </div>
          <p className="mx-auto md:text-3xl text-gray-300 font-lora text-1xl py-4 max-w-[70%]">
            I love to work on web application using technologies like React,
            NextJS Node Js and Laravel.
          </p>

          <div className="mx-auto">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white font-valera text-1xl w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
