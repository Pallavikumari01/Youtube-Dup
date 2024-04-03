
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar.jsx";

const BodyContainer=()=>{
    return(
        <>
        <div className="body-item">
        <SideBar/>
        <Outlet/>
      </div>
      </>
    )
}
export default BodyContainer;