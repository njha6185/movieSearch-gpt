import { IMAGE_URL } from "../constants"

const MovieCard = ({posterPath, name}) => {
  return (
    <div className="w-48 pr-4">
        {posterPath?(<img className="text-white" alt="Movie Card" 
        src={`${IMAGE_URL}${posterPath}`}
        />):
        <h1 className="text-white font-bold align-middle">{name}</h1>
        }
    </div>
  )
}
 
export default MovieCard