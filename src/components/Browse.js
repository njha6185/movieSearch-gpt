import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularmovies from "../hooks/usePopularmovies";
import useMoviesByType from "../hooks/useMovieByType";
import { TYPE, SERIES_TYPE } from "../constants";
import useTvSeriesByType from "../hooks/useTvSeriesByType";
function Browse() {
  useNowPlayingMovie();
  usePopularmovies();
  useMoviesByType(TYPE[0]);
  useMoviesByType(TYPE[1]);
  
  useTvSeriesByType(SERIES_TYPE[0])
  useTvSeriesByType(SERIES_TYPE[1])
  useTvSeriesByType(SERIES_TYPE[2])
  useTvSeriesByType(SERIES_TYPE[3])
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
}

export default Browse;
