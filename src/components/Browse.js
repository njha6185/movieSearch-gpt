import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";

function Browse() {
  useNowPlayingMovie();
  return (
    <div>
      <Header />
    </div>
  );
}

export default Browse;
