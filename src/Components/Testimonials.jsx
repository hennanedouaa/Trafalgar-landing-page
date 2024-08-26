import React ,{ useState} from "react";
import pfp1 from "../assets/images/pfp1.png";
import pfp2 from "../assets/images/pfp2.jpg";
import pfp3 from "../assets/images/pfp3.jpg";
import pfp4 from "../assets/images/pfp4.jpg";
import pfp5 from "../assets/images/pfp5.jpg";
import Ttext from "./Ttext";
import image from "../assets/images/dots.svg"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Testimonials.css';
export default function Testimonials(){
    const elements = [
        { image: pfp3, name: 'Anatole Faure', loc: 'Paris, France', testm: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”' },
        { image: pfp2, name: 'Ella Keranen', loc: 'Brandis, Germany', testm: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”' },
        { image: pfp1, name: 'John D', loc: 'Hampton, Canada', testm: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”' },
        { image: pfp4, name: 'Jane Doe', loc: 'Oran, Algeria', testm: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”' },
        { image: pfp5, name: 'Alice Newgate ', loc: 'Tlemcen', testm: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”' },
    ];

 const [currentIndex, setCurrentIndex] = useState(0);

const next=()=>{
    setCurrentIndex((prevIndex) => (prevIndex === elements.length - 1 ? 0 : prevIndex + 1));
};

const previous=()=>{
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? elements.length - 1 : prevIndex - 1));
};

const changer=(num)=>{
    setCurrentIndex((prevIndex) => (num));
};

    return(
        <div className="w-full mt-56 mb-56 h-auto " >
        <div className=" w-full h-32 bg-left m-0 bg-no-repeat  bg-contain mb-14 " style={{backgroundImage:`url(${image})`}} ></div>

        <div className="h-auto   flex flex-col justify-center w-full px-10 md:px-16">
            <div className="  flex justify-center items-center self-center mb-8 md:w-4/5 px-20 py-5  flex-col bg-gradient-to-t rounded-lg from-dblue to-bblue">
                <p className="text-white text-[38px] font-Muli mt-6 font-bold md:mt-7 lg:text-[46px]">What our customer are saying</p>
                <hr className="border-b-[1px] border-white  shadow-inner  w-16 self-center mt-6 mb-6"/>

                            <Ttext className="fade-in" {...elements[currentIndex]} />

            </div>
        <div className="flex flex-row gap-4 justify-center  md:gap-4 items-center mt-8">
            <button onClick={previous}>
            <i className="fa-solid fa-arrow-left text-4xl  text-bblue hover:text-lblue md:text-4xl"></i>
            </button>
            <div onClick={() => changer(0)} className="w-3 h-3 bg-bblue rounded-full hover:bg-lblue"></div>
            <div onClick={() => changer(1)}  className="w-3 h-3 bg-bblue rounded-full hover:bg-lblue"></div>
            <div  onClick={() => changer(2)} className="w-3 h-3 bg-bblue rounded-full hover:bg-lblue"></div>
            <div onClick={() => changer(3)} className="w-3 h-3 bg-bblue rounded-full hover:bg-lblue"></div>
            <div onClick={() => changer(4)} className="w-3 h-3 bg-bblue rounded-full hover:bg-lblue"></div>

 
                <button onClick={next}>
                <i className="fa-solid fa-arrow-right text-4xl text-bblue md:text-4xl hover:text-lblue "></i>     
                </button>
                </div>
        </div>
        </div>
    );
}