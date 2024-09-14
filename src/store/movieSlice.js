import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    trailerVideo:null
  },
  reducers: {
    nowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload
    }
  },
});

export const { nowPlayingMovie,addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
