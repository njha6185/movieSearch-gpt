import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularmovies from "../hooks/usePopularmovies";
import useMoviesByType from "../hooks/useMovieByType";
import { TYPE, SERIES_TYPE } from "../constants";
import useTvSeriesByType from "../hooks/useTvSeriesByType";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
function Browse() {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
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
      {
        showGptSearch ? <GPTSearch /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }
    </div>
  );
}

export default Browse;
