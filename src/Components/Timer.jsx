import { useState, useEffect } from "react";

 export default function Timer() {
  const [count, setCount] = useState(0);
  const [val , setVal] = useState(0);
  useEffect(() => {
    
   setVal(val + 1);
   
  },[count]); // <- add empty brackets here

const change =()=>{
  setCount(count+1);
}

  return(
  <div>
    <h1>I've rendered {val} times!</h1>
    <button onClick={change} >lol</button>
  </div> );
}
