import React from "react";
import logo from "../assets/logo.svg";

export default function Footer(){

    return (
  <div className="bg-gradient-to-t from-dblue to-bblue fixed bottom-0 left-0 w-full h-auto  ">
<div className="flex gap-[5em] pl-[2em] justify-center pr-[5em] pt-[2em] pb-[2em]">


<div className="flex-col space-y-[1em]" >
<img className ="w-32 md:w-48 lg:w-64 xl:w-80" src={logo}></img>
<p className="text-white font-normal  text-xl">Trafalgar provides progressive, and affordable healthcare,accessible online</p>
<p className="text-white font-normal text-xl text-left">©Trafalgar PTY LTD 2020. All rights reserved </p>
 </div>


<div className="flex-col space-y-[0.9em]">
<p className=" Tfoot">Company</p>
<p className="foot">About</p>
<p className="foot">Testimonials</p>
<p className="foot">Find a doctor</p>
<p className="foot">Apps</p>
</div>    



<div className="flex-col space-y-[0.9em]">
<p className=" Tfoot">Region</p>
<p className="foot">Algeria</p>
<p className="foot">Tunisia</p>
<p className="foot">Morocco</p>
<p className="foot">Libya</p>
</div>


<div className="flex-col space-y-[0.9em]">
<p className=" Tfoot">Help</p>
<p className="foot">Help center</p>
<p className="foot">Contact support</p>
<p className="foot">Instructions</p>
<p className="foot">How it works</p>
</div>

</div>
    </div>

    )  
}