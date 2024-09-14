import axios from "axios";
import {  getMovieUrlByType, TBMD_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRateMovie, addUpcomingMovie } from "../store/movieSlice";
import { useEffect } from "react";

const useMoviesByType = (type) => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const movies = await axios(getMovieUrlByType(type), TBMD_OPTIONS);
    switch(type){
        case 'top_rated':
            dispatch(addTopRateMovie(movies?.data?.results));
            break;
        case 'upcoming':
            dispatch(addUpcomingMovie(movies?.data?.results));
            break;
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useMoviesByType;
