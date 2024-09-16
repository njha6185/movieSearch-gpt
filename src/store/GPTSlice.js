import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        searchResult:[]
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addSearchResult:(state,action)=>{
            state.searchResult=action.payload
        }
    }
})

export const {toggleGptSearchView,addSearchResult}=gptSlice.actions
export default gptSlice.reducer