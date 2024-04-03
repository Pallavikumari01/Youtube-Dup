import hamburger from "./assets/hamburger.jpg"
import download from "./assets/download.png"
import images from "./assets/images.png"
import { useDispatch } from "react-redux"
import { toogleMenu } from "../appslice"
import { useEffect, useState } from "react"
import { API_SEARCH_KEY } from "../apidata"
const MainHeader=()=>{
    const[searchesQuery, setSearches]= useState("");
    // const[suggestionS, setSuggestions]= useState([]);
   useEffect(()=>{

    const timer =setTimeout(()=>DataGets(),200);
   
 
return()=>{
 clearTimeout(timer);
};
 },[searchesQuery]);

    const DataGets= async()=>{
        const data= await fetch(API_SEARCH_KEY)
        const json= await data.json();
        console.log(json[1]);
        // setSuggestions(json[1]);
       
    };
   
    
     const dispatch=useDispatch();
    const Handletollger= ()=>{
        dispatch(toogleMenu());
    };

  return(
        <>
        <div className="header">
        <div className="part_1">
            <div className="menu" >
               <img 
               onClick={()=>Handletollger() }
               className="imge" src={hamburger}  alt="MENU"></img>
            </div>
     
            <div>
               <img className="imag1" src={download}  alt="logo"></img>
            </div>
          </div>
          <div>
        <div className="search">
            <input className="input" 
            type="text"
            value={searchesQuery}
            onChange={(e)=> setSearches(e.target.value)}

            />
            <button className="input1"> 🔍 search</button>
            <div className="suggestion">
                {/* <ul>
                     {suggestionS.map((s)=>(
                    <li key={s.id}>{s}</li>))}
                    <li>namaste javascript</li>
                    <li>namaste react</li>
                    <li>namaste london</li>
                    <li>namaste bhaiya</li>
                </ul> */}
            </div> 
            </div>
        </div>
        <div>
           <div>
            <img className="imag2" src={images} alt="user"></img>
           </div>
        </div>
        </div>
        </>
    )
};
export default MainHeader;