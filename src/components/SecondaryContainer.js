import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import { SERIES_TYPE } from '../constants'

function SecondaryContainer() {
  const movies= useSelector((store)=>store.movie)
  
  if(!movies) return
  return (
    <div className=' bg-black'>
      <div className='-mt-52 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie}/>
      <MovieList title={"Popular Movie"} movies={movies?.popularmovie}/>
      <MovieList title={"Top rated"} movies={movies?.topRateMovie}/>
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovie}/>

      <MovieList title={"Series Arriving Today"} movies={movies?.arrivingtodaySeries}/>
      <MovieList title={"On The Air series"} movies={movies?.onTheAirSeries}/>
      <MovieList title={"Popular Series"} movies={movies?.popularSeries}/>
      <MovieList title={"Top rated Series"} movies={movies?.topRatedSeries}/>
      
    </div>
    </div>
  )
}

export default SecondaryContainer