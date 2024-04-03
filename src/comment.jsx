import React from "react";
import CommentCreation from "./commentData";
import images from "./assets/images.png"

const CommentRight=({data})=>{
    const{people,text,replies}=data;
        return(
            <>
           <div className="commentWhole"> 
             <img className="commentimage" alt="user" src={images}></img>
             
             <div className="commentcontaner">
                <p className="bold">{people}</p>
                <p className="commenttext">{text}</p>
               
             </div>
             </div>
            </>
        )
};
const CommentList=({datas})=>{
   
    return datas.map((comm,index)=>(
        <>
        <div>
    <CommentRight key={index} data= {comm}/>
    
    <div className="Borderleft">
     <CommentList datas={comm.replies}/>
    </div>
    </div>
    </>
    ) );
 
}
const CommentWriter=()=>{
    return(
        <>
    <div className="CommentCorrect">
        <h1>comment:</h1>
       
        </div>
        <CommentList datas= {CommentCreation} />
         </>
);
    };
export default CommentWriter;