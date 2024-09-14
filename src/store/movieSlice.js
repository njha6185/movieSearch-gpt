import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    trailerVideo:null,
    popularmovie:null,
    topRateMovie:null,
    upcomingMovie:null,
    arrivingtodaySeries:null,
    onTheAirSeries:null,
    popularSeries:null,
    topRatedSeries:null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie= action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload
    },
    addPopularMovie:(state,action)=>{
      state.popularmovie=action.payload
    },
    addTopRateMovie:(state,action)=>{
      state.topRateMovie=action.payload
    },
    addUpcomingMovie:(state,action)=>{
      state.upcomingMovie=action.payload
    },

    addArrivingtodaySeries:(state,action)=>{
      state.arrivingtodaySeries=action.payload
    },
    addOnTheAirSeries:(state,action)=>{
      state.onTheAirSeries=action.payload
    },
    addPopularSeries:(state,action)=>{
      state.popularSeries=action.payload
    },
    addTopRatedSeries:(state,action)=>{
      state.topRatedSeries=action.payload
    },
  },
});

export const { addNowPlayingMovie,addTrailerVideo, addPopularMovie, 
  addTopRateMovie, addUpcomingMovie, addArrivingtodaySeries, addOnTheAirSeries,
addPopularSeries, addTopRatedSeries } = movieSlice.actions;
export default movieSlice.reducer;
