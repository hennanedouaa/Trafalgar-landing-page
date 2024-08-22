import React ,{useState} from "react";
import logo from "../assets/images/logo.svg";
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function NavBar(){

const[Down,upordrop]=useState(()=>{
  return false;
}
);

const dropDownToggle=()=>{
  upordrop(preDown=>!preDown)
};

    return (
  <div className=" bg-white  m-0 p-0 sticky w-full">
    <div className="flex flex-nowrap max-w-full min-w-full p-5 mt-5 md:mt-10 items-center justify-between md:justify-around">
    <img className=" hover:scale-110 w-32 md:w-48 lg:w-64 xl:w-80 ml-5 md:" src={logo}></img>
    
     <ul className=" hidden md:flex gap-12 justify-evenly items-center" >
        <li><a className="text-gray-900 font-bold" href="">Home</a></li>
        <li><a href="">Find a doctor</a></li>
        <li><a href="">Apps</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">Blog</a></li>
     </ul>


       
     <button id="dropdownButton" onClick={dropDownToggle} className="flex items-center mr-3 space-x-2 text-gray-900 hover:text-blue-700 md:hidden">
        <Bars3Icon className="w-8 h-8" />
      </button>


     

    </div>
    <div id="dropdownMenu" className={` ${Down? 'block' : 'hidden'} md:hidden h-full w-full  `}>
        <ul className="justify-start">
          <li><a href="#" className="block text-gray-900 px-8 py-2 text-left  hover:bg-gray-100">Home</a></li>
          <li><a href="#"className="block px-8 py-2 w-full text-left  hover:bg-gray-100">Find a doctor</a></li>
          <li><a href="#" className="block px-8 py-2 w-full text-left  hover:bg-gray-100">Apps</a></li>
          <li><a href="#" className="block px-8 py-2 w-full text-left  hover:bg-gray-100">Testimonials</a></li>
          <li><a href="#" className="block px-8 py-2 w-full text-left  hover:bg-gray-100">Blog</a></li>
        </ul>
        </div>
    </div>

    )  
}