import { useMemo, useState } from "react";
import { findNthPrime } from "../random";
import lineUse from "./line";
import DemoItemes from "./Demo2";
const DemoPage=()=>{
    const [text, setText]= useState(0);
    const [toggle,setToggle]=useState(false);
    const [increment, setIncrement ]= useState();
    const prime= useMemo(()=> findNthPrime(text),[text]);
        console.log("rendering input", text);
     const numberItems= ()=>{
        return [increment, increment+1, increment+2];
        
     }  
     
   
    // const toggleDarkMode = () => {
    //     setToggle(prevMode => !prevMode);
    // };

    return(
        <>
        
        <div className={`demo ${toggle ? 'dark' : 'light'}`}>
        {/* <button onClick={toggleDarkMode}>
                {toggle ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button> */}
            <button onClick={()=>setToggle(!toggle)}>mode on</button>
        <div ><input className="input"
            type="number"
            value={text}
            onChange={(e)=>setText(e.target.value)
            }/>
            
            </div> 
       <h1>This is a nth prime no:{prime}</h1>
       <div><input className="input"
            type="number"
            value={increment}
            onChange={(e)=>setIncrement(e.target.value)
            }/></div>
       <lineUse id={numberItems} numberItems={numberItems}/>
     
       
       </div>
       <DemoItemes/>
        </>
    )
};
export default DemoPage;