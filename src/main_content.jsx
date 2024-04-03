import MainHeader from "./header.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BodyContainer from "./body.jsx";
import { Provider } from "react-redux";
import store from "../Store.js";
import ViewerContainer from "./viwer.jsx";
import WatchContainer from "./watch.jsx";
import DemoPage from "./Demo.jsx";
import DemoItemes from "./Demo2.jsx";
const appRouter= createBrowserRouter([{
    path:"/",
    element:<BodyContainer/>,
    children:[{
    path:"/",
    element:<ViewerContainer/>,
    },
    {
        path:"watch",
        element:<WatchContainer/>
    },
    {
        path:"Demo",
        element:<DemoPage/>
    },
    {
        path:"Demo",
        element:<DemoItemes/>
    },

]
}])
const MainContainer=()=>{
    return(
        <>
        <Provider store={store}>
        <MainHeader />
       
        <RouterProvider router={appRouter}/>
        </Provider>
        </>
    )
}
export default MainContainer;
