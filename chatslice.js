import { createSlice } from "@reduxjs/toolkit";
import { CONFIGURE_VALUE } from "./apidata";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        messag:[],
    },
    reducers:{
        addMessag:(state, action)=>{
            state.messag.splice(CONFIGURE_VALUE,4);
            state.messag.unshift(action.payload);

        },
    },

})
export const{addMessag}= chatSlice.actions;
export default chatSlice.reducer;