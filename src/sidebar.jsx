import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

const SideBar=()=>{
    const isMenu= useSelector((store)=>store.app.isMenu);
    if(!isMenu)return null;
    return (
        <>
        
        <div className="sidebar"> 

            <ul>
                <li> 
                    <Link to="/">🏠 HOME</Link>
                    </li>
                <li> 📽️ Shots</li>
                <li> 🕹️ subscription</li>
             </ul>
             <h1>🧜‍♂️ Profile</h1>
             <ul>
                <li>🙆 You</li>
                <li>🧾 History</li>
             </ul>
             <h1>🛣️ Explore</h1>
             <ul>
                <li>🪙 Treanding</li>
                <li>🛒 Shoping</li>
                <li>🎙️ Music</li>
                <li>🎮 Game</li>
                <li>📑 Report</li>
                <li>🔴Live</li>
                <li>🏑Sports</li>
             </ul>
        </div>
        </>
    )
}
export default SideBar;