import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

function MainContainer() {
    const movies = useSelector(store=>store.movie?.nowPlayingMovie)
    if(!movies) return;
    const mainMovie = movies[0]
    // console.log(mainMovie);
    
    const {original_title, overview, id}=mainMovie
  return (
    <div className='absolute mt-[38%] md:relative md:mt-0'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer