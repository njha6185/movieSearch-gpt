import { TBMD_OPTIONS } from '../constants';
import axios from 'axios';
import { addTrailerVideo } from '../store/movieSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useMovieTrailer=({movieId})=>{
    const dispatch=useDispatch()
    const getMovieVideo = async () => {
        const movieVideos = await axios(`https://api.themoviedb.org/3/movie/${movieId}/videos`, TBMD_OPTIONS);
        const filterVideo = movieVideos?.data?.results?.filter((v)=>v.type==='Trailer')
        const trailer = filterVideo[0] || movieVideos?.data?.results[0]
        
        dispatch(addTrailerVideo(trailer))
      };
    
      useEffect(() => {
        getMovieVideo();
      }, []);
}
export default useMovieTrailer;