import axios from "axios";
import {  POPULAR_MOVIE_URL, TBMD_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../store/movieSlice";
import { useEffect } from "react";

const usePopularmovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const movies = await axios(POPULAR_MOVIE_URL, TBMD_OPTIONS);
    dispatch(addPopularMovie(movies?.data?.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularmovies;
