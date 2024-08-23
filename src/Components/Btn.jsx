import React from "react";

    export default function Btn(props){
        return(
        <button className="bg-white border border-lblue self-center lg:self-start text-lg lg:text-[26px] text-lblue font-medium px-16 py-4 lg:px-14 lg:py-6 rounded-full  hover:scale-105">
           {props.textee}
        </button>
        )
    }