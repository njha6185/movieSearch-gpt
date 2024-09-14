import { createSlice } from "@reduxjs/toolkit";
const appConfigSlice=createSlice({
    name:"appConfig",
    initialState:{
        lang:"en"
    },
    reducers:{
        saveLanguage:(state,action)=>{
            state.lang=action.payload
        }
    }
});

export const {saveLanguage} = appConfigSlice.actions
export default appConfigSlice.reducer