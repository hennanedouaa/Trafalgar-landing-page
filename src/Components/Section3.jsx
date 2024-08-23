import React from "react";
import ill3 from "../assets/images/ill3.svg";
import Btn from "./Btn";
import image from "../assets/images/dots.svg"
export default function Section3(){
    return (
        <div className="w-full h-screen" >
        <div className="relative  w-full h-40 bg-right m-0 bg-no-repeat  bg-contain " style={{backgroundImage:`url(${image})`}} ></div>
        <div className="flex flex-col lg:flex-row justify-between items-center mb-11 px-20 lg:gap-20 lg:px-40">
         <img className="w-full max-w-lg mb-8 lg:max-w-xl xl:max-w-xl h-auto object-cover " src={ill3}></img>
         <div className="flex flex-col gap-4">
            <p className="text-gray-800  text-[52px]  ml-4 text-left font-bold lg:text-[52px]">Leading healthcare providers</p>
            <hr className="border-b-[1px] border-black ml-4  w-24 self-start mt-4"/>
            <p className="text-gray-400 text-left lg:text-2xl ml-4 lg:mt-4 text-xl  my-6">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
            <Btn textee="Learn More" />         
         </div>

        </div>
        </div>
    );
}