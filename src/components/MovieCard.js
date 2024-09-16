import { IMAGE_URL } from "../constants"

const MovieCard = ({posterPath, name}) => {
  if(!posterPath) return null
  return (
    <div className="w-48 pr-4">
        <img className="text-white" alt="Movie Card" 
        src={`${IMAGE_URL}${posterPath}`}
        />
    </div>
  )
}
 
export default MovieCard