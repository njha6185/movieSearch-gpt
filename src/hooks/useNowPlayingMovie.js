import axios from "axios";
import { NOW_PLAYING_MOVIE_URL, TBMD_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { nowPlayingMovie } from "../store/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const movies = await axios(NOW_PLAYING_MOVIE_URL, TBMD_OPTIONS);
    dispatch(nowPlayingMovie(movies?.data?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovie;
