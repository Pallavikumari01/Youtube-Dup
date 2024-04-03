import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import chatslice from "./chatslice";

const store= configureStore({
    reducer:{
        app: appslice,
        chat:chatslice,
    },
});
export default store;

