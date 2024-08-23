import React from "react";

export default function TElement(props){
    return(
        <div className="flex flex-col md:flex-row md:gap-12 items-center">
            <div className="flex items-center gap-10">
              <img src={props.image} className="rounded-full  border-[6px] border-white h-[160px] w-[160px] object-cover"></img>
              <div className="flex flex-col items-center ">
                  <p className="font-bold text-3xl md:text-4xl text-left">{props.name}</p>
                  <p className=" text-2xl md:text-3xl text-left">{props.loc}</p>
              </div>
            </div>
            <p className="text-lg mt-14 lg:mt-0 lg:text-xl">&ldquo;{props.testm}&rdquo;</p>
            </div>
    )
}