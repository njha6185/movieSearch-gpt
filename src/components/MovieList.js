import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    if (!movies) return
console.log(movies);

    return (
        <div className="px-6">
            <h1 className="text-xl py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex">
                    {
                        movies?.map((movie) => (
                            <MovieCard key={movie.id} name={movie.name} posterPath={movie?.poster_path|| movie?.backdrop_path} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList