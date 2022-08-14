import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#28c7fa]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Olvine George
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-End Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a front end developer who produces visually stunning applications
          using cutting-edge technologies. I am now concentrating on developing
          web and mobile applications with Flutter and React JS.
        </p>
        <div>
          <button className="text-white hover:text-green-400 group border-2 px-6 py-3 my-2 flex items-center  hover:border-[#28c7fa]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
