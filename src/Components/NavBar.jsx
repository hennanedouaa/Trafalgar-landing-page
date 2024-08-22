import React from "react";
import logo from "../assets/logo.svg";
export default function NavBar(){

    return (
  <div className=" bg-white  m-0 p-0 sticky w-full">
    <div className="flex flex-nowrap max-w-full min-w-full p-5 mt-5 md:mt-10 items-center  md:justify-around">
    <img className=" hover:scale-110 w-32 md:w-48 lg:w-64 xl:w-80 ml-5 md:" src={logo}></img>
     <ul className=" hidden md:flex gap-12 justify-evenly items-center" >
        <li><a className="text-gray-900 font-bold" href="">Home</a></li>
        <li><a href="">Find a doctor</a></li>
        <li><a href="">Apps</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">Blog</a></li>
     </ul>
    </div>
    </div>

    )  
}