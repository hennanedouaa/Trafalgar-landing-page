import React ,{ useState} from "react";
import pfp1 from "../assets/images/pfp1.png";
import pfp2 from "../assets/images/pfp2.jpg";
import pfp3 from "../assets/images/pfp3.jpg";
import pfp4 from "../assets/images/pfp4.jpg";
import pfp5 from "../assets/images/pfp5.jpg";
import left from "../assets/images/chevron-left.svg";
import right from "../assets/images/chevron-right.svg";
import Ttext from "./Ttext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Testimonials(){
    const elements = [
        { image: pfp3, name: 'Douaa', loc: 'Alger', testm: 'Lorem ipsum dolor sit amet.' },
        { image: pfp2, name: 'Hennane', loc: 'Alger', testm: 'Consectetur adipiscing elit.' },
        { image: pfp1, name: 'John Doe', loc: 'Oran', testm: 'Sed do eiusmod tempor incididunt.' },
        { image: pfp4, name: 'Jane Doe', loc: 'Constantine', testm: 'Ut enim ad minim veniam.' },
        { image: pfp5, name: 'Alice', loc: 'Tlemcen', testm: 'Quis nostrud exercitation ullamco.' },
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
        <div className="h-screen  flex flex-col justify-center w-full px-16">
            <div className=" flex flex-col bg-gradient-to-t rounded-lg from-dblue to-bblue">
                <p className="text-white text-[38px] font-Muli font-bold md:mt-7 lg:text-[46px]">What our customer are saying</p>
                <hr className="border-b-[1px] border-white  shadow-inner  w-16 self-center mt-6 mb-6"/>
                <Ttext {...elements[currentIndex]}  />
            </div>
        <div className="flex flex-row gap-2 justify-center  md:gap-3 items-center mt-11">
            <button onClick={previous}>
            <i className="fa-solid fa-arrow-left text-4xl  text-bblue hover:text-lblue md:text-4xl"></i>
            </button>
            <div onClick={() => changer(0)} className={`w-3 h-3 rounded-full hover:bg-lblue ${currentIndex === 0 ? 'bg-bblue' : 'bg-lblue' }`}></div>
            <div onClick={() => changer(1)} className={`w-3 h-3 rounded-full hover:bg-lblue ${currentIndex === 1 ? 'bg-bblue' : 'bg-lblue' }`}></div>
            <div  onClick={() => changer(2)} className="w-3 h-3 bg-bblue rounded-full hover:bg-lblue"></div>
            <div onClick={() => changer(3)} className="w-3 h-3 bg-bblue rounded-full hover:bg-lblue"></div>
            <div onClick={() => changer(4)} className="w-3 h-3 bg-bblue rounded-full hover:bg-lblue"></div>

 
                <button onClick={next}>
                <i className="fa-solid fa-arrow-right text-4xl text-bblue md:text-4xl hover:text-lblue "></i>     
                </button>
                </div>
        </div>
  
    );
}