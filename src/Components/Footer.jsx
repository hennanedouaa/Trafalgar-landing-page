import React from "react";
import logo from "../assets/images/logo-white.svg";

export default function Footer(){

    return (
  <div className="bg-gradient-to-t from-dblue to-bblue w-full h-auto  ">
<div className="flex flex-col md:flex-row gap-[3em] md:gap-[5em] pl-[2em] justify-center pr-[5em] pt-[2em] pb-[2em]">


<div className="flex flex-col  justify-start space-y-[1em]" >
<img className ="w-32 md:w-48 lg:w-64 xl:w-80" src={logo}></img>
<p className="text-white text-left font-normal text-base  md:text-xl">Trafalgar provides progressive, and affordable healthcare,accessible online</p>
<p className="text-white font-normal text-base md:text-xl text-left">©Trafalgar PTY LTD 2020. All rights reserved </p>
 </div>


<div className="flex-col space-y-[0.9em]">
<p className=" Tfoot"><a href="">Company</a></p>
<p className="foot"><a href="">About</a></p>
<p className="foot"><a href="">Testimonial</a></p>
<p className="foot"><a href="">Find a doctor</a></p>
<p className="foot"><a href="">Apps</a></p>
</div>    



<div className="flex-col space-y-[0.9em]">
<p className=" Tfoot"><a href="">Region</a></p>
<p className="foot"><a href="">Algeria</a></p>
<p className="foot"><a href="">Tunisia</a></p>
<p className="foot"><a href="">Morocco</a></p>
<p className="foot"><a href="">Libya</a></p>
</div>


<div className="flex-col space-y-[0.9em]">
<p className=" Tfoot"><a href="">Help</a></p>
<p className="foot"><a href="">Help center</a></p>
<p className="foot"><a href="">Support</a></p>
<p className="foot"><a href="">Instructions</a></p>
<p className="foot"><a href="">How it works</a></p>
</div>

</div>
    </div>

    )  
}