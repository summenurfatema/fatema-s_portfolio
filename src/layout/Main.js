import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "../Contact/Contact";
import Hobby from "../Hobby/Hobby";
import { NavBar } from "../NavBar/NavBar";
import Skill from "../Skill/Skill";
import Hero from "./Hero";

const Main = () => {
  return (
    <div className="bg-[#141317]">
      <NavBar />
      {/* <Hero/> */}
      <Skill/>
      <Contact/>
      <Hobby/>
    </div>
  );
};

export default Main;
