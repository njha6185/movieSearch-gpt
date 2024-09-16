import MovieCard from "./MovieCard"

const MovieList = ({ title, movies, isSearchResult = false }) => {
    if (!movies) return
    
    if (isSearchResult) {
        return (
            <div className="">
                <h1 className="text-xl px-4 py-1 text-white font-bold">{title}</h1>
                <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                    {
                        movies?.map((movie) => (
                            movie?.poster_path && (<div key={movie.id} className="w-auto flex flex-col border-2 border-gray-500 m-1">
                                <MovieCard name={movie.name} posterPath={movie?.poster_path} />
                                <h1 className="text-white mr-3">{movie.title}</h1>
                            </div>)
                        ))
                    }
                </div>

            </div>
        )
    }
    return (
        <div className="px-6">
            <h1 className="text-xl py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex">
                    {
                        movies?.map((movie) => (
                            <MovieCard key={movie.id} name={movie.name} posterPath={movie?.poster_path || movie?.backdrop_path} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList