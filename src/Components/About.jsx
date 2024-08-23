import React from "react";
import ill from "../assets/images/about.svg";

export default function About() {
    return (
        <div className="flex flex-col-reverse h-auto  mb-16 lg:flex-row  items-center pb-5 ">
<div className="flex flex-col gap-4  mt-4 justify-center items-center lg:items-start lg:ml-32 mb-8 sm:mb-0 text-center lg:text-left">
    <p className="text-gray-800 text-[36px]  font-Muli font-bold lg:text-[52px]">
        Virtual healthcare for you
    </p>
    <p className="text-gray-400 lg:mt-4 lg:text-xl mx-8 lg:mx-0">
        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
    </p>
    <button className="bg-lblue self-center lg:self-start text-lg lg:text-xl text-white font-bold px-6 py-3 lg:px-10 lg:py-4 rounded-full lg:mt-8 hover:bg-Lblue">
        Consult Today
    </button>
</div>
            <img
                className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover lg:mr-32"
                src={ill}
                alt="Illustration"
            />
        </div>
    );
}
