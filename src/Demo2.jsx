import { useState,useRef } from "react";
const DemoItemes= ()=>{
    const[inv,setInv]=useState(0);
    let i=0;
    const t =useRef(10);
   
    return(
        <>
    <div className="demo">
        <div>
    <button onClick={()=>{
        i=i+1;
        console.log(i);

    }}>
            let={i}
            </button>
   <h1>{i}</h1>
    </div>
    <div>
    <button onClick={()=>{
       setInv(inv+1) ;
        console.log("r"+inv);

    }}>
            state={inv}
            </button>
   <h1>{}</h1>
    </div>
    <div>
    <button onClick={()=>{
     t.current=t.current+1 ;
        console.log(t.current);

    }}>
            state={t.current}
            </button>
   <h1>{}</h1>
    </div>
    </div>
    </>
    )
};
export default DemoItemes;