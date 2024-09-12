import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    addNowPlayingMovie: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.addNowPlayingMovie = action.payload;
    },
  },
});

export const { addNowPlayingMovie } = movieSlice.actions;
export default movieSlice.reducer;
