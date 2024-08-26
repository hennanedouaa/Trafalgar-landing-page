import React ,{useEffect ,useState} from "react";

export default function Ttext(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect (()=>{
    setIsVisible(true);

  },

  [])
  return (
    <div className="bg-transparent p-6 {isVisible ? 'fade-in' : ''}">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <img
          src={props.image}
          className="rounded-full border-[6px] border-white h-[160px] w-[160px] object-cover"
          alt={props.name}
        />
        <div className="flex flex-col md:items-start items-center mx-6">
          <p className="font-bold text-white text-3xl md:text-4xl text-center md:text-left">
            {props.name}
          </p>
          <p className="text-2xl md:text-3xl text-white text-center md:text-left">
            {props.loc}
          </p>
        </div>
        <p className="text-lg md:text-xl text-white mt-6 md:mt-0 text-center md:text-left">
          {props.testm}
        </p>
      </div>
    </div>
  );
}
