import MovieCard from "./MovieCard"

const MovieList = ({ title, movies, isSearchResult = false }) => {
    if (!movies) return
    
    if (isSearchResult) {
        return (
            <div className="px-4">
                <h1 className="text-xl py-1 text-white font-bold">{title}</h1>
                <div className="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                    {
                        movies?.map((movie) => (
                            movie?.poster_path && (<div key={movie.id} className="w-48 flex flex-col p-2">
                                <MovieCard name={movie.name} posterPath={movie?.poster_path} />
                                <h1 className="text-white ">{movie.title}</h1>
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