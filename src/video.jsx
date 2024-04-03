import { useEffect, useState } from "react";
import { API_DATA } from "../apidata";
import VideoCard from "./videocard";
import { Link } from "react-router-dom";

const VideoContainer=()=>{
    const[dataInfo, setdataInfo]=useState([]);
    useEffect(()=>{
           DataGet();
    },[]);
    

    const DataGet= async ()=>{
        const data= await fetch (API_DATA);
        const json= await data.json();
        setdataInfo(json.items);
        
    };

    return(

        <>
        <div className="flex">
            {dataInfo.map((item)=>(
                
        <Link to={"/watch?v="+item.id}> <VideoCard key={item.id} info={item}/></Link>
                )
              )}
       
       </div>
        </>
    );
};
export default VideoContainer;