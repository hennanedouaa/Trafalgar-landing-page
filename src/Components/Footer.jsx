import React from "react";
import logo from "../assets/logo.svg";

export default function Footer(){

    return (
  <div className="bg-gradient-to-t from-dblue to-bblue fixed bottom-0 left-0 w-full h-auto  ">
<div className="md:flex-row gap-[4em] justify-end mr-[7em]">


<div className="flex-col space-y-[1em]" >
<div className="bg-white rounded-full p-4 w-13 h-13 items-center justify-center">
    <p className="text-bblue text-xl font-extrabold">T</p>
</div>
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