import React from "react";
import Card from "./Card";
import search from "../assets/images/search.svg";
import pills from "../assets/images/pills.svg";
import consultasion from "../assets/images/consultasion.svg";
import emergency from "../assets/images/emergency.svg";
import info from "../assets/images/info.svg";
import tracking from "../assets/images/tracking.svg";

export default function Services(){
    return(
        <div className="mx-20">
 <div className="flex flex-col justify-center">
<p className="text-gray-800 text-[38px]  font-Muli font-bold lg:text-[52px]">Our services</p>
<hr className="border-b-[1px] border-black w-16 self-center mt-6"/>
<p className="text-gray-400 lg:mt-4 lg:text-xl mx-8 my-6">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
</div>

<div className="grid gap-x-10 gap-y-10 grid-flow-row grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ">
<Card image={search} titre="Search doctor" textee="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
<Card image={pills} titre="Search doctor" textee="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
<Card image={consultasion} titre="Search doctor" textee="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
<Card image={tracking} titre="Search doctor" textee="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
<Card image={info} titre="Search doctor" textee="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
<Card image={emergency} titre="Search doctor" textee="Choose your doctor from thousands of specialist, general, and trusted hospitals" />

</div>
</div>
    );
}