import image_people from "./assets/image_people.png"
const ChatMessage=({name,message})=>{
   
    return(
        <>
        
        <div className="flex">
       <img
       className="image" 
       alt="user"
       src={image_people}
       />
      <div className="span">
       <span className="name">{name}</span>
       <span>{message}</span>
       </div>
       </div>
       </>
    )
}
export default ChatMessage;