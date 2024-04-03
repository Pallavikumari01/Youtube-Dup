import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./chatmessage";
import { useEffect, useState } from "react";
import { addMessag } from "../chatslice";
import { generateRandomName, makeRandomMessage } from "../random";
const LiveChat=()=>{
    const dispatch= useDispatch();
     const chatMessages=useSelector(store=> store.chat.messag);  
     const [TypeText, setTypeText] = useState("");
    useEffect(()=>{
    const i= setInterval(()=>{
      console.log("Api");

      dispatch(
        addMessag({
            name:generateRandomName(),
            messag:makeRandomMessage(20),
        })
      );
        },2000);
      
      
    return()=> clearInterval(i);
    },[]);
    return(
        <>
        <div className="live">
        <div>
            <h1>live chat</h1>
        </div>
       
    <div className="overflow">
        {
            chatMessages.map((c,i)=>(
                <ChatMessage key={i} name={c.name} message={c.messag}/>
            ))
        }
       
        
    </div>
    </div>
    <form className="inputtext" 
    onSubmit={(e)=>{
    e.preventDefault();
    dispatch(
        addMessag({
            name:"pallavi",
            messag:TypeText,
        })
    )
    setTypeText("");
    }
    }>
        <input className="type"
         type="text" 
         value={TypeText}
          onChange={(e)=>{
          setTypeText(e.target.value)
          }}
          />
          <button className="button1">send</button>
    </form>
    </>
    )
}
export default LiveChat;