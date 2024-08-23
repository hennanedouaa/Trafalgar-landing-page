import React from "react";

export default function Card(props){
    return( 
        <div className="bg-white rounded-3xl px-8 py-4flex flex-col shadow-gray-200  shadow-lg pb-8 hover:scale-105 md:w-[400px] md:h-[400px]">
          <img src={props.image} className="w-24  h-44"></img>
          <p className="text-gray-800 text-left text-[22px] font-Muli  lg:text-[34px]">{props.titre}</p>
          <p className="text-gray-400 text-left mt-4   text-xl">{props.textee}</p>
        </div>
    );

}