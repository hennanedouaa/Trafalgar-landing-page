import React from "react";
import Card from "./Card";
import search from "../assets/images/search.svg";
import pills from "../assets/images/pills.svg";
import consultasion from "../assets/images/consultasion.svg";
import emergency from "../assets/images/emergency.svg";
import info from "../assets/images/info.svg";
import tracking from "../assets/images/tracking.svg";
import bgImage from '../assets/images/bg.svg';

export default function Services(){
    return(
        <div className="relative w-full h-auto bg-left  bg-cover  lg:bg-contain bg-no-repeat " style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="mx-44 mb-12  "  >
                <div className="flex flex-col justify-center pb-7">
                    <p className="text-gray-800 text-[38px] font-Muli font-bold lg:text-[52px]">Our services</p>
                    <hr className="border-b-[1px] border-black w-16 self-center mt-6"/>
                    <p className="text-gray-400 lg:mt-4 lg:text-xl mx-8 my-6">We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors. You can consult with us to find the most suitable service for your health.</p>
                </div>
                <div className="grid bg-transparent gap-x-14 gap-y-10  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    <Card image={search} titre="Search doctor" textee="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
                    <Card image={pills} titre="Online pharmacy" textee="Buy your medicines with our mobile application with a simple delivery system" />
                    <Card image={consultasion} titre="Consultation" textee="Free consultation with our trusted doctors and get the best recomendations" />
                    <Card image={info} titre="Details info" textee="Free consultation with our trusted doctors and get the best recomendations" />
                    <Card image={emergency} titre="Emergency care" textee="You can get 24/7 urgent care for yourself or your children and your lovely family" />
                    <Card image={tracking} titre="Tracking" textee="Track and save your medical history and health dat" />
                </div>
            </div>
        </div>
    );
}
