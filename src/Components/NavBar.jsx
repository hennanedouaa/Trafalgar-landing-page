import React from "react";
import logo from "../assets/logo.svg";
export default function NavBar(){

    return (
  <div className=" bg-white  m-0 p-0 ">
    <div className="flex flex-nowrap max-w-full min-w-full p-5 mt-5 md:mt-10 items-center  md:justify-around">
    <img className=" ml-[3em] hover:scale-110" src={logo}></img>
     <ul className=" hidden md:flex gap-8 justify-evenly items-center mr-[7em] " >
        <li><a href="">Home</a></li>
        <li><a href="">Find a doctor</a></li>
        <li><a href="">Apps</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">Blog</a></li>
     </ul>
    </div>
    </div>

    )  
}