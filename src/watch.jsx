import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../appslice";
import { useSearchParams } from "react-router-dom";
import CommentWriter from "./comment";
import LiveChat from "./livechat";
const WatchContainer=()=>{
  const [searchParams]=useSearchParams();
  console.log(searchParams.get("v"));

    const dispatch= useDispatch();
    useEffect(()=>{
         dispatch(closeMenu());
    },[]);
  return(
   
<>
<div className="Comment">
    <div className="flex">
      <iframe width="1200"
     height="600"
      src={"https://www.youtube.com/embed/"+searchParams.get("v")}
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen>
        </iframe>
        <div >
        <LiveChat/>
        </div>
        </div>
        <div className="commentSection">
         <CommentWriter/>
         </div>
        </div>
        </>
  )
}
export default WatchContainer;