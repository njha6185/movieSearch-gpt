import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function SecondaryContainer() {
  const movies= useSelector((store)=>store.movie)
  
  if(!movies) return
  return (
    <div className='md:bg-black'>
      <div className='from-current md:bg-transparent pt-[85%] md:pt-0 md:-mt-32 lg:-mt-52 relative md:z-20'>
      <div className='bg-black md:bg-transparent'>
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
    </div>
  )
}

export default SecondaryContainer