import { TBMD_OPTIONS } from "../constants";
import axios from "axios";

export const searchMovie=async (name)=>{
    const movies = await axios(`https://api.themoviedb.org/3/search/movie?query=${name}&page=1`, TBMD_OPTIONS);
    return movies?.data?.results
}